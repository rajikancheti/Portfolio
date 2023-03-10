document.addEventListener( "DOMContentLoaded", fetchBooks());
function fetchBooks() {
    fetch("https://upadhayay.github.io/db.json")
    .then(response => response.json())
    .then(data => createList(data));
}
function createList(data) {
    const booksContainer = document.getElementById('books');
    const mainUL = document.createElement('ol');
    mainUL.className = "books_list";
    for (let i = 0; i < data.books.length; i++) {
        const booksLi = document.createElement('li');
        const imageEle = document.createElement('img');
        const aTag = document.createElement('a');

        aTag.innerHTML = data.books[i].title + ' | ' + data.books[i].year;
        aTag.className = "books_link"
        imageEle.src = 'images/blogCard1.jpg';
        imageEle.className = "books_image";
        booksLi.className = 'books_card';
        booksLi.appendChild(imageEle);
        booksLi.appendChild(aTag);
        mainUL.appendChild(booksLi);
    }
    booksContainer.appendChild(mainUL)
}