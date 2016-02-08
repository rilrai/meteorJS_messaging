Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});


Template.welcome.helpers ({
  username:function() {
    if (Meteor.user()) {
      return Meteor.user().username;
    } else {
      return "anonymous internet user";
    }
  }
});


Template.reference.helpers ({
  ref:function() {
    return References.find().fetch();
  }
});




