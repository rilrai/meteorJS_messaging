Meteor.startup(function(){
	if (!References.findOne({_id:'1'})) {
		References.insert({
			_id : '1',
			text : 'Messages can be sent by pressing the Enter key.'
		})
	};

	if (!References.findOne({_id:'2'})) {
		References.insert({
			_id : '2',
			text : 'The message box has not the best implementation, still I hope the meteor part is core here.',
		})
	};

	if (!References.findOne({_id:'3'})) {
		References.insert({
			_id : '3',
			text : 'Try to overload the message box - it has a nice feature of scrolling to new messages.'
		})
	};

	if (!References.findOne({_id:'4'})) {
		References.insert({
			_id : '4',
			text : 'Datetime function relocated to server, so no mistakes in message order from now on.'
		})
	};
});
