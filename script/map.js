// Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      

    //   import atData from './at';

    //   console.log(atData.position)


    // console.log(positionX,typeof positionX)
    var icons = {
        icon: './images/atbus1.svg'
    }
      var map, infoWindow, marker;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -36.72738, lng: 174.70787717},
        //   zoom: 15,
        zoom: 12,
          // mapTypeId: 'satellite',
            // mapTypeId: 'terrain',
          rotateControl: true
        });

        // //Belowing code is adding a tag to map (position)
        // //Clicking on the marker will toggle the animation between a BOUNCE
        // // animation and no animation.
        // // * start
        // marker = new google.maps.Marker({
        //   map: map,
        //   draggable: true,
        //   animation: google.maps.Animation.DROP,
        //   position: {lat: -36.846816, lng: 174.762747}
        // //   position: {lat: Number(positionX), lng: Number(positionY)}
        // // position: {lat: position[0], lng: position[1]}
        // });
        // marker.addListener('click', toggleBounce);
        // function toggleBounce() {
        //   if (marker.getAnimation() !== null) {
        //     marker.setAnimation(null);
        //   } else {
        //     marker.setAnimation(google.maps.Animation.BOUNCE);
        //   }
        // }
        // // * end
        
        infoWindow = new google.maps.InfoWindow;
        map.setTilt(45);
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            // console.log(pos)
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
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
        infoWindow.open(map);
      }

      function mapMarkerMaker(data1, data2){
        var marker = new google.maps.Marker({
            map: map,
            draggable: true,
            // animation: google.maps.Animation.DROP,
            // position: {lat: -36.846816, lng: 174.762747}
            position: {lat: Number(data1), lng: Number(data2)}
          // position: {lat: position[0], lng: position[1]}
          });
          marker.addListener('click', toggleBounce);
          function toggleBounce() {
            if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
            } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
            }
          }
    }

    function test(data1, data2){
        // map = new google.maps.Map(document.getElementById('map'), {
        //     center: {lat: -36.856988799999996, lng: 174.76434809999998},
        //     zoom: 15,
        //     // mapTypeId: 'satellite',
        //       // mapTypeId: 'terrain',
        //     rotateControl: true
        //   });
  
          //Belowing code is adding a tag to map (position)
          //Clicking on the marker will toggle the animation between a BOUNCE
          // animation and no animation.
          // * start
          marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            icon: icons.icon,
            // position: {lat: -36.846816, lng: 174.762747}
            position: {lat: Number(data1), lng: Number(data2)}
          // position: {lat: position[0], lng: position[1]}
          });
          marker.addListener('click', toggleBounce);
          function toggleBounce() {
            if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
            } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
            }
          }
          // * end
    }