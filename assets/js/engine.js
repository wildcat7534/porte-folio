function init() {
    titleProjectGetBoundingClientRect();
    onClickProjectBoxesShadowBoxesEffect();
   
}
init();

var gifLogo = document.getElementById('imgHeader');

function changeLogo() {
    gifLogo.src = "assets/pictures/misc/favicons/cat1t2.gif";
}
setInterval(changeLogo, 3000);

var buttonVersions = document.getElementById('buttonVersions');
buttonVersions.addEventListener('click', changeButton);

function changeButton() {
    buttonVersions.innerHTML = "Rabbits !!!";
    let body = document.querySelector('body');
    body.style.backgroundImage = "url('assets/pictures/littleRabbits.gif')";
    body.style.backgroundColor = "#2d573f";
    body.style.backgroundSize = "300px";
    body.style.color = "deeppink";
}

function projectBoxesOnTouch() {
    let box = document.getElementById('box');
    box.style.backgroundColor = "#2d573f";
    box.style.color = "#fff";
    box.style.border = "1px solid #fff";
    let descriptionProjectClass = document.getElementsByClassName('descriptionProject');
    for (let i = 0; i < descriptionProjectClass.length; i++) {
        descriptionProjectClass[i].style.display = "block";
        
    }
}

function titleProjectGetBoundingClientRect() {
    const projectBoxes = document.querySelectorAll('.projectBoxes');
    console.log(projectBoxes);
    for (projectBox of projectBoxes) {
        // On window resize recalculer le top négatif
        console.log(projectBox);
        const descriptionProject = projectBox.querySelector('.descriptionProject');
        const titleProject = projectBox.querySelector('.titleProject');
        const titleProjectDimensions = titleProject.getBoundingClientRect();
        let titleProjectHeight = titleProjectDimensions.height;
        console.log("titleProjectHeight : ", (titleProjectHeight + 18.72 + 19));
        
        projectBox.addEventListener('click', function () {
            descriptionProject.style.opacity = "1";
            descriptionProject.style.top = "-" + (titleProjectHeight + 18.72 + 29) + "px";
            descriptionProject.style.transition = "all 0.5s ease-in-out";
        });
    }
}

function onClickProjectBoxesShadowBoxesEffect() {
    let projectBoxes = document.querySelectorAll('.projectBoxes');
    console.log("project boxes : ", projectBoxes);
    for (let i = 0; i < projectBoxes.length; i++) {
        projectBoxes[i].addEventListener('click', function () {
            if (projectBoxes[i].style.boxShadow == "rgb(255 236 120) 0px 0px 11px 9px") {
                console.log("box shadow : ", projectBoxes[i].style.boxShadow);
                projectBoxes[i].style.boxShadow = "none";
            } else {
                projectBoxes[i].style.boxShadow = "rgb(255 236 120) 0px 0px 11px 9px";
            }
        });
    }
}


// projectsData = [{title: "labiby", description: "description", picture: "picture"}]
