

//var monDeck = {
//	"items" : new Array(),
//}

// var monDeck = new Object();
// monDeck.items = new Array();




monEssai: 
{
		break monEssai;
	monTruc:
	{
		//while(1) {
			(console.log("Salut !"));
			//break monTruc;
			(console.log("EncoreSalut !"));
		//}
		for( let i = 0; i < 20; i++){
			if (i==5) continue;
			if (i==9) break monTruc;
			console.log("i :", i);
		}
		(console.log("EncoreSalut !"));
	}

	(function () {
		console.log("Start !");
	})();

	(function () {
		console.log("Start encore !");
	});

	function monOperation(x) {
		//x = x * x;
		//let res = x * x;
		if (x==5)	return ;
		if (x>0)	return x * x;
		console.log("ohoh");

	}

	var marsu = { "genre": "mâle", "identifiant" : "coucou"}

	function transiteMoi(animal) {
		animal = animal || { }
		if (!animal.genre) { animal.genre = "mâle"; animal.identifiant="fake"; }
		if (animal.genre == "mâle"){
			console.log("AÏE !!");
			animal.genre = "femelle";
			return true;
		}
		if (animal.genre == "femelle") { 
			return false;
		}
		return null;
	}


	var monResultat1 = transiteMoi(marsu) && "Merci Sandrine Rousseau" && "Hahaha" || "hihihi";
	var monResultat2 = transiteMoi(marsu) && "Merci Sandrine Rousseau ----" || "Bah alors";
	var monResultat3 = transiteMoi(marsu) || "Va te faire voir !";
	var monResultat4 = true || "Va te faire voir ! ----";
	var monResultat5 = transiteMoi();
	var monResultat6 = transiteMoi() && "c'est fait";

	function essai1(type, k) {
		console.log("Nombre d'arguments :", arguments.length);
		console.log(arguments[0]);
		console.log(arguments[1]);
	}
	essai1("coucou", 52, 220)

	var MonDeck = function (arg) {

		console.log("monDeck est lancé");
		window["myVar1"] = "88888";		// Global
		myVar2 = "o_O";								// Global
		var myVar3 = "555";						// Private

		function _constructeurPersonnalisé(ppp) {
			const myVar3 = "666";
			this.myVar4 = "héhéhé " + ppp;			// Public attribute
			//console.log("1 :", myVar3);
		};
		return new _constructeurPersonnalisé(arg);

	};

	var MonDeck2 = (function (arg) {

		console.log("monDeck2 est lancé");
		window["myVar1"] = "88888";		// Global
		myVar2 = "o_O";								// Global
		var myVar3 = "555";						// Private

		function _constructeurPersonnalisé(ppp) {
			const myVar3 = "666";
			this.myVar4 = "héhéhé " + ppp;			// Public attribute
			//console.log("1 :", myVar3);
		};
		return _constructeurPersonnalisé;

	})();

	var myDeck = MonDeck("jjj");
	var myDeck2 = MonDeck2("ttt");
}//fin  monEssai







function Plante() {
	this.regne = "Végétal"; 
}

function Animaux(stratArg) {
	this.regne = "Animal" ;
	this.informer = function() { console.log("Mon règne est :", this.regne, "et je m'appelle", this.nom); }
	let _strategie;
	this.setStrategie = function(myStrat) { _strategie = new myStrat; }

	this.deplacer = function() {
		console.log("Ok je bouge...");
		_strategie.strDeplacer(); 
	}

	// Execution à la premiere execution
	this.setStrategie(stratArg || StrategieParDefaut);
}

function StrategieParDefaut() {
	this.strDeplacer = function() { console.log("Je me déplace par defaut avec mes roulettes mais c'est pas normal"); }
}
function StrategieVolante() {
	this.strDeplacer = function() { console.log("Je m'envole au loin, bye bye"); }
}

function StrategieRampante() {
	this.strDeplacer = function() { console.log("Je glisssssssse....."); }
}

function StrategieQuadrupede() {
	this.strDeplacer = function() { console.log("Hop hop hop je marche tranquillement"); }
}
function StrategieFurtive() {
	this.strDeplacer = function() { console.log("On ne me voit plus et pourtant je bouge...")}
}

// Pseudo classe
function CtrChat(nom) {
	Animaux.call(this);
	this.nom = nom;
	this.type = "chat";
	this.informer = function() { console.log(this.nom, ": J'invoque mon droit au silence !"); } // Override
}

function CtrSerpent(type, nom, pv) {
	Animaux.call(this, StrategieRampante);
	this.famille = "serpents";
	this.type = type;
	this.nom = nom;
	this.pv = pv;
}

function Oiseaux() {

}



var kitty = new CtrChat("kitty");
kitty.informer = function() { console.log(this.nom + " est en mode furtif et ne communiquera pas" ); }
var snicky = new CtrSerpent("cobra", "snake", 4);




function Zoo() {
	console.log("Welcome to my zoo");
	var mesAnimaux = new Array();

	mesAnimaux.push(kitty);
	mesAnimaux.push(new CtrChat("poupette"));
	mesAnimaux.push(snicky);
	mesAnimaux.push(new CtrSerpent("sonette", "SnaKy", 3 ));
	this.afficherAnimaux = function() {
		for( let i = 0; i < mesAnimaux.length; i++){
			let animal = mesAnimaux[i];
			//console.log("Animal :", mesAnimaux[i].nom);
			if(animal.informer) animal.informer();
		}
	}
	this.deplacerAnimaux = function() {
		mesAnimaux.forEach(function(animal, i){
			console.log("------------------------");
			console.log("Je suis un ", animal.type);
			animal.deplacer();
		});
	}
	this.getAnimal = function(id) {
		console.log("Obtenir l'animal :", id);
		if (id > mesAnimaux.length) {
			return "Attention";
		} else {
			return mesAnimaux[id];
		}
	}
	console.log(this);
}
Zoo.maFctStatique = function() { console.log("Coucou je suis statique"); }

var monZoo = new Zoo();

(function registre() {
	
})();

