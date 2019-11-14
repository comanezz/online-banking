var map;
function initMap() {
  var marseilleStade = { lat: 43.2698, lng: 5.3959 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: marseilleStade,
    zoom: 16,
    disableDefaultUI: true
  });

  var velodrome = { lat: 43.2698, lng: 5.3959 };
  var marker = new google.maps.Marker({ position: velodrome, map: map });

  var aix = { lat: 43.5263, lng: 5.4454 };
  map2 = new google.maps.Map(document.getElementById('map2'), {
    center: aix,
    zoom: 16,
    disableDefaultUI: true
  });

  var fontaineAix = { lat: 43.5263, lng: 5.4454 }
  var marker = new google.maps.Marker({ position: fontaineAix, map: map2 });
}