var displayBox = document.getElementById ("box");

function show(number) {
  displayBox.value += number;
}

function clrs(){
  displayBox.value = " ";
}

function del(){
  displayBox.value = displayBox.value.slice(0,-1);
}

function calculate(){
  var a = displayBox.value;
   var b = eval(a);
   displayBox.value = b;
}