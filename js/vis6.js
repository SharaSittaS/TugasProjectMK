const margin = { top: 20, right: 30, bottom: 60, left: 60 };

const W = 708;
const H = 380;

const innerW = W - margin.left - margin.right;
const innerH = H - margin.top - margin.bottom;

const svg = d3.select("#chart")
    .attr("viewBox", `0 0 ${W} ${H}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

const g = svg.append("g")
    .attr("transform",
        `translate(${margin.left},${margin.top})`
    );

function initBarChart(data) {

    d3.select("#chart-loader").remove();

    const highCars =
        data.filter(
            d => d.Price_Category === "High"
        );

    const fuelCounts =
        d3.rollups(
            highCars,
            v => v.length,
            d => d.Fuel_Type
        ).sort((a, b) => b[1] - a[1]);
    
    const xScale = d3.scaleBand()
        .domain(fuelCounts.map(d => d[0]))
        .range([0, innerW])
        .padding(0.3);

    const yScale = d3.scaleLinear()
        .domain([
            0,
            d3.max(fuelCounts, d => d[1])
        ])
        .nice()
        .range([innerH, 0]);

    // Grid

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
        .call(d3.axisLeft(yScale));

    // Label X

    g.append("text")
        .attr("x", innerW / 2)
        .attr("y", innerH + 45)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text("Fuel Type");

    // Label Y

    g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -innerH / 2)
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text("Jumlah Kendaraan");

    const tooltip =
        d3.select("#tooltip");

    g.selectAll("rect")
        .data(fuelCounts)
        .enter()
        .append("rect")
        .attr("x", d => xScale(d[0]))
        .attr("y", innerH)      // mulai dari bawah
        .attr("height", 0)      // tinggi awal 0
        .attr("rx", 5)
        .attr("width", xScale.bandwidth())

        .attr("fill", "#4f8ef7")

        .on("mouseover", function (event, d) {

            d3.select(this)
                .attr("fill", "#f0c040");

            d3.select("#tt-fuel")
                .text(d[0]);

            d3.select("#tt-count")
                .text(d[1]);

            tooltip
                .classed("show", true);

        })

        .on("mousemove", function (event) {

            tooltip
                .style(
                    "left",
                    (event.pageX + 15) + "px"
                )
                .style(
                    "top",
                    (event.pageY - 50) + "px"
                );

        })

        .on("mouseout", function () {

            d3.select(this)
                .attr("fill", "#4f8ef7");

            tooltip
                .classed("show", false);

        })
    
        .transition()
        .duration(600)
        .delay((d, i) => i * 120)
        .ease(d3.easeCubicOut)
        .attr("y", d => yScale(d[1]))
        .attr("height", d => innerH - yScale(d[1]));

}

d3.csv("data/car_clean.csv").then(data => {
    data.forEach(d => {
        d.Car_ID = +d.Car_ID;
        d.Price = +d.Price;
    });

    const cleanData = data.filter(d => d.Car_ID !== 49 && d.Car_ID !== 1963);

    initBarChart(cleanData);

});
