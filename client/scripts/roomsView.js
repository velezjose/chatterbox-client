var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    
    RoomsView.$button.on('click', function() {
      // console.log($('#message').val());
      Rooms.add($('#message').val());
      
    });
  },  

  renderRoom: function(room) {
    //console.log(room);
    RoomsView.$select.append(`<option value=${room.toLowerCase()}>${room}</option>`);
    $('#message').val('');
  }

};
