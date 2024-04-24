// set the dimensions and margins of the graph
const margin = { top: 80, right: 30, bottom: 80, left: 110 },
  width = 580 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
//Read the data
function setData(id, country_code, location, title) {
  d3.select(id).selectAll("svg").remove();
  let formatter = Intl.NumberFormat("en", { notation: "compact" });

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

      svg
        .append("g")
        .call(d3.axisLeft(y).tickFormat((d) => formatter.format(d)));
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

      // create a tooltip
      let tooltip = d3
        .select(id)
        .append("div")
        .style("opacity", 0)
        .attr("class", "chart_tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("position", "absolute");

      function vw(percent) {
        var w = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0,
        );
        return (percent * w) / 100;
      }

      function calcHeight() {
        console.log(document.getElementById("overlay").scrollTop);
        return document.getElementById("overlay").scrollTop;
      }
      // Three function that change the tooltip when user hover / move / leave a cell
      let mouseover = function (d) {
        tooltip.style("opacity", 1).style("display", "block");
        d3.select(this).style("stroke", "black").style("opacity", 1);
        console.log(calcHeight());
      };
      let mousemove = function (event, d) {
        tooltip
          .html(
            "y: " +
              formatter.format(d.value) +
              "<br/>" +
              "x: " +
              d.date.getFullYear(),
          )
          .style("left", event.clientX - vw(20) + 50 + "px")
          .style("top", event.clientY + calcHeight() + "px");
      };
      let mouseleave = function (d) {
        tooltip.style("opacity", 0).style("display", "none");
        d3.select(this).style("stroke", "none");
      };

      svg
        .selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("r", 3)
        .attr("fill", "steelblue")
        .attr("stroke", "steelblue")
        .attr("cx", function (d) {
          return x(d.date);
        })
        .attr("cy", function (d) {
          return y(d.value);
        })
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);

      //add titles
      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", -15)
        .attr("text-anchor", "middle")
        .text(title + " vs " + "Year");

      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height + 50)
        .attr("text-anchor", "middle")
        .text("Year");

      svg
        .append("text")
        .attr("y", -50)
        .attr("x", (-1 * height) / 2)
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .text(title);
    },
  );
}

//TODO: remove?
/*setData("#GDP", "ABW", "GDP", "GDP per capita");
setData("#Unemployment", "ABW", "Unemployment", "Unemployment Rate");
setData("#Literacy", "ABW", "Literacy", "Literacy Rate");
*/
