$(document).ready(function(){


	$("#search-term").on("submit", function(e){
		e.preventDefault();
		var artist = $(".artist").val();
		$(".result").html(artist);
		http://api.bandsintown.com/artists/Skrillex.json?api_version=2.0&app_id=YOUR_APP_ID

	})







});