window.onload = () => {
  var output = "";
  for (var i = 0; i < 10; i++) {
    output += "<h1> header <h1>";
  }
  document.body.innerHTML = output;
  // document.body.textContent = output;
};
