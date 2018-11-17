var Rooms = {
  add: function(message) {
    RoomsView.renderRoom(message);
  }
  
  init: function(arrayRoom) {
    RoomsView.renderRoom(arrayRoom.roomname);
  }
};