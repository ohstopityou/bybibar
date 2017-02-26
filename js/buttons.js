var btn = document.getElementById('rightMenuButton');
var map = document.getElementById('map');

                   
function toggleVisible(id) {
  console.log(id);
var style = document.getElementById(id).style;
  if (style.display=='block'){
    style.display='none'
  } else {
    style.display='block'
  }
}

function toggleBlur(id) {
  if (id.style.filter==blur(4px)) {
    id.style.filter="blur(0px)";
  } else {
    id.style.filter="blur(4px)";
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