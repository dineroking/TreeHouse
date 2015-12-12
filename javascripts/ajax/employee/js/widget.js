/*var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    console.log(typeof xhr.responseText);
    var employees = JSON.parse(xhr.responseText);
    console.log(typeof employees);
    console.log(employees);
    var statusHTML = '<ul class="bulleted">';
    for(var i = 0; i < employees.length; i++){
      if(employees[i].inoffice === true){
        statusHTML += '<li class="in">';
      }else{
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

var roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function(){
  if(roomRequest.readyState === 4){
    var rooms = JSON.parse(roomRequest.responseText);
    var statusHTML = '<ul class="rooms">';
    for(var i = 0; i < rooms.length; i++){
      if(rooms[i].available === true){
        statusHTML += '<li class="empty">';
      }else{
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
roomRequest.open('GET', 'data/room.json');
roomRequest.send();*/


$('document').ready(function(){
  var url = 'data/employees.json';
  var callback = function(response){
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(index, employee){
      if(employee.inoffice === true){
        statusHTML += '<li class="in">'
      }else{
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  };
  $.getJSON(url, callback); //end getJSON
});//end ready