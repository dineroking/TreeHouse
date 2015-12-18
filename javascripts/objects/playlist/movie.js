/**
 * Project: TreeHouse.
 * By: Ronny Rosabal
 * Date: 12/18/15
 * Time: 11:42 AM
 * Content:
 */
function Movie(title, year, duration) {
  Media.call(this, title, duration);
  this.year = year;
}
Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlaying){
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' (';
  htmlString += this.year;
  htmlString += ') ';
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';

  return htmlString;
};