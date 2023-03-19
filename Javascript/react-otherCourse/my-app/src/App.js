import "./App.css";

function App() {
  const test = 34;
  const isAuth = true;
  return (
    <div className="App">
      <h4>{1+1}</h4>
      <h4>{"alperen".toUpperCase()}</h4>
      <h4>{test}</h4>
      <div>
      {  isAuth ? <p>Kullanıcı kayıtlı</p>
        : null
      }
      </div>

    </div> 
  );
}

export default App;

//jsx formatı sadece bir tane parent element dönebilir. Bu da genelde div olur
//htmlde kullandığımız bazı keywordler burda hata verebiliyor. Örneğin htmlde
//class olarak kullandığımız etiketi burda className olarak kullanmamız gerekiyor.
//Veya label etiketinde for değilde htmlFor olarak kullanmamız gerekiyor.
//zaten bunu yanlış kullandığımızda consol da hata olarak görebiliyoruz.
//Biz jsx formatında javascript ifadelerimizi yalnızca süslü parantez içinde
//yazabiliyoruz.