var Friends = {
  toggleStatus: function(userName) {
    $('.' + userName).css('color', 'red');
  }

};

$(document).ready(function(){ 
  var $p = $('p');
  
  
  $p.on('click', $p.className, function(event) {
    event.preventDefault();
    console.log($p.className); 
    Friends.toggleStatus($p.className);
  });

});