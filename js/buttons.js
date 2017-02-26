var btn = document.getElementById('rightMenuButton');
var map = document.getElementById('map').style;
var mapoverlay = document.getElementById('map-overlay').style;
                   
function toggleVisible(id) {
var style = document.getElementById(id).style;
  if (style.display=='block'){
    style.display='none'
  } else {
    style.display='block'
  }
}

function toggleBlur(id) {
  if (id.filter=="blur(4px)") {
    id.filter="blur(0px)";
  } else {
    id.filter="blur(4px)";
  }
  toggleVisible('bryggenCard');
}

function toggleMarker(id) {
  if(id.getVisible() == true) {
    id.setVisible(false);
  } else {
    id.setVisible(true);
  }
}
                    
btn.addEventListener("click", function() {
  toggleVisible('rightMenu');
});

//mapoverlay.addEventListener("click", toggleBlur(map));

//bryggen.addListener('click', toggleVisible('bryggenCard'));