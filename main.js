var km =parseInt( prompt('quanti km devi percorrere?'));
console.log(km);

if (km) {
  console.log('dati corretti');
    var anni = parseInt(prompt('quanti anni hai?'));
    console.log(anni);
    if (anni) {
      var prezzo = km * 0.21;
      console.log(prezzo);
      if (anni< 18){
        var prezzo = km * 0.168;
        console.log(prezzo);
      }
      else if (anni > 65) {
        var prezzo = km * 0.126;
        console.log(prezzo);

    }document.getElementById('prezzo').innerHTML = prezzo;

} else {
  console.log('dati inesatti');
}
} else {
  console.log('dati inesatti');
}
