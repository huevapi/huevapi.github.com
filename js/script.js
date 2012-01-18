GH = {
	api: undefined,

	init: function(){
		 this.api = new Github('huevapi');
	},

	getRepos: function(){
		this.api.getOrgRepos('huevapi', function(r){
			var repoTmpl = Hogan.compile($("#tmpl-repo").html());
			console.log(r)
			_.each(r, function(repo){
				$("#repositories").append(repoTmpl.render(repo));
			})
		})
	}
}

GH.init();
GH.getRepos();

Flickr = {
	apikey: "",
	userid: "66995188@N05",

	getPhotos: function(){
		$.getJSON("http://api.flickr.com/services/rest/?format=json&method=flickr.people.getPublicPhotos&photoset_id=" + this.userid + "&api_key=" + this.apikey + "&jsoncallback=?", function(flickrData){
			
			console.log(flickrData);
		});	
	}
	
}

$('#cycle').jflickrfeed({
	limit: 14,
	qstrings: {
		id: '66995188@N05'
	},
	itemTemplate: '<li><img width="250" height="200" src="{{image}}" alt="" /><div>{{title}}</div></li>'
}, function(data) {
	$('#cycle div').hide();
	$('#cycle').cycle({
		timeout: 5000
	});
	$('#cycle li').hover(function(){
		$(this).children('div').show();
	},function(){
		$(this).children('div').hide();
	});
});

   
