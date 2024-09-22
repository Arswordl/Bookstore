

// Array of books
const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: "$10.99",
        image: "https://via.placeholder.com/100x150?text=The+Great+Gatsby",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: "$9.99",
        image: "https://via.placeholder.com/100x150?text=To+Kill+a+Mockingbird",
    },
    {
        title: "1984",
        author: "George Orwell",
        price: "$12.99",
        image: "https://via.placeholder.com/100x150?text=1984",
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        price: "$11.49",
        image: "https://via.placeholder.com/100x150?text=Moby+Dick",
    }
];

// Function to display books
function displayBooks() {
    const bookList = document.getElementById("book-list");

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book");

        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Price: ${book.price}</p>
            <button onclick="addToCart('${book.title}')">Add to Cart</button>
        `;

        bookList.appendChild(bookItem);
    });
}

// Function to handle 'Add to Cart' action
function addToCart(bookTitle) {
    alert(`${bookTitle} has been added to your cart!`);
}

// Load books when the page loads
window.onload = displayBooks;