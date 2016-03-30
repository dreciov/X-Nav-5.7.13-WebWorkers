var resultado;

function buscarPrimos(num) {
  var n = 1;
  resultado = "";
  search: while (n<num) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    resultado += " " + n;
  }
}


self.addEventListener('message', function(e){
var num = e.data;
buscarPrimos(num);
self.postMessage(resultado);
})
