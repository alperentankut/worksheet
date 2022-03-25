const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody  = document.getElementsByClassName("card-body")[1];

//UI Objesini Başlatma

const ui = new UI();

//Storage Objesi Üretme

const storage = new Storage();

//Tüm Eventleri Yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit" , addFilm);
    document.addEventListener("DOMContentLoaded" , function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    cardBody.addEventListener("click" , deleteFilm)
}

function addFilm(e){
    
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        //Hata
        ui.displayMessage("Tüm alanları doldurun..." , "danger")
    }
    else {

        //Yeni Film

        const newFilm = new Film(title , director , url);

        ui.addFilmToUI(newFilm); //Arayüze film ekleme
        storage.addFilmToStorage(newFilm); //Storage a film ekleme
        ui.displayMessage("Film başarıyla eklendi.." , "success")

    }
    

    ui.clearInputs(titleElement,directorElement,urlElement);
    
    e.preventDefault();
    
    
}

function deleteFilm(e){
    
    if(e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target)
    }

}