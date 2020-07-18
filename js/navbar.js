function myFunction() {
    let x = document.getElementById("navbar");
    if (x.className === "flex-nav") {
      x.className += " responsive";
    } else {
      x.className = "flex-nav";
    }
  }