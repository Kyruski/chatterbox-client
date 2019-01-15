var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(array) {
    //render invioke render message as many times as needed
    console.log('we got here');
    for (let i = 0; i < array.length; i++) {
      this.renderMessage(array[i]);
    }

  },

  renderMessage: function(message) {
    // $.getJSON('parse.js', function(data) {
    //   let html = '';
    //   for (let i = 0; i < data.order.length; i++) {
    //     html += MessageView.render(data.order[i]);
    //   }
    //   $chats.append(message);
    // });
    // console.log(message);
    // console.log(this.compile);
    if ($(`#${message.roomname}`).length === 0) {
      RoomsView.renderRoom(message.roomname);
    }
    
    if (message.text !== undefined) {
      if (message.text[0] !== '<' && message.text[message.text.length - 1] !== '>') {
        this.$chats.append(MessageView.render(message));
      }
    }
  }
};

// var i, html = "";
// for (i = 0; i < data.order.length; i++) {
//   html += compiled(data.movies[i]);
// }  
// $("#movies").append(html);
