function initMap(options) {
		options = $.extend({
			scrollwheel: true,
			navigationControl: true,
			mapTypeControl: true,
			scaleControl: true,
			draggable: true,
		}, options);
        var map = new google.maps.Map(document.getElementById('map'), {zoom: 14});
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({'address': "52a William Street, Melbourne, Vic 3000"}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
          } else {
            window.alert('Geocode was not successful for the following reason: ' +
                status);
          }
        });
      }
