const COLORS = {
  Automatic:"#4f8ef7",
  Manual:"#55c98a"
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
    d.Car_ID = +d.Car_ID;
    d.Price = +d.Price;
  });

  const cleanData = data.filter(d => d.Car_ID !== 49 && d.Car_ID !== 1963);

  const grouped = d3.group(
    cleanData,
    d=>d.Transmission
  );

  const stats = [];

  grouped.forEach((values,key)=>{

    const prices = values
      .map(d=>d.Price)
      .sort(d3.ascending);

    stats.push({

      transmission:key,

      min:d3.min(prices),

      q1:d3.quantile(prices,0.25),

      median:d3.quantile(prices,0.5),

      q3:d3.quantile(prices,0.75),

      max:d3.max(prices)

    });

  });

  const x = d3.scaleBand()
    .domain(
      stats.map(d=>d.transmission)
    )
    .range([0,innerW])
    .padding(0.45);

  const y = d3.scaleLinear()
    .domain([
      0,
      d3.max(stats,d=>d.max)*1.05
    ])
    .range([innerH,0]);

  g.append("g")
    .attr("class","grid")
    .call(
      d3.axisLeft(y)
        .tickSize(-innerW)
        .tickFormat("")
    );

  g.append("g")
    .attr(
      "class",
      "axis"
    )
    .attr(
      "transform",
      `translate(0,${innerH})`
    )
    .call(
      d3.axisBottom(x)
    );

  g.append("g")
    .attr("class","axis")
    .call(
      d3.axisLeft(y)
    );

  g.selectAll(".range")
    .data(stats)
    .join("line")
    .attr(
      "x1",
      d=>x(d.transmission)+x.bandwidth()/2
    )
    .attr(
      "x2",
      d=>x(d.transmission)+x.bandwidth()/2
    )
    .attr(
      "y1",
      d=>y(d.min)
    )
    .attr(
      "y2",
      d=>y(d.max)
    )
    .attr(
      "stroke",
      "#e8eaf0"
    );

  const boxes = g.selectAll(".box")
    .data(stats)
    .join("rect")
    .attr("class","box")
    .attr(
      "x",
      d=>x(d.transmission)
    )
    .attr(
      "width",
      x.bandwidth()
    )
    .attr(
      "y",
      innerH
    )
    .attr(
      "height",
      0
    )
    .attr(
      "rx",
      6
    )
    .attr(
      "fill",
      d=>COLORS[d.transmission]
    );

  boxes.transition()
    .duration(700)
    .attr(
      "y",
      d=>y(d.q3)
    )
    .attr(
      "height",
      d=>y(d.q1)-y(d.q3)
    );

  g.selectAll(".median")
    .data(stats)
    .join("line")
    .attr(
      "x1",
      d=>x(d.transmission)
    )
    .attr(
      "x2",
      d=>x(d.transmission)+x.bandwidth()
    )
    .attr(
      "y1",
      d=>y(d.median)
    )
    .attr(
      "y2",
      d=>y(d.median)
    )
    .attr(
      "stroke",
      "white"
    )
    .attr(
      "stroke-width",
      3
    );

  g.selectAll(".mincap")
    .data(stats)
    .join("line")
    .attr(
      "x1",
      d=>x(d.transmission)+20
    )
    .attr(
      "x2",
      d=>x(d.transmission)+x.bandwidth()-20
    )
    .attr(
      "y1",
      d=>y(d.min)
    )
    .attr(
      "y2",
      d=>y(d.min)
    )
    .attr(
      "stroke",
      "#e8eaf0"
    );

  g.selectAll(".maxcap")
    .data(stats)
    .join("line")
    .attr(
      "x1",
      d=>x(d.transmission)+20
    )
    .attr(
      "x2",
      d=>x(d.transmission)+x.bandwidth()-20
    )
    .attr(
      "y1",
      d=>y(d.max)
    )
    .attr(
      "y2",
      d=>y(d.max)
    )
    .attr(
      "stroke",
      "#e8eaf0"
    );

  boxes
    .on("mousemove",(event,d)=>{

      document.getElementById("tt-brand")
        .textContent=d.transmission;

      document.getElementById("tt-min")
        .textContent=d.min.toFixed(0);

      document.getElementById("tt-median")
        .textContent=d.median.toFixed(0);

      document.getElementById("tt-max")
        .textContent=d.max.toFixed(0);

      tooltip.classList.add("show");

      tooltip.style.left=
        event.clientX+15+"px";

      tooltip.style.top=
        event.clientY-50+"px";

    })
    .on("mouseleave",()=>{

      tooltip.classList.remove("show");

    });

});