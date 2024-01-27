function Signin() {
    var log= document.getElementById("signin");
    var reg = document.getElementById("signup");
    if (log.style.display === "none") {
      log.style.display = "block";
      reg.style.display = "none";
    } else {
      log.style.display = "none";
    }
  }

  function Signup() {
    var log= document.getElementById("signin");
    var reg = document.getElementById("signup");
    if (reg.style.display === "none") {
      reg.style.display = "block";
      log.style.display = "none";
    } else {
      reg.style.display = "none";
    }
  }
  