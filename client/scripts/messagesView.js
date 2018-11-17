var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    App.fetch(MessagesView.renderMessage);
    // MessagesView.$chats.on('submit');
  },

  renderMessage: function(message) {
    MessagesView.$chats.prepend(`
      <p class=${message.username}>
        <a href='Friends.toggleStatus();'>
          ${message.username}
        </a>
          ${message.text}
          ${message.roomname} 
      </p>`
    );
  }

};
