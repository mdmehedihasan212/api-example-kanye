const kanyeObject = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuat(data))
}

const displayQuat = (quote) => {
    const quoteElement = document.getElementById('quoat');
    quoteElement.innerText = quote.quote;

}