// vehicle id : 3BC5
// var position;

// -36.84766167 174.76066
var positionX, positionY;
var features;

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
        "vehicleid": "5870"
    };
  



    // 
    setInterval(()=>{
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
            console.log(data);
            let pData = data.response.entity[0].vehicle.position;
            // console.log(pData.latitude, pData.longitude);
            // position = [pData.latitude, pData.longitude];
            positionX = pData.latitude;
            positionY = pData.longitude
            // console.log(positionX)
            // do_the_stuff(positionX, positionY);
            // mapMarkerMaker(positionX, positionY)
    
            // features = [
            //     {
            //       position: new google.maps.LatLng(positionX, positionY),
            //       type: 'info',
            //       content: 'Info 1'
            //     }];
            // addMarker(features);
            test(positionX,positionY);
            console.log(positionX,positionY)
            console.log('done');
        })
        .fail(function() {
            alert("error");
        });
    }, 30000);
    
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
        console.log(data);
        let pData = data.response.entity[0].vehicle.position;
        // console.log(pData.latitude, pData.longitude);
        // position = [pData.latitude, pData.longitude];
        positionX = pData.latitude;
        positionY = pData.longitude
        // console.log(positionX)
        // do_the_stuff(positionX, positionY);
        // mapMarkerMaker(positionX, positionY)

        // features = [
        //     {
        //       position: new google.maps.LatLng(positionX, positionY),
        //       type: 'info',
        //       content: 'Info 1'
        //     }];
        // addMarker(features);
        test(positionX,positionY);
        console.log(positionX,positionY)
        console.log('done');
    })
    .fail(function() {
        alert("error");
    });
});

// console.log(positionX)

// export default{
//     position
//    }