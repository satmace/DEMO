mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0bWFjZSIsImEiOiJjbGdrb281bDQwYXM3M2pwcGxhOWt2bTJ3In0.bHEg6Y0rVuU1eoGLX3hLWg';


var mapContainer = document.getElementById('map');
var map = new mapboxgl.Map({
 container: 'map',
 style: 'mapbox://styles/mapbox/streets-v12',
     center: [73.856255, 18.516726],
     zoom: 5
});




const markerCoords = [
        [72.7474142, 21.1924098],
        [72.8199922, 22.1924882],
        [75.56835,20.99685]
   ];
   const markers = markerCoords.map(coord => {
     return new mapboxgl.Marker({ color: '#55d5a5'})
        .setLngLat(coord)
        .addTo(map);
   });
   
   const featureCollection = {
     type: 'FeatureCollection',
     features: [{
       type: 'Feature',
       geometry: {
         type: 'LineString',
         coordinates: markerCoords
       }
     }]
   };
   
   map.on('load', function() {
     map.addSource('line', {
       type: 'geojson',
       data: featureCollection
     });
     
     map.addLayer({
       id: 'line-layer',
      //  type: 'line',
      //  source: 'line',
       layout: {
         'line-cap': 'round',
         'line-join': 'round'
       },
       paint: {
         'line-color': '#55d5a5',
         'line-width': 3
       }
     });
   });

   map.addControl(new mapboxgl.NavigationControl());
   map.addControl(new mapboxgl.FullscreenControl());





    
     var mapContainer2 = document.getElementById('map2');
var map2 = new mapboxgl.Map({
 container: 'map2',
 style: 'mapbox://styles/mapbox/streets-v12',
 center: [75.856255, 18.516726],
 zoom: 4

});

     const markerCoords1 = [
          // [72.7474142,  20.1924098],
          // [73.856255, 18.516726],
          // [74.576782, 18.150663],
          // [72.911453,  20.385181]
          [72.7474142, 22.1924098],  
          [73.911453,  19.385181],
          [75.56835,21.99685],  //added
          [75.56835,20.99685],
          
          // [72.7474142, 22.1924098], //Added
          // [73.911453,  19.395181]
        ];
        const markers1 = markerCoords1.map((coord, index) => {
          const color = (index === 1) ? '#55d5a5' : '#9b9b9b';
          return new mapboxgl.Marker({ color })
            .setLngLat(coord)
            .addTo(map2);
            
        });
 
        

        const featureCollection1 = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: markerCoords1.slice(0,1),
                coordinates: markerCoords1.slice(0,2),
                coordinates: markerCoords1.slice(0,3)
                
              },
              
              properties: {
                'stroke': '#55d5a5',   //#9b9b9b
                'stroke-width': 3
              }
            },
            {
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: [markerCoords1[0], markerCoords1[3]],
                coordinates: [markerCoords1[1], markerCoords1[3]],
                // coordinates: [markerCoords1[2], markerCoords1[3]]
              },
              properties: {
                'stroke': '#55d5a5',
                'stroke-width': 3
              }
            }
          ]
        };


        map2.on('load', function() {
          map2.addSource('line', {
            type: 'geojson',
            data: featureCollection1,
          });

          
        
          map2.addLayer({
            id: 'line-layer',
            type: 'line',
            source: 'line',
            paint: {
              'line-color': ['get', 'stroke'],
              'line-width': ['get', 'stroke-width']
            }
          });
        });

        map2.addControl(new mapboxgl.NavigationControl());
        map2.addControl(new mapboxgl.FullscreenControl());

     
     
     var mapContainer3 = document.getElementById('map3');
var map3 = new mapboxgl.Map({
 container: 'map3',
 style: 'mapbox://styles/mapbox/streets-v12',
     center: [72.9968,  20.50095],
     zoom: 6
});


     const markerCoords2 = [
          [72.7474142, 21.1924098],  //added
          [73.911453,  19.385181],  //added
          [73.856255, 18.516726]
        ];
       
