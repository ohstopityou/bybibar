function initMap() {
  var uluru = {lat: 60.3907, lng: 5.319};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  });
  fotball = new google.maps.Marker({
      position: {lat: 60.390222, lng: 5.321039},
      map: map,
      store_id: 'fotball',
    });

  bryggen = new google.maps.Marker({
    position: {lat: 60.395271, lng: 5.325236},
    map: map,
    store_id: 'bryggen',
  });
}