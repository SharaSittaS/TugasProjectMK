// ───────────────── COLOR ─────────────────
const COLOR_HEX = {
  BMW: "#4f8ef7",
  Ford: "#f7754f",
  Honda: "#55c98a",
  Hyundai: "#c46ef0",
  Tesla: "#f04f6e",
  Toyota: "#f0c040",
};

// ───────────────── SIZE ─────────────────
const margin = {
  top: 30,
  right: 30,
  bottom: 60,
  left: 70
};

const W = 1200;
const H = 650;

const innerW =
  W - margin.left - margin.right;

const innerH =
  H - margin.top - margin.bottom;

// ───────────────── SVG ─────────────────
const svg = d3.select("#chart")
  .attr("width", W)
  .attr("height", H)
  .attr("viewBox", `0 0 ${W} ${H}`)
  .style("width", "100%")
  .style("height", "auto");

const g = svg.append("g")
  .attr(
    "transform",
    `translate(${margin.left},${margin.top})`
  );

// ───────────────── LOAD CSV ─────────────────
d3.csv("data/car_clean.csv")
  .then(function (data) {

    data.forEach(d => {
      d.Model_Year = +d.Model_Year;
      d.Price = +d.Price;
      d.Mileage = +d.Mileage;
      d.Engine_Size = +d.Engine_Size;
      d.Horsepower = +d.Horsepower;
    });

    initScatterPlot(data);

  })
  .catch(function (error) {
    console.error(error);
  });

// ───────────────── MAIN ─────────────────
function initScatterPlot(data) {

  d3.select("#chart-loader").remove();

  // ───── FILTER DROPDOWN ─────
  const brandFilter =
    document.getElementById("brandFilter");

  // ───── SCALE ─────
  const xScale = d3.scaleLinear()
    .domain([
      d3.min(data, d => d.Model_Year) - 0.5,
      d3.max(data, d => d.Model_Year) + 0.5
    ])
    .range([0, innerW]);

  const yScale = d3.scaleLinear()
    .domain([
      0,
      d3.max(data, d => d.Price) * 1.05
    ])
    .range([innerH, 0]);

  // ───── GRID ─────
  g.append("g")
    .attr("class", "grid")
    .call(
      d3.axisLeft(yScale)
        .ticks(6)
        .tickSize(-innerW)
        .tickFormat("")
    );

  g.append("g")
    .attr("class", "grid")
    .attr(
      "transform",
      `translate(0,${innerH})`
    )
    .call(
      d3.axisBottom(xScale)
        .tickSize(-innerH)
        .tickFormat("")
    );

  // ───── X AXIS ─────
  const xAxis = g.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${innerH})`)
    .call(
      d3.axisBottom(xScale)
        .tickFormat(d3.format("d"))
    );

  xAxis.selectAll("text")
    .attr("fill", "#ffffff")
    .style("font-size", "14px");

  xAxis.selectAll("line,path")
    .attr("stroke", "#ffffff");

  // ───── Y AXIS ─────
  const yAxis = g.append("g")
    .attr("class", "axis")
    .call(
      d3.axisLeft(yScale)
        .ticks(6)
        .tickFormat(d => "$" + (d / 1000) + "k")
    );

  yAxis.selectAll("text")
    .attr("fill", "#ffffff")
    .style("font-size", "14px");

  yAxis.selectAll("line,path")
    .attr("stroke", "#ffffff");

  // ───── AXIS LABEL ─────
  g.append("text")
    .attr("x", innerW / 2)
    .attr("y", innerH + 55)
    .attr("text-anchor", "middle")
    .attr("fill", "#ffffff")
    .style("font-size", "20px")     // diperbesar
    .style("font-weight", "700")
    .text("Model Year");

  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -innerH / 2)
    .attr("y", -60)
    .attr("text-anchor", "middle")
    .attr("fill", "#ffffff")
    .style("font-size", "20px")
    .style("font-weight", "700")
    .text("Price (USD)");
  // ───── TOOLTIP ─────
  const tt =
    document.getElementById("tooltip");

  const ttBrand =
    document.getElementById("tt-brand");

  const ttPrice =
    document.getElementById("tt-price");

  const ttYear =
    document.getElementById("tt-year");

  const ttMileage =
    document.getElementById("tt-mileage");

  const ttEngine =
    document.getElementById("tt-engine");

  const ttHp =
    document.getElementById("tt-hp");

  // ───── DOTS ─────
  const dots = g.selectAll(".dot")
    .data(data)
    .join("circle")
    .attr("class", "dot")

    // jitter
    .attr(
      "cx",
      d =>
        xScale(d.Model_Year)
        +
        (Math.random() - 0.5) * 5
    )

    .attr(
      "cy",
      d =>
        yScale(d.Price)
    )

    .attr("r", 0)

    .attr(
      "fill",
      d =>
        COLOR_HEX[d.Brand]
    )

    .attr(
      "opacity",
      0.45
    )

    .attr(
      "stroke",
      "rgba(255,255,255,0.2)"
    )

    .attr(
      "stroke-width",
      0.7
    );

  dots.transition()
    .duration(700)
    .attr("r", 3.8);

  // ───── HOVER ─────
  dots
    .on("mousemove", function (event, d) {

      d3.select(this)
        .raise()
        .attr("r", 8)
        .attr("opacity", 1)
        .attr(
          "stroke",
          "#fff"
        )
        .attr(
          "stroke-width",
          2
        );

      ttBrand.textContent =
        d.Brand;

      ttBrand.style.color =
        COLOR_HEX[d.Brand];

      ttPrice.textContent =
        "$" +
        d.Price.toLocaleString();

      ttYear.textContent =
        d.Model_Year;

      ttMileage.textContent =
        d.Mileage.toLocaleString()
        + " km";

      ttEngine.textContent =
        d.Engine_Size.toFixed(1)
        + " L";

      ttHp.textContent =
        d.Horsepower
        + " HP";

      tt.classList.add("show");

      tt.style.left =
        (event.clientX + 15)
        + "px";

      tt.style.top =
        (event.clientY - 70)
        + "px";
    })

    .on("mouseleave", function () {

      d3.select(this)
        .attr("r", 3.8)
        .attr("opacity", 0.45)
        .attr(
          "stroke-width",
          0.7
        );

      tt.classList.remove("show");
    });

  // ───── FILTER BRAND ─────
  brandFilter
    .addEventListener(
      "change",
      function () {

        const selected =
          this.value;

        if (
          selected === "all"
        ) {

          dots.transition()
            .duration(400)
            .attr(
              "display",
              "block"
            );

        } else {

          dots.transition()
            .duration(400)
            .attr(
              "display",
              d =>
                d.Brand === selected
                  ? "block"
                  : "none"
            );
        }
      });
}