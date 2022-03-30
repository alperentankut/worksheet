document.querySelector("#change").addEventListener("click" , convert);

function convert (){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangerate.host/latest")

    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText)
            // console.log(this.responseText)

            const rate = response.rates.TRY
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = amount * rate
            // console.log(amount * rate);

        }
    }

    xhr.send();
}

//kendi server'ımızdan değil de uzaktaki bir serverdan (uzaktaki bir rest api)
//ye bağlanmaya çalışıcaz.
//Zaten bunun defaultu asenkron olduğu için true kullanmaya gerek yok.
//Number() ile bizim string değerimiz number a dönüşmüş oluyor.