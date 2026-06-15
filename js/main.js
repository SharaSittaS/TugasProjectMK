const COLOR_HEX = {
    BMW:     "#4f8ef7",
    Ford:    "#f7754f",
    Honda:   "#55c98a",
    Hyundai: "#c46ef0",
    Tesla:   "#f04f6e",
    Toyota:  "#f0c040"
};

// Global Tooltip selections
const tooltip = d3.select("#tooltip");
const ttBrand = d3.select("#tt-brand");
const ttBody = d3.select("#tt-body");

function showTooltip(event, brand, brandColor, htmlContent) {
    ttBrand.text(brand).style("color", brandColor || "var(--accent)");
    ttBody.html(htmlContent);
    tooltip.classed("show", true);
    tooltip
        .style("left", (event.clientX + 16) + "px")
        .style("top", (event.clientY - 60) + "px");
}

function hideTooltip() {
    tooltip.classed("show", false);
}

// Position tooltip on movement
window.addEventListener("mousemove", (e) => {
    if (tooltip.classed("show")) {
        tooltip
            .style("left", (e.clientX + 16) + "px")
            .style("top", (e.clientY - 60) + "px");
    }
});

// Load and Parse Dataset
d3.csv("data/car_clean.csv").then(data => {
    console.log("CSV berhasil dibaca");

    data.forEach(d => {
        d.Car_ID = +d.Car_ID;
        d.Price = +d.Price;
        d.Mileage = +d.Mileage;
        d.Horsepower = +d.Horsepower;
        d.Model_Year = +d.Model_Year;
        d.Engine_Size = +d.Engine_Size;
    });

    // Remove Outliers (Toyota Car_ID 49 and Hyundai Car_ID 1963)
    data = data.filter(d => d.Car_ID !== 49 && d.Car_ID !== 1963);

    updateSummary(data);

    // Section 1: Market Overview
    drawChart1(data);
    drawChart2(data);
    drawChart3(data);

    // Section 2: Price Analysis
    drawChart4(data);
    drawChart5(data);
    drawChart6(data);

    // Section 3: Advanced Insights
    drawChart7(data);
    drawChart8(data);
    drawChart9(data);
});

// Update Header Summary KPI Cards
function updateSummary(data) {
    const totalCars = data.length;
    const avgPrice = d3.mean(data, d => d.Price);
    const avgMileage = d3.mean(data, d => d.Mileage);

    // Find brand with highest average price
    const brandAvg = d3.rollups(data, v => d3.mean(v, d => d.Price), d => d.Brand);
    brandAvg.sort((a, b) => b[1] - a[1]);
    const topBrand = brandAvg[0][0];

    d3.select("#totalCars").text(totalCars.toLocaleString("id-ID"));
    d3.select("#avgPrice").text("$" + Math.round(avgPrice).toLocaleString("en-US"));
    d3.select("#avgMileage").text(Math.round(avgMileage).toLocaleString("id-ID") + " km");
    d3.select("#topBrand").text(topBrand).style("color", COLOR_HEX[topBrand]);
}

// ───────────────────────────────────────────────
// SECTION 1: MARKET OVERVIEW
// ───────────────────────────────────────────────

