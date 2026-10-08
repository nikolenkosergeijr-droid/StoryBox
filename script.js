const books = document.querySelectorAll(".book");

books.forEach((book) => {
    book.addEventListener("click", () => {
        const title = book.querySelector("h3").textContent;

        alert("📖 You selected: " + title + "\n\nThe story player will be added soon! 🎬");
    });
});
