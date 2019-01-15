var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(array) {
    //render invioke render message as many times as needed
    console.log(array);
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
    if (message.roomname !== undefined) {
      var roomToAdd = message.roomname.split(' ').join('');
      var finalRoom = roomToAdd.split('\'').join('');
      if ($(`#${finalRoom}`).length === 0) {
        RoomsView.renderRoom(finalRoom);
      }
    }
    
    let textAttack = message.text[0] !== '<' && message.text[message.text.length - 1] !== '>';
    let nameAttack = message.username[0] !== '<' && message.username[message.username.length - 1] !== '>';
    if (message.text !== undefined) {
      if (textAttack && nameAttack) {
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
