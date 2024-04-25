// Initialize the container for buttons
var container = d3
  .select("#overlay")
  .append("div")
  .style("position", "absolute")
  .style("top", "0")
  .style("right", "0");

// Create data = list of groups
var allGroup = [
  { name: "Aruba", id: "ABW" },
    { name: "Africa Eastern and Southern", id: "AFE" },
    { name: "Afghanistan", id: "AFG" },
    { name: "Africa Western and Central", id: "AFW" },
    { name: "Angola", id: "AGO" },
    { name: "Albania", id: "ALB" },
    { name: "Andorra", id: "AND" },
    { name: "Arab World", id: "ARB" },
    { name: "United Arab Emirates", id: "ARE" },
    { name: "Argentina", id: "ARG" },
    { name: "Armenia", id: "ARM" },
    { name: "American Samoa", id: "ASM" },
    { name: "Antigua and Barbuda", id: "ATG" },
    { name: "Australia", id: "AUS" },
    { name: "Austria", id: "AUT" },
    { name: "Azerbaijan", id: "AZE" },
    { name: "Burundi", id: "BDI" },
    { name: "Belgium", id: "BEL" },
    { name: "Benin", id: "BEN" },
    { name: "Burkina Faso", id: "BFA" },
    { name: "Bangladesh", id: "BGD" },
    { name: "Bulgaria", id: "BGR" },
    { name: "Bahrain", id: "BHR" },
    { name: "Bahamas, The", id: "BHS" },
    { name: "Bosnia and Herzegovina", id: "BIH" },
    { name: "Belarus", id: "BLR" },
    { name: "Belize", id: "BLZ" },
    { name: "Bermuda", id: "BMU" },
    { name: "Bolivia", id: "BOL" },
    { name: "Brazil", id: "BRA" },
    { name: "Barbados", id: "BRB" },
    { name: "Brunei Darussalam", id: "BRN" },
    { name: "Bhutan", id: "BTN" },
    { name: "Botswana", id: "BWA" },
    { name: "Central African Republic", id: "CAF" },
    { name: "Canada", id: "CAN" },
    { name: "Central Europe and the Baltics", id: "CEB" },
    { name: "Switzerland", id: "CHE" },
    { name: "Channel Islands", id: "CHI" },
    { name: "Chile", id: "CHL" },
    { name: "China", id: "CHN" },
    { name: "Cote d'Ivoire", id: "CIV" },
    { name: "Cameroon", id: "CMR" },
    { name: "Congo, Dem. Rep.", id: "COD" },
    { name: "Congo, Rep.", id: "COG" },
    { name: "Colombia", id: "COL" },
    { name: "Comoros", id: "COM" },
    { name: "Cabo Verde", id: "CPV" },
    { name: "Costa Rica", id: "CRI" },
    { name: "Caribbean small states", id: "CSS" },
    { name: "Cuba", id: "CUB" },
    { name: "Curacao", id: "CUW" },
    { name: "Cayman Islands", id: "CYM" },
    { name: "Cyprus", id: "CYP" },
    { name: "Czechia", id: "CZE" },
    { name: "Germany", id: "DEU" },
    { name: "Djibouti", id: "DJI" },
    { name: "Dominica", id: "DMA" },
    { name: "Denmark", id: "DNK" },
    { name: "Dominican Republic", id: "DOM" },
    { name: "Algeria", id: "DZA" },
    { name: "East Asia & Pacific (excluding high income)", id: "EAP" },
    { name: "Early-demographic dividend", id: "EAR" },
    { name: "East Asia & Pacific", id: "EAS" },
    { name: "Europe & Central Asia (excluding high income)", id: "ECA" },
    { name: "Europe & Central Asia", id: "ECS" },
    { name: "Ecuador", id: "ECU" },
    { name: "Egypt, Arab Rep.", id: "EGY" },
    { name: "Euro area", id: "EMU" },
    { name: "Eritrea", id: "ERI" },
    { name: "Spain", id: "ESP" },
    { name: "Estonia", id: "EST" },
    { name: "Ethiopia", id: "ETH" },
    { name: "European Union", id: "EUU" },
    { name: "Fragile and conflict affected situations", id: "FCS" },
    { name: "Finland", id: "FIN" },
    { name: "Fiji", id: "FJI" },
    { name: "France", id: "FRA" },
    { name: "Faroe Islands", id: "FRO" },
    { name: "Micronesia, Fed. Sts.", id: "FSM" },
    { name: "Gabon", id: "GAB" },
    { name: "United Kingdom", id: "GBR" },
    { name: "Georgia", id: "GEO" },
    { name: "Ghana", id: "GHA" },
    { name: "Gibraltar", id: "GIB" },
    { name: "Guinea", id: "GIN" },
    { name: "Gambia, The", id: "GMB" },
    { name: "Guinea-Bissau", id: "GNB" },
    { name: "Equatorial Guinea", id: "GNQ" },
    { name: "Greece", id: "GRC" },
    { name: "Grenada", id: "GRD" },
    { name: "Greenland", id: "GRL" },
    { name: "Guatemala", id: "GTM" },
    { name: "Guam", id: "GUM" },
    { name: "Guyana", id: "GUY" },
    { name: "High income", id: "HIC" },
    { name: "Hong Kong SAR, China", id: "HKG" },
    { name: "Honduras", id: "HND" },
    { name: "Heavily indebted poor countries (HIPC)", id: "HPC" },
    { name: "Croatia", id: "HRV" },
    { name: "Haiti", id: "HTI" },
    { name: "Hungary", id: "HUN" },
    { name: "IBRD only", id: "IBD" },
    { name: "IDA & IBRD total", id: "IBT" },
    { name: "IDA total", id: "IDA" },
    { name: "IDA blend", id: "IDB" },
    { name: "Indonesia", id: "IDN" },
    { name: "IDA only", id: "IDX" },
    { name: "Isle of Man", id: "IMN" },
    { name: "India", id: "IND" },
    { name: "Not classified", id: "INX" },
    { name: "Ireland", id: "IRL" },
    { name: "Iran, Islamic Rep.", id: "IRN" },
    { name: "Iraq", id: "IRQ" },
    { name: "Iceland", id: "ISL" },
    { name: "Israel", id: "ISR" },
    { name: "Italy", id: "ITA" },
    { name: "Jamaica", id: "JAM" },
    { name: "Jordan", id: "JOR" },
    { name: "Japan", id: "JPN" },
    { name: "Kazakhstan", id: "KAZ" },
    { name: "Kenya", id: "KEN" },
    { name: "Kyrgyz Republic", id: "KGZ" },
    { name: "Cambodia", id: "KHM" },
    { name: "Kiribati", id: "KIR" },
    { name: "St. Kitts and Nevis", id: "KNA" },
    { name: "Korea, Rep.", id: "KOR" },
    { name: "Kuwait", id: "KWT" },
    { name: "Latin America & Caribbean (excluding high income)", id: "LAC" },
    { name: "Lao PDR", id: "LAO" },
    { name: "Lebanon", id: "LBN" },
    { name: "Liberia", id: "LBR" },
    { name: "Libya", id: "LBY" },
    { name: "St. Lucia", id: "LCA" },
    { name: "Latin America & Caribbean", id: "LCN" },
    { name: "Least developed countries: UN classification", id: "LDC" },
    { name: "Low income", id: "LIC" },
    { name: "Liechtenstein", id: "LIE" },
    { name: "Sri Lanka", id: "LKA" },
    { name: "Lower middle income", id: "LMC" },
    { name: "Low & middle income", id: "LMY" },
    { name: "Lesotho", id: "LSO" },
    { name: "Late-demographic dividend", id: "LTE" },
    { name: "Lithuania", id: "LTU" },
    { name: "Luxembourg", id: "LUX" },
    { name: "Latvia", id: "LVA" },
    { name: "Macao SAR, China", id: "MAC" },
    { name: "St. Martin (French part)", id: "MAF" },
    { name: "Morocco", id: "MAR" },
    { name: "Monaco", id: "MCO" },
    { name: "Moldova", id: "MDA" },
    { name: "Madagascar", id: "MDG" },
    { name: "Maldives", id: "MDV" },
    { name: "Middle East & North Africa", id: "MEA" },
    { name: "Mexico", id: "MEX" },
    { name: "Marshall Islands", id: "MHL" },
    { name: "Middle income", id: "MIC" },
    { name: "North Macedonia", id: "MKD" },
    { name: "Mali", id: "MLI" },
    { name: "Malta", id: "MLT" },
    { name: "Myanmar", id: "MMR" },
    { name: "Middle East & North Africa (excluding high income)", id: "MNA" },
    { name: "Montenegro", id: "MNE" },
    { name: "Mongolia", id: "MNG" },
    { name: "Northern Mariana Islands", id: "MNP" },
    { name: "Mozambique", id: "MOZ" },
    { name: "Mauritania", id: "MRT" },
    { name: "Mauritius", id: "MUS" },
    { name: "Malawi", id: "MWI" },
    { name: "Malaysia", id: "MYS" },
    { name: "North America", id: "NAC" },
    { name: "Namibia", id: "NAM" },
    { name: "New Caledonia", id: "NCL" },
    { name: "Niger", id: "NER" },
    { name: "Nigeria", id: "NGA" },
    { name: "Nicaragua", id: "NIC" },
    { name: "Netherlands", id: "NLD" },
    { name: "Norway", id: "NOR" },
    { name: "Nepal", id: "NPL" },
    { name: "Nauru", id: "NRU" },
    { name: "New Zealand", id: "NZL" },
    { name: "OECD members", id: "OED" },
    { name: "Oman", id: "OMN" },
    { name: "Other small states", id: "OSS" },
    { name: "Pakistan", id: "PAK" },
    { name: "Panama", id: "PAN" },
    { name: "Peru", id: "PER" },
    { name: "Philippines", id: "PHL" },
    { name: "Palau", id: "PLW" },
    { name: "Papua New Guinea", id: "PNG" },
    { name: "Poland", id: "POL" },
    { name: "Pre-demographic dividend", id: "PRE" },
    { name: "Puerto Rico", id: "PRI" },
    { name: "Korea, Dem. People's Rep.", id: "PRK" },
    { name: "Portugal", id: "PRT" },
    { name: "Paraguay", id: "PRY" },
    { name: "West Bank and Gaza", id: "PSE" },
    { name: "Pacific island small states", id: "PSS" },
    { name: "Post-demographic dividend", id: "PST" },
    { name: "French Polynesia", id: "PYF" },
    { name: "Qatar", id: "QAT" },
    { name: "Romania", id: "ROU" },
    { name: "Russian Federation", id: "RUS" },
    { name: "Rwanda", id: "RWA" },
    { name: "South Asia", id: "SAS" },
    { name: "Saudi Arabia", id: "SAU" },
    { name: "Sudan", id: "SDN" },
    { name: "Senegal", id: "SEN" },
    { name: "Singapore", id: "SGP" },
    { name: "Solomon Islands", id: "SLB" },
    { name: "Sierra Leone", id: "SLE" },
    { name: "El Salvador", id: "SLV" },
    { name: "San Marino", id: "SMR" },
    { name: "Somalia", id: "SOM" },
    { name: "Serbia", id: "SRB" },
    { name: "Sub-Saharan Africa (excluding high income)", id: "SSA" },
    { name: "South Sudan", id: "SSD" },
    { name: "Sub-Saharan Africa", id: "SSF" },
    { name: "Small states", id: "SST" },
    { name: "Sao Tome and Principe", id: "STP" },
    { name: "Suriname", id: "SUR" },
    { name: "Slovak Republic", id: "SVK" },
    { name: "Slovenia", id: "SVN" },
    { name: "Sweden", id: "SWE" },
    { name: "Eswatini", id: "SWZ" },
    { name: "Sint Maarten (Dutch part)", id: "SXM" },
    { name: "Seychelles", id: "SYC" },
    { name: "Syrian Arab Republic", id: "SYR" },
    { name: "Turks and Caicos Islands", id: "TCA" },
    { name: "Chad", id: "TCD" },
    { name: "East Asia & Pacific (IDA & IBRD countries)", id: "TEA" },
    { name: "Europe & Central Asia (IDA & IBRD countries)", id: "TEC" },
    { name: "Togo", id: "TGO" },
    { name: "Thailand", id: "THA" },
    { name: "Tajikistan", id: "TJK" },
    { name: "Turkmenistan", id: "TKM" },
    { name: "Latin America & the Caribbean (IDA & IBRD countries)", id: "TLA" },
    { name: "Timor-Leste", id: "TLS" },
    { name: "Middle East & North Africa (IDA & IBRD countries)", id: "TMN" },
    { name: "Tonga", id: "TON" },
    { name: "South Asia (IDA & IBRD)", id: "TSA" },
    { name: "Sub-Saharan Africa (IDA & IBRD countries)", id: "TSS" },
    { name: "Trinidad and Tobago", id: "TTO" },
    { name: "Tunisia", id: "TUN" },
    { name: "Turkiye", id: "TUR" },
    { name: "Tuvalu", id: "TUV" },
    { name: "Tanzania", id: "TZA" },
    { name: "Uganda", id: "UGA" },
    { name: "Ukraine", id: "UKR" },
    { name: "Upper middle income", id: "UMC" },
    { name: "Uruguay", id: "URY" },
    { name: "United States", id: "USA" },
    { name: "Uzbekistan", id: "UZB" },
    { name: "St. Vincent and the Grenadines", id: "VCT" },
    { name: "Venezuela, RB", id: "VEN" },
    { name: "British Virgin Islands", id: "VGB" },
    { name: "Virgin Islands (U.S.)", id: "VIR" },
    { name: "Viet Nam", id: "VNM" },
    { name: "Vanuatu", id: "VUT" },
    { name: "World", id: "WLD" },
    { name: "Samoa", id: "WSM" },
    { name: "Kosovo", id: "XKX" },
    { name: "Yemen, Rep.", id: "YEM" },
    { name: "South Africa", id: "ZAF" },
    { name: "Zambia", id: "ZMB" },
    { name: "Zimbabwe", id: "ZWE" }
];

// Initialize the button
var dropdownButton1 = container
  .append("select")
  .attr("id", "dropdown")
  .style("cursor", "pointer")
  .style("margin-top", "70px")
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
    return d.name;
  }) 
  .attr("title", function(d) {
      return d.name;
  })// text showed in the menu
  .attr("value", function (d) {
    return d.id;
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
  .attr("id", "compare")
  .text("Compare")
  .style("margin-top", "110px")
  .style("margin-right", "30px")
  .style("padding", "10px 20px") // Add padding for button
  .style("border", "none") // Add border for button
  .style("background-color", "rgb(35, 59, 59, 0.5)") // Add background color for button
  .style("color", "white")
  .style("font", "Lato")
  .style("border-radius", "7px")
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
  .append("button")
  .text("Select another country to compare")
  .style("font", "Lato")
  .style("margin-top", "50px")
  .style("background", "white")
  .style("border", "none")
  .style("margin-right", "30px");

var tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
