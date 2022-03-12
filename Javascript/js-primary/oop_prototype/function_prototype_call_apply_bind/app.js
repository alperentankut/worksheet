//--Call-apply-bind function--

const obj1 = {
    number1:10,
    number2:20
};

const obj2 = {
    number1:30,
    number2:40
};

function addNumbers(number3,number4){
    
    
    console.log(this.number1 + this.number2 + number3 + number4);
}

// addNumbers(100,200);

// addNumbers.call(obj1,100,200);
// addNumbers.call(obj2,100,200);

// call metdodunun ilk argümanı olarak muhakkak bir obje göndermemiz gerekiyor.
// biz bu call metoduyla obj1 i yazdığımız zaman artık bu this window objesini
// değil de obj1 i gösterecek.

// addNumbers.apply(obj1,[100,200])

// Aralarındaki tek fark birinde direk değeri yazarken diğerinde array şeklinde
// gönderiyoruz.

//--Bind-- genelde eventlerde kullanılıyor. This'in karıştığı yerlerde de

function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
};

const copyFunc1 = getNumbersTotal.bind(obj1); //burda kopya bir fonksiyon yaptık

//bind ı call ve apply dan ayıran bir fark bunu istediğimiz yerde kullanabiliriz.
//call ve apply da direk fonksiyonu çağırıyoruz.

console.log(copyFunc1(100,200)); 

