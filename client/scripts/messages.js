var Messages = {
  add: function(message) {
    Parse.create(message, MessagesView.renderMessage);
  }
};