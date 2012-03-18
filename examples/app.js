var $ = require("../lib/jqNode").$;

$("/").get(function(request, response) { 
	$.writeFile("index.html");
});

$("/test").post(function(request, response, data) {
	console.log(data);
});

$("/sample").get(function(request, response) {
	$.redirect("/");
});

$.start({
	port: 8080
});
