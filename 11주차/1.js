window.onload = () => {
  var headers = document.querySelectorAll("h1");
  for (var i = 0; i < headers.length; i++) {
    const header = headers[i];
    var info = headers[i].textContent;
    if (i == 0) {
      header.style.color = "orange";
      header.style.background = "red";
      header.innerHTML = "h1";
    } else if (i == 1) {
      header.style.color = "blue";
      header.style.background = "aqua";
      header.innerHTML = "h2";
    } else {
      header.style.color = "white";
      header.style.background = "black";
      header.innerHTML = "h3";
    }
    alert(info);
  }
};
