var Rooms = {
  add: function(message) {
    RoomsView.renderRoom(message);
  },
  
  init: function(arrayRooms) {
    RoomsView.renderRoom(arrayRooms.roomname);
  }
};