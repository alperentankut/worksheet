function Storage(){

}

Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    localStorage.setItem("films",JSON.stringify(films));
}



//JSON.parse ile biz string olarak aldığımız değeri arraye çevirdik

Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if (localStorage.getItem("films") === null){
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle){

    let films = this.getFilmsFromStorage();
    //splice (arrayden element silmek için kullanılan fonksiyon)
    films.forEach(function(film,index){
        if (film.title === filmTitle) {
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
}