var A = [];
var B = [];
var alt;
var text = document.getElementById('kq');

function add() {
  var b = document.getElementById('num').value;
  var a = Number(b);
  A.push(' '+a);
  document.getElementById('str').innerHTML =  A.toString();
  document.getElementById('appear1').className = "show";
  document.getElementById('appear2').className = "show";
  document.getElementById('num').value = "";
  return false;
};

function sort() {
  n = A.length;
  B=A;
  while (n >= 2) {
    n--;
    for (var i = 0; i <= n ; i++) {
      if (B[i] - B[i+1] > 0) {
        alt = B[i];
        B[i] = B[i+1];
        B[i+1] = alt;
      }
    }
  }
  text.innerHTML = "Kết quả:" + B.toString();
  document.getElementById('appear3').className = "show";
}

function del1() {
  A.shift();
  show_hide();
}

function del2() {
  A.pop()
  show_hide();
}

function show_hide() {
  n = A.length;
  document.getElementById('str').innerHTML = A.toString();
  if (n==0) {
    document.getElementById('appear1').className = "hide";
    document.getElementById('appear2').className = "hide";
    document.getElementById('str').innerHTML = "(chưa có số)";
  }
}

function del3() {
  document.getElementById('kq').innerHTML = "";
  document.getElementById('appear3').className = "hide";
}
