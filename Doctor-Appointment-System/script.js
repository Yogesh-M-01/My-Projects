let appointments =
JSON.parse(localStorage.getItem("doctorAppointments"))
|| [];

renderAppointments();

function bookAppointment(){

    const patient =
    document.getElementById("patientName").value;

    const doctor =
    document.getElementById("doctor").value;

    const date =
    document.getElementById("date").value;

    const time =
    document.getElementById("time").value;

    if(!patient || !doctor || !date){

        alert("Fill all fields");

        return;
    }

    appointments.push({
        patient,
        doctor,
        date,
        time
    });

    saveData();

    renderAppointments();

    document.getElementById("patientName").value="";
}

function deleteAppointment(index){

    appointments.splice(index,1);

    saveData();

    renderAppointments();
}

function saveData(){

    localStorage.setItem(
        "doctorAppointments",
        JSON.stringify(appointments)
    );
}

function renderAppointments(){

    const container =
    document.getElementById("appointmentList");

    container.innerHTML="";

    appointments.forEach((app,index)=>{

        const div =
        document.createElement("div");

        div.className="card";

        div.innerHTML=`
        <h3>${app.patient}</h3>

        <p> ${app.doctor}</p>

        <p>📅 ${app.date}</p>

        <p>⏰ ${app.time}</p>

        <button
        class="delete-btn"
        onclick="deleteAppointment(${index})">
        Cancel
        </button>
        `;

        container.appendChild(div);
    });
}
