const COLOR = {
  BMW:"#4f8ef7",
  Ford:"#f7754f",
  Honda:"#55c98a",
  Hyundai:"#c46ef0",
  Tesla:"#f04f6e",
  Toyota:"#f0c040"
};

const margin = {
  top:20,
  right:20,
  bottom:60,
  left:70
};

const W = 760;
const H = 420;

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

const tooltip = document.getElementById("tooltip");

d3.csv("data/car_clean.csv")
.then(data=>{

  data.forEach(d=>{

    d.Model_Year = +d.Model_Year;
    d.Mileage = +d.Mileage;

  });

  const x = d3.scaleLinear()
    .domain(d3.extent(data,d=>d.Model_Year))
    .nice()
    .range([0,innerW]);

  const y = d3.scaleLinear()
    .domain([
      0,
      d3.max(data,d=>d.Mileage)
    ])
    .nice()
    .range([innerH,0]);

  g.append("g")
    .attr("class","grid")
    .call(
      d3.axisLeft(y)
      .tickSize(-innerW)
      .tickFormat("")
    );

  g.append("g")
    .attr("class","axis")
    .attr(
      "transform",
      `translate(0,${innerH})`
    )
    .call(d3.axisBottom(x));

  g.append("g")
    .attr("class","axis")
    .call(d3.axisLeft(y));

  const dots = g.selectAll(".dot")
    .data(data)
    .join("circle")
    .attr("class","dot")
    .attr(
      "cx",
      d=>x(d.Model_Year)
    )
    .attr(
      "cy",
      d=>y(d.Mileage)
    )
    .attr("r",0)
    .attr(
      "fill",
      d=>COLOR[d.Brand]
    )
    .attr("opacity",0.75);

  dots.transition()
    .duration(800)
    .delay((d,i)=>i*2)
    .attr("r",4);

  dots.on("mousemove",(event,d)=>{

    document.getElementById("tt-brand")
      .textContent=d.Brand;

    document.getElementById("tt-year")
      .textContent=d.Model_Year;

    document.getElementById("tt-mileage")
      .textContent=
      d.Mileage.toLocaleString("id-ID");

    tooltip.classList.add("show");

    tooltip.style.left =
      event.clientX + 15 + "px";

    tooltip.style.top =
      event.clientY - 50 + "px";

  });

  dots.on("mouseleave",()=>{

    tooltip.classList.remove("show");

  });

  const legend = document.getElementById("legend");

  Object.keys(COLOR).forEach(brand=>{

    const item = document.createElement("div");

    item.className="legend-item";

    item.innerHTML=`
      <span class="legend-dot"
      style="background:${COLOR[brand]}"></span>
      <span>${brand}</span>
    `;

    item.addEventListener("mouseenter",()=>{

      dots.attr(
        "opacity",
        d=>d.Brand===brand ? 1 : 0.15
      );

    });

    item.addEventListener("mouseleave",()=>{

      dots.attr("opacity",0.75);

    });

    legend.appendChild(item);

  });

});