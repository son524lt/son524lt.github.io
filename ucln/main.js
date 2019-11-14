function add(i) {
  var demo = document.getElementById('num'+i).value;
  if (demo=="") {
    document.getElementById('res').innerHTML = "Hãy nhập số."
  } else {
    document.getElementById('num'+i).value = "";
    document.getElementById('in'+i).innerHTML = Number(demo);
    document.getElementById('back'+i).className = "show";
    document.getElementById('res').innerHTML = "";
  }
}

function sub() {
  if (document.getElementById('in0').innerHTML == "(chưa có số)") {
    document.getElementById('res').innerHTML = "Hãy nhập số thứ nhất."
  } else {
    if (document.getElementById('in1').innerHTML == "(chưa có số)") {
      document.getElementById('res').innerHTML = "Hãy nhập số thứ hai."
    } else {
  document.getElementById('del').className = "show";
  var a = document.getElementById('in0').innerHTML;
  var b = document.getElementById('in1').innerHTML;
  var m = Number(a);
  var n = Number(b);
  if (m > 0) {
  if (n > 0) {
    while (m != n) {
      if (m > n) {
        m=m-n;
      } else {
        n=n-m;
      }
    }
    document.getElementById('res').innerHTML = "Ước chung lớn nhất của " + a + " và " + b + " là " + m
  } else {
    document.getElementById('res').innerHTML = "Cả 2 số phải là số nguyên dương." + "<br> Vui lòng nhập lại !"
  }
} else {
  document.getElementById('res').innerHTML = "Cả 2 số phải là số nguyên dương." + "<br> Vui lòng nhập lại !"
}
document.getElementById('num0').value = "";
document.getElementById('num1').value = "";
}
}
return false;
}

function del() {
  document.getElementById('res').innerHTML = "<br>"
  document.getElementById('del').className = "hide"
}

function back(x) {
  document.getElementById('in'+x).innerHTML = "(chưa có số)";
  document.getElementById('back'+x).className = "hide";
}
