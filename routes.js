Router.configure({
  layoutTemplate: 'layout' //can be any template name
});

Router.map(function() {
  this.route('about'); // By default, path = '/about', template = 'about'
  this.route('home', {
    path: '/', //overrides the default '/home'
  });
  this.route('ideas', {
    data: {
      ideasList: function() {
        return Ideas.find()
      }
    }
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
