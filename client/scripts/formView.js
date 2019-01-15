var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    const username = App.username;
    const text = $('input#message')[0].value;
    const roomname = RoomsView.$select[0].value;
    const header = Messages.create(username, text, roomname);
    Parse.create(header, (data) => {
      console.log(data);
      App.refresh();
    });
    
    // setTimeout(function(){App.refresh()}, 200);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};
