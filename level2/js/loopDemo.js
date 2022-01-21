function sayiUret(ustLimit = 20) {
    return Math.ceil(Math.random() * ustLimit)

};

for (a = 1; a <= 8; a++) {
    console.log(a + ". KOLON")
    for (i = 1; i <= 6; i++) {
        console.log(sayiUret())
    }
}













