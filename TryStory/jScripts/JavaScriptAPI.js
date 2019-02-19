//מפה

var myLocation = new google.maps.LatLng(32.0511351, 34.8372129);

function initialize() {
    var mapOptions = {
        center: myLocation,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    var map = new google.maps.Map(document.getElementById("myGoogleMap"), mapOptions);
    var myIcon = 'images/marker.png';

    var marker = new google.maps.Marker({
        position: myLocation,
        animation: google.maps.Animation.DROP,
        icon: myIcon
    });
    marker.setMap(map);



    var infowindow = new google.maps.InfoWindow({
        content: "עמותת עמדא - הקו החם *8889"
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });




}

google.maps.event.addDomListener(window, 'load', initialize);


