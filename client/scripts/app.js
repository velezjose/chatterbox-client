var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

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
        if(d.username === undefined || d.username === '' || (d.username.includes('<') && d.username.includes('>') && d.username.includes('/'))) {
          continue;
        }
        if(d.text === undefined || d.text === '' || (d.text.includes('<') && d.text.includes('>') && d.text.includes('/'))) {
          continue;
        }
        
        if(d.roomname === undefined || d.roomname === '' || (d.roomname.includes('<') && d.roomname.includes('>') && d.roomname.includes('/'))) {
          continue;
        }
        callback(d);
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
