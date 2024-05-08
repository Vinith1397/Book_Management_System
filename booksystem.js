let books=[];

function addbook(){
    const bookname=document.getElementById("bookname").value;
    const authorname=document.getElementById("authorname").value;
    const bookdescription=document.getElementById("bookdescription").value;
    const pagenumber=document.getElementById("pagenumber").value;

    if(bookname && authorname && bookdescription && !isNaN(pagenumber)){
        const book= {
              name : bookname,
              authorname : authorname,
              bookdescription:bookdescription,
              pagenumber : pagenumber
        };
        books.push(book);
        
    }else{

        alert('please fill in all fields');
    }

};

function searchbooks() {
    const searchTerm = document.getElementById('searchbook').value.toLowerCase();
    let results = books.filter(book =>
        book.name.toLowerCase().includes(searchTerm) ||
        book.authorname.toLowerCase().includes(searchTerm) ||
        book.bookdescription.toLowerCase().includes(searchTerm)
    );
    const booksDiv = results.map((book, index) => `
        <div class="book-display">
            <h3>Book Number: ${index + 1}</h3>
            <p><strong>Book Name:</strong> ${book.name}</p>
            <p><strong>Author Name:</strong> ${book.authorname}</p>
            <p><strong>Book Description:</strong> ${book.bookdescription}</p>
            <p><strong>No. of Pages:</strong> ${book.pagenumber}</p>
        </div>
    `).join('');

    document.getElementById('searchresults').innerHTML = booksDiv|| '<p>No books found matching the search criteria.</p>';
    clearInputs();
}


    function clearInputs() {
        document.getElementById('bookname').value = '';
        document.getElementById('authorname').value = '';
        document.getElementById('bookdescription').value = '';
        document.getElementById('pagenumber').value = '';}