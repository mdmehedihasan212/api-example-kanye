const randomUser = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => console.log(data))

}
randomUser()