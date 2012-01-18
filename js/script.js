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

   
