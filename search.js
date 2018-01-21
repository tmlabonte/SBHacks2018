// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

var currentSong = query.song;
if (currentSong == undefined) {
	document.getElementById("searchBar").defaultValue = "";
}
else {
	document.getElementById("searchBar").defaultValue = currentSong;
}

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
	var id = null;
	var src = 'https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png';
	var url = null;
	try {
		id = response.items[0].id.videoId;
    	src = 'https://img.youtube.com/vi/' + id + '/1.jpg';
    	url = 'https://youtube.com/watch?v=' + id;
    	console.log(url);
	}
    catch(e) {
    	console.log("Error");
    }
}


function initMap() 
{
	var mid = {lat: 22, lng: 0};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 2,
	  center: mid
	});
	map.setOptions({ minZoom: 2, maxZoom: 15 });
	var cities = ["Los Angeles", "Los Angeles", "New York", "New York", "New Delhi", "New Delhi", "Sydney", "Sydney", "Beijing", "Beijing", "Rio", "Rio", "London", "London", "Lagos", "Lagos", "Moscow", "Moscow", "Cairo", "Cairo", "Seoul", "Seoul", "Cape Town", "Cape Town", "Bogota", "Bogota"];
	var latLons = [34.0522, -118.2437, 40.7128, -74.0060, 28.6139, 77.2090, -33.8688, 151.2093, 39.9042, 116.4074, -22.9068, -43.1729, 51.5074, -0.1278, 6.5244, 3.3792, 55.7558, 37.6173, 30.0444, 31.2357, 37.5665, 126.9780, -33.9249, 18.4241, 4.7110, -74.0721];
	var pics = ["https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"]
	if(query.song !== undefined) 
	{
	  for(var i = 0; i < 26; i++)
	  {
	    var marker = new google.maps.Marker({
	    position: {lat:latLons[i], lng: latLons[++i]},
	    map: map,
	    title: cities[i]
	    });
	    //HOW TO DO HTML AND JAVASCRIPT MIX???
	    // var contentString = '<div id="content">' +
	    // '<img src=' + 
	    // pics[0] + 
	    // '>' +
	    // '</div>';

	    var content = cities[i] + '<br/>' + '<img src = ' + pics[0] +'>'     

	    var infowindow = new google.maps.InfoWindow()

	    google.maps.event.addListener(marker,'mouseover', (function(marker,content,infowindow){ 
	        return function() {
	            infowindow.setContent(content);
	            infowindow.open(map, this);
	        };
	    })(marker,content,infowindow)); 

	    // var contentString = '<div id="content">'+
	    // '<div id="siteNotice">'+
	    // '</div>'+
	    // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
	    // '<div id="bodyContent">'+
	    // '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
	    // 'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
	    // '(last visited June 22, 2009).</p>'+
	    // '</div>'+
	    // '</div>';

	    // var infowindow = new google.maps.InfoWindow({
	    //   content: contentString
	    // });

	    // //HOW TO CLOSE IT THOUGH????
	    // marker.addListener('mouseover', function() {
	    //   infowindow.open(map, this);
	    // });
	  }       
	}
} 

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyB0xaH8jN_ZhFwflugHhfPJPkZEPXSjKeY');
    search();
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}

function search() {
	// check if user entered a song
	if (window.location.href != "https://tmlabonte.github.io/SBHacks2018/")
	{
		var cities = ["Los Angeles", "New York", "India", "Australia", "China", "Brazil", "London", "Nigeria", "Russia", "Egypt", "Korea", "South Africa", "Colombia"];
	    for (var i=0; i < cities.length; i++) {
	    	// Use the JavaScript client library to create a search.list() API call.
	    	var request = gapi.client.youtube.search.list({
	    	    q: query.song + " dance " + cities[i],
	    	    maxResults: 1,
	    	    part: "id",
	    	    order: "viewCount",
	    	    type: "video"
	    	}); 
	    	
	    	// Send the request to the API server,
	    	// and invoke onSearchRepsonse() with the response.
	    	request.execute(onSearchResponse);
	    }
	}
}
