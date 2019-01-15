var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {// default behavior when first opened up messages view 
  },

  render: function(array) {// invoke render messages for each message
    //render invioke render message as many times as needed
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      this.renderMessage(array[i]);
    }

  },

  renderMessage: function(message) {// render each individual message to the dom 
    // $.getJSON('parse.js', function(data) {
    //   let html = '';
    //   for (let i = 0; i < data.order.length; i++) {
    //     html += MessageView.render(data.order[i]);
    //   }
    //   $chats.append(message);
    // });
    // console.log(message);
    // console.log(this.compile);
    // if (message.roomname !== undefined && message.roomname.length !== 0) {
    //   var roomToAdd = message.roomname.split(' ').join('');
    //   var finalRoom = roomToAdd.split('\'').join('');
    //   if ($(`#${finalRoom}`).length === 0) {
    //     console.log('here');
    //     RoomsView.renderRoom(finalRoom);
    //   }
    // }
    
    if (message.text !== undefined && message.username !== undefined) {
      let textAttack = message.text[0] !== '<' && message.text[message.text.length - 1] !== '>';
      let nameAttack = message.username[0] !== '<' && message.username[message.username.length - 1] !== '>';
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
