var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // grab all message objects
    // loop through messages and run rendermessage as callback
    //debugger;
    App.fetch(MessagesView.renderMessage);
    
   // MessagesView.$chats.on('load');
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(`<p>${message.username}: 
      ${message.text} 
    </p>`);
  }

};
