// ── CONFIG & COLOR ────────────────────────────────────────────────────────
const COLOR_HEX = {
  BMW:     "#4f8ef7",
  Ford:    "#f7754f",
  Honda:   "#55c98a",
  Hyundai: "#c46ef0",
  Tesla:   "#f04f6e",
  Toyota:  "#f0c040",
};

// ── DIMENSIONS ───────────────────────────────────────────────────────────
const margin = { top: 20, right: 20, bottom: 52, left: 48 };
const W = 708, H = 360;
const innerW = W - margin.left - margin.right;
const innerH = H - margin.top  - margin.bottom;

const svg = d3.select("#chart")
  .attr("width",  W)
  .attr("height", H)
  .attr("viewBox", `0 0 ${W} ${H}`)
  .style("width",  "100%")
  .style("height", "auto");

const g = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// ── LOAD DYNAMIC DATA FROM CSV ───────────────────────────────────────────
d3.csv("data/car_clean.csv").then(data => {
  // Parse variables
  data.forEach(d => {
    d.Car_ID = +d.Car_ID;
    d.Price = +d.Price;
  });

  // Filter out price outliers
  const cleanData = data.filter(d => d.Car_ID !== 49 && d.Car_ID !== 1963);

  // Group and roll up to calculate counts per brand (sort descending)
  const raw = d3.rollups(cleanData, v => v.length, d => d.Brand)
                .map(([brand, count]) => ({ brand, count }))
                .sort((a, b) => b.count - a.count);

  const total = d3.sum(raw, d => d.count);

  // ── SCALES ──────────────────────────────────────────────────────────────
  const xScale = d3.scaleBand()
    .domain(raw.map(d => d.brand))
    .range([0, innerW])
    .padding(0.32);

  const yMax  = d3.max(raw, d => d.count);
  const yScale = d3.scaleLinear()
    .domain([0, yMax * 1.18])
    .range([innerH, 0]);

  // ── GRID ─────────────────────────────────────────────────────────────────
  g.append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(yScale)
      .tickSize(-innerW)
      .tickFormat("")
      .ticks(5)
    );

  // ── AXES ─────────────────────────────────────────────────────────────────
  g.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${innerH})`)
    .call(d3.axisBottom(xScale).tickSize(0))
    .call(ax => ax.select(".domain").attr("stroke", "var(--border)"))
    .call(ax => ax.selectAll(".tick text")
      .attr("dy", "1.4em")
      .style("font-size", "13px")
      .style("fill", "var(--text)")
      .style("font-weight", "500")
    );

  g.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(yScale)
      .ticks(5)
      .tickSize(0)
      .tickFormat(d => d)
    )
    .call(ax => ax.select(".domain").remove())
    .call(ax => ax.selectAll(".tick text").attr("dx", "-6px"));

  // ── BARS ─────────────────────────────────────────────────────────────────
  const tt      = document.getElementById("tooltip");
  const ttBrand = document.getElementById("tt-brand");
  const ttCount = document.getElementById("tt-count");
  const ttPct   = document.getElementById("tt-pct");
  const ttRank  = document.getElementById("tt-rank");

  const bars = g.selectAll(".bar")
    .data(raw)
    .join("rect")
      .attr("class", "bar")
      .attr("x",     d => xScale(d.brand))
      .attr("width", xScale.bandwidth())
      .attr("y",     innerH)           // start at bottom
      .attr("height", 0)               // animate upwards
      .attr("rx", 5)
      .attr("fill", d => COLOR_HEX[d.brand]);

  // Enter animation
  bars.transition()
    .duration(600)
    .delay((_, i) => i * 80)
    .ease(d3.easeCubicOut)
    .attr("y",      d => yScale(d.count))
    .attr("height", d => innerH - yScale(d.count));

  // ── LABELS ON TOP OF BARS ───────────────────────────────────────────────
  const labels = g.selectAll(".bar-label")
    .data(raw)
    .join("text")
      .attr("class", "bar-label")
      .attr("x",         d => xScale(d.brand) + xScale.bandwidth() / 2)
      .attr("y",         innerH)
      .attr("text-anchor", "middle")
      .style("opacity", 0)
      .text(d => d.count);

  labels.transition()
    .duration(600)
    .delay((_, i) => i * 80 + 300)
    .ease(d3.easeCubicOut)
    .attr("y",      d => yScale(d.count) - 8)
    .style("opacity", 1);

  // ── TOOLTIP INTERACTION ──────────────────────────────────────────────────
  bars
    .on("mousemove", function(event, d) {
      const rank = raw.findIndex(x => x.brand === d.brand) + 1;
      ttBrand.textContent  = d.brand;
      ttBrand.style.color  = COLOR_HEX[d.brand];
      ttCount.textContent  = d.count.toLocaleString("id-ID");
      ttPct.textContent    = ((d.count / total) * 100).toFixed(1) + "%";
      ttRank.textContent   = `#${rank} dari 6 merek`;
      tt.classList.add("show");
      tt.style.left = (event.clientX + 16) + "px";
      tt.style.top  = (event.clientY - 60) + "px";
    })
    .on("mouseleave", function() {
      tt.classList.remove("show");
    });

  // ── LEGEND ───────────────────────────────────────────────────────────────
  const legend = document.getElementById("legend");
  legend.innerHTML = ""; // Clear existing
  raw.forEach(d => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `
      <span class="legend-dot" style="background:${COLOR_HEX[d.brand]}"></span>
      <span>${d.brand}</span>
    `;
    item.addEventListener("mouseenter", () => {
      bars.style("opacity", b => b.brand === d.brand ? 1 : 0.25);
      labels.style("opacity", b => b.brand === d.brand ? 1 : 0);
    });
    item.addEventListener("mouseleave", () => {
      bars.style("opacity", 1);
      labels.style("opacity", 1);
    });
    legend.appendChild(item);
  });
});
