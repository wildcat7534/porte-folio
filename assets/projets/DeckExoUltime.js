Array.prototype.affichage = function(){
	console.group("|[°-Linscryption-°]| Contenu du tableau demandé : ");
	for(let i = 0; i<this.length; i++){
		console.log(this[i]);
	}
	console.groupEnd();
}


function Hero() {
	this.classNom = "Héros";
	this.isHero = true;
}

function Plonge() {
	this.specialiteNom = "Plongeur";
	this.isPlongeur = true;
}

function Biome(nom) {
	this.nom = nom;
}

const BIOMES = { "eau": new Biome("eau"), "canopee" : new Biome("canopée"), "marais" : new Biome("marais"), "terre" : new Biome("terre"), "insecte" : new Biome("insecte") };
const CLASSE = { "hero" : new Hero() };
const SPTES =  { "plonge" : new Plonge() };



var couveuse = [
	[ CrCaracteristiques, 	["Salomon", 1, 1], 	[ CLASSE.hero, BIOMES.eau, BIOMES.marais, SPTES.plonge ] 			],
	[ CrCaracteristiques, 	["Skwik", 1, 2], 		[ BIOMES.canopee ] 																						],
	[ CrCaracteristiques, 	["Massdoss", 2, 3], [ BIOMES.marais ] 																						],
	[ CrCaracteristiques, 	["Hermine", 1, 3], 	[ BIOMES.terre, CLASSE.hero ] 																],
	[ CrCaracteristiques, 	["Roach", 2, 1], 		[ BIOMES.insecte, CLASSE.hero ] 															],
];

function CrCaracteristiques( caracsStd, caracsMlt ) {
	let _maVarPrivee = 8;
	this.nom = caracsStd.nom || "à définir";
	this.attq = caracsStd.attq || 0;
	this.pv = caracsStd.pv || 1;

	//this.biome = biome || " "
	//this.specialite = specialite || " ";

	/*	let allCaracs = ligneCouveuse[7];
		allCaracs.forEach(function(myCarac){
			switch(true) {
				case myCarac instanceof Biome: console.log("Enregisterement : ", myCarac.nom); break;
				case myCarac instanceof Plonge: console.log("Enregisterement : ", myCarac.specialiteNom); break;
				case myCarac instanceof Hero: console.log("Enregisterement : ", myCarac.classNom); break;
			}
		});
	*/
};

function CrCarte( couveuse ) {
	var ligneCouveuse = couveuse[ Math.floor(Math.random() * couveuse.length) ];

	let cstr = ligneCouveuse[0];
	let std = ligneCouveuse[1];

	let caracsStd = { "nom" : std[0], "attq" : std[1], "pv" : std[2] };

	let carte = new cstr(caracsStd, ligneCouveuse[2]) ;

		console.log("|[°-Linscryption-°]| [carte pondue] :", carte);
	return carte;
}

var Deck = function ( couveuse, nbrDePonte ){

	let _pioche = new Array();

	for( var i = 0; i < nbrDePonte; i++ ){
		_pioche.push( CrCarte( couveuse ) );
	}
	this.show = function() {
		_pioche.affichage();
	}
	this.toString = function() {
		let retour = "";
		for( let i = 0; i <_pioche.length; i++ ){
			retour += (i>0?"/r/n":"") + _pioche[i].nom;
		}
		return retour;
	}
	this.piocher = function( nb ) {
		nb = nb || 1;
		
		for (let i = 0; i<nb; i++) {
			let numero = Math.floor(Math.random() * _pioche.length);
			console.log("|[°-Linscryption-°]| numéro carte retirée : ", numero);
			console.log("|[°-Linscryption-°]| contenu _pioche : ", _pioche);
			var cartePiochee = _pioche.splice(numero, 1);
			console.log("|[°-Linscryption-°]| carte retirée : ", cartePiochee);
			//_pioche = tabEnCour;
			console.log("|[°-Linscryption-°]| contenu _pioche : ", _pioche);

		}
		return cartePiochee;
	}
	//console.log("deckPro [ma carte] :", this.pioche);
}

//////// OBJET DECK ! ////////////////
	var leDeck = new Deck(couveuse, 5);//
////////////////////////////////////

//console.log("|[°-Linscryption-°]| Le Deck : ", leDeck);
//leDeck.piocher(1);
//console.log("|[°-Linscryption-°]| On pioche : ", leDeck);
