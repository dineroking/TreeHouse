$(document).ready(function(){
  $('button').click(function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
    $.getJSON(flikrAPI, flickrOptions, displayPhotos);
  });
});//end ready