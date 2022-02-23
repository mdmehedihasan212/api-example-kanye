const randomUser = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayRead(data))

}
randomUser()

const displayRead = (user) => {
    const buddyes = user.results;
    const buddyesDiv = document.getElementById('random-info');
    for (const buddye of buddyes) {
        console.log(buddye);
        const p = document.createElement('p');
        p.innerText = ` Name: ${buddye.name.title} ${buddye.name.first} ${buddye.name.last} || E-mail: ${buddye.email} || Phone: ${buddye.cell}
        `;
        buddyesDiv.appendChild(p);

    }
}
