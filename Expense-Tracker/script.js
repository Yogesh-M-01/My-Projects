let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateUI() {
    const list = document.getElementById("list");
    const balance = document.getElementById("balance");

    list.innerHTML = "";

    let total = 0;

    transactions.forEach((t, index) => {
        total += t.amount;

        let li = document.createElement("li");
        li.innerHTML = `
            ${t.text} : ₹${t.amount}
            <button onclick="deleteTransaction(${index})">X</button>
        `;
        list.appendChild(li);
    });

    balance.innerText = total;
}

function addTransaction() {
    const text = document.getElementById("text").value;
    const amount = +document.getElementById("amount").value;

    if (text === "" || amount === 0) {
        alert("Enter valid data");
        return;
    }

    transactions.push({ text, amount });
    localStorage.setItem("transactions", JSON.stringify(transactions));

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";

    updateUI();
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    updateUI();
}

updateUI();