// Chart 1: Car Distribution by Brand (Bar Chart)
function drawChart1(data) {
    const raw = d3.rollups(data, v => v.length, d => d.Brand)
                  .map(([brand, count]) => ({ brand, count }))
                  .sort((a, b) => b.count - a.count);
    const total = d3.sum(raw, d => d.count);

    const W = 500, H = 350;
    const margin = { top: 20, right: 20, bottom: 40, left: 50 };
    const innerW = W - margin.left - margin.right;
    const innerH = H - margin.top - margin.bottom;

    const svg = d3.select("#chart1").append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${W} ${H}`);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand().domain(raw.map(d => d.brand)).range([0, innerW]).padding(0.3);
    const yScale = d3.scaleLinear().domain([0, d3.max(raw, d => d.count) * 1.1]).range([innerH, 0]);

    // Grid X / Y
    g.append("g").attr("class", "grid").call(d3.axisLeft(yScale).tickSize(-innerW).tickFormat("").ticks(5));

    // Axes
    g.append("g").attr("class", "axis").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).tickSize(0)).call(g => g.select(".domain").attr("stroke", "var(--border)"));
    g.append("g").attr("class", "axis").call(d3.axisLeft(yScale).ticks(5)).call(g => g.select(".domain").remove());

    const bars = g.selectAll(".bar").data(raw).join("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.brand))
        .attr("y", innerH)
        .attr("width", xScale.bandwidth())
        .attr("height", 0)
        .attr("rx", 4)
        .attr("fill", d => COLOR_HEX[d.brand]);

    bars.transition().duration(800).ease(d3.easeCubicOut)
        .attr("y", d => yScale(d.count))
        .attr("height", d => innerH - yScale(d.count));

    // Labels inside bars
    const labels = g.selectAll(".bar-label").data(raw).join("text")
        .attr("class", "bar-label")
        .attr("x", d => xScale(d.brand) + xScale.bandwidth() / 2)
        .attr("y", innerH)
        .attr("text-anchor", "middle")
        .style("opacity", 0)
        .text(d => d.count);

    labels.transition().duration(800).delay(200).ease(d3.easeCubicOut)
        .attr("y", d => yScale(d.count) - 8)
        .style("opacity", 1);

    bars.on("mousemove", function(event, d) {
        const rank = raw.findIndex(x => x.brand === d.brand) + 1;
        const pct = ((d.count / total) * 100).toFixed(1);
        const html = `
            <div class="tt-row"><span>Jumlah Mobil</span><span>${d.count.toLocaleString("id-ID")}</span></div>
            <div class="tt-row"><span>Proporsi</span><span>${pct}%</span></div>
            <div class="tt-row"><span>Rank</span><span>#${rank} dari 6</span></div>
        `;
        showTooltip(event, d.brand, COLOR_HEX[d.brand], html);
    }).on("mouseleave", hideTooltip);
}

// Chart 2: Average Price by Brand (Horizontal Bar Chart)
function drawChart2(data) {
    const raw = d3.rollups(data, v => d3.mean(v, d => d.Price), d => d.Brand)
                  .map(([brand, price]) => ({ brand, price }))
                  .sort((a, b) => b.price - a.price);
    const globalAvg = d3.mean(data, d => d.Price);

    const W = 500, H = 350;
    const margin = { top: 20, right: 60, bottom: 40, left: 60 };
    const innerW = W - margin.left - margin.right;
    const innerH = H - margin.top - margin.bottom;

    const svg = d3.select("#chart2").append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${W} ${H}`);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const yScale = d3.scaleBand().domain(raw.map(d => d.brand)).range([0, innerH]).padding(0.25);
    const xScale = d3.scaleLinear().domain([0, d3.max(raw, d => d.price) * 1.15]).range([0, innerW]);

    // Grid
    g.append("g").attr("class", "grid").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).tickSize(-innerH).tickFormat("").ticks(5));

    // Axes
    g.append("g").attr("class", "axis").call(d3.axisLeft(yScale).tickSize(0)).call(g => g.select(".domain").attr("stroke", "var(--border)"));
    g.append("g").attr("class", "axis").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).ticks(5).tickFormat(d => "$" + (d / 1000) + "k"));

    const bars = g.selectAll(".bar").data(raw).join("rect")
        .attr("class", "bar")
        .attr("y", d => yScale(d.brand))
        .attr("x", 0)
        .attr("height", yScale.bandwidth())
        .attr("width", 0)
        .attr("rx", 4)
        .attr("fill", d => COLOR_HEX[d.brand]);

    bars.transition().duration(800).ease(d3.easeCubicOut)
        .attr("width", d => xScale(d.price));

    const labels = g.selectAll(".bar-label").data(raw).join("text")
        .attr("class", "bar-label")
        .attr("x", 8)
        .attr("y", d => yScale(d.brand) + yScale.bandwidth() / 2)
        .attr("dy", "0.35em")
        .style("opacity", 0)
        .text(d => "$" + Math.round(d.price).toLocaleString("en-US"));

    labels.transition().duration(800).delay(200).ease(d3.easeCubicOut)
        .attr("x", d => xScale(d.price) + 6)
        .style("opacity", 1);

    bars.on("mousemove", function(event, d) {
        const rank = raw.findIndex(x => x.brand === d.brand) + 1;
        const diff = ((d.price - globalAvg) / globalAvg * 100).toFixed(1);
        const diffText = diff >= 0 ? `+${diff}% di atas rata-rata` : `${diff}% di bawah rata-rata`;
        const html = `
            <div class="tt-row"><span>Rata-rata Harga</span><span>$${Math.round(d.price).toLocaleString("en-US")}</span></div>
            <div class="tt-row"><span>Deviasi Pasar</span><span style="color: ${diff >= 0 ? '#55c98a' : '#f04f6e'}">${diffText}</span></div>
            <div class="tt-row"><span>Rank</span><span>#${rank} dari 6</span></div>
        `;
        showTooltip(event, d.brand, COLOR_HEX[d.brand], html);
    }).on("mouseleave", hideTooltip);
}

