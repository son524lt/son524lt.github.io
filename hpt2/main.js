function cal() {
  var a1t = document.getElementById('a1t').value;
  var a1m = document.getElementById('a1m').value;
  var b1t = document.getElementById('b1t').value;
  var b1m = document.getElementById('b1m').value;
  var c1t = document.getElementById('c1t').value;
  var c1m = document.getElementById('c1m').value;
  var a2t = document.getElementById('a2t').value;
  var a2m = document.getElementById('a2m').value;
  var b2t = document.getElementById('b2t').value;
  var b2m = document.getElementById('b2m').value;
  var c2t = document.getElementById('c2t').value;
  var c2m = document.getElementById('c2m').value;
  var a1 = Number(a1t)/Number(a1m);
  var b1 = Number(b1t)/Number(b1m);
  var c1 = Number(c1t)/Number(c1m);
  var a2 = Number(a2t)/Number(a2m);
  var b2 = Number(b2t)/Number(b2m);
  var c2 = Number(c2t)/Number(c2m);
  var D = a1*b2 - a2*b1;
  var Dx = c1*b2 - c2*b1;
  var Dy = a1*c2 - a2*c1;
  var x = Dx/D;
  var y = Dy/D;
  console.log(x,y);
  return false;
}
