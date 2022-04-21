function User() {
}
User.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

User.prototype.pause = function() {
  this.isPlaying = false;
};

User.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

User.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};

module.exports = User;
