var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(35.8196795,127.1165632,19),
    level: 3
};

var map = new kakao.maps.Map(container, options);

var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(35.8196795,127.1165632,19), 
        level: 3 
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 
var markerPosition  = new kakao.maps.LatLng(35.8196795,127.1165632,19); 

var marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);