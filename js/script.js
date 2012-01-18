GH = {
	api: undefined,

	init: function(){
		 this.api = new Github('huevapi');
	},

	getRepos: function(){
		this.api.getOrgRepos('huevapi', function(r){
			_.each(r, function(repo){
				$("#repositories").append($("<li></li>").html(repo.name));
			})
		})
	}
}

GH.init();
GH.getRepos();

   
