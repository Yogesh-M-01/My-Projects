let students =
JSON.parse(localStorage.getItem("students")) || [];

renderStudents();

function addStudent(){

    const name =
    document.getElementById("studentName").value;

    if(!name) return;

    students.push({
        name:name,
        present:0,
        absent:0
    });

    saveData();

    renderStudents();

    document.getElementById("studentName").value="";
}

function markPresent(index){

    students[index].present++;

    saveData();

    renderStudents();
}

function markAbsent(index){

    students[index].absent++;

    saveData();

    renderStudents();
}

function deleteStudent(index){

    students.splice(index,1);

    saveData();

    renderStudents();
}

function saveData(){

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}

function renderStudents(){

    const search =
    document.getElementById("search")
    .value.toLowerCase();

    const container =
    document.getElementById("studentList");

    container.innerHTML="";

    students
    .filter(student =>
        student.name
        .toLowerCase()
        .includes(search)
    )
    .forEach((student,index)=>{

        const total =
        student.present +
        student.absent;

        const percentage =
        total === 0
        ? 0
        : ((student.present/total)*100)
          .toFixed(1);

        const div =
        document.createElement("div");

        div.className="card";

        div.innerHTML=`
        <h2>${student.name}</h2>

        <p>Present: ${student.present}</p>

        <p>Absent: ${student.absent}</p>

        <p>Attendance: ${percentage}%</p>

        <button
        class="present"
        onclick="markPresent(${index})">
        Present
        </button>

        <button
        class="absent"
        onclick="markAbsent(${index})">
        Absent
        </button>

        <button
        class="delete"
        onclick="deleteStudent(${index})">
        Delete
        </button>
        `;

        container.appendChild(div);
    });
}