// Chart 3: Model Year vs Price (Scatter Plot - Full Width)
function drawChart3(data) {
    const W = 1000, H = 380;
    const margin = { top: 20, right: 30, bottom: 40, left: 60 };
    const innerW = W - margin.left - margin.right;
    const innerH = H - margin.top - margin.bottom;

    const svg = d3.select("#chart3").append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${W} ${H}`);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear().domain([d3.min(data, d => d.Model_Year) - 0.5, d3.max(data, d => d.Model_Year) + 0.5]).range([0, innerW]);
    const yScale = d3.scaleLinear().domain([0, d3.max(data, d => d.Price) * 1.05]).range([innerH, 0]);

    // Grid X / Y
    g.append("g").attr("class", "grid").call(d3.axisLeft(yScale).ticks(5).tickSize(-innerW).tickFormat(""));
    g.append("g").attr("class", "grid").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).ticks(10).tickSize(-innerH).tickFormat(""));

    // Axes
    g.append("g").attr("class", "axis").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).tickFormat(d3.format("d")));
    g.append("g").attr("class", "axis").call(d3.axisLeft(yScale).ticks(5).tickFormat(d => "$" + (d / 1000) + "k"));

    const dots = g.selectAll(".dot").data(data).join("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d.Model_Year) + (Math.random() - 0.5) * 6) // Jitter X
        .attr("cy", d => yScale(d.Price))
        .attr("r", 0)
        .attr("fill", d => COLOR_HEX[d.Brand])
        .attr("opacity", 0.35);

    dots.transition().duration(600).attr("r", 2.2);

    dots.on("mousemove", function(event, d) {
        d3.select(this).raise().attr("r", 7).attr("opacity", 1).attr("stroke", "#fff").attr("stroke-width", 1.5);
        const html = `
            <div class="tt-row"><span>Tahun</span><span>${d.Model_Year}</span></div>
            <div class="tt-row"><span>Harga</span><span>$${d.Price.toLocaleString("en-US")}</span></div>
            <div class="tt-row"><span>Jarak Tempuh</span><span>${d.Mileage.toLocaleString("id-ID")} km</span></div>
            <div class="tt-row"><span>Horsepower</span><span>${d.Horsepower} HP</span></div>
        `;
        showTooltip(event, d.Brand, COLOR_HEX[d.Brand], html);
    }).on("mouseleave", function() {
        d3.select(this).attr("r", 2.2).attr("opacity", 0.35).attr("stroke", "none");
        hideTooltip();
    });
}

// ───────────────────────────────────────────────
// SECTION 2: PRICE ANALYSIS
// ───────────────────────────────────────────────

// Chart 4: Mileage vs Price (Scatter Plot with Trend Line)
function drawChart4(data) {
    const W = 500, H = 350;
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const innerW = W - margin.left - margin.right;
    const innerH = H - margin.top - margin.bottom;

    const svg = d3.select("#chart4").append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${W} ${H}`);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear().domain([0, d3.max(data, d => d.Mileage)]).range([0, innerW]);
    const yScale = d3.scaleLinear().domain([0, d3.max(data, d => d.Price)]).range([innerH, 0]);

    // Grid
    g.append("g").attr("class", "grid").call(d3.axisLeft(yScale).ticks(5).tickSize(-innerW).tickFormat(""));
    g.append("g").attr("class", "grid").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).ticks(5).tickSize(-innerH).tickFormat(""));

    // Axes
    g.append("g").attr("class", "axis").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).tickFormat(d => (d/1000) + "k km"));
    g.append("g").attr("class", "axis").call(d3.axisLeft(yScale).ticks(5).tickFormat(d => "$" + (d/1000) + "k"));

    // Linear Regression Trend Line
    const n = data.length;
    const sumX = d3.sum(data, d => d.Mileage);
    const sumY = d3.sum(data, d => d.Price);
    const sumXY = d3.sum(data, d => d.Mileage * d.Price);
    const sumX2 = d3.sum(data, d => d.Mileage * d.Mileage);

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    const x1 = 0, y1 = intercept;
    const x2 = d3.max(data, d => d.Mileage), y2 = slope * x2 + intercept;

    g.append("line")
        .attr("class", "trend-line")
        .attr("x1", xScale(x1))
        .attr("y1", yScale(y1))
        .attr("x2", xScale(x2))
        .attr("y2", yScale(y2))
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "4,4")
        .attr("opacity", 0.8);

    const dots = g.selectAll(".dot").data(data).join("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d.Mileage))
        .attr("cy", d => yScale(d.Price))
        .attr("r", 0)
        .attr("fill", d => COLOR_HEX[d.Brand])
        .attr("opacity", 0.5);

    dots.transition().duration(600).attr("r", 3.5);

    dots.on("mousemove", function(event, d) {
        d3.select(this).raise().attr("r", 8).attr("opacity", 1).attr("stroke", "#fff").attr("stroke-width", 2);
        const html = `
            <div class="tt-row"><span>Jarak Tempuh</span><span>${d.Mileage.toLocaleString("id-ID")} km</span></div>
            <div class="tt-row"><span>Harga</span><span>$${d.Price.toLocaleString("en-US")}</span></div>
            <div class="tt-row"><span>Tahun</span><span>${d.Model_Year}</span></div>
        `;
        showTooltip(event, d.Brand, COLOR_HEX[d.Brand], html);
    }).on("mouseleave", function() {
        d3.select(this).attr("r", 3.5).attr("opacity", 0.5).attr("stroke", "none");
        hideTooltip();
    });
}

