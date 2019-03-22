// vehicle id : 3BC5
// var position;

// -36.84766167 174.76066
var positionX, positionY;
var features;
var userCurrentLocation = [];

// getting user's current location
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
 
//       userCurrentLocation = [position.coords.latitude, position.coords.longitude];
//     })
// }
// console.log(userCurrentLocation[0], userCurrentLocation[1]);

// test user's location
userCurrentLocation = [-36.791073, 174.769870];

// function do_the_stuff(data1, data2) {
//     console.log(data1, data2);//or do whatever you want to do with this data
//     positionX = data1;
//     positionY = data2;
// }


// function addMarker(feature) {
//     var marker = new google.maps.Marker({
//       position: feature.position,
//     //   icon: icons[feature.type].icon,
//       map: map
//     });
//   }
// console.log(positionX, positionY)
$(function() {
    var params = {
        // Request parameters
        // "callback": "{string}",
        // "tripid": "{string}",
        // "vehicleid": "5870"
    };
  



    // 
    // setInterval(()=>{
    //     $.ajax({
    //         url: "https://api.at.govt.nz/v2/public/realtime/vehiclelocations?" + $.param(params),
    //         beforeSend: function(xhrObj){
    //             // Request headers
    //             xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","be5bdcc28a9d4639bb48ff133b9e5066");
    //         },
    //         type: "GET",
    //         // Request body
    //         data: "{body}",
    //     })
    //     .done(function(data) {
    //         let returnedData = data.response.entity;
    //             // console.log(data);
    //             let pData = data.response.entity[0].vehicle.position;
    //             positionX = pData.latitude;
    //             positionY = pData.longitude;
    
    //             let positionArray = [];
    //             // console.log(returnedData.length)
    //             for(let i = 0; i < returnedData.length; i++){
    //                 positionArray[i] = [returnedData[i].vehicle.position.latitude, returnedData[i].vehicle.position.longitude];
    //                 // positionArray[i][1] = returnedData[i].vehicle.position.longitude;
    //             }
    //             console.log(positionArray);
    //             // features = [
    //             //     {
    //             //       position: new google.maps.LatLng(positionX, positionY),
    //             //       type: 'info',
    //             //       content: 'Info 1'
    //             //     }];
    //             // addMarker(features);
    //             // test(positionX,positionY);
    //             presentAllBuese(positionArray);
    //             // console.log(positionX,positionY)
    //             // console.log('done');
    //     })
    //     .fail(function() {
    //         alert("error");
    //     });
    // });
    // }, 20000);
    
    // },2000);
    // 

    
    $.ajax({
        url: "https://api.at.govt.nz/v2/public/realtime/vehiclelocations?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","be5bdcc28a9d4639bb48ff133b9e5066");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        let returnedData = data.response.entity;
            // console.log(data);
            let pData = data.response.entity[0].vehicle.position;
            positionX = pData.latitude;
            positionY = pData.longitude;

            let positionArray = [];
            // console.log(returnedData.length)
            for(let i = 0; i < returnedData.length; i++){
                positionArray[i] = [returnedData[i].vehicle.position.latitude, returnedData[i].vehicle.position.longitude];
                // positionArray[i][1] = returnedData[i].vehicle.position.longitude;
            }
            console.log(positionArray);
            // features = [
            //     {
            //       position: new google.maps.LatLng(positionX, positionY),
            //       type: 'info',
            //       content: 'Info 1'
            //     }];
            // addMarker(features);
            // test(positionX,positionY);
            presentAllBuese(positionArray);
            // console.log(positionX,positionY)
            // console.log('done');
    })
    .fail(function() {
        alert("error");
    });
});

// console.log(positionX)

// export default{
//     position
//    }