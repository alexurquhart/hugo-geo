if (!window.location.origin) {
	window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

$(document).ready(function() {
	var Start = Date.now();

	var width = $('#menu').outerWidth(true);
   	var height = $('#menu').outerHeight(true);
	var rotate = [10];
    var velocity = [0.001];

	var projection = d3.geo.orthographic()
		.scale(1000)
		.translate([250, height])
		.rotate([-80])
		.clipAngle(90)
		.precision(.1);

	var path = d3.geo.path()
		.projection(projection);

	var graticule = d3.geo.graticule();

	var svg = d3.select("#menu").insert("svg", "#menu-content")
		.attr("id", "menu-globe")
		.attr("width", width)
		.attr("height", height);

	svg.append("defs").append("path")
		.datum({type: "Sphere"})
		.attr("id", "sphere")
		.attr("d", path);

	svg.append("use")
		.attr("class", "stroke")
		.attr("xlink:href", "#sphere");

	svg.append("path")
		.datum(graticule)
		.attr("class", "graticule")
		.attr("d", path);

	d3.json(window.location.origin + "/js/world.json", function(error, world) {
		if (error) {
			return;
		}
		svg.insert("path", ".graticule")
			.datum(topojson.feature(world, world.objects.land))
			.attr("class", "land")
			.attr("d", path);

		svg.insert("path", ".graticule")
			.datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
			.attr("class", "boundary")
			.attr("d", path);
		
		var feature = svg.selectAll("path");

		d3.timer(function() {
			var dt = Date.now() - Start;
			projection.rotate([rotate[0] + velocity[0] * dt]);
			feature.attr("d", path);
		});
	});
	
	function updateWindow(){
		var w = $('#menu').outerWidth(true);
		var h = $('#menu').outerHeight(true);

		svg.attr("width", w).attr("height", h);
	}
	window.onresize = updateWindow;
});