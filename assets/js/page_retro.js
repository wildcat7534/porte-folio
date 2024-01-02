function init() {
    //titleProjectGetBoundingClientRect();
    onClickProjectBoxesShadowBoxesEffect();
    podcastsPictures();
   
}
init();

//......................................................//
/////////////////////page RETRO///////////////////////////
//......................................................//
var debugWidth = document.querySelector('#debugWidth');
debugWidth.innerHTML = "_w " +window.innerWidth;
var gifLogo = document.getElementById('imgHeader');

if ((buttonVersions = document.getElementById('buttonVersions')) != null) {
    var buttonVersions = document.getElementById('buttonVersions');
    buttonVersions.addEventListener('click', changeButton);
}
function changeButton() {
    buttonVersions.innerHTML = "Rabbits !!!";
    let body = document.querySelector('body');
    body.style.backgroundImage = "url('assets/pictures/littleRabbits.gif')";
    body.style.backgroundColor = "#2d573f";
    body.style.backgroundSize = "300px";
    body.style.color = "deeppink";
}
function projectBoxesOnTouch() {
    let box = document.getElementById('projetBox');
    box.style.backgroundColor = "#2d573f";
    box.style.color = "#fff";
    box.style.border = "1px solid #fff";
    let descriptionProjectClass = document.getElementsByClassName('descriptionProject');
    for (let i = 0; i < descriptionProjectClass.length; i++) {
        descriptionProjectClass[i].style.display = "block";
    }
}
var projectBoxesActived = false;
var clickDetail = 0;
// function titleProjectGetBoundingClientRect() {
//     const projectBoxes = document.querySelectorAll('.projectBoxes');
//     for (projectBox of projectBoxes) {
//         // On window resize recalculer le top négatif
//         const descriptionProject = projectBox.querySelector('.descriptionProject');
//         const titleProject = projectBox.querySelector('.titleProject');
//         const titleProjectDimensions = titleProject.getBoundingClientRect();
//         let titleProjectHeight = titleProjectDimensions.height;
//         //console.log("titleProjectHeight : ", (titleProjectHeight + 18.72 + 19));
//         projectBox.addEventListener('click', function () {
//             let para = this.querySelector('p');
            
//             if ( clickDetail == 0 && projectBoxesActived == false ) {
//                 projectBoxesActived = true;
//                 descriptionProject.style.transition = "all 0.5s ease-in-out";
//                 titleProject.style.transition = "all 1s ease-in-out";
//                 descriptionProject.style.opacity = "1";
//                 titleProject.style.opacity = "1";
//                 descriptionProject.style.top = "-" + (titleProjectHeight + 18.72 + 29) + "px";
//                 clickDetail++;
//                 console.log("if : ", clickDetail, " et " , projectBoxesActived);
//             }
//             else if (clickDetail == 1 && projectBoxesActived == true) {
//                 console.log("else if : ", clickDetail, " et " , projectBoxesActived);
//                 divTextProjet2.style.zIndex = "10";
//                 divTextProjet2.style.overflow = "unset";
//                 para.style.backgroundColor = "black";
//                 para.style.visibility = "visible";
//                 console.log("else if : this : ", this, "this.p : ", para);
//                 clickDetail++;
                
//             }
//             else {
//                 para.style.visibility = "hidden";
//                 console.log("else : ", clickDetail, " et " , projectBoxesActived);
//                 projectBoxesActived = false;
//                 descriptionProject.style.transition = "all 0.5s ease-in-out";
//                 titleProject.style.transition = "all 1s ease-in-out";
//                 descriptionProject.style.opacity = "0";
//                 titleProject.style.opacity = "0";
//                 descriptionProject.style.top = "0px";
//                 clickDetail = 0;
//                 console.log("else ");
//             }
//         });
//     }
// }
class Boxe {
    constructor(title, description, picture) {
        this.title = title;
        this.description = description;
        this.picture = picture;
    }
}

