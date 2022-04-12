class Sirket{
    constructor(personel_sayisi,personel_maasi,toplam_fatura,kira){
        this.personel_sayisi=personel_sayisi;
        this.personel_maasi=personel_maasi;
        this.toplam_fatura=toplam_fatura;
        this.kira=kira;
    }
    
}

const gider = new Sirket(5,4000,1000,4500)

console.log(gider.personel_maasi * gider.personel_sayisi + gider.toplam_fatura + gider.kira)
