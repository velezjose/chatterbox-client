var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    debugger;
    App.fetch(Rooms.init);
    
    App.fetch(Rooms.init);
    
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
