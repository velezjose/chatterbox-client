var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    App.fetch(Rooms.init);

    
    var initialRoomMessage = [];
    
    setTimeout(function() {
      $('#chats').val('');
      
      App.fetch(function(data) {
        console.log($('#createdrooms option:selected').text());
        if (data.roomname === $('#createdrooms option:selected').text()) {
          
          MessagesView.renderMessage(data);
        }
        //console.log(data.results.filter( elem => elem.roomname === $('#createdrooms option:selected').text()) );
        
      });
      
    }, 100);
    
    
    
    RoomsView.$button.on('click', function() {
      Rooms.add($('#message').val());
      $('#message').val('');
    });
    
    
  },  

  renderRoom: function(room) {
    //console.log(room);
    RoomsView.$select.append(`<option value=${room}>${room}</option>`);
    $('#message').val('');
  }

};
