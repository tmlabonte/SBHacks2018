// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

urlArr = [];
imgArr = [];
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
	}
    catch(e) {
    	console.log("Error");
    }
    finally {
    	urlArr.push(url);
    	imgArr.push(src);
    	console.log(urlArr);
    }
}
//WOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOW
// function writeTo(urlArr, imgArr) {
// 	for(var i = 0; i < 13; i++)
// 	{
		
// 	}
// }

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
