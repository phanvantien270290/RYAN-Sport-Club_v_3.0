(function ($) {
    // USE STRICT
    "use strict";

    $(document).ready(function () {

        var selector_map = $('#google_map');
        var img_pin = selector_map.attr('data-pin');
        var data_map_x = selector_map.attr('data-map-x');
        var data_map_y = selector_map.attr('data-map-y');
        var scrollwhell = selector_map.attr('data-scrollwhell');
        var draggable = selector_map.attr('data-draggable');

        if (img_pin == null) {
            img_pin = 'images/icons/location.png';
        }
        if (data_map_x == null || data_map_y == null) {
            data_map_x = 10.7868015;
            data_map_y = 106.6664433    ;
       }
        if (scrollwhell == null) {
            scrollwhell = 0;
        }

        if (draggable == null) {
            draggable = 0;
        }

        var style=    [
        {
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#212121"
            }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#757575"
            }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#212121"
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#757575"
            }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#9e9e9e"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#bdbdbd"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#757575"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#181818"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#616161"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#1b1b1b"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#2c2c2c"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#8a8a8a"
            }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#373737"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#3c3c3c"
            }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#4e4e4e"
            }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#616161"
            }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#757575"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#3d3d3d"
            }
            ]
        }
        ]

        var latitude = data_map_x,
        longitude = data_map_y,
        map_zoom = 14;
        var welcome='<b>Centrer</b> :Ryan sports club <br><b>Tel:</b> 096-7878448 <br> <b>Adress:</b> 590 ,CMT8 Q3, TPHCM;';
        var locations = [
        [welcome, latitude, longitude, 5]
        ];

        if (selector_map !== undefined) {
            var map = new google.maps.Map(document.getElementById('google_map'), {
                zoom: 16,
                scrollwheel: false,
                zoomControl: false,  
                disableDoubleClickZoom: true,
                navigationControl: true,
                mapTypeControl: false,
                scaleControl: false,
                draggable: draggable,
                styles: style,
                center: new google.maps.LatLng(latitude, longitude),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        }

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {

            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: img_pin
            });

            google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }

    });

})(jQuery);