const markers2 = markerCoords2.map((coord, index) => {
     const color = (index === 2) ? '#55d5a5' : '#9b9b9b';
     return new mapboxgl.Marker({ color })
       .setLngLat(coord)
       .addTo(map3);
   });
   
   const featureCollection2 = {
     type: 'FeatureCollection',
     features: [
       {
         type: 'Feature',
         geometry: {
           type: 'LineString',
           coordinates: markerCoords2.slice(0, 2)
         },
         properties: {
           'stroke': '#9b9b9b',
           'stroke-width': 3
         }
       },
       {
         type: 'Feature',
         geometry: {
           type: 'LineString',
           coordinates: [markerCoords2[1], markerCoords2[2]]
         },
         properties: {
           'stroke': '#55d5a5',
           'stroke-width': 3
         }
       }
     ]
   };
   
   map3.on('load', function() {
     map3.addSource('line', {
       type: 'geojson',
       data: featureCollection2
     });
   
     map3.addLayer({
       id: 'line-layer',
       type: 'line',
       source: 'line',
       paint: {
         'line-color': ['get', 'stroke'],
         'line-width': ['get', 'stroke-width']
       }
     });
   });

   map3.addControl(new mapboxgl.NavigationControl());
   map3.addControl(new mapboxgl.FullscreenControl());















 
     var mapContainer4 = document.getElementById('map4');
     var map4 = new mapboxgl.Map({
 container: 'map4',
 style: 'mapbox://styles/mapbox/streets-v12',
     center: [72.7474142,  20.1924098],
     zoom: 6
});


map4.on('load', function() {
      getRoute();
    });

    function getRoute() {
      var start = [72.831062, 21.170240];
      var end = [73.933039, 19.133167];
      var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
      $.ajax({
        method: 'GET',
        url: directionsRequest,
      }).done(function(data){ 
        var route = data.routes[0].geometry;
        map4.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: route
            }
          },
          paint: {
            'line-color': '#55d5a5',
            'line-width': 4
          }
        });
        map4.addLayer({
          id: 'start',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: start
              }
            }
          },
          paint: {
            'circle-radius': 2,
            'circle-color': '#223b53',
            'circle-stroke-color': 'Black',
            'circle-stroke-width': 7,
            'circle-opacity': 0.5
             }
        });
        map4.addLayer({
          id: 'end',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: end
              }
            }
          },
          paint: {
            'circle-radius': 2,
            'circle-color': '#223b53',
            'circle-stroke-color': 'Black',
            'circle-stroke-width': 7,
            'circle-opacity': 0.5
             }
        });
      });
    }



map4.on('load', function() {
      getRoute();
    });

    function getRoute() {
      var start = [72.831062, 21.170240];
      var end = [73.933039, 19.133167];
      var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
      $.ajax({
        method: 'GET',
        url: directionsRequest,
      }).done(function(data){ 
        var route = data.routes[0].geometry;
        map4.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: route
            }
          },
          paint: {
            'line-color': '#55d5a5',
            'line-width': 4
          }
        });
        map4.addLayer({
          id: 'start',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: start
              }
            }
          },
          paint: {
            'circle-radius': 2,
            'circle-color': '#223b53',
            'circle-stroke-color': 'Black',
            'circle-stroke-width': 7,
            'circle-opacity': 0.5
             }
        });
        map4.addLayer({
          id: 'end',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: end
              }
            }
          },
          paint: {
            'circle-radius': 2,
            'circle-color': '#223b53',
            'circle-stroke-color': 'Black',
            'circle-stroke-width': 7,
            'circle-opacity': 0.5
             }
        });
      });
    }


    map4.addControl(new mapboxgl.NavigationControl());
    map4.addControl(new mapboxgl.FullscreenControl());


//      const markerCoords3 = [

//             [72.7474142, 21.1924098],  //added
//             [73.911453,  19.385181],  //added
//             [73.856255, 18.516726],    //added
//             [72.976782, 19.150663],
//         ];
       
// const markers3 = markerCoords3.map((coord, index) => {
//      const color = (index === 3) ? '#55d5a5' : '#9b9b9b';
//      return new mapboxgl.Marker({ color })
//        .setLngLat(coord)
//        .addTo(map4);
//    });
   
