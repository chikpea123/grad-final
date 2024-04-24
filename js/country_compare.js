// Initialize the container for buttons
var container = d3
  .select("#overlay")
  .append("div")
  .style("position", "absolute")
  .style("top", "0")
  .style("right", "0");

// Create data = list of groups
var allGroup = [
  "Aruba",
  "Africa Eastern and Southern",
  "Afghanistan",
  "Africa Western and Central",
  "Angola",
  "Albania",
  "Andorra",
  "Arab World",
  "United Arab Emirates",
  "Argentina",
  "Armenia",
  "American Samoa",
  "Antigua and Barbuda",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Burundi",
  "Belgium",
  "Benin",
  "Burkina Faso",
  "Bangladesh",
  "Bulgaria",
  "Bahrain",
  "Bahamas, The",
  "Bosnia and Herzegovina",
  "Belarus",
  "Belize",
  "Bermuda",
  "Bolivia",
  "Brazil",
  "Barbados",
  "Brunei Darussalam",
  "Bhutan",
  "Botswana",
  "Central African Republic",
  "Canada",
  "Central Europe and the Baltics",
  "Switzerland",
  "Channel Islands",
  "Chile",
  "China",
  "Cote d'Ivoire",
  "Cameroon",
  "Congo, Dem. Rep.",
  "Congo, Rep.",
  "Colombia",
  "Comoros",
  "Cabo Verde",
  "Costa Rica",
  "Caribbean small states",
  "Cuba",
  "Curacao",
  "Cayman Islands",
  "Cyprus",
  "Czechia",
  "Germany",
  "Djibouti",
  "Dominica",
  "Denmark",
  "Dominican Republic",
  "Algeria",
  "East Asia & Pacific (excluding high income)",
  "Early-demographic dividend",
  "East Asia & Pacific",
  "Europe & Central Asia (excluding high income)",
  "Europe & Central Asia",
  "Ecuador",
  "Egypt, Arab Rep.",
  "Euro area",
  "Eritrea",
  "Spain",
  "Estonia",
  "Ethiopia",
  "European Union",
  "Fragile and conflict affected situations",
  "Finland",
  "Fiji",
  "France",
  "Faroe Islands",
  "Micronesia, Fed. Sts.",
  "Gabon",
  "United Kingdom",
  "Georgia",
  "Ghana",
  "Gibraltar",
  "Guinea",
  "Gambia, The",
  "Guinea-Bissau",
  "Equatorial Guinea",
  "Greece",
  "Grenada",
  "Greenland",
  "Guatemala",
  "Guam",
  "Guyana",
  "High income",
  "Hong Kong SAR, China",
  "Honduras",
  "Heavily indebted poor countries (HIPC)",
  "Croatia",
  "Haiti",
  "Hungary",
  "IBRD only",
  "IDA & IBRD total",
  "IDA total",
  "IDA blend",
  "Indonesia",
  "IDA only",
  "Isle of Man",
  "India",
  "Not classified",
  "Ireland",
  "Iran, Islamic Rep.",
  "Iraq",
  "Iceland",
  "Israel",
  "Italy",
  "Jamaica",
  "Jordan",
  "Japan",
  "Kazakhstan",
  "Kenya",
  "Kyrgyz Republic",
  "Cambodia",
  "Kiribati",
  "St. Kitts and Nevis",
  "Korea, Rep.",
  "Kuwait",
  "Latin America & Caribbean (excluding high income)",
  "Lao PDR",
  "Lebanon",
  "Liberia",
  "Libya",
  "St. Lucia",
  "Latin America & Caribbean",
  "Least developed countries: UN classification",
  "Low income",
  "Liechtenstein",
  "Sri Lanka",
  "Lower middle income",
  "Low & middle income",
  "Lesotho",
  "Late-demographic dividend",
  "Lithuania",
  "Luxembourg",
  "Latvia",
  "Macao SAR, China",
  "St. Martin (French part)",
  "Morocco",
  "Monaco",
  "Moldova",
  "Madagascar",
  "Maldives",
  "Middle East & North Africa",
  "Mexico",
  "Marshall Islands",
  "Middle income",
  "North Macedonia",
  "Mali",
  "Malta",
  "Myanmar",
  "Middle East & North Africa (excluding high income)",
  "Montenegro",
  "Mongolia",
  "Northern Mariana Islands",
  "Mozambique",
  "Mauritania",
  "Mauritius",
  "Malawi",
  "Malaysia",
  "North America",
  "Namibia",
  "New Caledonia",
  "Niger",
  "Nigeria",
  "Nicaragua",
  "Netherlands",
  "Norway",
  "Nepal",
  "Nauru",
  "New Zealand",
  "OECD members",
  "Oman",
  "Other small states",
  "Pakistan",
  "Panama",
  "Peru",
  "Philippines",
  "Palau",
  "Papua New Guinea",
  "Poland",
  "Pre-demographic dividend",
  "Puerto Rico",
  "Korea, Dem. People's Rep.",
  "Portugal",
  "Paraguay",
  "West Bank and Gaza",
  "Pacific island small states",
  "Post-demographic dividend",
  "French Polynesia",
  "Qatar",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "South Asia",
  "Saudi Arabia",
  "Sudan",
  "Senegal",
  "Singapore",
  "Solomon Islands",
  "Sierra Leone",
  "El Salvador",
  "San Marino",
  "Somalia",
  "Serbia",
  "Sub-Saharan Africa (excluding high income)",
  "South Sudan",
  "Sub-Saharan Africa",
  "Small states",
  "Sao Tome and Principe",
  "Suriname",
  "Slovak Republic",
  "Slovenia",
  "Sweden",
  "Eswatini",
  "Sint Maarten (Dutch part)",
  "Seychelles",
  "Syrian Arab Republic",
  "Turks and Caicos Islands",
  "Chad",
  "East Asia & Pacific (IDA & IBRD countries)",
  "Europe & Central Asia (IDA & IBRD countries)",
  "Togo",
  "Thailand",
  "Tajikistan",
  "Turkmenistan",
  "Latin America & the Caribbean (IDA & IBRD countries)",
  "Timor-Leste",
  "Middle East & North Africa (IDA & IBRD countries)",
  "Tonga",
  "South Asia (IDA & IBRD)",
  "Sub-Saharan Africa (IDA & IBRD countries)",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkiye",
  "Tuvalu",
  "Tanzania",
  "Uganda",
  "Ukraine",
  "Upper middle income",
  "Uruguay",
  "United States",
  "Uzbekistan",
  "St. Vincent and the Grenadines",
  "Venezuela, RB",
  "British Virgin Islands",
  "Virgin Islands (U.S.)",
  "Viet Nam",
  "Vanuatu",
  "World",
  "Samoa",
  "Kosovo",
  "Yemen, Rep.",
  "South Africa",
  "Zambia",
  "Zimbabwe",
];

