// ── COLOR ─────────────────────────────────────────────
const COLOR_HEX = {
  BMW: "#4f8ef7",
  Ford: "#f7754f",
  Honda: "#55c98a",
  Hyundai: "#c46ef0",
  Tesla: "#f04f6e",
  Toyota: "#f0c040",
};

const DOT_NEUTRAL = "#6f83b5";

// ── DIMENSI ───────────────────────────────────────────
const margin = { top: 20, right: 30, bottom: 52, left: 62 };
const W = 708;
const H = 380;
const innerW = W - margin.left - margin.right;
const innerH = H - margin.top - margin.bottom;

const svg = d3.select("#chart")
  .attr("width", W)
  .attr("height", H)
  .attr("viewBox", `0 0 ${W} ${H}`)
  .style("width", "100%")
  .style("height", "auto");

const g = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// ── LOAD CSV ──────────────────────────────────────────
d3.csv("data/car_clean.csv")
  .then(function(data){

    data.forEach(d => {
      d.Model_Year = +d.Model_Year;
      d.Price = +d.Price;
      d.Mileage = +d.Mileage;
      d.Engine_Size = +d.Engine_Size;
      d.Horsepower = +d.Horsepower;
    });

    initScatterPlot(data);

  })
  .catch(function(error){
    console.error("CSV gagal:", error);
  });

// ── SCATTER PLOT ──────────────────────────────────────
function initScatterPlot(data){

  d3.select("#chart-loader").remove();

  const xScale = d3.scaleLinear()
    .domain([2004.4, 2023.6])
    .range([0, innerW]);

  const yMax = d3.max(data, d => d.Price);

  const yScale = d3.scaleLinear()
    .domain([0, yMax * 1.05])
    .range([innerH, 0]);

  // GRID
  g.append("g")
    .attr("class", "grid")
    .call(
      d3.axisLeft(yScale)
        .tickSize(-innerW)
        .tickFormat("")
        .ticks(6)
    );

  g.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${innerH})`)
    .call(
      d3.axisBottom(xScale)
        .tickSize(-innerH)
        .tickFormat("")
        .tickValues(d3.range(2005,2024,2))
    );

  // AXIS
  g.append("g")
    .attr("class","axis")
    .attr("transform", `translate(0,${innerH})`)
    .call(
      d3.axisBottom(xScale)
        .tickValues(d3.range(2005,2024,2))
        .tickFormat(d3.format("d"))
        .tickSize(0)
    );

  g.append("g")
    .attr("class","axis")
    .call(
      d3.axisLeft(yScale)
        .ticks(6)
        .tickSize(0)
        .tickFormat(d => "$" + (d/1000) + "k")
    );

  // TOOLTIP
  const tt = document.getElementById("tooltip");
  const ttBrand = document.getElementById("tt-brand");
  const ttPrice = document.getElementById("tt-price");
  const ttYear = document.getElementById("tt-year");
  const ttMileage = document.getElementById("tt-mileage");
  const ttEngine = document.getElementById("tt-engine");
  const ttHp = document.getElementById("tt-hp");

  let activeBrand = null;

  // ── DOTS ─────────────────────────────
const dots = g.selectAll(".dot")
  .data(data)
  .join("circle")
    .attr("class", "dot")

    // jitter ringan biar tidak jadi garis vertikal
    .attr("cx", d =>
      xScale(d.Model_Year) +
      (Math.random() - 0.5) * 5
    )

    .attr("cy", d => yScale(d.Price))

    // ukuran sedang
    .attr("r", 0)

    // langsung warna brand
    .attr("fill", d => COLOR_HEX[d.Brand])

    // cukup terlihat tapi tidak penuh
    .attr("opacity", 0.45)

    // border tipis supaya titik tidak nyatu
    .attr("stroke", "rgba(255,255,255,0.15)")
    .attr("stroke-width", 0.7);

dots.transition()
  .duration(700)
  .attr("r", 3.8);

  // ── HOVER ────────────────────────────
  dots
    .on("mousemove", function(event,d){

      d3.select(this)
        .raise()
        .attr("r",7)
        .attr("opacity",1)
        .attr("fill", COLOR_HEX[d.Brand])
        .attr("stroke","#fff")
        .attr("stroke-width","2px");

      ttBrand.textContent = d.Brand;
      ttBrand.style.color = COLOR_HEX[d.Brand];
      ttPrice.textContent = "$" + d.Price.toLocaleString();
      ttYear.textContent = d.Model_Year;
      ttMileage.textContent =
        d.Mileage.toLocaleString() + " km";
      ttEngine.textContent =
        d.Engine_Size.toFixed(1) + " L";
      ttHp.textContent =
        d.Horsepower + " HP";

      tt.classList.add("show");
      tt.style.left =
        (event.clientX + 16) + "px";
      tt.style.top =
        (event.clientY - 80) + "px";
    })

    .on("mouseleave", function(event,d){

      if(activeBrand===null){

        d3.select(this)
          .attr("r",2.5)
          .attr("fill",DOT_NEUTRAL)
          .attr("opacity",0.20)
          .attr("stroke","none");

      } else if(d.Brand===activeBrand){

        d3.select(this)
          .attr("r",4)
          .attr("fill",COLOR_HEX[d.Brand])
          .attr("opacity",0.85);

      } else {

        d3.select(this)
          .attr("r",2)
          .attr("fill",DOT_NEUTRAL)
          .attr("opacity",0.05);
      }

      tt.classList.remove("show");
    });

  // ── LEGEND FILTER ────────────────────
  const brands = [
    "Honda",
    "Toyota",
    "BMW",
    "Ford",
    "Tesla",
    "Hyundai"
  ];

  const legend =
    document.getElementById("legend");

  brands.forEach(br => {

    const item =
      document.createElement("div");

    item.className =
      "legend-item";

    item.innerHTML = `
      <span class="legend-dot"
      style="background:${COLOR_HEX[br]}"></span>
      <span>${br}</span>
    `;

    item.addEventListener("click",()=>{

      if(activeBrand===br){

        activeBrand = null;

        dots.transition()
          .duration(300)
          .attr("r",2.5)
          .attr("fill",DOT_NEUTRAL)
          .attr("opacity",0.20);

      } else {

        activeBrand = br;

        dots.transition()
          .duration(300)
          .attr("r",
            d => d.Brand===br ? 4 : 2
          )
          .attr("fill",
            d => d.Brand===br
              ? COLOR_HEX[d.Brand]
              : DOT_NEUTRAL
          )
          .attr("opacity",
            d => d.Brand===br
              ? 0.85
              : 0.04
          );
      }
    });

    legend.appendChild(item);
  });

}