$(document).ready(function() {


 $('button').click(function () {
    // highlight the button
    // not AJAX, just cool looking
    $("button").removeClass("selected");
    $(this).addClass("selected");

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready

$(document).ready(function(){
  //Problem: buttons do not give the options to search other tags
  //Solution: use a search box and allow the users to search different tags

  //when the user submits (clicks submit button) search
  $('form').submit(function(event){
    //stop form from changing page
    console.log('form submitted');
    event.preventDefault();
    //if #search value is not empty and value is a string
    var $userInput = $('#search').val();
    if($userInput && $.type($userInput) === 'string'){
      //store #search value in a variable

      //Ajax call
      //store url
      var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      //create flickrOptions object
      var flickrOptions = {
        tags : $userInput,
        format : 'json'
      };
      //create callback function
      function displayPhotos(data) {
        var photoHTML = '<ul>';
        $.each(data.items,function(i,photo) {
          photoHTML += '<li class="grid-25 tablet-grid-50">';
          photoHTML += '<a href="' + photo.link + '" class="image">';
          photoHTML += '<img src="' + photo.media.m + '"></a></li>';
        }); // end each
        photoHTML += '</ul>';
        $('#photos').html(photoHTML);
      }
      //send ajax request
      $.getJSON(flickrAPI, flickrOptions, displayPhotos);
    }

  });


});