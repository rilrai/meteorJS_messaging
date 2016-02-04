Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

Template.welcome.helpers ({
  username:function() {
    if (Meteor.user()) {
      return Meteor.user().username;
        //return Meteor.user().emails[0].address;
    } else {
      return "anonymous internet user";
    }
  }
});

Template.dialogs.helpers ({
  fromTo: function() {
    if (Meteor.user()&&Session.get('messagingTo')) {
      var from = Meteor.user().username,
          to = Session.get('messagingTo'),
          result = '' + from + ' to ' + to;

      return result;
    } else {
      return "Please log in or choose a user to message with"
    }
  },

  users: function() {
    return Meteor.users.find().fetch();
  },

  messages: function() {
    var text = '',
        textArea = document.getElementsByClassName('allMessages'),
        from = Meteor.user().username,
        to = Session.get('messagingTo'),
        messFrom = Messages.find({$and: [{sender: from}, {recipient: to}]}).fetch(),
        messTo = Messages.find({$and: [{sender: to}, {recipient: from}]}).fetch(),
        messages = messFrom.concat(messTo);

    messages.sort(compare);
    textArea[0].value = '';

    // for (var i=0; i<messages.length; i++) {
    //   textArea[0].value += messages[i].sender + ' : ' + messages[i].message + '\\n';
    // };
    
    return messages;
  }

});

Template.dialogs.events ({
  'click #send-btn': function(e,t) {
    if (Meteor.user()&&Session.get('messagingTo')) {
      e.preventDefault();
      e.stopPropagation();

      var from = Meteor.user().username,
          to = Session.get('messagingTo'),
          el = document.getElementsByClassName('newMessage'),
          text = el[0].value,
          date = new Date(),
          datetime = date.getTime();

      Messages.insert({
        sender: from,
        recipient: to,
        message: text,
        time: datetime
      });

      el[0].value = '';

      scrollIt('select-messages');
    }
  },

  'keypress .newMessage': function(e,t) {
    if ((e.keyCode == 13)&&Meteor.user()&&Session.get('messagingTo')) {
      e.preventDefault();
      e.stopPropagation();

      var from = Meteor.user().username,
        to = Session.get('messagingTo'),
        el = document.getElementsByClassName('newMessage'),
        text = el[0].value,
        date = new Date(),
        datetime = date.getTime();

      Messages.insert({
        sender: from,
        recipient: to,
        message: text,
        time: datetime
      });

      el[0].value = '';

      scrollIt('select-messages');
    }
  },

  'click #select-user-btn': function(e,t) {
    var select = document.getElementById('user-selector'),
        userTo = select.selectedOptions[0].text;
    Session.set('messagingTo', userTo);
  },
});

// Comparator for messages. Sorts by datetime.
function compare(a,b) {
  if (a.time < b.time)
    return -1;
  else if (a.time > b.time)
    return 1;
  else 
    return 0;
}

function scrollIt(id) {
    document.getElementById(id).scrollTop = document.getElementById(id).scrollHeight;
}


