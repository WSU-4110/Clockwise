import './App.js'

describe("newNote", function () {  
    it ("This will throw an Error ", function() { 
       expect(newNote).toThrow(); 
    }); 
 });

 describe("getActiveNote", function() { 
   
    it("should return current notes",function() { 
       expect(getActiveNote()).toEqual('Current Notes'); 
    }); 
 
 });

 describe("onUpdateNote",function () { 
    it("Expect string output", function () { 
       expect(onUpdateNote()).toEqual(jasmine.any(String));    
    });
 });

 describe("currentNotes",function () { 
    it("currentNotes return null", function () {
       expect(currentNotes.note()).toBeDefined();
    });
 });

 describe("onUpdateNote",function () { 
    it("Not a number check", function () { 
       expect(0 / 0).toBeNaN(); 
    });
 });

 var deletedNotes = 0;

 afterEach(function() { 
    deletedNotes = 1;  
 });  
 
 describe("deletedNotes",function() { 
    it("first call to check afterEach() ", function() { 
       expect(currentVal).toEqual(0);     
    });     
    
    it("second call to check afterEach()",  function() { 
       expect(currentVal).toEqual(1);     
    });
 });

 describe("Player", function() {
  var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
 });

 describe('Unit Testing (Assignment 5', function(){
    var testingValue;
  
    beforeEach(function(){
        testingValue = 1;
        console.log("Before test, testing value=" + testingValue);
        console.log("If value changes, there was an error in the testing");
    });
  
    it('verify that when habit is deleted, total habits decrements', function() {
     var value;
  
     value = testingValue;
     expect(value).toEqual(testingValue);

     var value2;
     value2 = TotalHabits;

     deleteHabit(0)

     if (TotalHabits != (value2-1))
     {
         value = 2;
     }
    
     expect(value).toEqual(testingValue);
    
    });

    xit('verify that when habit is added, total habits increments', function()
     {
        var value;

     value = testingValue;
     expect(value).toEqual(testingValue);
  
     var value2;
     value2 = TotalHabits;

     addHabit(0)

     if (TotalHabits != (value2+1))
     {
         value = 2;
     }
    
     expect(value).toEqual(testingValue);
    
        
          });
  

     xit('verify that when habit is checked off, habits complete increments', function()
      {
            var value;


     value = testingValue;
     expect(value).toEqual(testingValue);
  
   

     var value2;
     value2 = HabitsDone;

     checkHabit(0)

     if (HabitsDone != (value2+1))
     {
         value = 2;
     }
    
    
     expect(value).toEqual(testingValue);
    
            
              });

     xit('verify that when habit is un-checked, habits complete decrements', function()
      {
        var value;


     value = testingValue;
     expect(value).toEqual(testingValue);

     var value2;
     value2 = HabitsDone;

     uncheckHabit(0)

     if (HabitsDone != (value2-1))
     {
         value = 2;
     }
    
     expect(value).toEqual(testingValue);
    
                
      });

    xit('verify that when a completed habit is deleted, completed habits decrements', function()
     {
        var value;


     value = testingValue;
     expect(value).toEqual(testingValue);

     var value2;
     value2 = HabitsDone;

     deleteHabit(0)

     if (HabitsDone != (value2-1))
     {
         testingValue = 2;
     }
    
     expect(value).toEqual(testingValue);
    
        
     });


    xit('verify that when a habit is checked and un-checked, the done habit counter goes up then down.', function() 
    {
        var value;


     value = testingValue;
     expect(value).toEqual(testingValue);
  
     var value2;
     value2 = HabitsDone;

     checkHabit(0)
     uncheckHabit(0)

     if (HabitsDone != value2)
     {
         testingValue = 2;
     }
     expect(value).toEqual(testingValue);
    
             
     });
  
  
              
 });
  
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