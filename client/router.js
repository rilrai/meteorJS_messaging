Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('welcome', {
    to:"main"
  });
});

Router.route('/dialogs', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('dialogs', {
    to:"main"
  });
});

// Router.route('/chat', function () {
//   this.render('navbar', {
//     to:"navbar"
//   });
//   this.render('chat', {
//     to:"main"
//   });
// });

Router.route('/dialog/:_id', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('dialog', {
    to:"main", 
    data:function(){
      return Meteor.users.findOne({_id:this.params._id});
    }
  });
});