//Set Timeout


// setTimeout(function(){
//     console.log("Naber")

// },2000);

//Yukarda 2000 değeri ms cinsinden.

let i = 0;

let value = setInterval(function(){
    i++;
    console.log("Sayı : " , i);
    
},1000);

//setIntervalde ise içerdeki fonksiyonu 1 saniye aralıklarla tekrar 
//tekrar çalıştır diyoruz.


//Clear Interval

//Yukardaki fonksiyonumuz durdurmazsak sonsuza kadar devam edecektir.
//durdurmak için bu fonksiyonu kullanıyoruz.

document.querySelector("#btn").addEventListener("click" , function(){
    clearInterval(value)
});

//Yukarda ıntervali durdurduk.