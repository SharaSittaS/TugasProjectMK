const margin = { top: 20, right: 30, bottom: 52, left: 62 };
const W = 708, H = 380;
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

const COLOR_HEX = {
    BMW: "#4f8ef7",
    Ford: "#f7754f",
    Honda: "#55c98a",
    Hyundai: "#c46ef0",
    Tesla: "#f04f6e",
    Toyota: "#f0c040",
};

function initScatterPlot(data) {

    d3.select("#chart-loader").remove();

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Mileage)])
        .range([0, innerW]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Price)])
        .range([innerH, 0]);

    // Grid X
    g.append("g")
        .attr("class", "grid")
        .attr("transform", `translate(0,${innerH})`)
        .call(
            d3.axisBottom(xScale)
                .tickSize(-innerH)
                .tickFormat("")
        );

    // Grid Y
    g.append("g")
        .attr("class", "grid")
        .call(
            d3.axisLeft(yScale)
                .tickSize(-innerW)
                .tickFormat("")
        );

    // Axis X
    g.append("g")
        .attr(
            "transform",
            `translate(0,${innerH})`
        )
        .call(d3.axisBottom(xScale));

    // Axis Y
    g.append("g")
        .call(
            d3.axisLeft(yScale)
                .tickFormat(d => "$" + (d / 1000) + "k")
        );

    // Label X
    g.append("text")
        .attr("x", innerW / 2)
        .attr("y", innerH + 45)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text("Mileage (km)");

    // Label Y
    g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -innerH / 2)
        .attr("y", -50)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text("Price (USD)");

    //REGRESI LINEAR (TREND LINE)
    const n = data.length;
    const sumX = d3.sum(data, d => d.Mileage);
    const sumY = d3.sum(data, d => d.Price);
    const sumXY = d3.sum(data, d => d.Mileage * d.Price);
    const sumX2 = d3.sum(data, d => d.Mileage * d.Mileage);

    // Rumus mencari Slope (m) dan Intercept (c)
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    //titik awal (x1, y1) dan akhir (x2, y2) untuk garis tren
    const x1 = 0;
    const y1 = slope * x1 + intercept;
    const x2 = d3.max(data, d => d.Mileage);
    const y2 = slope * x2 + intercept;

    // Tambah ke SVG
    g.append("line")
        .attr("class", "trend-line")
        .attr("x1", xScale(x1))
        .attr("y1", yScale(y1))
        .attr("x2", xScale(x2))
        .attr("y2", yScale(y2))
        .attr("stroke", "#ffffff") // Warna garis putih
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "4,4") // garis putus-putus
        .attr("opacity", 0.8);

    // Tooltip
    const tooltip = d3.select("#tooltip");

    const dots = g.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.Mileage))
        .attr("cy", d => yScale(d.Price))
        .attr("r", 0)
        .attr("fill", d => COLOR_HEX[d.Brand])
        .attr("opacity", 0.6)

        .on("mouseover", function (event, d) {

            d3.select(this)
                .attr("r", 7)
                .attr("opacity", 1);

            d3.select("#tt-brand")
                .text(d.Brand);

            d3.select("#tt-price")
                .text("$" + d.Price.toLocaleString());

            d3.select("#tt-mileage")
                .text(d.Mileage.toLocaleString() + " km");

            d3.select("#tt-year")
                .text(d.Model_Year);

            d3.select("#tt-engine")
                .text(d.Engine_Size + " L");

            d3.select("#tt-hp")
                .text(d.Horsepower + " HP");

            tooltip
                .classed("show", true);
        })

        .on("mousemove", function (event) {

            tooltip
                .style("left", (event.pageX + 15) + "px")
                .style("top", (event.pageY - 50) + "px");

        })

        .on("mouseout", function () {

            d3.select(this)
                .attr("r", 4)
                .attr("opacity", 0.6);

            tooltip
                .classed("show", false);

        });

    dots.transition()
        .duration(300)
        .delay((d, i) => i * 2)
        .ease(d3.easeBackOut)
        .attr("r", 3)

    const legend = d3.select("#legend");

    Object.entries(COLOR_HEX).forEach(([brand, color]) => {

        const item = legend.append("div")
            .attr("class", "legend-item");

        item.append("div")
            .attr("class", "legend-dot")
            .style("background-color", color);

        item.append("span")
            .text(brand);

    });

}

d3.csv("data/car_clean.csv").then(data => {

    data.forEach(d => {
        d.Car_ID = +d.Car_ID;
        d.Price = +d.Price;
        d.Mileage = +d.Mileage;
        d.Horsepower = +d.Horsepower;
        d.Model_Year = +d.Model_Year;
    });

    const cleanData = data.filter(d => d.Car_ID !== 49 && d.Car_ID !== 1963);

    initScatterPlot(cleanData);

});
