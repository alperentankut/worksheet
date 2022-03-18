const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//UI Objesini Başlatma

const ui = new UI();


//Tüm Eventleri Yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit" , addFilm);
}

function addFilm(e){
    
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        //Hata
    }
    else {

        //Yeni Film

        const newFilm = new Film(title , director , url);

        ui.addFilmToUI(newFilm); //Arrayüze film ekleme

    }
    
    
    
    e.preventDefault();
}