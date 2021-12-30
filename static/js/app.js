const searchBook = () => {
  const searchField = document.getElementById("serach-field");
  const searchText = searchField.value;
  //   console.log(searchText);
  //   searchField.value = "";
  const url = ` https://openlibrary.org/search.json?q=${searchText}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.docs));
};

const displaySearchResult = (books) => {
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  if (books.length == 0) {
    const inVaildName = document.getElementById("invalid-book-name");
    inVaildName.textContent = "";
    const h3 = document.createElement("h3");
    h3.innerText = "Please type a valid book name";
    inVaildName.appendChild(h3);
  } else {
    const showTotalBook = document.getElementById("total-book");
    showTotalBook.textContent = "";
    const p = document.createElement("p");
    const totalBook = books.length;
    p.innerText = `Total Book Found: ${totalBook}`;
    showTotalBook.appendChild(p);
    let cunt = 0;
    books.forEach((book) => {
      // console.log(book);
      cunt++;
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
        <div class="card h-80 m-5 bg-secondary text-white">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Book Name     : ${book.title}</h5>
            <h5 class="card-title">Author Name   : ${book.author_name}</h5>
            <h5 class="card-title">Publisher     : ${book.publisher}</h5>
            <h5 class="card-title">First Publish :${book.first_publish_year}</h5>
            <p class="text-right">Showing result ${cunt} of ${totalBook}</p>
            </div></div>`;
      searchResult.appendChild(div);
    });
  }
};
