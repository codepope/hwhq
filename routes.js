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
      ideaList: function() {
        return Ideas.find()
      },
      selectedIdea: {}
    }
  });
  this.route('idea', {
    path: '/idea/:_id',
    data: function() {
      return {
        ideaList: Ideas.find(),
        selectedIdea: Ideas.findOne({
          _id: this.params._id
        })
      }
    },
    template: 'ideas'
  });
  this.route('newIdea', {
    path: '/new/idea',
    template: 'newIdea'
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
  Template.newIdea.events({
    'submit form': function(evt) {
      var name = evt.target.inputName.value;
      var desc = evt.target.inputDescription.value;
      Ideas.insert({
        'name': name,
        'description': desc,
        proposer: Meteor.userId(),
        created: Date.now()
      });
      console.log(name + ":" + desc);
      return false;
    }
  })
}
