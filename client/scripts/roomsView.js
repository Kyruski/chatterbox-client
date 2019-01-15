var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

  },

  render: function() {

  },

  renderRoom: function(room) {
    this.$select.append(`<div id="${room}">${room}</div>`);
  }

};


