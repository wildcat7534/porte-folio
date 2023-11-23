Array.prototype.toString2 = function() {
	console.group("Contenu du tableau");
	for (let i=0; i<this.length; i++) {
		console.log(this[i]);
	}
	console.groupEnd();
};


function CstrCaracteristiques(nom, attq, pv, biome, specialite ) {
	let _maVarPrivee = 8;
	this.nom = nom || "à définir";
	this.attq = attq || 0;
	this.pv = pv || 1;
	this.biome = biome || " "
	this.specialite = specialite || " ";

};

var couveuse = [

	[CstrCaracteristiques,"Salomon", 1, 1, "eau", "plonge"],
	[CstrCaracteristiques,"Skwik", 1, 2, "canopée", ""],
	[CstrCaracteristiques,"Massdoss", 2, 3, "marais", ""],
	[CstrCaracteristiques,"Hermine", 1, 3, "terre", ""],
	[CstrCaracteristiques,"Roach", 2, 1, "insecte", ""],

];

function CstrCarte(couveuse) {

		var ligneCouveuse = couveuse[Math.floor(Math.random() * couveuse.length)];
		var carte = new ligneCouveuse[0](ligneCouveuse[1],ligneCouveuse[2],ligneCouveuse[3],ligneCouveuse[4], ligneCouveuse[5]);
		console.log("deckPro [carte en ponte] :", carte);
		console.log("deckPro [ligne couveuse] :", ligneCouveuse);
		return carte;
};

var Deck = function (couveuse, nbrDePonte){

	let _pioche = new Array();

	for( var i = 0; i < nbrDePonte; i++ ){

		_pioche.push(CstrCarte(couveuse, nbrDePonte));
		
	}
	this.piocher = function(nb) {
		nb = nb || 1;
		let _tabRetour = new Array();
		for (let i = 0; i<nb; i++) {
			let numero = Math.floor(Math.random() * _pioche.length);
			_tabRetour.push(_pioche[numero]);
		}
		return _tabRetour;
	}
	//console.log("deckPro [ma carte] :", this.pioche);
}

//////// OBJET DECK ! ////////////////
	var leDeck = new Deck(couveuse, 5);//
////////////////////////////////////

//console.log("deckPro [carte picohée] :", leDeck.pioche[Math.floor(Math.random() * leDeck.pioche.length)]);
console.dir("deckPro [carte picohée] :", leDeck.piocher(8));

console.log("deckPro [carte picohée] :");
leDeck.piocher(8).toString2();