//    const featureCollection3 = {
//      type: 'FeatureCollection',
//      features: [
//        {
//          type: 'Feature',
//          geometry: {
//            type: 'LineString',
//            coordinates: markerCoords3.slice(0, 3)
//          },
//          properties: {
//            'stroke': '#9b9b9b',
//            'stroke-width': 3
//          }
//        },
//        {
//          type: 'Feature',
//          geometry: {
//            type: 'LineString',
//            coordinates: [markerCoords3[2], markerCoords3[3]]
//          },
//          properties: {
//            'stroke': '#55d5a5',
//            'stroke-width': 3
//          }
//        }
//      ]
//    };
   
//    map4.on('load', function() {
//      map4.addSource('line', {
//        type: 'geojson',
//        data: featureCollection3
//      });
   
//      map4.addLayer({
//        id: 'line-layer',
//        type: 'line',
//        source: 'line',
//        paint: {
//          'line-color': ['get', 'stroke'],
//          'line-width': ['get', 'stroke-width']
//        }
//      });
//    });







     
var imageContainer = document.getElementById('image-container');
// var videoUrl = 'images/video/SATMA.mp4';
var imageUrl = "images/video/SATMA-1.gif"; 

document.getElementById('toggle-btn').addEventListener('click', function() {
if (mapContainer.style.display === 'none') {
 // Show the map and hide the image
 mapContainer.style.display = 'block';
 imageContainer.style.display = 'none';
} else {
 // Show the image and hide the map
 mapContainer.style.display = 'none';
 imageContainer.style.display = 'block';
 imageContainer.style.backgroundImage = `url(${imageUrl})`;
//  imageContainer.innerHTML = `<video autoplay loop controls class="w-100 h-350" src="${videoUrl}">`
}
});

var imageContainer2 = document.getElementById('image-container2');
document.getElementById('toggle-btn2').addEventListener('click', function() {
     if (mapContainer2.style.display === 'none') {
      // Show the map and hide the image
      mapContainer2.style.display = 'block';
      imageContainer2.style.display = 'none';
     } else {
      // Show the image and hide the map
      mapContainer2.style.display = 'none';
      imageContainer2.style.display = 'block';
      imageContainer2.style.backgroundImage = `url(${imageUrl})`;
     // imageContainer2.innerHTML = `<video autoplay loop controls class="w-100 h-350" src="${videoUrl}">`
     }
     });

     var imageContainer3 = document.getElementById('image-container3');

     document.getElementById('toggle-btn3').addEventListener('click', function() {
          if (mapContainer3.style.display === 'none') {
           // Show the map and hide the image
           mapContainer3.style.display = 'block';
           imageContainer3.style.display = 'none';
          } else {
           // Show the image and hide the map
           mapContainer3.style.display = 'none';
           imageContainer3.style.display = 'block';
           imageContainer3.style.backgroundImage = `url(${imageUrl})`;
          //  imageContainer3.innerHTML = `<video autoplay loop controls class="w-100 h-350" src="${videoUrl}">`;
          }
          });
     var imageContainer4 = document.getElementById('image-container4');

     document.getElementById('toggle-btn4').addEventListener('click', function() {
          if (mapContainer4.style.display === 'none') {
           // Show the map and hide the image
           mapContainer4.style.display = 'block';
           imageContainer4.style.display = 'none';
          } else {
           // Show the image and hide the map
           mapContainer4.style.display = 'none';
           imageContainer4.style.display = 'block';
           imageContainer4.style.backgroundImage = `url(${imageUrl})`;
          //  imageContainer4.innerHTML = `<video autoplay loop controls class="w-100 h-350" src="${videoUrl}">`;
          }
          });





   // Add active class to the current button (highlight it)
   var header = document.getElementById("myDIV");
   var btns = header.getElementsByClassName("event");
   for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function() {
     var current = document.getElementsByClassName("active2");
     current[0].className = current[0].className.replace(" active2", "");
     this.className += " active2";
     });
   }

   var header = document.getElementById("myDIV1");
   var btns = header.getElementsByClassName("box");
   for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function() {
     var current = document.getElementsByClassName("active3");
     current[0].className = current[0].className.replace(" active3", "");
     this.className += " active3";
     });
   }



   