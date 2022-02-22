//Session ve local storage arasında şöyle bir fark var. Localdekiler tarayıcıyı veya oturumu kapatsak bile tarayıcının içerisinde saklanmaya
//devam eden verilerdir. Fakat Sessionda durum farklı. Tarayıcıyı veya oturumu kapattığımız zaman burdaki bilgiler de otomatik olarak
//silinmektedir.

//--Key ve value--

//Butonlar seçmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

//Inputları seçmek

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");


add.addEventListener("click" , addItem);
del.addEventListener("click" , deleteItem);
clear.addEventListener("click" , clearItems);

function addItem (e){
    sessionStorage.setItem(addkey.value , addvalue.value)

};

//Yukarıdaki fonksiyonumuz yazdığımız inputları session storage e ekleyecek.

function deleteItem (e){
    sessionStorage.removeItem(deletekey.value);

};

//Yukarıdaki fonksiyon silmemize yarıyor.

function clearItems (e){

    sessionStorage.clear();
};

