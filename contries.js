const countriesInfo = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
countriesInfo()
const displayCountries = (country) => {
    const countryDiv = document.getElementById('countrie');
    country.forEach(countries => {
        // console.log(countries);
        const div = document.createElement('div')
        div.classList.add('country')
        const h2 = document.createElement('h2');
        h2.innerText = countries.name;
        div.appendChild(h2)
        const h4 = document.createElement('h4');
        h4.innerText = countries.capital;
        div.appendChild(h4)
        countryDiv.appendChild(div)

    })
}