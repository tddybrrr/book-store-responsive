function generateBooks() {
    fetch('https://api.myjson.com/bins/udbm5')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var allBooks = data.books;

            var covers = allBooks.map(book => book.portada);
            var titles = allBooks.map(book => book.titulo);


            generateCover(covers, titles)
        });
}


function generateCover(arrayOfUrls, arrayOfTitles) {

    var allBooks = document.getElementById("allBooks")

    for (var i = 0; i < 24; i++) {

        var image = document.createElement("img")
        image.src = arrayOfUrls[i]

        var caption = document.createElement("p")
        caption.innerHTML = arrayOfTitles[i]

        var flipCard = document.createElement("div")
        flipCard.className = "flip-card"
        var flipCardInner = document.createElement("div")
        flipCardInner.className = "flip-card-inner"
        var flipCardFront = document.createElement("div")
        flipCardFront.className = "flip-card-front"
        var flipCardBack = document.createElement("div")
        flipCardBack.className = "flip-card-back"



        allBooks.appendChild(flipCard)
        flipCard.appendChild(flipCardInner)
        flipCardInner.appendChild(flipCardFront)
        flipCardInner.appendChild(flipCardBack)
        flipCardFront.appendChild(image)
        flipCardBack.appendChild(caption)

    }
}

generateBooks()
