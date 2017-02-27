var center = {lat: 60.393, lng: 5.322};

function initMap() {
  var map_container = document.getElementById('map');
  var map_options = {
    zoom: 15,
    center: center,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "poi",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "poi.park",
        "stylers": [{"visibility": "on"}]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "road.highway",
        "stylers": [{"visibility": "simplified"}]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "transit",
        "stylers": [{"visibility": "off"}]
      }
    ]
  }
  
  map = new google.maps.Map(map_container, map_options);
  map.addListener("click", function() {
    if (mapCard.style.display=="block"){
      toggleBlur();
      toggleVisible(mapCard);
      noneVisible(excel);
      map.setCenter(center);
      map.setZoom(15);
    }
  });
  
  fotball = new google.maps.Marker({
    position: {lat: 60.390222, lng: 5.321039},
    map: map,
  });
  fotball.addListener('click', function() {
    zoomMarker(fotball);
  });

  bryggen = new google.maps.Marker({
    position: {lat: 60.395271, lng: 5.325236},
    map: map,
  });
  bryggen.addListener('click', function() {
    zoomMarker(bryggen);
  });
  
  vinyl = new google.maps.Marker({
  position: {lat: 60.395329, lng: 5.327527},
  map: map,
  });
  vinyl.addListener('click', function() {
    zoomMarker(vinyl);
  });
}

function getLocation() {
  var infoWindow = new google.maps.InfoWindow({map: map});
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
  'Error: The Geolocation service failed.' :
  'Error: Your browser doesn\'t support geolocation.');
}

function centerMap(location) {
  map.setCenter(location);
  map.setZoom(15);
}

function zoomMarker(name) {
  var pos = name.getPosition();
  centerMap(pos);
  toggleBlur();
  noneVisible(rightMenu);
  toggleVisible(mapCard);
  map.setZoom(16);
}