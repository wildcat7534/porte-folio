var gifLogo = document.getElementById('imgHeader');

function changeLogo() {
    gifLogo.src = "assets/pictures/misc/favicons/cat1t2.gif";
}
setInterval(changeLogo, 3000);

var buttonVersions = document.getElementById('buttonVersions');

function changeButton() {
    buttonVersions.innerHTML = "Rabbits !!!";
    let background = document.querySelector('body');
    background.style.backgroundImage = "url('assets/pictures/littleRabbits.gif')";
    background.style.backgroundColor = "#2d573f";
}
buttonVersions.addEventListener('click', changeButton);

