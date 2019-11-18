var km =parseInt( prompt('quanti km devi percorrere?'));
console.log(km);
var anni = parseInt(prompt('quanti anni hai?'));
console.log(anni);
var prezzo = km * 0.21;
console.log(prezzo);
if (anni< 18){
  var scontominori = km * 0.168;
  console.log(scontominori);
}
else if (anni > 65) {
  var scontoargento = km * 0.126;
  console.log(scontoargento);

}
