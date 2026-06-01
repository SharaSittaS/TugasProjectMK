// ── CONFIG & COLOR ──────────────────────────────────────────────────────────
const COLOR_HEX = {
  BMW:     "#4f8ef7",
  Ford:    "#f7754f",
  Honda:   "#55c98a",
  Hyundai: "#c46ef0",
  Tesla:   "#f04f6e",
  Toyota:  "#f0c040",
};

// ★ Warna default netral — semua titik sama agar tidak membingungkan
const DOT_NEUTRAL = "#4a5a7a";

// ── DIMENSI ──────────────────────────────────────────────────────────────
const margin = { top: 20, right: 30, bottom: 52, left: 62 };
const W = 708, H = 380;
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

// ── RENDER SCATTER PLOT ──────────────────────────────────────────────────────
function initScatterPlot(data) {

  // Hapus loader
  d3.select("#chart-loader").remove();

  // ── SKALA ─────────────────────────────────────────────────────────────────
  const xScale = d3.scaleLinear()
    .domain([2004.4, 2023.6])
    .range([0, innerW]);

  const yMax = d3.max(data, d => d.Price);
  const yScale = d3.scaleLinear()
    .domain([0, yMax * 1.05])
    .range([innerH, 0]);

  // ── GRID ──────────────────────────────────────────────────────────────────
  g.append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(yScale)
      .tickSize(-innerW)
      .tickFormat("")
      .ticks(6)
    );

  g.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${innerH})`)
    .call(d3.axisBottom(xScale)
      .tickSize(-innerH)
      .tickFormat("")
      .tickValues(d3.range(2005, 2024, 2))
    );

  // ── AXIS ──────────────────────────────────────────────────────────────────
  g.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${innerH})`)
    .call(d3.axisBottom(xScale)
      .tickValues(d3.range(2005, 2024, 2))
      .tickFormat(d3.format("d"))
      .tickSize(0)
    )
    .call(ax => ax.select(".domain").attr("stroke", "var(--border)"))
    .call(ax => ax.selectAll(".tick text")
      .attr("dy", "14px")
      .style("fill", "var(--text)")
      .style("font-size", "12px")
      .style("font-weight", "500")
    );

  g.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(yScale)
      .ticks(6)
      .tickSize(0)
      .tickFormat(d => "$" + (d / 1000) + "k")
    )
    .call(ax => ax.select(".domain").remove())
    .call(ax => ax.selectAll(".tick text")
      .attr("dx", "-10px")
      .style("fill", "var(--muted)")
    );

  // ── TITIK DATA (SCATTER DOTS) ──────────────────────────────────────────────
  const tt        = document.getElementById("tooltip");
  const ttBrand   = document.getElementById("tt-brand");
  const ttPrice   = document.getElementById("tt-price");
  const ttYear    = document.getElementById("tt-year");
  const ttMileage = document.getElementById("tt-mileage");
  const ttEngine  = document.getElementById("tt-engine");
  const ttHp      = document.getElementById("tt-hp");

  // State filter brand aktif — dideklarasikan di luar agar dapat diakses oleh mouseleave
  let activeBrand = null;

  const dots = g.selectAll(".dot")
    .data(data)
    .join("circle")
      .attr("class", "dot")
      .attr("cx", d => xScale(d.Model_Year))
      .attr("cy", d => yScale(d.Price))
      .attr("r", 0)
      // ★ DEFAULT: semua titik satu warna abu-abu netral — mudah dibaca sekilas
      .attr("fill",    DOT_NEUTRAL)
      .attr("opacity", 0.45)
      .attr("stroke",  "none");

  // Animasi masuk
  dots.transition()
    .duration(800)
    .ease(d3.easeCubicOut)
    .attr("r", 4.5);

  // ── HOVER ─────────────────────────────────────────────────────────────────
  dots
    .on("mousemove", function(event, d) {
      // Saat hover, tunjukkan warna brand hanya pada titik yang disorot
      d3.select(this)
        .raise()
        .attr("r",            8)
        .attr("opacity",      1)
        .attr("fill",         COLOR_HEX[d.Brand]) // warna brand muncul saat hover
        .attr("stroke",       "#ffffff")
        .attr("stroke-width", "2px");

      ttBrand.textContent   = d.Brand;
      ttBrand.style.color   = COLOR_HEX[d.Brand];
      ttPrice.textContent   = "$" + d.Price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      ttYear.textContent    = d.Model_Year;
      ttMileage.textContent = d.Mileage.toLocaleString("id-ID") + " km";
      ttEngine.textContent  = d.Engine_Size.toFixed(1) + " L";
      ttHp.textContent      = d.Horsepower + " HP";

      tt.classList.add("show");
      tt.style.left = (event.clientX + 16) + "px";
      tt.style.top  = (event.clientY - 80) + "px";
    })
    .on("mouseleave", function(event, d) {
      // Kembalikan ke kondisi yang sesuai dengan state filter aktif
      if (activeBrand === null) {
        // Tidak ada filter aktif — kembali ke abu-abu netral
        d3.select(this)
          .attr("r",       4.5)
          .attr("fill",    DOT_NEUTRAL)
          .attr("opacity", 0.45)
          .attr("stroke",  "none");
      } else if (d.Brand === activeBrand) {
        // Brand ini sedang aktif (difilter) — kembali ke warna brand
        d3.select(this)
          .attr("r",            5.5)
          .attr("fill",         COLOR_HEX[d.Brand])
          .attr("opacity",      0.85)
          .attr("stroke",       "rgba(15,17,23,0.4)")
          .attr("stroke-width", "1px");
      } else {
        // Brand lain yang tidak aktif — kembali redup
        d3.select(this)
          .attr("r",       2.5)
          .attr("fill",    DOT_NEUTRAL)
          .attr("opacity", 0.06)
          .attr("stroke",  "none");
      }
      tt.classList.remove("show");
    });

  // ── FILTER LEGEND ──────────────────────────────────────────────────────────
  const brands = ["Honda", "Toyota", "BMW", "Ford", "Tesla", "Hyundai"];
  const legend = document.getElementById("legend");

  brands.forEach(br => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.id = `legend-${br.toLowerCase()}`;
    item.innerHTML = `
      <span class="legend-dot" style="background:${COLOR_HEX[br]}"></span>
      <span>${br}</span>
    `;

    item.addEventListener("click", () => {
      if (activeBrand === br) {
        // ★ Klik brand yang sama → reset ke abu-abu netral
        activeBrand = null;
        document.querySelectorAll(".legend-item").forEach(el => el.classList.remove("dimmed"));

        dots.transition().duration(350)
          .attr("r",       4.5)
          .attr("fill",    DOT_NEUTRAL)
          .attr("opacity", 0.45)
          .style("pointer-events", "all");
      } else {
        // ★ Klik brand baru → brand terpilih berwarna, yang lain abu-abu redup
        activeBrand = br;

        document.querySelectorAll(".legend-item").forEach(el => {
          el.id === `legend-${br.toLowerCase()}`
            ? el.classList.remove("dimmed")
            : el.classList.add("dimmed");
        });

        dots.transition().duration(350)
          .attr("r",       d => d.Brand === br ? 5.5 : 2.5)
          .attr("fill",    d => d.Brand === br ? COLOR_HEX[d.Brand] : DOT_NEUTRAL)
          .attr("opacity", d => d.Brand === br ? 0.85 : 0.06)
          .style("pointer-events", d => d.Brand === br ? "all" : "none");
      }
    });

    legend.appendChild(item);
  });
}

// Inisialisasi Chart Menggunakan Data Lokal
initScatterPlot(carData);
