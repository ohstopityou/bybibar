function toggleBlur() {
  let map = document.getElementById('map')
  if (map.style.filter == "blur(5px)") {
    map.style.filter="blur(0px)";
  } else {
    map.style.filter="blur(5px)";
  }
}

function toggleMarker(id) {
  if(id.getVisible() == true) {
    id.setVisible(false);
  } else {
    id.setVisible(true);
  }
}

function toggleVisible(id) {
  if (id.style.display == 'block'){
    id.style.display='none'
  } else {
    id.style.display='block'
  }
}

function noneVisible(id) {
  id.style.display='none'
}

function displayBlock(id) {
  id.style.display='block'
}

var menubtn = document.getElementById('rightMenuButton');

menubtn.addEventListener("click", function() {
  toggleVisible(rightMenu);
});

//lock webpage on mobile
function preventBehavior(e) {
    e.preventDefault(); 
};

document.addEventListener("touchmove", preventBehavior, false);

// When ready...
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});