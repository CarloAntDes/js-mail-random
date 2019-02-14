var persone = ["carlo@gmail.com" ,
          "giovanni@gmail.com", "tizio@gmail.com",
          "marco@gmail.com", "francesco@gmail.com"];

var verifica = prompt("dimmi la tua mail");

var trovato = false;

for (var i = 0; i < persone.length; i++) {
  var persona = persone[i];

  if (persona == verifica) {
    // alert("mail confermata")
    trovato = true;
  }
}
if (trovato) {
  alert("trovato");
}

else {
  alert("non trovato");
}
