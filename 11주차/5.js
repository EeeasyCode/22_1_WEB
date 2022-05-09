window.onload = () => {
  var clock = document.getElementById("clock");

  setInterval(() => {
    var now = new Date();
    clock.innerHTML = now.toString();
  }, 1000);
};
