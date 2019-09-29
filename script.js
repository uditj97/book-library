let myLibrary = [];

const Book = function (author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

const addButton = document.querySelector('.addButton');

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not Read");
let fiftyShadesOfGray = new Book("50 Shades of Gray", "E.L.James", 116, "Not Read");
let theMagus = new Book("The Magus", "J.Fowles", 700, "Read");

let container = document.querySelector(".displayList");

function remove(i) {
    myLibrary.splice(i, 1);
    render(myLibrary);
}


container.addEventListener('click', (e) => {
    if (e.target.className == 'btn btn-danger') {
        remove((e.target.id));
    } else if (e.target.className == "col readClass") {
        if (e.target.innerHTML == "Not Read")
            e.target.innerHTML = "Read";
        else {
            e.target.innerHTML = "Not Read";
        }
    }
})


function render(myLibrary) {
    let listItem = document.querySelector('.displayList');
    listItem.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let addItem = document.createElement('div');
        addItem.classList.add("row", "content", "p-1", "m-2");
        for (let props in myLibrary[i]) {
            let data = document.createElement('div');
            data.classList.add("col");
            if (myLibrary[i][props] == "Read" || myLibrary[i][props] == "Not Read") {
                data.classList.add("readClass");
            }
            data.innerHTML = (myLibrary[i][props]);
            addItem.appendChild(data);
        }
        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add("col");

        let buttonElement = document.createElement('button');
        buttonElement.classList.add("btn", "btn-danger");
        buttonElement.setAttribute("id", i);
        buttonElement.innerHTML = "Delete";
        buttonContainer.appendChild(buttonElement);

        addItem.appendChild(buttonContainer);
        listItem.appendChild(addItem);
    }

}


function addBookToLibrary(author, title, pages, read) {
    let item = new Book(author, title, pages, read);
    myLibrary.push(item);
}

myLibrary.push(theHobbit, fiftyShadesOfGray, theMagus);
addBookToLibrary("Udit", "Blind Love", 29, "Read");

render(myLibrary);


addButton.addEventListener("click", function () {
    let bookName = document.getElementById("book-name").value;
    let bookAuthor = document.getElementById("author-name").value;
    let bookPages = document.getElementById("total-pages").value;
    let bookStatus = document.getElementById("read").value;

    let newBook = new Book(bookName, bookAuthor, bookPages, bookStatus);
    myLibrary.push(newBook);

    render(myLibrary);
});