let vehicles =
JSON.parse(localStorage.getItem("vehicles"))
|| [];

const TOTAL_SLOTS = 20;

renderVehicles();

function parkVehicle(){

    const vehicleNo =
    document.getElementById("vehicleNo").value;

    if(!vehicleNo) return;

    if(vehicles.length >= TOTAL_SLOTS){

        alert("Parking Full");

        return;
    }

    vehicles.push({

        vehicleNo,

        slot:
        vehicles.length + 1,

        time:
        new Date().toLocaleString()
    });

    saveData();

    renderVehicles();

    document.getElementById("vehicleNo").value="";
}

function exitVehicle(index){

    vehicles.splice(index,1);

    saveData();

    renderVehicles();
}

function saveData(){

    localStorage.setItem(
        "vehicles",
        JSON.stringify(vehicles)
    );
}

function renderVehicles(){

    const search =
    document.getElementById("search")
    .value.toLowerCase();

    const container =
    document.getElementById("vehicleList");

    container.innerHTML="";

    document.getElementById(
        "availableSlots"
    ).innerText =
    TOTAL_SLOTS - vehicles.length;

    vehicles
    .filter(vehicle =>
        vehicle.vehicleNo
        .toLowerCase()
        .includes(search)
    )
    .forEach((vehicle,index)=>{

        const div =
        document.createElement("div");

        div.className="card";

        div.innerHTML=`
        <h3>${vehicle.vehicleNo}</h3>

        <p>Slot No:
        ${vehicle.slot}</p>

        <p>Entry Time:
        ${vehicle.time}</p>

        <button
        class="exit"
        onclick="exitVehicle(${index})">
        Exit
        </button>
        `;

        container.appendChild(div);
    });
}