function onClickProjectBoxesShadowBoxesEffect() {
  let projectBoxes = document.querySelectorAll('.projectImages');
  console.log("project boxes : ", projectBoxes);
  for (let i = 0; i < projectBoxes.length; i++) {
        projectBoxes[i].addEventListener('click', function () {
            if (projectBoxes[i].style.boxShadow == "rgb(255 236 120) 0px 0px 11px 9px") {
                console.log("box shadow : ", projectBoxes[i].style.boxShadow);
                projectBoxes[i].style.boxShadow = "none";
            } else {
                projectBoxes[i].style.boxShadow = "rgb(255 236 120) 0px 0px 11px 9px";
                if (projectBoxes[i].id == "projet2") {
                    console.log("projet2 : ", projectBoxes[i].className);
                    let imgILC = projectBoxes[i].querySelector('img');
                    imgILC.style.opacity = "0";
                    imgILC.src = "assets/pictures/pro/ILC_France_After_home.png";
                    setTimeout( () => {
                        imgILC.style.transition = "all 1s ease-in-out";
                        imgILC.style.opacity = "1";
                    }, 500);
                }
            }
        });
    }
}

//......................................................//
/////////////////////page RETRO END///////////////////////////
//......................................................//
// projectsData = [{title: "labiby", description: "description", picture: "picture"}]

function podcastsPictures() {
    var  podcastsPicturesTab = [];
    podcastsPicturesTab.push(
        "assets/pictures/podcasts/tech_cafe.jpg",
        "assets/pictures/podcasts/quete_laterale.jpg",
        "assets/pictures/podcasts/studio_404.jpg",
        "assets/pictures/podcasts/zqsd.jpg",
        "assets/pictures/podcasts/le_cosy_corner.jpg",
        "assets/pictures/podcasts/la_matinale_jv.jpg",
        "assets/pictures/podcasts/canard_pc.jpg",
        "assets/pictures/podcasts/2_heures_de_perdues.jpg",
        "assets/pictures/podcasts/silence_on_joue.jpg",
        "assets/pictures/podcasts/floodcast.jpg",
        "assets/pictures/podcasts/sumi_masen_turbo.jpg",
        "assets/pictures/podcasts/fin_du_game.jpg",
        "assets/pictures/podcasts/l_apero_du_captain.jpg",
        "assets/pictures/podcasts/les_demons_du_midi.jpg",
        "assets/pictures/podcasts/tanguy_pastureau_maltraite_l_info.jpg",
        "assets/pictures/podcasts/la_drole_d_humeur_de_fanny_ruwet.jpg",
        "assets/pictures/podcasts/la_drole_d_humeur_de_marina_rollman.jpg",
        "assets/pictures/podcasts/le_moment_meurice.jpg",
        "assets/pictures/podcasts/pardon_gpt.jpg",
        "assets/pictures/podcasts/le_dernier_cyber_avant_la_fin_du_monde.jpg",
        "assets/pictures/podcasts/le_rendez-vous_jeux.jpg",
        "assets/pictures/podcasts/le_rendez-vous_tech.jpg",
        "assets/pictures/podcasts/un_bon_moment.jpg",
    );
    
    const podcastsPicturesBoxe = document.querySelector('#wildcatPodcast figure');
    
    console.log("podcastsPicturesTab : ", podcastsPicturesTab);

    const  img = document.createElement('img');
    img.classList.add('podcastsPictures');
    img.style.transition = "all 1.2s ease-in-out";

    setInterval(() => {
/*         setTimeout(() => {
        }, 1000); */
        img.style.opacity = "0";
        img.style.opacity = "1";
        podcastsPicturesTab.push(podcastsPicturesTab.shift());
        img.src = podcastsPicturesTab[0];
        podcastsPicturesBoxe.appendChild(img);
    }, 2000);



/*     for (let i = 0; i < podcastsPicturesTab.length; i++) {
        img.src = podcastsPicturesTab[i];
        podcastsPicturesBoxe.appendChild(img);
    } */
}






