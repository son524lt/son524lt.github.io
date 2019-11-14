  var A = [];
  var c = 0;
  var l = 0;
  var d = 0;
  var k = 0;
  var a = 0;
  var text = document.getElementById('kq').innerHTML;

  function add() {
    var b = document.getElementById('num').value;
    var e = Number(b);
    A.push(' '+e);
    n = A.length;
    document.getElementById('str').innerHTML =  A.toString();
    document.getElementById('appear1').className = "show";
    document.getElementById('appear2').className = "show";
    document.getElementById('num').value = "";
    return false;
  };

  function check() {
    document.getElementById('appear3').className = "show";
    n = A.length;
    c = 0; l = 0; d = 0; k = 0; a = 0;
    for (var i = 0; i < n; i++) {
      s = A[i]
      if (s % 2 == 0) {
        c ++;
      }
      else {
        l ++;
      }

      if (s == 0) {
        k ++
      } else {
        if (s > 0) {
          d ++
        } else {
          a ++
        }
      }
    };
  document.getElementById('kq').innerHTML = "Trong dãy có:<br><br>"+n.toString()+" số hạng<br>"+c.toString()+" số chẵn<br>"+l.toString()+" số lẻ<br>"+a.toString()+" số âm<br>"+d.toString()+" số dương<br>"+k.toString()+" số 0";
  };

  function del1() {
    A.shift();
    n = A.length;
    document.getElementById('str').innerHTML = A.toString();
    if (n==0) {
      document.getElementById('appear1').className = "hide";
      document.getElementById('appear2').className = "hide";
      document.getElementById('str').innerHTML = "(chưa có số)";
    }
  }

  function del2() {
    A.pop()
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
