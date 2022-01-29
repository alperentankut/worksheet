
const name = "Alperen Tankut";

const departmant = "Yazılım";

const salary = 5000;

// const a = "İsim: " + name + "\n" + "Departman: " + departmant + "\n" + "Maaş: " + salary + "\n";

// const a = `isim: ${name} \nDepartman: ${departmant} \nMaaş: ${salary}`; //Template literal ile yukarda bol artılı yazım şeklinden kurtulup
//daha sade bir biçimde istediğimiz formatta yazabildik.

// console.log(a);


// const html ="<ul>" + 
//             "<li>" + name + "</li>" + 
//             "<li>" + departmant + "</li>" +
//             "<li>" + salary + "</li>" +
//             "</ul>"

function a(){
    return "Deneme"
}

const html = `
        <ul>
            <li>${name}</li>
            <li>${departmant}</li>
            <li>${salary}</li>
            <li>${10 / 2}</li>
            <li>${a()}</li> 
        </ul>
`;
//bu süslü parantezlerin içinde javascript kodu da çalıştırabiliriz.

document.body.innerHTML = html;