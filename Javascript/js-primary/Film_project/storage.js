function Storage(){

}

Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    localStorage.setItem("films",JSON.stringify(films));
}



//JSON.parse ile biz string olarak aldığımız değeri arraye çevirdik

Storage.prototype.getFilmsFromStorage = function(){
    let film;

    if (localStorage.getItem("film") === null){
        film = [];
    }
    else {
        filmss = JSON.parse(localStorage.getItem("film"));
    }
    return film;
}