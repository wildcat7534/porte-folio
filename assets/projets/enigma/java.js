var next = document.querySelector("#next");
var pages = document.querySelectorAll("page");
var page1 = document.querySelector("#page1");
var page2 = document.querySelector("#page2");
var page3 = document.querySelector("#page3");
var page4 = document.querySelector("#page4");
var page5 = document.querySelector("#page5");
var id4 = document.querySelector("#lvl4");
var bridgeBroken = document.querySelector("#bridge-broken");
var loco = document.querySelector("#loco");
var balls = document.querySelectorAll(".ball");
var firstBall = document.querySelector("#firstBall");
var centerBall = document.querySelector("#centerBall");
var lastBall = document.querySelector("#lastBall");
var debug = document.querySelector("#debug");
var levelTitle = document.querySelector("#level-title");
var recharger = document.querySelector(".recharger");
var start = document.querySelector("#start");

////////DEBUG/////
/*debug.style.marginTop = '3em';
debug.addEventListener('click', function() {
	page1.style.display = "none";
	page4.style.display = "flex";
})*/
/////// FIN DEBUG//////
recharger.addEventListener("click" , function() {
	console.log("reload");
	location.reload();
	page1.style.display = "none";
	page4.style.display = "flex";
})
function reloadPage( pageAReload ) {
	for ( page of pages ) {
		page.style.dispay = "none";
		pageAReload.style.display = "flex";
	}
}

//page-1
next.addEventListener( 'click', function() {
	console.log("test next");
	page1.style.display = "none";
	page2.style.display = "flex";
})
//page-2
bridgeBroken.addEventListener( 'click', function() {
	bridgeBroken.classList.add( "repair" );
	loco.classList.add("locoMove");
	setTimeout( function() {
		page2.style.display = "none";
		page3.style.display = "flex";

		}, 3000 );
})
//page-3
var drapeauPart1 = document.querySelector(".ball:nth-of-type(1)");
var drapeauPart2 = document.querySelector(".ball:nth-of-type(2)");
var drapeauPart3 = document.querySelector(".ball:nth-of-type(3)");

for ( var ball of balls ) {
	console.log('ball : ', ball);
	ball.addEventListener( 'click', function() {
			var num = Math.round((Math.random() * (3 - 1) + 1));
			if( num == 1 ) {
			this.setAttribute("id", "blue");
			console.log('this attr : ', this.attributes.id);
			}else if( num == 2) {
				this.setAttribute("id", "white");
				console.log('this attr : ', this.attributes.id);
			}else if( num == 3) {
				this.setAttribute("id", "red");
				console.log('this attr : ', this.attributes.id);
			}

		if( (drapeauPart1.attributes.id.nodeValue == "blue") && (drapeauPart2.attributes.id.nodeValue == "white") &&  (drapeauPart3.attributes.id.nodeValue == "red") ) {
			console.log("Finit niveau 3");
			page3.style.backgroundColor = "green";
			setTimeout(function() {
				page3.style.display = "none";
				page4.style.display = "flex";
				killCat();
			}, 2000);
		}
	})
}
//page-4
var dropzones = document.querySelector('.dropzone');
var chat = document.querySelector('#chat');
var moutons = document.querySelectorAll('.mouton');
var moutonRouge = document.querySelector('#moutonRouge');

function killCat(){
		cat = setTimeout(function(){
			console.log("killCat");
			chat.setAttribute("src", "tools/pictures/blood.gif");
			setTimeout(function() {
				chat.parentNode.removeChild( chat);
				for ( var mouton of moutons ) {
					mouton.parentNode.removeChild( mouton);
					id4.style.color = "red";
				}
			}, 1000);
		}, 8000);
		console.log(cat);
	}

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {
event.target.classList.add("attraper");
}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
  dragged.classList.remove("attraper");
  page4.style.cursor = "grab";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
  page4.style.cursor = "grabbing";
  //document.body.style.backgroundColor = "red";
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "green";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if ( event.target.className == "dropzone" ) {
    event.target.style.backgroundColor = "";
    dragged.parentNode.style.display = "none";
    event.target.appendChild( dragged );
    dragged.style.zIndex = "-1";
  	clearTimeout(window.cat);
    setTimeout(function(){
    	event.target.style.background = "url('tools/pictures/barreaux.png')";
    },2000 );
		for ( var enPrison of event.target.childNodes ) { 
			console.log( "enPrison : ", enPrison.className, enPrison.id )
			if ( enPrison.id == "moutonRouge" && enPrison.id != "chat" ) { 
				id4.style.color = "green";
				start.setAttribute( "url", "tools/pictures/metal4.jpg" )
				  setTimeout( function() {
    				page4.style.display = "none";
    				page5.style.display = "flex";
    		}, 4000);
			}
		}
  }
}, false);

////page 5////