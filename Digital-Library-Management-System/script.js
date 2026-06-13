let books =
JSON.parse(localStorage.getItem("books"))
|| [];

renderBooks();

function addBook(){

    const bookName =
    document.getElementById("bookName").value;

    const author =
    document.getElementById("author").value;

    const category =
    document.getElementById("category").value;

    if(!bookName || !author) return;

    books.push({

        id:
        "BK" +
        Math.floor(
            Math.random()*10000
        ),

        bookName,
        author,
        category,

        status:"Available"
    });

    saveData();

    renderBooks();
}

function toggleStatus(index){

    books[index].status =
    books[index].status === "Available"
    ? "Issued"
    : "Available";

    saveData();

    renderBooks();
}

function saveData(){

    localStorage.setItem(
        "books",
        JSON.stringify(books)
    );
}

function renderBooks(){

    const search =
    document.getElementById("search")
    .value.toLowerCase();

    const container =
    document.getElementById("bookList");

    container.innerHTML="";

    books
    .filter(book =>
        book.bookName
        .toLowerCase()
        .includes(search)
    )
    .forEach((book,index)=>{

        const cls =
        book.status === "Available"
        ? "available"
        : "issued";

        container.innerHTML += `
        <div class="card">

            <h2>${book.bookName}</h2>

            <p>ID: ${book.id}</p>

            <p>Author: ${book.author}</p>

            <p>Category: ${book.category}</p>

            <p class="${cls}">
            ${book.status}
            </p>

            <button
            onclick="toggleStatus(${index})">
            Issue / Return
            </button>

        </div>
        `;
    });
}
