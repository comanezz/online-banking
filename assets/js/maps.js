        var map;
        function initMap() {
          var marseille = {lat: 43.2965, lng: 5.3698};
          map = new google.maps.Map(document.getElementById('map'), {
            center: marseille,
            zoom: 10
          });
          
          var velodrome = {lat: 43.2698, lng: 5.3959};
          var marker = new google.maps.Marker({position:velodrome, map: map});
          
          map = new google.maps.Map(document.getElementById('map2'), {
            center: marseille,
            zoom: 10
          });
          
          var marignane = {lat:43.4213, lng:5.2183}
          var marker = new google.maps.Marker({position: marignane, map: map});
        }