var btn = document.getElementById('rightMenuButton');
var map = document.getElementById('map');
                   
function toggleVisible(id) {

  if (id.style.display=='block'){
    id.style.display='none'
  } else {
    id.style.display='block'
  }
}

function toggleBlur() {
  mappi = document.getElementById('map').style;
  if (mappi.filter=="blur(5px)") {
    mappi.filter="blur(0px)";
  } else {
    mappi.filter="blur(5px)";
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

map.addEventListener("click", function() {
  toggleBlur(map);
});

//bryggen.addListener('click', toggleVisible('bryggenCard'));