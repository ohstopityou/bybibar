function toggleVisible(id) {
  if (id.style.display == 'block'){
    id.style.display='none'
  } else {
    id.style.display='block'
  }
}

function toggleBlur(id) {
  console.log(id);
  let map = document.getElementById('map')
  console.log(map);
  if (map.style.filter == "blur(5px)") {
    map.style.filter="blur(0px)";
  } else {
    map.style.filter="blur(5px)";
  }
}

function toggleMarker(id) {
  console.log(id);
  if(id.getVisible() == true) {
    id.setVisible(false);
  } else {
    id.setVisible(true);
  }
}

var menubtn = document.getElementById('rightMenuButton');
var mapId = document.getElementById('map')

menubtn.addEventListener("click", function() {
  toggleVisible(rightMenu);
});

mapId.addEventListener("click", function() {
  if (bryggenCard.style.display=="block"){
    toggleBlur();
    toggleVisible(bryggenCard);
  }
});

//bryggen.addEventListener("click", function() {
//  toggleVisible(rightMenu);
//});

//bryggen.addListener('click', toggleVisible('bryggenCard'));