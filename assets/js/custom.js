var map;
function initialize() {

// All the variables set for each marker =============================================================
  var contentString1 = '<div id="cs1" style="height:30%; line-height:1.35; overflow:hidden; white-space:nowrap; text-align:center; padding-bottom:8%;">' +
  '<h2>Ramp D to Ian McKinnon Drive</h2>' +
  '<p>Free parking all day at this location.</p>' +
  '<img src="assets/img/ian-mckinnon.png" alt="image" style="margin:0 auto;">' +
  '</div>';

  var contentString2 = '<div id="cs2" style="height:30%; line-height:1.35; overflow:hidden; white-space:nowrap; text-align:center; padding-bottom:8%;">' +
  '<h2>Alex Evans Street</h2>' +
  '<p>Free parking all day at this location.</p>' +
  '<img src="assets/img/alex-evans.png" alt="image" style="margin:0 auto;">' +
  '</div>';

  var contentString3 = '<div id="cs3" style="height:30%; line-height:1.35; overflow:hidden; white-space:nowrap; text-align:center; padding-bottom:8%;">' +
  '<h2>Alex Evans Street</h2>' +
  '<p>Free parking all day at this location.</p>' +
  '<img src="assets/img/alex-evans.png" alt="image" style="margin:0 auto;">' +
  '</div>';

  var contentString4 = '<div id="cs4" style="height:30%; line-height:1.35; overflow:hidden; white-space:nowrap; text-align:center; padding-bottom:8%;">' +
  '<h2>Nugent Street</h2>' +
  '<p>Free parking all day at this location.</p>' +
  '<img src="assets/img/nugent-st.png" alt="image" style="margin:0 auto;">' +
  '</div>';

  var contentString5 = '<div id="cs5" style="height:30%; line-height:1.35; overflow:hidden; white-space:nowrap; text-align:center; padding-bottom:8%;">' +
  '<h2>Burleigh Street</h2>' +
  '<p>Free parking all day at this location.</p>' +
  '<img src="assets/img/burleigh-st.png" alt="image" style="margin:0 auto;">' +
  '</div>';

  var contentString6 = '<div id="cs6" style="height:30%; line-height:1.35; overflow:hidden; white-space:nowrap; text-align:center; padding-bottom:8%;">' +
  '<h2>Davis Crescent</h2>' +
  '<p>Free parking all day at this location.</p>' +
  '<img src="assets/img/davis-cres.png" alt="image" style="margin:0 auto;">' +
  '</div>';

  var contentString7 = '<div id="cs7" style="height:30%; line-height:1.35; overflow:hidden; white-space:nowrap; text-align:center; padding-bottom:8%;">' +
  '<h2>Chapman Street</h2>' +
  '<p>Free parking all day at this location.</p>' +
  '<img src="assets/img/chapman-st.png" alt="image" style="margin:0 auto;">' +
  '</div>';

// Joel - variable below sets the location of all the markers in an array =============================
  var locations = [
    [contentString7, -36.860534, 174.752797, 7],
    [contentString6, -36.865959, 174.777759, 6],
    [contentString5, -36.865609, 174.762265, 5],
    [contentString4, -36.866476, 174.763598, 4],
    [contentString3, -36.861021, 174.761583, 3],
    [contentString2, -36.861021, 174.761583, 2],
    [contentString1, -36.868050, 174.753222, 1]
  ];

  // Joel - The variable that sets the center of the map when the page loads. =========================
  var myLatlng = new google.maps.LatLng(-36.8656325,174.7608417);

  // Joel - Custom styles by the legend Sean. =========================================================
  var styles = [
  {
    "featureType": "water",
    "stylers": [
      { "saturation": -98 },
      { "lightness": -29 },
      { "hue": "#0019ff" },
      { "gamma": 0.71 }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "gamma": 2.15 },
      { "hue": "#00aaff" },
      { "saturation": -87 },
      { "lightness": 46 }
    ]
  },{
    "featureType": "administrative",
    "stylers": [
      { "saturation": -92 },
      { "hue": "#2200ff" },
      { "gamma": 0.83 },
      { "lightness": 38 }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "hue": "#0008ff" },
      { "saturation": -82 },
      { "lightness": 4 }
    ]
  },{
    "featureType": "transit.line",
    "stylers": [
      { "hue": "#0800ff" },
      { "lightness": 16 }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "hue": "#0000ff" },
      { "saturation": -92 },
      { "gamma": 1.13 },
      { "lightness": 22 }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "saturation": -85 },
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape.man_made",
    "elementType": "labels.text",
    "stylers": [
      { "gamma": 0.73 },
      { "lightness": 71 },
      { "visibility": "on" },
      { "hue": "#006eff" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "gamma": 1.49 },
      { "hue": "#e6ff00" },
      { "saturation": -97 },
      { "lightness": 8 }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "saturation": -80 },
      { "lightness": 14 }
    ]
  }
];

  // Joel - Variable for the map styles ===============================================================
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Joel - Options and settings for the map ==========================================================
  var mapOptions = {
    zoom: 14,
    center: myLatlng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  // Joel - Impliments the map into the division ID created in HTML ===================================
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Joel - The info window that shows on icon click ==================================================
  var infowindow = new google.maps.InfoWindow();

  // Joel - Map styling implimented ===================================================================
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');


  var image = 'assets/img/marker.png';

  // Joel - Sets the marker and uses the array above to insert all icons in locations =================
  var marker, i;

  for (i = 0; i < locations.length; i++) {
  var marker = new google.maps.Marker ({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map,
    icon: image
  });

  // Joel - Sets the onclick function for the text box to display =====================================
  google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i));
    }

}

google.maps.event.addDomListener(window, 'load', initialize);
