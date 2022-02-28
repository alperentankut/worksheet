const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");


//##Click eventi##

// title.addEventListener("click" , run);

//##Double click##

// title.addEventListener("dblclick" , run);

//##Mouse down##
// title.addEventListener("mousedown" , function(e){
//     console.log(e.type)
// });
//Mouse down efekti bastığımızda ve tuttuğumuzda oluşan bir event.

//##Mouse up##

//  title.addEventListener("mouseup" , function(e){
//      console.log(e.type)
//  });

//mouse up efekti de tıklamayı bıraktığımız an çalışan bir event.

//##Mouse over##

// title.addEventListener("mouseover" , function(e){
//     console.log(e.type)

// });

//Mouse over eventinde aynı div içindeki farkli elementlerde gezindiğimiz zamanda bu event oluşmaya devam edecek. Yani cardBodynin
//içerisinde farklı elementlere gittiğimiz zamanda bu event çalışacak.

//##Mouse out##

// title.addEventListener("mouseout" , function(e){
//     console.log(e.type)

// })

//##Mouse enter and mouse leave##

cardBody.addEventListener("mouseenter", function(e){

    console.log(e.type)
});

cardBody.addEventListener("mouseleave", function(e){

    console.log(e.type)
});

//Mouse enter eventi mouse over gibi elementin içindeki her elemente girip çıktığımızda çalışmıyor. 
//Bi kere elementimizin içine girince çalışıyor. Mouse leave de sadece elementin içinden çıkınca çalışıyor





    





