const tooltip =
    d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("background", "white")
        .style("padding", "8px")
        .style("border", "1px solid gray")
        .style("border-radius", "5px")
        .style("visibility", "hidden");

d3.csv("data/car_clean.csv").then(data => {
    console.log("CSV berhasil dibaca");

    data.forEach(d => {
        d.Price = +d.Price;
        d.Mileage = +d.Mileage;
        d.Horsepower = +d.Horsepower;
        d.Model_Year = +d.Model_Year;
    });

    updateSummary(data);

    // Grafik 1-3
    drawChart1(data);
    drawChart2(data);
    drawChart3(data);

    // Grafik 4-6
    drawChart4(data);
    drawChart5(data);
    drawChart6(data);

    // Grafik 7-9
    drawChart8(data);
    drawChart9(data);
});


function updateSummary(data) {

    const totalCars = data.length;

    const avgPrice =
        d3.mean(data, d => d.Price);

    const avgMileage =
        d3.mean(data, d => d.Mileage);

    // Cari brand dengan rata-rata harga tertinggi
    const brandAvg =
        d3.rollups(
            data,
            v => d3.mean(v, d => d.Price),
            d => d.Brand
        );

    brandAvg.sort((a, b) => b[1] - a[1]);

    const topBrand = brandAvg[0][0];

    d3.select("#totalCars")
        .text(totalCars.toLocaleString());

    d3.select("#avgPrice")
        .text(
            "$" +
            Math.round(avgPrice).toLocaleString()
        );

    d3.select("#avgMileage")
        .text(
            Math.round(avgMileage).toLocaleString() +
            " km"
        );

    d3.select("#topBrand")
        .text(topBrand);
}



// grafik 1-3

function drawChart1(data) { }
function drawChart2(data) { }
function drawChart3(data) { }

// grafik 4-6

function drawChart4(data) {

    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 50, left: 70 };

    const svg = d3.select("#chart4")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Mileage)])
        .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Price)])
        .range([height - margin.bottom, margin.top]);

    svg.append("g")
        .attr("transform",
            `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));

    svg.append("g")
        .attr("transform",
            `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => x(d.Mileage))
        .attr("cy", d => y(d.Price))
        .attr("r", 3)
        .attr("fill", "black")
        .attr("opacity", 0.6)

        .on("mouseover", function (event, d) {

            d3.select(this)
                .attr("fill", "orange")
                .attr("r", 4);

            tooltip
                .style("visibility", "visible")
                .html(`
                <strong>${d.Brand}</strong><br>
                Price : $${d.Price}<br>
                Mileage : ${d.Mileage} km
            `);

        })

        .on("mousemove", function (event) {

            tooltip
                .style("top", (event.pageY + 10) + "px")
                .style("left", (event.pageX + 10) + "px");

        })

        .on("mouseout", function () {

            d3.select(this)
                .attr("fill", "black")
                .attr("r", 3);

            tooltip
                .style("visibility", "hidden");

        });
}
function drawChart5(data) {

    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 50, left: 70 };

    const svg = d3.select("#chart5")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Horsepower)])
        .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Price)])
        .range([height - margin.bottom, margin.top]);

    svg.append("g")
        .attr("transform",
            `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));

    svg.append("g")
        .attr("transform",
            `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => x(d.Horsepower))
        .attr("cy", d => y(d.Price))
        .attr("r", 3)
        .attr("fill", "black")
        .attr("opacity", 0.6)

        .on("mouseover", function (event, d) {

            d3.select(this)
                .attr("fill", "orange")
                .attr("r", 4);

            tooltip
                .style("visibility", "visible")
                .html(`
                <strong>${d.Brand}</strong><br>
            Price : $${d.Price}<br>
            Horsepower : ${d.Horsepower} HP
        `);

        })
        .on("mousemove", function (event) {

            tooltip
                .style("top", (event.pageY + 10) + "px")
                .style("left", (event.pageX + 10) + "px");

        })

        .on("mouseout", function () {

            d3.select(this)
                .attr("fill", "black")
                .attr("r", 3);

            tooltip
                .style("visibility", "hidden");

        });
}
function drawChart6(data) {

    const highCars =
        data.filter(
            d => d.Price_Category === "High"
        );

    const fuelCounts =
        d3.rollups(
            highCars,
            v => v.length,
            d => d.Fuel_Type
        );

    const width = 700;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 50, left: 80 };

    const svg = d3.select("#chart6")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const x = d3.scaleBand()
        .domain(fuelCounts.map(d => d[0]))
        .range([margin.left, width - margin.right])
        .padding(0.3);

    const y = d3.scaleLinear()
        .domain([0, d3.max(fuelCounts, d => d[1])])
        .range([height - margin.bottom, margin.top]);

    svg.append("g")
        .attr("transform",
            `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));

    svg.append("g")
        .attr("transform",
            `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

    svg.selectAll("rect")
        .data(fuelCounts)
        .enter()
        .append("rect")
        .attr("x", d => x(d[0]))
        .attr("y", d => y(d[1]))
        .attr("width", x.bandwidth())
        .attr("height",
            d => height - margin.bottom - y(d[1]));

}

// garfik 7-9

function drawChart7(data) { }
function drawChart8(data) { }
function drawChart9(data) { }
