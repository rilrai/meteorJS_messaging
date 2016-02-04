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


