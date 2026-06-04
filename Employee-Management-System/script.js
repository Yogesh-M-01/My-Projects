let employees =
JSON.parse(localStorage.getItem("employees"))
|| [];

renderEmployees();

function addEmployee(){

    const name =
    document.getElementById("name").value;

    const department =
    document.getElementById("department").value;

    if(!name) return;

    const employee = {

        id:
        "EMP" +
        Math.floor(
            Math.random()*10000
        ),

        name,
        department
    };

    employees.push(employee);

    saveData();

    renderEmployees();

    document.getElementById("name").value="";
}

function deleteEmployee(index){

    employees.splice(index,1);

    saveData();

    renderEmployees();
}

function saveData(){

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );
}

function renderEmployees(){

    const search =
    document.getElementById("search")
    .value
    .toLowerCase();

    const container =
    document.getElementById("employeeList");

    container.innerHTML="";

    employees
    .filter(emp=>
        emp.name
        .toLowerCase()
        .includes(search)
    )
    .forEach((emp,index)=>{

        const div =
        document.createElement("div");

        div.className="card";

        div.innerHTML=`
        <h3>${emp.name}</h3>

        <p>ID: ${emp.id}</p>

        <p>Department:
        ${emp.department}</p>

        <button
        class="delete-btn"
        onclick="deleteEmployee(${index})">
        Delete
        </button>
        `;

        container.appendChild(div);
    });
}
