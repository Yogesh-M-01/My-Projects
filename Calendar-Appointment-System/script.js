const calendar =
document.getElementById("calendar");

const monthYear =
document.getElementById("monthYear");

let currentDate = new Date();

let appointments =
JSON.parse(localStorage.getItem("appointments")) || {};

function renderCalendar(){

    calendar.innerHTML = "";

    let year =
    currentDate.getFullYear();

    let month =
    currentDate.getMonth();

    const firstDay =
    new Date(year,month,1).getDay();

    const daysInMonth =
    new Date(year,month+1,0).getDate();

    const monthNames = [
        "January","February","March",
        "April","May","June",
        "July","August","September",
        "October","November","December"
    ];

    monthYear.innerText =
    `${monthNames[month]} ${year}`;

    for(let i=0;i<firstDay;i++){

        let empty =
        document.createElement("div");

        empty.classList.add("empty");

        calendar.appendChild(empty);
    }

    for(let day=1;day<=daysInMonth;day++){

        let dateKey =
        `${year}-${month+1}-${day}`;

        let dayBox =
        document.createElement("div");

        dayBox.classList.add("day");

        if(appointments[dateKey]){
            dayBox.classList.add("booked");
        }

        dayBox.innerHTML =
        `<strong>${day}</strong>`;

        dayBox.onclick = ()=>{

            let name =
            prompt(
            "Enter Appointment Name"
            );

            if(name){

                appointments[dateKey] =
                name;

                localStorage.setItem(
                    "appointments",
                    JSON.stringify(appointments)
                );

                renderCalendar();
            }
        };

        calendar.appendChild(dayBox);
    }
}

function prevMonth(){

    currentDate.setMonth(
        currentDate.getMonth()-1
    );

    renderCalendar();
}

function nextMonth(){

    currentDate.setMonth(
        currentDate.getMonth()+1
    );

    renderCalendar();
}

renderCalendar();
