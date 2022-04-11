describe("newNote", function() {  
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
