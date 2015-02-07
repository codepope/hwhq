Ideas = new Meteor.Collection('ideas');
Projects = new Mongo.Collection("projects");
People = new Mongo.Collection("people");


if (Meteor.isServer) {
	Meteor.startup(function() {
		if (!Ideas.findOne()) {
			Ideas.insert({
				name: "A radio mesh badge",
				proposer: "none",
				description: "A radio mesh badge which exchanges information between wearers",
				created: Date.now()
			});
		}
	});
}
