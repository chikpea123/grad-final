function addLegend(colorScale) {
  const svg = d3.select("#map-svg");
  svg.select("defs").remove();
  svg.select("#legend-scale").remove();
  //Append a defs (for definition) element to your SVG
  var defs = svg.append("defs").attr("id", "defs");

  //Append a linearGradient element to the defs and give it a unique id
  var linearGradient = defs
    .append("linearGradient")
    .attr("id", "linear-gradient");

  //Horizontal gradient
  linearGradient
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%");

  //Draw the rectangle and fill with gradient

  linearGradient
    .selectAll("stop")
    .data(
      colorScale.ticks().map((t, i, n) => ({
        offset: `${(100 * i) / n.length}%`,
        color: colorScale(t),
      })),
    )
    .enter()
    .append("stop")
    .attr("offset", (d) => d.offset)
    .attr("stop-color", (d) => d.color);

  const offsetX = 600;
  const offsetY = 0;
  svg
    .append("rect")
    .attr("transform", `translate(${offsetX}, ${offsetY})`)
    .attr("width", 300)
    .attr("height", 10)
    .style("fill", "url(#linear-gradient)");

  let formatter = Intl.NumberFormat("en", { notation: "compact" });
  axisScale = d3
    .scaleLinear()
    .domain(colorScale.domain())
    .range([0, 300])
    .nice();
  axisBottom = (g) =>
    g.attr("class", `x-axis`).call(
      d3
        .axisBottom(axisScale)
        .tickSize(15)
        .tickFormat((d) => formatter.format(d)),
    );

  svg
    .append("g")
    .call(axisBottom)
    .attr("width", 300)
    .attr("transform", `translate(${offsetX}, ${offsetY})`)
    .attr("id", "legend-scale");
}
