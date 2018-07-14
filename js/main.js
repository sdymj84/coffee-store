function myMap() {
    var myPosition = new google.maps.LatLng(38.884876, -94.651446);

    var map = new google.maps.Map(document.querySelector("#store-location"), {
        center: myPosition,
        zoom: 15
    });

    var marker = new google.maps.Marker({
        position: myPosition,
        map: map,
        title: "Joe's Coffee Store"
    });
}