

var deck1 = new MyDeck();

function MyDeck( nbrE, nbrA ) {
	this.nbrEcureuil = nbrE;
	this.nbrAnimaux = nbrA;
}
function CaracsGeneral( attq, pv, nom, type ) {
	//console.log(arguments)
	this.attaque = attq || arguments[0][0] || 0;
	this.pv = ( typeof pv == "number" ) ? pv : 1;
	this.nom = nom || arguments[0][2] || "A définir";
	this.type = type || "aucun";
}
const Autre = class Autre_Classe extends CaracsGeneral {
	constructor( attq, pv, nom ) {
		super( arguments );
		this.coucou();
	}
	coucou () {
		console.log( "coucou" );
	}
}
function Ecureuil( attq, pv ) {
	//CaracsGen.call(this, attq, pv);
	CaracsGen.apply( this, arguments );
}
function CtrtAnimaux() {
	//CaracsGen.call(this, attq, pv);
	CaracsGen.apply( this, arguments );

}
function Board() {

}
//var gerbouille = new CtrtAnimaux(2, 3, "Gerbouille");
//var kermitas = new CtrtAnimaux(1, 2, "Kermitas");

var toutesLesCartesDescriptions = [
	[CtrtAnimaux, 2, 3, "Gerbouille"],
	[CtrtAnimaux, 1, 2, "Kermitas"],
	[Ecureuil, 1, 1, "Skwik"],
	[Autre, 8, 42, "Autre........."],
];

function piocherDescripEtCreerCarte( deck ) {
	let ligneTableau = deck[ Math.floor( Math.random()*deck.length ) ];
	//console.log("Ligne du tableau ("+deck.indexOf(ligneTableau)+") :", ligneTableau);
	let myClass = ligneTableau[0];
	let myAttq = ligneTableau[1];
	let myPV = ligneTableau[2];
	let myNom = ligneTableau[3];
	//console.log("Classe :", myClass);
	//console.log("Attaque :", myAttq);
	//console.log("PV :", myPV);
	//console.log("Nom :", myNom);
	let maCarte = new myClass(myAttq, myPV, myNom);
	//console.log("Ma carte fabriquée :", maCarte);
	return maCarte;
}

function creerPleinDeCartes( nb ) {
	let mesCartes = new Array();
	for(let i = 0; i < nb; i++) {
		mesCartes.push( piocherDescripEtCreerCarte( toutesLesCartesDescriptions ) );
	}
	return mesCartes;
}

var a = creerPleinDeCartes(10);