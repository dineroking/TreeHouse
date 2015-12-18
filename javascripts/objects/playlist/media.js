/**
 * Project: TreeHouse.
 * By: Ronny Rosabal
 * Date: 12/17/2015
 * Time: 7:51 PM
 * Content:
 */

function Media(title, duration) {
  this.title = title;
  this.duration = duration;
  this.isPlaying = false;
}

Media.prototype.play = function() {
  this.isPlaying = true;
};

Media.prototype.stop = function() {
  this.isPlaying = false;
};