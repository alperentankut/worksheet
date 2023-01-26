//##Spread Operator##


// const langs = ["Python" , "C++" , "Java" , "Php"];

//Bunları aralarında bir boşluk bırakacak şekilde yazmak istersek aşağıdaki
//gibi yazıyoruz.

// console.log(langs[0],langs[1],langs[2],langs[3]);


// console.log(...langs) //Burada spread operatörüyle kısa yoldan yazdık.

// const langs2 = ["Javascript" , "C#" , langs[0],langs[1],langs[2],langs[3]];

// const langs2 = ["Javascript" , "C#" , ...langs];


//Kısa yoldan yukarıdaki gibi yazabiliriz.

// console.log(langs2);

// const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b,...numbers2] = numbers;

// console.log(a,b);
// console.log(numbers2);

const addNumbers = (a,b,c) => console.log(a+b+c);

const numbers = [100,200,300];

addNumbers(numbers[0],numbers[1],numbers[2]);

//Eski yöntemle yukarıdaki gibi yazabiliriz.

addNumbers(...numbers); //Bu şekilde daha kısa yazmış olduk.



