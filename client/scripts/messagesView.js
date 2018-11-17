var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.$chats.on('submit');
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(`<p>${message.username}: 
      ${message.message} 
    </p>`);
  }

};
