import './App.js'
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
