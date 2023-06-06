function mechat() {
    var mechattext = document.getElementById("mechatarea").value;
    document.getElementById("mechatarea").value = "";
    document.getElementById("mechat").innerHTML +=
      "<li>" + mechattext + "</li><br>";
    document.getElementById("herchat").innerHTML +=
      "<ul>" + mechattext + "</ul><br>";
  }

  function herchat() {
    var mechattext = document.getElementById("herchatarea").value;
    document.getElementById("herchatarea").value = "";
    document.getElementById("herchat").innerHTML +=
      "<li>" + mechattext + "</li><br>";
    document.getElementById("mechat").innerHTML +=
      "<ul>" + mechattext + "</ul><br>";
  }