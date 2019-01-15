var MessageView = {


  render: _.template(`
      <div class="chat">
        <a href="#" class="username"><%= username %></a>
        <div class="message"><%= text %></div>
      </div>
    `)

};


// render: function(event) {
//   
  
//   console.log('click!');
// },