var classic = document.querySelector("#classic");
var win95 = document.querySelector("#win95");
var inputs = document.querySelectorAll("input");
var fichier_css = document.querySelector("link[type='text/CSS']");
var mainCV = document.querySelector("main.cv");

/*var barre_choix = document.querySelector("#choixStyleCV");
var header = document.querySelector(".cv");
var tete = document.querySelector("header img");
var h1 = document.querySelector("header h1");
var h2 = document.querySelector("header h2");
var list_li = document.querySelectorAll("#adresse li");
var infoUL = document.querySelector("#info ul");
var skills = document.querySelectorAll("#skill ul li");*/


for(var input of inputs){  //bouton choix du style

	input.addEventListener('click', function(){

		if (classic.checked == true, win95.checked == false ){

			fichier_css.setAttribute("href", "cv_classic.css");
		}
		else if (win95.checked == true, classic.checked == false){

			fichier_css.setAttribute("href", "style.css");
		}
	});
};

var contact = document.getElementById("contact"); //bouton contact qui pop
var sectionMini = document.createElement('section');

sectionMini.classList.add('miniform');

mainCV.appendChild(sectionMini);

sectionMini.innerHTML = "<button class='fermer'>X</button>\
						<form class='float'>\
						<h2>Contact :</h2>\
						<div class='col1'>\
							<div>\
							<label for='nom'>Nom</label>\
							<input type='text' name='nom' placeholder='Votre nom ici' required>\
							</div>\
							<div>\
							<label for='prenom'>Prénom</label>\
							<input type='text' name='prenom' placeholder='Votre prénom ici' required>\
							</div>\
						</div>\
						<div class='fullcoll'>\
							<label for='mail'>Votre Email</label>\
							<input type='email' name='mail' placeholder='Votre Email ici' required>\
							<textarea type='textbox' name='message' placeholder='Votre message ici' required></textarea>\
						</div>\
						<button id='envoyer' type='submit'>ENVOYER</button>\
						</form>\
						</section>";


var mini_form = document.querySelector(".miniform");
var fermer = document.querySelector(".fermer");  //bouton mini form float pour fermer

contact.addEventListener("click", function(){
	mini_form.classList.add("popup");
	mini_form.style.display = "unset";
});

fermer.addEventListener("click", function(){
	mini_form.classList.remove("popup");
	mini_form.style.display = "none";
});