// Initialize the button
var dropdownButton1 = container
  .append("select")
  .style("cursor", "pointer")
  .style("margin-top", "25px")
  .style("margin-right", "20px")
  .style("border-radius", "20px") // Set border radius for rounded edges
  .style("border", "2px solid black")
  .style("padding", "5px"); // Set border style and thickness

// add the options to the button
dropdownButton1 // Add a button
  .selectAll("myOptions") // Next 4 lines add 6 options = 6 colors
  .data(allGroup)
  .enter()
  .append("option")
  .text(function (d) {
    return d;
  }) // text showed in the menu
  .attr("value", function (d) {
    return d;
  }); // corresponding value returned by the button

// Initialize the container for the second set of elements
var container2 = d3
  .select("#overlay")
  .append("div")
  .style("position", "absolute")
  .style("top", "0")
  .style("right", "0");

// Initialize the rectangular button
var rectangularButton = container2
  .append("button")
  .text("Compare")
  .style("margin-top", "70px")
  .style("margin-right", "30px")
  .style("padding", "10px 20px") // Add padding for button
  .style("border", "none") // Add border for button
  .style("background-color", "rgb(35, 59, 59, 0.5)") // Add background color for button
  .style("color", "white")
  .style("font", "Lato")
  .style("cursor", "pointer");

// Add click event to the rectangular button
rectangularButton.on("click", function (e) {
  var country1 = dropdownButton1.property("value");

  //TODO: initiate comparison
  console.log("compare");
});

// Initialize the container for the second set of elements
var container3 = d3
  .select("#overlay")
  .append("div")
  .style("position", "absolute")
  .style("top", "0")
  .style("right", "0");

var header = container3
  .append("text")
  .text("Select another country to compare")
  .style("font", "Lato")
  .style("margin-top", "70px")
  .style("margin-right", "30px");

var tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
