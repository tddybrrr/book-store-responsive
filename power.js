function generateBooks() {
    fetch('https://api.myjson.com/bins/udbm5')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            var allBooks = data.books;
            var covers = allBooks.map(book => book.portada);
            var titles = allBooks.map(book => book.titulo);
            var abouts = allBooks.map(book => book.descripcion);

            generateCover(covers, titles, abouts)
        });
}

function generateCover(arrayOfUrls, arrayOfTitles, arrayOfAbouts) {

    var bookZone = document.getElementById("bookZone")

    for (var i = 0; i < arrayOfUrls.length; i++) {

        var image = document.createElement("img")
        image.src = arrayOfUrls[i]

        var title = document.createElement("h3")
        var caption = document.createElement("p")
        title.innerHTML = arrayOfTitles[i]
        caption.innerHTML = arrayOfAbouts[i]

        var flipCard = document.createElement("div")
        flipCard.className = "flip-card"
        flipCard.setAttribute("id", ("book" + i))
        var flipCardInner = document.createElement("div")
        flipCardInner.className = "flip-card-inner"
        var flipCardFront = document.createElement("div")
        flipCardFront.className = "flip-card-front"
        var flipCardBack = document.createElement("div")
        flipCardBack.className = "flip-card-back"

        bookZone.appendChild(flipCard)
        flipCard.appendChild(flipCardInner)
        flipCardInner.appendChild(flipCardFront)
        flipCardInner.appendChild(flipCardBack)
        flipCardFront.appendChild(image)
        flipCardBack.appendChild(title)
        flipCardBack.appendChild(caption)
    }
}

function bookSearch() {
    var descriptions = document.querySelectorAll("p")
    var titles = document.querySelectorAll("h3")
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    for (var i = 0; i < descriptions.length; i++) {
        if (descriptions[i].innerHTML.toUpperCase().indexOf(filter) > -1 || titles[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            document.getElementById("book" + i).style.display = "initial"
        } else {
            document.getElementById("book" + i).style.display = "none";
        }
    }
}


generateBooks()
