const loadFood = () => {
    const searchInput = document.getElementById('search-input');
    searchValu = searchInput.value;
    searchInput.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValu}`
    fetch(url)
        .then(search => search.json())
        .then(data => displayInput(data.meals))
}
const displayInput = meals => {
    console.log(meals);
    const searchResult = document.getElementById('search-result');
    const
}