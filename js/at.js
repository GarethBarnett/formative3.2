var positionX, positionY;
var features;
var userCurrentLocation = [];

// getting user's current location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      userCurrentLocation = [position.coords.latitude, position.coords.longitude];
    })
}


$(function() {
    var params = {
        // Request parameters
        // "callback": "{string}",
        // "tripid": "{string}",
        // "vehicleid": "5870"
    };

    requestRelatedBuese(params);
    setInterval(() => {
        requestRelatedBuese(params);
    }, 5000);
});

function requestRelatedBuese(params){
    $.ajax({
        url: "https://api.at.govt.nz/v2/public/realtime/vehiclelocations?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","02653fcbd35f499388a9bdc015ce3ad4");
            // xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","be5bdcc28a9d4639bb48ff133b9e5066");
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
            }
            // console.log(positionArray);
            presentAllBuese(positionArray);
            // console.log('done');
    })
    .fail(function() {
        alert("error");
    });
}
