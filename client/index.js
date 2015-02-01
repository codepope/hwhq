var Projects = new Mongo.Collection("projects");


Template.body.helpers({
	projects: function() {
		return Projects.find();
	}
});
