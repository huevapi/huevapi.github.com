$(document).ready(function(){
	// Add scroll spy to the top bar
	$().scrollSpy();

	// Get content from content directory
	var apisTmpl = Hogan.compile($("#tmpl-apis").html());
	var libsTmpl = Hogan.compile($("#tmpl-libs").html());
	var othersTmpl = Hogan.compile($("#tmpl-others").html());
	$.get("/content/apis.json", null, function(r){
		_.each(r.apis, function(item){
			$("#used-apis").append(apisTmpl.render(item));
		});

		_.each(r.libs, function(item){
			$("#used-libs").append(libsTmpl.render(item));
		});

		_.each(r.others, function(item){
			$("#used-others").append(othersTmpl.render(item));
		});
	})

});


GH = {
	api: undefined,

	init: function(){
		 this.api = new Github('huevapi');
	},

	getRepos: function(){
		this.api.getOrgRepos('huevapi', function(r){
			var repoTmpl = Hogan.compile($("#tmpl-repo").html());
			_.each(r, function(repo){
				$("#repo-list").append(repoTmpl.render(repo));
			})
		})
	}
}

GH.init();
GH.getRepos();

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

   
