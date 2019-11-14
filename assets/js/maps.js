function initMap() {
  
  // Headquarter
  var marseilleStadium = { lat: 43.2698, lng: 5.3959 };
  marseille = new google.maps.Map(document.getElementById('map'), {
    center: marseilleStadium,
    zoom: 16,
    disableDefaultUI: true
  });

  var velodrome = { lat: 43.2698, lng: 5.3959 };
  var marker = new google.maps.Marker({ position: velodrome, map: marseille });

  // Second Office
  var aix = { lat: 43.5263, lng: 5.4454 };
  aixEnProvence = new google.maps.Map(document.getElementById('map2'), {
    center: aix,
    zoom: 16,
    disableDefaultUI: true
  });

  var fontaineAix = { lat: 43.5263, lng: 5.4454 }
  var marker = new google.maps.Marker({ position: fontaineAix, map: aixEnProvence });
};