var Projects = new Mongo.Collection("projects");
var Ideas = new Mongo.Collection("ideas");
var People = new Mongo.Collection("people");

// Template.body.helpers({
//   projects: function() {
//     return Projects.find();
//   }
// });

Router.configure({
  layoutTemplate: 'layout' //can be any template name
});

Router.map(function() {
  this.route('about'); // By default, path = '/about', template = 'about'
  this.route('home', {
    path: '/', //overrides the default '/home'
  });
  this.route('ideas', {
    data: function() {
        return Ideas.find()
      } //set template data context
  });
  this.route('projects');
  this.route('people');
});

if (Meteor.isClient) {
  Template.navItems.helpers({
    activeIfTemplateIs: function(template) {
      var currentRoute = Router.current();
      return currentRoute &&
        template === currentRoute.lookupTemplate() ? 'active' : '';
    }
  });
}
