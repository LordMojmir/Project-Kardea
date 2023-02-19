function loadCard(title, content, img){

    result = `
    <div class="col-md-12 mb-sm-12 m-3">
    <div class="card bg-light text-dark h-100">
        <div class="card-body ">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class=""> 
                            <img src="${img}"
                                alt="img not loaded" width="100%">
                        </div>
                    </div>
                    <div class="col-md-9">
                        <h3 class="card-title text-center mb-3">${title}</h3>
                        <p class="card-text">${content}</p>
                        <div class="text-center">
                        <a href="${title}.html" class="btn btn-dark" style="color: #fff; border-color: transparent;">
                            Mehr Erfahren
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    cardContant.innerHTML += result;
}
function onLoaded() {
    loadCard("Praktikum", "Freiwelliges und Pflichtpraktikum", "https://th.bing.com/th/id/OIP.sWSPghjzvfUYfQpqXbo37wHaIo?pid=ImgDet&rs=1")
    loadCard("Sommerjob", "Eine kurze Arbeitsperiode über die Sommerferien ", "https://th.bing.com/th/id/OIP.sWSPghjzvfUYfQpqXbo37wHaIo?pid=ImgDet&rs=1")
    loadCard("Nebenjob", "Eine Nebentätigkeit neben deiner Ausbildung", "https://th.bing.com/th/id/OIP.sWSPghjzvfUYfQpqXbo37wHaIo?pid=ImgDet&rs=1")
    loadCard("Aushilfsarbeit", "Erledige kleinere Aufgaben für etwas Geld. ", "https://th.bing.com/th/id/OIP.sWSPghjzvfUYfQpqXbo37wHaIo?pid=ImgDet&rs=1")
}

window.addEventListener('load', onLoaded);

