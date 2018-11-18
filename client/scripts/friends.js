var Friends = {
  toggleStatus: function(userName) {
    //debugger;
    var className = '.' + userName;
    
    var $userClass = $(className);
    
    $userClass.css('color', 'red');
    $userClass.css('font-weight', 'bold');
    
    $userClass.addClass('.friend');
  }

};

$(document).ready(function(){ 
  var $a = $('a');
  console.log('anchor tags:', $a);
  
  
  $a.on('click', $a.className, function(event) {
    event.preventDefault();
    console.log($a.className); 
    Friends.toggleStatus($a.className);
  });

});