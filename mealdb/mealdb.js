const loadFood = () => {
    const searchInput = document.getElementById('search-input');
    searchValu = searchInput.value;
    searchInput.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValu}`
    fetch(url)
        .then(search => search.json())
        .then(data => displayResult(data.meals))
}
const displayResult = result => {
    const searchResult = document.getElementById('search-result');
    result.forEach(values => {
        // console.log(values);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadDetails(${values.idMeal})" class="card">
                <img src="${values.strMealThumb}" height="250" width="200" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${values.strMeal}</h5>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}
const loadDetails = foodId => {
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
    console.log(meal);
    const displayMealResult = document.getElementById('display-maels');
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">See Cooking</a>
    </div>
    `;

    displayMealResult.appendChild(div)
}
