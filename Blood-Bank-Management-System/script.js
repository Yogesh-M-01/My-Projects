let donors =
JSON.parse(localStorage.getItem("donors"))
|| [];

renderDonors();

function addDonor(){

    const name =
    document.getElementById("name").value;

    const bloodGroup =
    document.getElementById("bloodGroup").value;

    const contact =
    document.getElementById("contact").value;

    if(!name || !contact)
        return;

    donors.push({
        name,
        bloodGroup,
        contact
    });

    saveData();

    renderDonors();
}

function deleteDonor(index){

    donors.splice(index,1);

    saveData();

    renderDonors();
}

function saveData(){

    localStorage.setItem(
        "donors",
        JSON.stringify(donors)
    );
}

function renderDonors(){

    const search =
    document.getElementById("search")
    .value.toLowerCase();

    const container =
    document.getElementById("donorList");

    container.innerHTML="";

    donors
    .filter(donor =>
        donor.bloodGroup
        .toLowerCase()
        .includes(search)
    )
    .forEach((donor,index)=>{

        container.innerHTML += `
        <div class="card">

        <h2>${donor.name}</h2>

        <p>🩸 ${donor.bloodGroup}</p>

        <p>📞 ${donor.contact}</p>

        <button
        class="delete"
        onclick="deleteDonor(${index})">
        Delete
        </button>

        </div>
        `;
    });

    document.getElementById(
        "totalDonors"
    ).innerText = donors.length;
}
