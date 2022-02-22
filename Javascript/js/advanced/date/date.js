let value ; 

const now = new Date(); //Şuanki tarihi almamızı sağlar.

const date1 = new Date ("4-22-1996 07:15:07"); //ay-gün-yıl şeklinde yazılıyor. İngiliz standardı.

const date2 = new Date ("April 22 1996");

value = date1;

value = date1.getMonth(); //Ocak 0. ay olarak kabul edilliyor. Kaçıncı ay olduğunu getiriyor
value = date1.getDate(); //ayın hangi günü olduğunu getirir
value = date1.getDay(); // Haftanın kaçıncı günü olduğunu söylüyor. Pazar 0. gün olarak kabul ediliyor.
value = date1.getHours(); //saat bilgisi.


date1.setMonth(7); //ayı değiştirmemizw yarıyor. Bu şekilde gün , ay , yıl , saat değerlerinin hepsini değiştirebiliriz.

value = date1


console.log(value);