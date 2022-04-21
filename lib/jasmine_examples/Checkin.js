function User() {
}
User.prototype.addTask = function(task) {
  this.currentlyAddingTask = task;
  this.addedTask = true;
};

User.prototype.delete = function() {
  this.addedTask = false;
};

User.prototype.complete = function() {
  if (this.addedTask) {
    throw new Error("task is already complete");
  }

  this.addedTask = true;
};

User.prototype.createQuote = function(quote) {
  this.currentlyCreatingQuote = quote;
  this.createdQuote = true;
};

User.prototype.tweetQuote = function(next) {
  window.open(next);
};

User.prototype.tweetQuote = function(next) {
  window.open(next);
};
module.exports = User;
