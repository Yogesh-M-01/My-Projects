let orders =
JSON.parse(localStorage.getItem("orders"))
|| [];

renderOrders();

function addOrder(){

    const customer =
    document.getElementById("customer").value;

    const food =
    document.getElementById("food").value;

    const amount =
    parseFloat(
        document.getElementById("amount").value
    );

    const status =
    document.getElementById("status").value;

    if(!customer || !food || !amount)
        return;

    orders.push({
        customer,
        food,
        amount,
        status
    });

    saveData();
    renderOrders();
}

function deleteOrder(index){

    orders.splice(index,1);

    saveData();
    renderOrders();
}

function saveData(){

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );
}

function renderOrders(){

    const search =
    document.getElementById("search")
    .value.toLowerCase();

    const container =
    document.getElementById("orderList");

    container.innerHTML="";

    let revenue = 0;

    orders
    .filter(order =>
        order.customer
        .toLowerCase()
        .includes(search)
    )
    .forEach((order,index)=>{

        revenue += order.amount;

        let cls="preparing";

        if(order.status==="Out For Delivery")
            cls="delivery";

        if(order.status==="Delivered")
            cls="delivered";

        container.innerHTML += `
        <div class="card">

        <h2>${order.customer}</h2>

        <p>🍔 ${order.food}</p>

        <p>₹${order.amount}</p>

        <p class="${cls}">
        ${order.status}
        </p>

        <button
        class="delete"
        onclick="deleteOrder(${index})">
        Delete
        </button>

        </div>
        `;
    });

    document.getElementById(
        "totalOrders"
    ).innerText = orders.length;

    document.getElementById(
        "revenue"
    ).innerText = `₹${revenue}`;
}
