const vars = [
  "Model_Year",
  "Mileage",
  "Horsepower",
  "Price"
];

const margin = {
  top:30,
  right:30,
  bottom:40,
  left:100
};

const W = 700;
const H = 520;

const innerW = W - margin.left - margin.right;
const innerH = H - margin.top - margin.bottom;

const svg = d3.select("#chart")
  .attr("width",W)
  .attr("height",H)
  .attr("viewBox",`0 0 ${W} ${H}`)
  .style("width","100%")
  .style("height","auto");

const g = svg.append("g")
  .attr(
    "transform",
    `translate(${margin.left},${margin.top})`
  );

const tooltip =
document.getElementById("tooltip");

function correlation(x,y){

  const n = x.length;

  const meanX =
    d3.mean(x);

  const meanY =
    d3.mean(y);

  let num = 0;
  let denX = 0;
  let denY = 0;

  for(let i=0;i<n;i++){

    num +=
      (x[i]-meanX) *
      (y[i]-meanY);

    denX +=
      (x[i]-meanX) ** 2;

    denY +=
      (y[i]-meanY) ** 2;
  }

  return num /
    Math.sqrt(
      denX * denY
    );
}

d3.csv("data/car_clean.csv")
.then(data=>{

  data.forEach(d=>{
    d.Car_ID = +d.Car_ID;
    d.Model_Year = +d.Model_Year;
    d.Mileage = +d.Mileage;
    d.Horsepower = +d.Horsepower;
    d.Price = +d.Price;
  });

  const cleanData = data.filter(d => d.Car_ID !== 49 && d.Car_ID !== 1963);

  const matrix = [];

  vars.forEach(v1=>{

    vars.forEach(v2=>{

      const corr =
        correlation(
          cleanData.map(d=>d[v1]),
          cleanData.map(d=>d[v2])
        );

      matrix.push({
        x:v1,
        y:v2,
        value:corr
      });

    });

  });

  const x =
    d3.scaleBand()
    .domain(vars)
    .range([0,innerW]);

  const y =
    d3.scaleBand()
    .domain(vars)
    .range([0,innerH]);

  const color =
    d3.scaleLinear()
    .domain([-1,0,1])
    .range([
      "#f04f6e",
      "#252a38",
      "#55c98a"
    ]);

  g.selectAll(".cell")
    .data(matrix)
    .join("rect")
    .attr("class","cell")
    .attr("x",
      d=>x(d.x))
    .attr("y",
      d=>y(d.y))
    .attr("width",
      x.bandwidth())
    .attr("height",
      y.bandwidth())
    .attr("fill",
      d=>color(d.value))
    .attr("stroke",
      "#0f1117")
    .on("mousemove",
      (event,d)=>{

      document
      .getElementById("tt-title")
      .textContent=
        `${d.x} vs ${d.y}`;

      document
      .getElementById("tt-value")
      .textContent=
        d.value.toFixed(3);

      tooltip.classList
        .add("show");

      tooltip.style.left=
        event.clientX+15+"px";

      tooltip.style.top=
        event.clientY-50+"px";

    })
    .on("mouseleave",()=>{

      tooltip.classList
        .remove("show");

    });

  g.selectAll(".corr-text")
    .data(matrix)
    .join("text")
    .attr("class","corr-text")
    .attr(
      "x",
      d=>x(d.x)+x.bandwidth()/2
    )
    .attr(
      "y",
      d=>y(d.y)+y.bandwidth()/2
    )
    .text(
      d=>d.value.toFixed(2)
    );

  g.append("g")
    .attr(
      "class",
      "axis"
    )
    .call(
      d3.axisLeft(y)
    );

  g.append("g")
    .attr(
      "class",
      "axis"
    )
    .call(
      d3.axisTop(x)
    );

});