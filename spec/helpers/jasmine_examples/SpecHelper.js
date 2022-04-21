beforeEach(function () {
  jasmine.addMatchers({
    toInput: function () {
      return {
        compare: function (actual, expected) {
          var user = actual;

          return {
            pass: user.currentlyAddingTask && user.currentlyCreatingQuote === expected && user.createdQuote && user.addedTask
          }
        }
      };
    }
  });
});
