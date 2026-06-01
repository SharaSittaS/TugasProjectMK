// ── DATA (diambil dari avg_price_brand.csv dan diurutkan descending) ──────────
const raw = [
  { brand: "Honda",   price: 46584.09 },
  { brand: "Toyota",  price: 46341.71 },
  { brand: "BMW",     price: 46206.12 },
  { brand: "Ford",    price: 46135.08 },
  { brand: "Tesla",   price: 46123.82 },
  { brand: "Hyundai", price: 45627.52 }
];

const totalAverage = d3.mean(raw, d => d.price);

const COLOR_HEX = {
  BMW:     "#4f8ef7",
  Ford:    "#f7754f",
  Honda:   "#55c98a",
  Hyundai: "#c46ef0",
  Tesla:   "#f04f6e",
  Toyota:  "#f0c040",
};

// ── DIMENSI ──────────────────────────────────────────────────────────────
const margin = { top: 20, right: 90, bottom: 52, left: 76 };
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

// ── SKALA ─────────────────────────────────────────────────────────────────
const yScale = d3.scaleBand()
  .domain(raw.map(d => d.brand))
  .range([0, innerH])
  .padding(0.28);

const xMax = d3.max(raw, d => d.price);
const xScale = d3.scaleLinear()
  .domain([0, xMax * 1.18]) // Memberi ruang di kanan untuk label harga
  .range([0, innerW]);

// ── GRID (Vertikal) ───────────────────────────────────────────────────────
g.append("g")
  .attr("class", "grid")
  .attr("transform", `translate(0,${innerH})`)
  .call(d3.axisBottom(xScale)
    .tickSize(-innerH)
    .tickFormat("")
    .ticks(5)
  );

// ── AXIS ──────────────────────────────────────────────────────────────────
g.append("g")
  .attr("class", "axis")
  .call(d3.axisLeft(yScale).tickSize(0))
  .call(ax => ax.select(".domain").attr("stroke", "var(--border)"))
  .call(ax => ax.selectAll(".tick text")
    .attr("dx", "-10px")
    .style("font-size", "13px")
    .style("fill", "var(--text)")
    .style("font-weight", "500")
  );

g.append("g")
  .attr("class", "axis")
  .attr("transform", `translate(0,${innerH})`)
  .call(d3.axisBottom(xScale)
    .ticks(5)
    .tickSize(0)
    .tickFormat(d => "$" + (d / 1000) + "k")
  )
  .call(ax => ax.select(".domain").attr("stroke", "var(--border)"))
  .call(ax => ax.selectAll(".tick text")
    .attr("dy", "14px")
    .style("fill", "var(--muted)")
  );

// ── BARS ──────────────────────────────────────────────────────────────────
const tt      = document.getElementById("tooltip");
const ttBrand = document.getElementById("tt-brand");
const ttPrice = document.getElementById("tt-price");
const ttDev   = document.getElementById("tt-dev");
const ttRank  = document.getElementById("tt-rank");

const bars = g.selectAll(".bar")
  .data(raw)
  .join("rect")
    .attr("class", "bar")
    .attr("y",     d => yScale(d.brand))
    .attr("height", yScale.bandwidth())
    .attr("x",     0)
    .attr("width", 0) // Mulai dari lebar 0 untuk animasi
    .attr("rx", 4)
    .attr("fill", d => COLOR_HEX[d.brand]);

// Animasi memanjang ke kanan
bars.transition()
  .duration(700)
  .delay((_, i) => i * 80)
  .ease(d3.easeCubicOut)
  .attr("width", d => xScale(d.price));

// ── LABEL ANGKA DI KANAN BAR ───────────────────────────────────────────────
const labels = g.selectAll(".bar-label")
  .data(raw)
  .join("text")
    .attr("class", "bar-label")
    .attr("x",         0)
    .attr("y",         d => yScale(d.brand) + yScale.bandwidth() / 2)
    .attr("dy",        "0.35em")
    .attr("dx",        "8px")
    .style("opacity",  0)
    .text(d => "$" + d.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));

labels.transition()
  .duration(700)
  .delay((_, i) => i * 80 + 350)
  .ease(d3.easeCubicOut)
  .attr("x",      d => xScale(d.price))
  .style("opacity", 1);

// ── TOOLTIP INTERAKSI ─────────────────────────────────────────────────────
bars
  .on("mousemove", function(event, d) {
    const rank = raw.indexOf(d) + 1;
    const diffPct = ((d.price - totalAverage) / totalAverage) * 100;
    const diffText = diffPct >= 0 
      ? `+${diffPct.toFixed(2)}% di atas rata-rata`
      : `${diffPct.toFixed(2)}% di bawah rata-rata`;

    ttBrand.textContent  = d.brand;
    ttBrand.style.color  = COLOR_HEX[d.brand];
    ttPrice.textContent  = "$" + d.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    ttDev.textContent    = diffText;
    ttDev.style.color    = diffPct >= 0 ? "#55c98a" : "#f04f6e";
    ttRank.textContent   = `#${rank} dari 6 merek`;
    
    tt.classList.add("show");
    tt.style.left = (event.clientX + 16) + "px";
    tt.style.top  = (event.clientY - 60) + "px";
  })
  .on("mouseleave", function() {
    tt.classList.remove("show");
  });

// ── LEGEND ────────────────────────────────────────────────────────────────
const legend = document.getElementById("legend");
raw.forEach(d => {
  const item = document.createElement("div");
  item.className = "legend-item";
  item.innerHTML = `
    <span class="legend-dot" style="background:${COLOR_HEX[d.brand]}"></span>
    <span>${d.brand}</span>
  `;
  item.addEventListener("mouseenter", () => {
    bars.style("opacity", b => b.brand === d.brand ? 1 : 0.25);
    labels.style("opacity", b => b.brand === d.brand ? 1 : 0.1);
  });
  item.addEventListener("mouseleave", () => {
    bars.style("opacity", 1);
    labels.style("opacity", 1);
  });
  legend.appendChild(item);
});
