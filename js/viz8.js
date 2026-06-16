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
  .attr("viewBox",`0 0 ${W} ${H}`)
  .attr("preserveAspectRatio","xMidYMid meet");

const g = svg.append("g")
  .attr(
    "transform",
    `translate(${margin.left},${margin.top})`
  );

const tooltip = document.getElementById("tooltip");

d3.csv("data/car_clean.csv")
.then(data=>{

  data.forEach(d=>{
    d.Car_ID = +d.Car_ID;
    d.Price = +d.Price;
    d.Model_Year = +d.Model_Year;
    d.Mileage = +d.Mileage;
  });

  const cleanData = data.filter(d => d.Car_ID !== 49 && d.Car_ID !== 1963);

  const x = d3.scaleLinear()
    .domain(d3.extent(cleanData,d=>d.Model_Year))
    .nice()
    .range([0,innerW]);

  const y = d3.scaleLinear()
    .domain([
      0,
      d3.max(cleanData,d=>d.Mileage)
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
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  g.append("g")
    .attr("class","axis")
    .call(d3.axisLeft(y).tickFormat(d => (d / 1000) + "k km"));

  // ───── LINEAR REGRESSION (TREND LINE) ─────
  const nReg = cleanData.length;
  const sumX = d3.sum(cleanData, d => d.Model_Year);
  const sumY = d3.sum(cleanData, d => d.Mileage);
  const sumXY = d3.sum(cleanData, d => d.Model_Year * d.Mileage);
  const sumX2 = d3.sum(cleanData, d => d.Model_Year * d.Model_Year);

  const slope = (nReg * sumXY - sumX * sumY) / (nReg * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / nReg;

  const x1 = d3.min(cleanData, d => d.Model_Year);
  const y1Reg = slope * x1 + intercept;
  const x2 = d3.max(cleanData, d => d.Model_Year);
  const y2Reg = slope * x2 + intercept;

  g.append("line")
    .attr("class", "trend-line")
    .attr("x1", x(x1))
    .attr("y1", y(y1Reg))
    .attr("x2", x(x2))
    .attr("y2", y(y2Reg))
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2.5)
    .attr("stroke-dasharray", "5,5")
    .attr("opacity", 0.8)
    .style("pointer-events", "none");

  // ───── DOTS ─────
  const dots = g.selectAll(".dot")
    .data(cleanData)
    .join("circle")
    .attr("class","dot")
    .attr(
      "cx",
      d=>x(d.Model_Year) + (Math.random() - 0.5) * 5
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
    .attr("opacity",0.35);

  dots.transition()
    .duration(800)
    .delay((d,i)=>i*2)
    .attr("r",2.2);

  dots.on("mousemove",(event,d)=>{
    d3.select(event.currentTarget)
      .raise()
      .attr("r", 7)
      .attr("opacity", 1)
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5);

    document.getElementById("tt-brand")
      .textContent=d.Brand;

    document.getElementById("tt-year")
      .textContent=d.Model_Year;

    document.getElementById("tt-mileage")
      .textContent=
      d.Mileage.toLocaleString("id-ID") + " km";

    tooltip.classList.add("show");

    tooltip.style.left =
      event.clientX + 15 + "px";

    tooltip.style.top =
      event.clientY - 50 + "px";

  });

  dots.on("mouseleave",function(event, d){
    d3.select(this)
      .attr("r", 2.2)
      .attr("opacity", 0.35)
      .attr("stroke", "none");

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