let bookings =
JSON.parse(localStorage.getItem("cabBookings"))
|| [];

const drivers = [
    "Ramesh",
    "Suresh",
    "Kiran",
    "Manoj"
];

renderBookings();

function bookCab(){

    const customer =
    document.getElementById("customer").value;

    const pickup =
    document.getElementById("pickup").value;

    const drop =
    document.getElementById("drop").value;

    const distance =
    parseFloat(
        document.getElementById("distance").value
    );

    if(!customer || !pickup || !drop || !distance)
        return;

    const fare = distance * 15;

    const driver =
    drivers[
        Math.floor(
            Math.random()*drivers.length
        )
    ];

    bookings.push({
        customer,
        pickup,
        drop,
        distance,
        fare,
        driver,
        status:"Completed"
    });

    saveData();
    renderBookings();
}

function deleteBooking(index){

    bookings.splice(index,1);

    saveData();
    renderBookings();
}

function saveData(){

    localStorage.setItem(
        "cabBookings",
        JSON.stringify(bookings)
    );
}

function renderBookings(){

    const container =
    document.getElementById("bookingList");

    container.innerHTML="";

    let revenue = 0;

    bookings.forEach((trip,index)=>{

        revenue += trip.fare;

        container.innerHTML += `
        <div class="card">

        <h2>${trip.customer}</h2>

        <p>📍 ${trip.pickup}</p>

        <p>🏁 ${trip.drop}</p>

        <p>🚕 Driver: ${trip.driver}</p>

        <p>📏 ${trip.distance} KM</p>

        <p>💰 ₹${trip.fare}</p>

        <p class="completed">
        ${trip.status}
        </p>

        <button
        class="delete"
        onclick="deleteBooking(${index})">
        Delete
        </button>

        </div>
        `;
    });

    document.getElementById(
        "totalTrips"
    ).innerText = bookings.length;

    document.getElementById(
        "revenue"
    ).innerText = `₹${revenue}`;
}
