document.getElementById("ajax").addEventListener("click" , getAllEmployees)


function getAllEmployees(){

    const xhr = new XMLHttpRequest();
    

    xhr.open("GET","employees.json",true);

    xhr.onload = function(){
        let list = document.getElementById("employees");
        
        console.log(this)
        
        if(this.status == 200){
            const employees = JSON.parse(this.responseText)

            employees.forEach(function(employee){
                list.innerHTML += `
                
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>
                `;
                
            }
            
        )};
    }


    xhr.send();


}


//open fonksiyonuyla bağlantıyı kuruyoruz. Sonrasında get komutuyla 
//JSON dosyamızdan verileri almak istediğimizi söylüyoruz. Sonrasında
//verileri alacağımız dosya adını yazıyoruz ve en son true diyerek 
//bu işlemin asenkron olmasını istediğimiz söylüyoruz.
//sonrasında send fonksiyonu ile isteğimizi gönderiyoruz.

//Bizim response 'umuz geldiğince onload çalışmış olacak.
//Bize gelen değer string oluyor. Biz bunu JSON.parse ile bir array e 
//dönüştürüyoruz.