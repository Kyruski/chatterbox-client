var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function() {
    $.getJSON('parse.js', function(data) {
      let html = '';
      for (let i = 0; i < data.order.length; i++) {
        html += MessageView.render(data.order[i]);
      }
      $chats.append(html);
    });
  }
};

// var i, html = "";
// for (i = 0; i < data.order.length; i++) {
//   html += compiled(data.movies[i]);
// }  
// $("#movies").append(html);