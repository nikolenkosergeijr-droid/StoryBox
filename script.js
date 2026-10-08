const books = document.querySelectorAll(".book");

books.forEach((book) => {
    book.addEventListener("click", () => {

        const title = book.querySelector("h3").textContent;

        if (title === "The Little Fox") {
            window.location.href = "story.html";
        } else {
            alert(
                "📖 " +
                title +
                "\n\nThis story is coming soon! 🎬"
            );
        }

    });
});
