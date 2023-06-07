function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("page").style.filter = "blur(5px)";
}
  
function closeForm(element) {
    document.getElementById(element).style.display = "none";
    document.getElementById("page").style.filter = "blur(0px)";
}

function checkRoot() {
    let login = document.getElementById("login").value;
    let psw = document.getElementById("psw").value;
    closeForm("myForm");
    if ((login == "admin") && (psw == "admin")) {
            document.getElementById("newContent").style.display = "block";
            document.getElementById("page").style.filter = "blur(5px)";
    }
    else {
        alert("У вас нет доступа");
    }
 }