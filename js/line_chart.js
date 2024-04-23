// set the dimensions and margins of the graph
const margin = { top: 80, right: 30, bottom: 30, left: 60 },
  width = 530 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
//Read the data
function setData(id, country_code, location, title) {
  d3.select(id).selectAll("svg").remove();

  const svg = d3
    .select(id)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  d3.csv(
    `https://raw.githubusercontent.com/chikpea123/grad-final/main/dataset/${location}/${country_code}.csv`,

    // When reading the csv, I must format variables:
    function (d) {
      return {
        date: d3.timeParse("%Y")(d.date),
        value: d.val,
      };
    },
  ).then(
    // Now I can use this dataset:
    function (data) {
      // Add X axis --> it is a date format
      for (let i = data.length - 1; i >= 0; i--) {
        if (data[i].value === "nan") {
          data.splice(i, 1);
        }
      }
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data, function (d) {
            return d.date;
          }),
        )
        .range([0, width]);
      svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));

      // Add Y axis
      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, function (d) {
            return +d.value;
          }),
        ])
        .range([height, 0]);
      svg.append("g").call(d3.axisLeft(y));

      // Add the line
      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line()
            .x(function (d) {
              return x(d.date);
            })
            .y(function (d) {
              return y(d.value);
            }),
        );

      //add titles
      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", -15)
        .text(title);
    },
  );
}

//TODO: remove?
setData("#GDP", "ABW", "GDP", "GDP per capita");
setData("#Unemployment", "ABW", "Unemployment", "Unemployment Rate");
setData("#Literacy", "ABW", "Literacy", "Literacy Rate");
