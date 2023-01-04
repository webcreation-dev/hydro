/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartmap", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Orthographic();
chart.panBehavior = "rotateLongLat";
chart.deltaLatitude = -20;
chart.padding(20,20,20,20);

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;
//polygonSeries.include = ["BR", "UA", "MX", "CI"];

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("green");
polygonTemplate.stroke = am4core.color("#000033");
polygonTemplate.strokeWidth = 0.5;
polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
polygonTemplate.url = "https://www.datadrum.com/main.php?package={id}";
polygonTemplate.urlTarget = "_blank";

var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
graticuleSeries.mapLines.template.line.stroke = am4core.color("red");
graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
graticuleSeries.fitExtent = false;


chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("red");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

let animation;
setTimeout(function(){
  animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
}, 3000)

chart.seriesContainer.events.on("down", function(){
//  animation.stop();
})





var mapdiv = am4core.create("map", am4maps.MapChart);

// Set map definition
mapdiv.geodata = am4geodata_worldLow;

// Set projection
mapdiv.projection = new am4maps.projections.Orthographic();
mapdiv.panBehavior = "rotateLongLat";
mapdiv.deltaLatitude = -20;
mapdiv.padding(20,20,20,20);

// Create map polygon series
var polygonSeries = mapdiv.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;
//polygonSeries.include = ["BR", "UA", "MX", "CI"];

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("green");
polygonTemplate.stroke = am4core.color("#000033");
polygonTemplate.strokeWidth = 0.5;
polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
polygonTemplate.url = "https://www.datadrum.com/main.php?package={id}";
polygonTemplate.urlTarget = "_blank";

var graticuleSeries = mapdiv.series.push(new am4maps.GraticuleSeries());
graticuleSeries.mapLines.template.line.stroke = am4core.color("red");
graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
graticuleSeries.fitExtent = false;


mapdiv.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
mapdiv.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("red");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = mapdiv.colors.getIndex(0).brighten(-0.5);

let animatio;
setTimeout(function(){
  animatio = mapdiv.animate({property:"deltaLongitude", to:100000}, 20000000);
}, 3000)

mapdiv.seriesContainer.events.on("down", function(){
//  animation.stop();
})