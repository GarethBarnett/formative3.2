// Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      

    //   import atData from './at';

    //   console.log(atData.position)


    // console.log(positionX,typeof positionX)
    var icons = {
        icon: './img/smallbus.svg'
    }
      var map, infoWindow, marker;
      var markers = [];
      var userCurrentLocation = [];
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -36.72738, lng: 174.70787717},
        //   zoom: 15,
        zoom: 12,
          // mapTypeId: 'satellite',
            // mapTypeId: 'terrain',
          rotateControl: true,
              styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7c93a3"
            },
            {
                "lightness": "-10"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#a0a4a5"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#62838e"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "lightness": "-29"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde3e3"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#3f4a51"
            },
            {
                "weight": "0.30"
            },
            {
                "visibility": "on"
            },
            {
                "lightness": "74"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#bbcacf"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": "0"
            },
            {
                "color": "#bbcacf"
            },
            {
                "weight": "0.50"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#a9b4b8"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "saturation": "-7"
            },
            {
                "lightness": "3"
            },
            {
                "gamma": "1.80"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a3c7df"
            }
        ]
    }
]
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
            userCurrentLocation = [-36.791073, 174.769870];
            // userCurrentLocation = [position.coords.latitude, position.coords.longitude];

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
            draggable: false,
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
          if (marker) {
            marker.setMap(null);
          }
          marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            icon: {url: icons.icon, scaledSize: new google.maps.Size(20, 20)},
            // icon: icons.icon,
            // zoom: 10,
            // size: new google.maps.Size(20, 20),
            // scaledSize: new google.maps.Size(10, 10),
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

    function presentAllBuese(val){
        // console.log(val, markers.length)
          if (markers) {
              for(let i = 0; i < markers.length; i++){
                markers[i].setMap(null);
              }
          }
        // current location of user: -36.856954, 174.764307
        //                           -36.856957, 174.764432
          console.log( userCurrentLocation[0],  userCurrentLocation[1])
          if(userCurrentLocation[0]){
            val.forEach((currentValue, index, array)=>{
              
                if((currentValue[0] <= (userCurrentLocation[0]+ 0.01)) && (currentValue[0] >= (userCurrentLocation[0] - 0.01))){
                    // console.log('first condition')
                    if((currentValue[1] <= (userCurrentLocation[1] + 0.01)) && (currentValue[1] >= (userCurrentLocation[1] - 0.01))){
                        // console.log('second condtion')
                      marker = new google.maps.Marker({
                          map: map,
                          draggable: true,
                          animation: google.maps.Animation.DROP,
                          icon: {url: icons.icon, scaledSize: new google.maps.Size(20, 20)},
            // icon: icons.icon,
                          position: {lat: currentValue[0], lng: currentValue[1]}
                        });
                        marker.addListener('click', toggleBounce);
                    }
                    // console.log('test if condition')
                }
  
              // for single all buses without any condition
              //   marker = new google.maps.Marker({
              //     map: map,
              //     draggable: true,
              //     animation: google.maps.Animation.DROP,
              //     icon: {url: icons.icon, scaledSize: new google.maps.Size(20, 20)},
              //     position: {lat: currentValue[0], lng: currentValue[1]}
              //   });
  
  
              //   marker.addListener('click', toggleBounce);
            function toggleBounce() {
              if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
              } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
              }
          }
              // console.log(currentValue, index)
            })
          }else{
              console.log('else')
          }
          
    }