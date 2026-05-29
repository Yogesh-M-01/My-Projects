function generateResume(){

    const name =
    document.getElementById("name").value;

    const role =
    document.getElementById("role").value;

    const about =
    document.getElementById("about").value;

    document.getElementById("resume").innerHTML =
    `
    <h1>${name}</h1>

    <h3>${role}</h3>

    <hr>

    <h2>About Me</h2>

    <p>${about}</p>
    `;
}
