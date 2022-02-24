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
                    <p class="card-text">${values.strMeal}</p>
                    <p class="card-text">${values.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}
const loadDetails = foodId => {
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
    const displayMealResult = document.getElementById('display-maels');
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
    <div class="col-md-4">
    <img src="" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
</div>
    `;

    displayMealResult.appendChild(div)
}
