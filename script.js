window.addEventListener("load", init);


var changeThemeButton = document.getElementById('theme-mode');
changeThemeButton.addEventListener('click', changeTheme);

function init(){
    console.log("init function execution ...");
    video = document.getElementById("bgvid");

}

function changeTheme(){
    var root = document.documentElement;
    root.classList.toggle("root-dark-mode");
}