// Chart 5: Horsepower vs Price (Scatter Plot)
function drawChart5(data) {
    const W = 500, H = 350;
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const innerW = W - margin.left - margin.right;
    const innerH = H - margin.top - margin.bottom;

    const svg = d3.select("#chart5").append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${W} ${H}`);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear().domain([0, d3.max(data, d => d.Horsepower)]).range([0, innerW]);
    const yScale = d3.scaleLinear().domain([0, d3.max(data, d => d.Price)]).range([innerH, 0]);

    // Grid
    g.append("g").attr("class", "grid").call(d3.axisLeft(yScale).ticks(5).tickSize(-innerW).tickFormat(""));
    g.append("g").attr("class", "grid").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).ticks(5).tickSize(-innerH).tickFormat(""));

    // Axes
    g.append("g").attr("class", "axis").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).tickFormat(d => d + " HP"));
    g.append("g").attr("class", "axis").call(d3.axisLeft(yScale).ticks(5).tickFormat(d => "$" + (d / 1000) + "k"));

    const dots = g.selectAll(".dot").data(data).join("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d.Horsepower))
        .attr("cy", d => yScale(d.Price))
        .attr("r", 0)
        .attr("fill", d => COLOR_HEX[d.Brand])
        .attr("opacity", 0.5);

    dots.transition().duration(600).attr("r", 3.5);

    dots.on("mousemove", function(event, d) {
        d3.select(this).raise().attr("r", 8).attr("opacity", 1).attr("stroke", "#fff").attr("stroke-width", 2);
        const html = `
            <div class="tt-row"><span>Tenaga Kuda</span><span>${d.Horsepower} HP</span></div>
            <div class="tt-row"><span>Harga</span><span>$${d.Price.toLocaleString("en-US")}</span></div>
            <div class="tt-row"><span>Tahun</span><span>${d.Model_Year}</span></div>
        `;
        showTooltip(event, d.Brand, COLOR_HEX[d.Brand], html);
    }).on("mouseleave", function() {
        d3.select(this).attr("r", 3.5).attr("opacity", 0.5).attr("stroke", "none");
        hideTooltip();
    });
}

// Chart 6: Fuel Type in High Price Segment (Bar Chart - Full Width)
function drawChart6(data) {
    const highCars = data.filter(d => d.Price_Category === "High");
    const raw = d3.rollups(highCars, v => v.length, d => d.Fuel_Type)
                  .map(([type, count]) => ({ type, count }))
                  .sort((a, b) => b.count - a.count);
    const total = d3.sum(raw, d => d.count);

    const W = 1000, H = 380;
    const margin = { top: 20, right: 30, bottom: 40, left: 60 };
    const innerW = W - margin.left - margin.right;
    const innerH = H - margin.top - margin.bottom;

    const svg = d3.select("#chart6").append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${W} ${H}`);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand().domain(raw.map(d => d.type)).range([0, innerW]).padding(0.35);
    const yScale = d3.scaleLinear().domain([0, d3.max(raw, d => d.count) * 1.1]).range([innerH, 0]);

    const fuelColors = {
        Petrol: "#ff8c00",
        Diesel: "#4682b4",
        Electric: "#32cd32",
        Hybrid: "#ba55d3"
    };

    // Grid
    g.append("g").attr("class", "grid").call(d3.axisLeft(yScale).ticks(5).tickSize(-innerW).tickFormat(""));

    // Axes
    g.append("g").attr("class", "axis").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).tickSize(0));
    g.append("g").attr("class", "axis").call(d3.axisLeft(yScale).ticks(5));

    const bars = g.selectAll(".bar").data(raw).join("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.type))
        .attr("y", innerH)
        .attr("width", xScale.bandwidth())
        .attr("height", 0)
        .attr("rx", 5)
        .attr("fill", d => fuelColors[d.type] || "var(--accent)");

    bars.transition().duration(800).ease(d3.easeCubicOut)
        .attr("y", d => yScale(d.count))
        .attr("height", d => innerH - yScale(d.count));

    const labels = g.selectAll(".bar-label").data(raw).join("text")
        .attr("class", "bar-label")
        .attr("x", d => xScale(d.type) + xScale.bandwidth() / 2)
        .attr("y", innerH)
        .attr("text-anchor", "middle")
        .style("opacity", 0)
        .text(d => d.count);

    labels.transition().duration(800).delay(200).ease(d3.easeCubicOut)
        .attr("y", d => yScale(d.count) - 8)
        .style("opacity", 1);

    bars.on("mousemove", function(event, d) {
        const pct = ((d.count / total) * 100).toFixed(1);
        const html = `
            <div class="tt-row"><span>Jumlah Mobil</span><span>${d.count}</span></div>
            <div class="tt-row"><span>Proporsi Segmen</span><span>${pct}%</span></div>
        `;
        showTooltip(event, d.type, fuelColors[d.type], html);
    }).on("mouseleave", hideTooltip);
}

