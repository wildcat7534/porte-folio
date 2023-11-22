var gifLogo = document.getElementById('imgHeader');

function changeLogo() {
    gifLogo.src = "assets/pictures/misc/favicons/cat1t2.gif";
}
setInterval(changeLogo, 3000);

var buttonVersions = document.getElementById('buttonVersions');

function changeButton() {
    buttonVersions.innerHTML = "Rabbits !!!";
    let body = document.querySelector('body');
    body.style.backgroundImage = "url('assets/pictures/littleRabbits.gif')";
    body.style.backgroundColor = "#2d573f";
    body.style.backgroundSize = "200px";
    body.style.color = "deeppink";
}
buttonVersions.addEventListener('click', changeButton);

