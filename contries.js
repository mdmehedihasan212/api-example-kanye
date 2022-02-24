const countriesInfo = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
countriesInfo()
const displayCountries = (country) => {
    const countryDiv = document.getElementById('countrie');
    country.forEach(countries => {
        console.log(countries);
        const div = document.createElement('div')
        div.innerHTML = `
            <h2>Country: ${countries.name}</h2>
        <h3><img src="${countries.flag}" height="150" width="250"></img> </h3>
        <h3>Capital: ${countries.capital}</h3>
        <h4>Population: ${countries.population}</h4>
        <button onclick="loadCountryDetails('${countries.name}')">Details</button>
        `;
        div.classList.add('country')
        // const h2 = document.createElement('h2');
        // h2.innerText = countries.name;
        // div.appendChild(h2)
        // const h4 = document.createElement('h4');
        // h4.innerText = countries.capital;
        // div.appendChild(h4)
        countryDiv.appendChild(div)

    })

}
const loadCountryDetails = name => {
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayElement(data[0]))
}
const displayElement = countri => {
    const countriDetails = document.getElementById('countri');
    countriDetails.innerHTML = `
    <h2>Countries Details</h2>
    <h4>Native Name: ${countri.nativeName}</h4>
    <h4>Region Name: ${countri.region}</h4>
    <h4>Sub-Region:${countri.subregion}</h4>
    <h4>Time-Zone:${countri.timezones}</h4> 
    `;
}