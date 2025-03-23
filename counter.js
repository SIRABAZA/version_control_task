var h4Counter = document.getElementById("increase");
var btnCounter = document.getElementById("btnCounter");

var counter = 0;

btnCounter.addEventListener("click", function () {
  counter++;
  h4Counter.innerHTML = `${counter}`;
});