// ───────────────────────────────────────────────
// SECTION 3: ADVANCED INSIGHTS
// ───────────────────────────────────────────────

// Chart 7: Transmission vs Price (Box Plot)
function drawChart7(data) {
    const grouped = d3.group(data, d => d.Transmission);
    const stats = [];
    const colors = { Automatic: "#4f8ef7", Manual: "#55c98a" };

    grouped.forEach((values, key) => {
        const prices = values.map(d => d.Price).sort(d3.ascending);
        stats.push({
            transmission: key,
            min: d3.min(prices),
            q1: d3.quantile(prices, 0.25),
            median: d3.quantile(prices, 0.5),
            q3: d3.quantile(prices, 0.75),
            max: d3.max(prices)
        });
    });

    const W = 500, H = 350;
    const margin = { top: 20, right: 30, bottom: 40, left: 60 };
    const innerW = W - margin.left - margin.right;
    const innerH = H - margin.top - margin.bottom;

    const svg = d3.select("#chart7").append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${W} ${H}`);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand().domain(stats.map(d => d.transmission)).range([0, innerW]).padding(0.4);
    const yScale = d3.scaleLinear().domain([0, d3.max(stats, d => d.max) * 1.05]).range([innerH, 0]);

    // Grid
    g.append("g").attr("class", "grid").call(d3.axisLeft(yScale).ticks(5).tickSize(-innerW).tickFormat(""));

    // Axes
    g.append("g").attr("class", "axis").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).tickSize(0));
    g.append("g").attr("class", "axis").call(d3.axisLeft(yScale).ticks(5).tickFormat(d => "$" + (d / 1000) + "k"));

    // Draw vertical range lines
    g.selectAll(".range").data(stats).join("line")
        .attr("class", "range")
        .attr("x1", d => xScale(d.transmission) + xScale.bandwidth() / 2)
        .attr("x2", d => xScale(d.transmission) + xScale.bandwidth() / 2)
        .attr("y1", d => yScale(d.min))
        .attr("y2", d => yScale(d.max))
        .attr("stroke", "#7a8099")
        .attr("stroke-width", 1.5);

    // Draw boxes
    const boxes = g.selectAll(".box").data(stats).join("rect")
        .attr("class", "box")
        .attr("x", d => xScale(d.transmission))
        .attr("width", xScale.bandwidth())
        .attr("y", innerH)
        .attr("height", 0)
        .attr("rx", 5)
        .attr("fill", d => colors[d.transmission]);

    boxes.transition().duration(800).ease(d3.easeCubicOut)
        .attr("y", d => yScale(d.q3))
        .attr("height", d => yScale(d.q1) - yScale(d.q3));

    // Draw median line
    g.selectAll(".median").data(stats).join("line")
        .attr("x1", d => xScale(d.transmission))
        .attr("x2", d => xScale(d.transmission) + xScale.bandwidth())
        .attr("y1", d => yScale(d.median))
        .attr("y2", d => yScale(d.median))
        .attr("stroke", "white")
        .attr("stroke-width", 3.5);

    // Min and Max Caps
    g.selectAll(".mincap").data(stats).join("line")
        .attr("x1", d => xScale(d.transmission) + 15)
        .attr("x2", d => xScale(d.transmission) + xScale.bandwidth() - 15)
        .attr("y1", d => yScale(d.min))
        .attr("y2", d => yScale(d.min))
        .attr("stroke", "#7a8099")
        .attr("stroke-width", 1.5);

    g.selectAll(".maxcap").data(stats).join("line")
        .attr("x1", d => xScale(d.transmission) + 15)
        .attr("x2", d => xScale(d.transmission) + xScale.bandwidth() - 15)
        .attr("y1", d => yScale(d.max))
        .attr("y2", d => yScale(d.max))
        .attr("stroke", "#7a8099")
        .attr("stroke-width", 1.5);

    boxes.on("mousemove", function(event, d) {
        const html = `
            <div class="tt-row"><span>Maximum</span><span>$${Math.round(d.max).toLocaleString("en-US")}</span></div>
            <div class="tt-row"><span>Kuartil 3 (Q3)</span><span>$${Math.round(d.q3).toLocaleString("en-US")}</span></div>
            <div class="tt-row"><span>Median</span><span>$${Math.round(d.median).toLocaleString("en-US")}</span></div>
            <div class="tt-row"><span>Kuartil 1 (Q1)</span><span>$${Math.round(d.q1).toLocaleString("en-US")}</span></div>
            <div class="tt-row"><span>Minimum</span><span>$${Math.round(d.min).toLocaleString("en-US")}</span></div>
        `;
        showTooltip(event, d.transmission, colors[d.transmission], html);
    }).on("mouseleave", hideTooltip);
}

// Chart 8: Year vs Mileage (Scatter Plot)
function drawChart8(data) {
    const W = 500, H = 350;
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const innerW = W - margin.left - margin.right;
    const innerH = H - margin.top - margin.bottom;

    const svg = d3.select("#chart8").append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${W} ${H}`);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear().domain([d3.min(data, d => d.Model_Year) - 0.5, d3.max(data, d => d.Model_Year) + 0.5]).range([0, innerW]);
    const yScale = d3.scaleLinear().domain([0, d3.max(data, d => d.Mileage)]).range([innerH, 0]);

    // Grid
    g.append("g").attr("class", "grid").call(d3.axisLeft(yScale).ticks(5).tickSize(-innerW).tickFormat(""));
    g.append("g").attr("class", "grid").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).ticks(5).tickSize(-innerH).tickFormat(""));

    // Axes
    g.append("g").attr("class", "axis").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(xScale).tickFormat(d3.format("d")));
    g.append("g").attr("class", "axis").call(d3.axisLeft(yScale).ticks(5).tickFormat(d => (d / 1000) + "k km"));

    const dots = g.selectAll(".dot").data(data).join("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d.Model_Year) + (Math.random() - 0.5) * 6)
        .attr("cy", d => yScale(d.Mileage))
        .attr("r", 0)
        .attr("fill", d => COLOR_HEX[d.Brand])
        .attr("opacity", 0.35);

    dots.transition().duration(600).attr("r", 2.2);

    dots.on("mousemove", function(event, d) {
        d3.select(this).raise().attr("r", 7).attr("opacity", 1).attr("stroke", "#fff").attr("stroke-width", 1.5);
        const html = `
            <div class="tt-row"><span>Tahun</span><span>${d.Model_Year}</span></div>
            <div class="tt-row"><span>Jarak Tempuh</span><span>${d.Mileage.toLocaleString("id-ID")} km</span></div>
            <div class="tt-row"><span>Harga</span><span>$${d.Price.toLocaleString("en-US")}</span></div>
        `;
        showTooltip(event, d.Brand, COLOR_HEX[d.Brand], html);
    }).on("mouseleave", function() {
        d3.select(this).attr("r", 2.2).attr("opacity", 0.35).attr("stroke", "none");
        hideTooltip();
    });
}

