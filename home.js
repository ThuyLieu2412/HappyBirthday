$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  if (userName == "BeLieuDeThuong" && pwd == "24122004") {
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "index.html";
    }, 2000);
  } else {
    alert("Wrong Password");
  }
});
