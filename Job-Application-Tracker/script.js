let applications =
JSON.parse(localStorage.getItem("applications"))
|| [];

renderApplications();

function addApplication(){

    const company =
    document.getElementById("company").value;

    const role =
    document.getElementById("role").value;

    const interviewDate =
    document.getElementById("interviewDate").value;

    const status =
    document.getElementById("status").value;

    if(!company || !role) return;

    applications.push({
        company,
        role,
        interviewDate,
        status
    });

    saveData();

    renderApplications();
}

function deleteApplication(index){

    applications.splice(index,1);

    saveData();

    renderApplications();
}

function saveData(){

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );
}

function renderApplications(){

    const search =
    document.getElementById("search")
    .value.toLowerCase();

    const container =
    document.getElementById("applicationList");

    container.innerHTML="";

    applications
    .filter(app =>
        app.company.toLowerCase().includes(search)
    )
    .forEach((app,index)=>{

        let cls="applied";

        if(app.status==="Interview Scheduled")
            cls="interview";

        if(app.status==="Selected")
            cls="selected";

        if(app.status==="Rejected")
            cls="rejected";

        container.innerHTML += `
        <div class="card">
            <h2>${app.company}</h2>
            <p>Role: ${app.role}</p>
            <p>Interview Date: ${app.interviewDate}</p>
            <p class="${cls}">
            ${app.status}
            </p>

            <button
            class="delete"
            onclick="deleteApplication(${index})">
            Delete
            </button>
        </div>
        `;
    });
}
