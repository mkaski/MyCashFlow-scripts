# MyCashFlow-scripts

Saa käyttää, mut ei oo pakko.

##Tuoteryhmät hakutuloksiin MyCashFlow'n haussa
categoriesToSearch.js

Laita scripti search.html -sivupohjaan ja lisää seuraavat html-tagit:
```
<div class="category-result"></div>
<div class="categories-hidden"></div>
```
Vaihda scriptin store-muuttujan arvoksi kaupan osoite.
Tulokset tuostetaan .category-result -elementtiin.
.categories-hidden -elementtiin tulostetaan kaikki tuoteryhmät, joten se kannattaa piilottaa.

```
.categories-hidden {
  display:none;
}
```

##MyCashFlow Viimeksi katsotut tuotteet
lastViewedProducts.js

Tuotesivun sivupohjasta tulee löytyä #productpage -ID:llä varustettu elementti.
Viimeksi katsotut tuotteet tulostetaan .history -elementtiin.

/helpers/product-small -helperiä käytetään yksittäisen tuotteen tulostukseen.


