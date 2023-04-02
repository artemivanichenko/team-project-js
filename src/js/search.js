import { fetchCocktailsByName } from "./fetch-cocktails";
import { getDrinksMarkup, getErrorMarkup } from "./get-drinks-markup";

const searchForms = document.querySelectorAll('.search-form');
const contentResults = document.querySelector('#content-results');
const contentTitle = document.querySelector('#content-title');

const mainSearch = searchForms[0];
const mobSearch = searchForms[1];

mainSearch.addEventListener('submit', getCocktails);
mobSearch.addEventListener('submit', getCocktails);

mainSearch.addEventListener('input', () => {
  mobSearch.elements.search.value = mainSearch.elements.search.value;
});

mobSearch.addEventListener('input', () => {
  mainSearch.elements.search.value = mobSearch.elements.search.value;
});

function getCocktails(event) {
  event.preventDefault();
  const cocktailName = event.target.elements.search.value;

  contentTitle.innerHTML = 'Searching results..';
  contentResults.innerHTML = '';

  fetchCocktailsByName(cocktailName)
    .then(data => {
      contentTitle.innerHTML = 'Cocktails';
      contentResults.innerHTML = getDrinksMarkup(data);
    })
    .catch((error) => {
      contentTitle.innerHTML = error
      contentResults.innerHTML = getErrorMarkup()
    })
}