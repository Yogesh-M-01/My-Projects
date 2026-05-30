let balance =
parseFloat(localStorage.getItem("balance")) || 0;

let transactions =
JSON.parse(localStorage.getItem("transactions")) || [];

updateUI();

function deposit(){

    let amount =
    parseFloat(document.getElementById("amount").value);

    if(isNaN(amount) || amount <= 0){
        alert("Enter valid amount");
        return;
    }

    balance += amount;

    transactions.unshift(
        `Deposited ₹${amount}`
    );

    saveData();
    updateUI();
}

function withdraw(){

    let amount =
    parseFloat(document.getElementById("amount").value);

    if(isNaN(amount) || amount <= 0){
        alert("Enter valid amount");
        return;
    }

    if(amount > balance){
        alert("Insufficient Balance");
        return;
    }

    balance -= amount;

    transactions.unshift(
        ` Withdrawn ₹${amount}`
    );

    saveData();
    updateUI();
}

function saveData(){

    localStorage.setItem(
        "balance",
        balance
    );

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

function updateUI(){

    document.getElementById("balance")
    .innerText = `₹${balance}`;

    const list =
    document.getElementById("transactions");

    list.innerHTML = "";

    transactions.forEach(item=>{

        let li =
        document.createElement("li");

        li.innerText = item;

        list.appendChild(li);
    });

    document.getElementById("amount").value="";
}
