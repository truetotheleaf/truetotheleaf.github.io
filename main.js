function openSlideMenu() {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeSlideMenu() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function myFunction() {
    document.getElementById("article").style.overflowY = "scroll";
    document.getElementById("article").style.overflowX = 'scroll';
}

function validate() {
    var name = document.getElementById('name');
    var paddword = document.getElementById('password')

    if (name.value == "") {
        alert('Please enter your name')
        return false;
    }
    if (password.value == "") {
        alert('forgot password?')
        return false;
    }
}
