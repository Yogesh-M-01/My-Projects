let products =
JSON.parse(localStorage.getItem("products"))
|| [];

renderProducts();

function addProduct(){

    const name =
    document.getElementById("productName").value;

    const quantity =
    parseInt(
    document.getElementById("quantity").value
    );

    const price =
    parseFloat(
    document.getElementById("price").value
    );

    if(!name || !quantity || !price){
        return;
    }

    products.push({
        name,
        quantity,
        price
    });

    saveData();

    renderProducts();

    document.getElementById("productName").value="";
    document.getElementById("quantity").value="";
    document.getElementById("price").value="";
}

function deleteProduct(index){

    products.splice(index,1);

    saveData();

    renderProducts();
}

function saveData(){

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );
}

function renderProducts(){

    const search =
    document.getElementById("search")
    .value.toLowerCase();

    const container =
    document.getElementById("productList");

    container.innerHTML="";

    products
    .filter(product =>
        product.name
        .toLowerCase()
        .includes(search)
    )
    .forEach((product,index)=>{

        const stockStatus =
        product.quantity < 10
        ? "Low Stock"
        : "In Stock";

        const stockClass =
        product.quantity < 10
        ? "low"
        : "good";

        const div =
        document.createElement("div");

        div.className="card";

        div.innerHTML=`
        <h2>${product.name}</h2>

        <p>Quantity:
        ${product.quantity}</p>

        <p>Price:
        ₹${product.price}</p>

        <p class="${stockClass}">
        ${stockStatus}
        </p>

        <button
        class="delete"
        onclick="deleteProduct(${index})">
        Delete
        </button>
        `;

        container.appendChild(div);
    });
}
