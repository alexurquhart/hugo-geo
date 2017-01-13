/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

if (!window.location.origin) {
	window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

$(document).ready(function() {
	
	// Change all href links that go out of the origin to open in a new window
	// Relative links that start with /, #, or . (ie /post/my-post or ../post/my-post or #test)
	// should be untouched
	$("a").each(function(i, el) {
		var href = $(el).attr("href");
		
		if (typeof href === "string" && href.indexOf(window.location.origin) === -1 && "/.#".indexOf(href[0]) === -1) {
			$(el).attr("target", "_blank");
		}
	});
	
	// Wrap pygments tables in table-responsive classes
	// Credit to GitHub user dazinator
	// https://github.com/alexurquhart/hugo-geo/issues/17
	$( ".highlighttable" ).wrap("<div class='table-responsive'></div>");
	
	// Highlight all on load if highlighting
	if (typeof hljs !== "undefined") {
		hljs.initHighlightingOnLoad();
	}
	
	// If d3 is not loaded do not show the globe
	if (typeof d3 === "undefined") {
		return;
	}
	
	// Peace out if in a mobile browser
	if ($.browser.mobile) {
		return;	
	}
	
	// If you are hosting your site on say GitHub pages at the URL
	// "person.github.com/repo-name", loading the world.json file will
	// fail unless the script knows the base url it's calling from
	// In this example you can set window.baseURL in your template footer
	// and it will know the correct file path to load.
	// There's probably a better way but ¯\_(ツ)_/¯
	if (typeof window.baseURL === "undefined") {
		window.baseURL = window.location.origin;
	}
	
	// Load world json file
	d3.json(window.baseURL + "/js/world.json", function(error, world) {
		if (error) {
			return;
		}
		
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
			.precision(0.1);
	
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
		
		function updateWindow(){
			var w = $('#menu').outerWidth(true);
			var h = $('#menu').outerHeight(true);
	
			svg.attr("width", w).attr("height", h);
		}
		window.onresize = updateWindow;
	});
});