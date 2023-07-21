function skillsmember() {
    var skills = document.getElementById("skills").value;
    var skillserror = document.getElementById("skillserror");

    if (skills == "") {
        skillserror.innerHTML = "Please enter your skills";
        return false;
    }
    else {
        skillserror.innerHTML = "";
        return true;
    }
}