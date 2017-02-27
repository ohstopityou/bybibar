function toggleVisible(id) {
  if (id.style.display == 'block'){
    id.style.display='none'
  } else {
    id.style.display='block'
  }
}

function toggleBlur() {
  var map = document.getElementById('map')
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
                    
document.getElementById('rightMenuButton').addEventListener("click", function() {
  toggleVisible(rightMenu);
});

document.getElementById('map').addEventListener("click", function() {
  toggleBlur();
});

//bryggen.addListener('click', toggleVisible('bryggenCard'));