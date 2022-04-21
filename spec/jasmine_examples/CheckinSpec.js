describe("User", function() {
  var User = require('../../lib/jasmine_examples/Checkin');
  var Input = require('../../lib/jasmine_examples/Input');
  var user;
  var input;
  var next = "https://twitter.com/";

  beforeEach(function() {
    user = new User();
    input = new Input();
  });

  it("should be able to add a task", function() {
    user.addTask(input);
    expect(user.currentlyAddingTask).toEqual(input);

    //demonstrates use of custom matcher
    expect(user).toInput(input);
  });

  describe("should be able to delete a task", function() {
    beforeEach(function() {
      user.addTask(input);
      user.delete();
    });

    it("should be able to complete a task", function() {
      expect(user.addedTask).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(user).not.toInput(input);
    });


  // for Quote component
  it("should be able to create a quote on button press", function() {
    user.createQuote(input);
    expect(user.currentlyCreatingQuote).toEqual(input);

    //demonstrates use of custom matcher
    expect(user).toInput(input);
  });
});


  it("should open twitter on button press", function() {
    spyOn(window, 'open');

    
    expect(user.tweetQuote).toHaveBeenCalledWith(next)
    
  });

  it("should display a new quote on page refresh", function() {
    spyOn(input, 'persistFavoriteStatus');

    user.createQuote(input);

    expect(input.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if page does not display/unknown error", function() {
      user.addTask(input);

      expect(function() {
        user.complete();
      }).toThrowError("page has not displayed or unknown error");
    });
  });
});
