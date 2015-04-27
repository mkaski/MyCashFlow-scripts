/*

Tuoteryhmät hakutuloksiin MyCashFlow -verkkokaupan haussa.

Laita tämä scripti products.html -sivupohjaan ja lisää seuraavat html-tagit sivupohjaan:


<div class="category-result"></div>
<div class="categories-hidden"></div>

Vaihda scriptin store-muuttujan arvoksi kaupan osoite.

*/


<div class="category-result"></div>
<div class="categories-hidden"></div>

$(document).ready(function() {

	/* Get all categories with ajax to a hidden element */

	var store = "Kaupan URL-osoite tähän";

	$.get(store+'/interface/Categories',{show:'all',level:'4'}, function(data) {
		$(".categories-hidden").html(data);
	});
	
	/* Search categories */
	searchCategories();

});

/* 
Get category name from $.each <li> item's <a>'s text value 
Prints all matched categories to .category-result with link to category
Doesn't deal with keywords shorter than 3 chars
*/

function searchCategories() {

	var keyword = "{PageTitle}";
	keyword = keyword.substring(6).toLowerCase();
	if (keyword.length < 3 ) { return false }

		$("li").each(function() {
			var categoryName = $(this).find("a:first").text();
			var categoryUrl = $(this).find("a").attr("href");
			categoryName = categoryName.toLowerCase();
			if (categoryName.indexOf(keyword) >= 0) {
				$(".category-result").append("<a href=\"" + categoryUrl + "\">" + categoryName + "</a>");
			}
		});
}