//Problem: User when clicking on image goes to dead end
//Solution: Create an overlay with a large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//Add image
$overlay.append($image);

//Add caption
$overlay.append($caption);

//Add overlay
$('body').append($overlay);
  
//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var href = $(this).attr("href");
  //Update overlay with the image linked
  $image.attr('src', href);
  
  //Show the overlay
  $overlay.show();
  
  
  //Get child's alt attribute and set caption
  var captionText = $(this).children('img').attr('alt');
  $caption.text(captionText);
});
  

//When overlay is click
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
  
});
  