// Chart 9: Correlation Heatmap (Full Width)
function drawChart9(data) {
    const variables = ["Model_Year", "Mileage", "Horsepower", "Price"];

    // Compute Pearson Correlation Coefficient
    function correlation(x, y) {
        const n = x.length;
        const meanX = d3.mean(x);
        const meanY = d3.mean(y);
        let num = 0, denX = 0, denY = 0;
        for (let i = 0; i < n; i++) {
            num += (x[i] - meanX) * (y[i] - meanY);
            denX += (x[i] - meanX) ** 2;
            denY += (y[i] - meanY) ** 2;
        }
        return num / Math.sqrt(denX * denY);
    }

    const matrix = [];
    variables.forEach(v1 => {
        variables.forEach(v2 => {
            const corrVal = correlation(data.map(d => d[v1]), data.map(d => d[v2]));
            matrix.push({ x: v1, y: v2, val: corrVal });
        });
    });

    const W = 1000, H = 380;
    const margin = { top: 30, right: 30, bottom: 40, left: 120 };
    const innerW = W - margin.left - margin.right;
    const innerH = H - margin.top - margin.bottom;

    const svg = d3.select("#chart9").append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${W} ${H}`);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand().domain(variables).range([0, innerW]).padding(0.02);
    const yScale = d3.scaleBand().domain(variables).range([0, innerH]).padding(0.02);

    // Color interpolation: red (-1) -> dark grey (0) -> green (+1)
    const colorScale = d3.scaleLinear().domain([-1, 0, 1]).range(["#f04f6e", "#252a38", "#55c98a"]);

    // Draw Heatmap Cells
    const cells = g.selectAll(".cell").data(matrix).join("rect")
        .attr("class", "cell")
        .attr("x", d => xScale(d.x))
        .attr("y", d => yScale(d.y))
        .attr("width", xScale.bandwidth())
        .attr("height", yScale.bandwidth())
        .attr("fill", d => colorScale(d.val))
        .attr("stroke", "#0f1117");

    // Add Value Text inside cells
    g.selectAll(".corr-text").data(matrix).join("text")
        .attr("class", "corr-text")
        .attr("x", d => xScale(d.x) + xScale.bandwidth() / 2)
        .attr("y", d => yScale(d.y) + yScale.bandwidth() / 2)
        .text(d => d.val.toFixed(2));

    // Axes
    const cleanVarNames = {
        Model_Year: "Tahun Produksi",
        Mileage: "Jarak Tempuh",
        Horsepower: "Tenaga Kuda",
        Price: "Harga Jual"
    };

    g.append("g").attr("class", "axis").call(d3.axisLeft(yScale).tickFormat(d => cleanVarNames[d] || d));
    g.append("g").attr("class", "axis").call(d3.axisTop(xScale).tickFormat(d => cleanVarNames[d] || d));

    cells.on("mousemove", function(event, d) {
        const html = `
            <div class="tt-row"><span>Korelasi</span><span>${d.val.toFixed(3)}</span></div>
        `;
        showTooltip(event, `${cleanVarNames[d.x]} vs ${cleanVarNames[d.y]}`, "var(--accent)", html);
    }).on("mouseleave", hideTooltip);
}
