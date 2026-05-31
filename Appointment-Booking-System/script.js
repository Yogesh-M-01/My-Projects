let appointments =
JSON.parse(localStorage.getItem("appointments")) || [];

renderAppointments();

function bookAppointment(){

    const name =
    document.getElementById("name").value;

    const date =
    document.getElementById("date").value;

    const time =
    document.getElementById("time").value;

    if(!name || !date || !time){
        alert("Please fill all fields");
        return;
    }

    appointments.push({
        name,
        date,
        time
    });

    saveData();
    renderAppointments();

    document.getElementById("name").value="";
    document.getElementById("date").value="";
    document.getElementById("time").value="";
}

function deleteAppointment(index){

    appointments.splice(index,1);

    saveData();
    renderAppointments();
}

function saveData(){

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );
}

function renderAppointments(){

    const container =
    document.getElementById("appointmentList");

    container.innerHTML="";

    appointments.forEach((appointment,index)=>{

        const div =
        document.createElement("div");

        div.className="card";

        div.innerHTML=`
        <h3>${appointment.name}</h3>
        <p> ${appointment.date}</p>
        <p> ${appointment.time}</p>

        <button
        class="delete-btn"
        onclick="deleteAppointment(${index})">
        Cancel
        </button>
        `;

        container.appendChild(div);
    });
}
