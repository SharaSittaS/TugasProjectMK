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

// ── BACA DATA LANGSUNG DARI CSV ──────────────────────────────────────────
// Menggantikan pemanggilan data statis dari viz3_data.js
d3.csv("car_clean.csv").then(data => {
  // Sembunyikan pesan loading
  d3.select("#chart-loader").remove();

  // Konversi tipe data string dari CSV ke numerik secara dinamis
  data.forEach(d => {
    d.Price = +d.Price;
    d.Model_Year = +d.Model_Year;
    d.Mileage = +d.Mileage;
    d.Engine_Size = +d.Engine_Size;
    d.Horsepower = +d.Horsepower;
  });

  // Jalankan inisialisasi scatter plot dengan data CSV asli
  initScatterPlot(data);

}).catch(error => {
  console.error("Gagal memuat file CSV pada Visualisasi 3:", error);
  d3.select("#chart-loader")
    .text("Gagal memuat data! Gunakan Live Server untuk menghindari isu CORS.")
    .attr("fill", "#ef4444");
});

// ── RENDER SCATTER PLOT ──────────────────────────────────────────────────────
function initScatterPlot(data) {

  // 1. Skala Sumbu Koordinat
  const xScale = d3.scaleLinear()
    .domain([2004, 2024]) // Rentang Tahun Produksi
    .range([0, innerW]);

  const yScale = d3.scaleLinear()
    .domain([10000, 80000]) // Rentang Harga
    .range([innerH, 0]);

  // 2. Format Penulisan Angka / Mata Uang
  const formatY = d3.format("$,.0f");

  // 3. Gridlines Sumbu X & Y (Garis Latar Belakang)
  const gridX = d3.axisBottom(xScale)
    .tickValues(d3.range(2005, 2024, 2))
    .tickSize(-innerH)
    .tickFormat("");

  const gridY = d3.axisLeft(yScale)
    .ticks(7)
    .tickSize(-innerW)
    .tickFormat("");

  g.append("g")
    .attr("class", "grid grid-x")
    .attr("transform", `translate(0, ${innerH})`)
    .call(gridX);

  g.append("g")
    .attr("class", "grid grid-y")
    .call(gridY);

  // 4. Menggambar Sumbu Utama (Axes)
  const xAxis = d3.axisBottom(xScale)
    .tickValues(d3.range(2005, 2024, 2))
    .tickFormat(d3.format("d"));

  const yAxis = d3.axisLeft(yScale)
    .ticks(7)
    .tickFormat(d => formatY(d));

  g.append("g")
    .attr("class", "axis axis-x")
    .attr("transform", `translate(0, ${innerH})`)
    .call(xAxis);

  g.append("g")
    .attr("class", "axis axis-y")
    .call(yAxis);

  // 5. Label Sumbu X & Y
  g.append("text")
    .attr("class", "axis-label")
    .attr("x", innerW / 2)
    .attr("y", innerH + 38)
    .attr("text-anchor", "middle")
    .text("Tahun Produksi (Model Year)");

  g.append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("x", -innerH / 2)
    .attr("y", -46)
    .attr("text-anchor", "middle")
    .text("Harga Jual Kendaraan (USD)");

  // 6. Inisialisasi Tooltip Lokal
  const tt = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  let activeBrand = null;

  // 7. Menggambar Titik Sebaran (Scatter Dots)
  const dots = g.append("g")
    .attr("class", "dots-group")
    .selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(d.Model_Year))
    .attr("cy", d => yScale(d.Price))
    .attr("r", 4.5)
    .attr("fill", DOT_NEUTRAL)
    .attr("opacity", 0.45)
    .style("cursor", "pointer");

  // 8. Interaktivitas Hover pada Titik
  dots.on("mouseover", function(event, d) {
    const isDimmed = activeBrand && d.Brand !== activeBrand;
    if (isDimmed) return; // Abaikan hover pada data yang sedang disaring/redup

    d3.select(this)
      .transition().duration(150)
      .attr("r", 7)
      .attr("fill", COLOR_HEX[d.Brand])
      .attr("opacity", 1);

    tt.transition().duration(150).style("opacity", 1);
    tt.html(`
      <div class="tt-brand" style="color:${COLOR_HEX[d.Brand]}">${d.Brand}</div>
      <div class="tt-row"><span>Tahun:</span><strong>${d.Model_Year}</strong></div>
      <div class="tt-row"><span>Harga:</span><strong>${formatY(d.Price)}</strong></div>
      <div class="tt-row"><span>Jarak:</span><strong>${d3.format(",")(d.Mileage)} km</strong></div>
      <div class="tt-row"><span>Mesin:</span><strong>${d.Engine_Size}L (${d.Horsepower} HP)</strong></div>
    `)
    .style("left", (event.pageX + 12) + "px")
    .style("top",  (event.pageY - 20) + "px");
  })
  .on("mousemove", function(event) {
    tt.style("left", (event.pageX + 12) + "px")
      .style("top",  (event.pageY - 20) + "px");
  })
  .on("mouseout", function() {
    const d = d3.select(this).datum();
    const isSelected = activeBrand && d.Brand === activeBrand;

    d3.select(this)
      .transition().duration(150)
      .attr("r", isSelected ? 5.5 : (activeBrand ? 2.5 : 4.5))
      .attr("fill", isSelected ? COLOR_HEX[d.Brand] : DOT_NEUTRAL)
      .attr("opacity", isSelected ? 0.95 : (activeBrand ? 0.15 : 0.45));

    tt.transition().duration(150).style("opacity", 0);
  });

  // 9. Membuat Legenda Interaktif Secara Dinamis
  const brands = Object.keys(COLOR_HEX);
  const legendWrap = d3.select("#legend");
  legendWrap.html(""); // Bersihkan legenda lama

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
        // Klik brand yang sama → reset filter sebaran data ke abu-abu netral
        activeBrand = null;
        document.querySelectorAll(".legend-item").forEach(el => el.classList.remove("dimmed"));

        dots.transition().duration(350)
          .attr("r",       4.5)
          .attr("fill",    DOT_NEUTRAL)
          .attr("opacity", 0.45)
          .style("pointer-events", "all");
      } else {
        // Klik brand baru → filter brand terpilih berwarna, yang lain redup
        activeBrand = br;

        document.querySelectorAll(".legend-item").forEach(el => {
          el.id === `legend-${br.toLowerCase()}`
            ? el.classList.remove("dimmed")
            : el.classList.add("dimmed");
        });

        dots.transition().duration(350)
          .attr("r",       d => d.Brand === br ? 5.5 : 2.5)
          .attr("fill",    d => d.Brand === br ? COLOR_HEX[d.Brand] : DOT_NEUTRAL)
          .attr("opacity", d => d.Brand === br ? 0.95 : 0.15)
          .style("pointer-events", d => d.Brand === br ? "all" : "none");
      }
    });

    legendWrap.node().appendChild(item);
  });
}