var dado1 = Math.floor(Math.random() * 6) + 1;
var dado2 = Math.floor(Math.random() * 6) + 1;

if (dado1 > dado2) {
  alert("Dado 1 vince")
}

if (dado2 > dado1) {
  alert("Dado 2 vince")
}

if (dado1 == dado2) {
  alert("Pareggio")
}
