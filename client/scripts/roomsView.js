var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

  },

  render: function() {

  },

  renderRoom: function(room) {
    // var roomToAdd = room.split(' ').join('');
    // var finalRoom = roomToAdd.split('\'').join('');

    this.$select.append(`<div>${room}</div>`);
    console.log(this.$select);
    
  }

};


