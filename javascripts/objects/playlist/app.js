var playlist = new Playlist();

var oneMansDream = new Song('One Mans Dream', 'Yanni', '4:01');
var hello = new Song('Hello', 'Adele', '3:56');

playlist.add(oneMansDream);
playlist.add(hello);

var playListElement = document.getElementById('playlist');

playlist.renderInElement(playListElement);

var playButton = document.getElementById('play');
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playListElement);
};
var nextButton = document.getElementById('next');
nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playListElement);
};
var stopButton = document.getElementById('stop');
stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playListElement);
};