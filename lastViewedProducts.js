/*

Viimeksi katsotut tuotteet MyCashFlow -verkkokauppaan.

Tuotesivun sivupohjasta tulee löytyä #productpage -ID:llä varustettu elementti (esim. body)

.history -elementtiin tulostetaan tuotteet

/helpers/product-small -helperiä käytetään yksittäisen tuotteen tulostukseen.


*/



function sethistoryCookie() {

	/* Save last viewed products in a queue in cookies. FIFO, 4 slots */

	var newItem = $("#product-id").html();

	if (getCookie("hproducts") === "" || getCookie("hproducts") === "undefined") {
		var fifo = [];
	}
	else {
		var fifo = JSON.parse(getCookie("hproducts"));
	}

	for (var i = 0; i < fifo.length; i++) {
		if (fifo[i] == newItem) {
			return false;
		}
	}

	fifo.push(newItem);

	if (fifo.length > 6) {
		fifo.shift();
	}

	var stringified = JSON.stringify(fifo);
	setCookie("hproducts",stringified,356);
	
}


function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/; domain="+document.location.host+";";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) 
			return c.substring(name.length, c.length);
	}
	return "";
}


$(document).ready(function() {

	if ($("#productpage").length > 0) {
		sethistoryCookie();
	}

	// get last viewed
	if (getCookie("hproducts") != "") {
		
		var hproducts = {};
		hproducts = JSON.parse(getCookie("hproducts"));

		$.get('http://' + document.location.host + '/interface/Products', { limit : 6, id : hproducts[5] + '|' + hproducts[4] + '|' + hproducts[3] + '|' + hproducts[2] + '|' + hproducts[1] + '|' + hproducts[0], helper : '/helpers/product-small'}, function(data) {
			$('.history').html(data);
		});
	}
});