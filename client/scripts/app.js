var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  
  model: {},

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      for (var i = 0; i < data.results.length; i++) {
        var d = data.results[i];
        
        if (d.username !== undefined && d.username !== null) {
          d.username = d.username.replace(/%/g, '_');
          d.username = d.username.replace(/&/g, '_');
          d.username = d.username.replace(/</g, '_');        
          d.username = d.username.replace(/>/g, '_');        
          d.username = d.username.replace(/\\/g, '_');
          d.username = d.username.replace(/\s+/g, '_');
        }
        
        if (d.text !== undefined && d.text !== null) {
          d.text = d.text.replace(/</g, '&lt;');        
          d.text = d.text.replace(/>/g, '&gt;');        
        }
        
        if (d.roomname !== undefined && d.roomname !== null) {
          d.roomname = d.roomname.replace(/%/g, '&#37;');
          d.roomname = d.roomname.replace(/&/g, '&amp;');
          d.roomname = d.roomname.replace(/</g, '&lt;');        
          d.roomname = d.roomname.replace(/>/g, '&gt;');        
          d.roomname = d.roomname.replace(/\\/g, '_');
          d.roomname = d.roomname.replace(/\s+/g, '_');
        }
        
        var message = {
          username: JSON.stringify(d.username),
          text: JSON.stringify(d.text),
          roomname: JSON.stringify(d.roomname)
        };
        
        MessagesView.renderMessage(message);
        RoomsView.renderRoom(message.room);
      
      }
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
