document.addEventListener('DOMContentLoaded', function() {
    // Sample code to handle adding a book
    const addBookForm = document.querySelector('#add-book-form');

    addBookForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Fetch form data
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;

        // Process the form data (e.g., send it to a backend or update the UI)
        console.log('Book Added:', title, author);

        // Reset the form
        addBookForm.reset();
    });

    // Similar logic can be added for editing and removing books
});
