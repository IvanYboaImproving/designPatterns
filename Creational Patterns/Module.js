// Let’s begin looking at an implementation of 
// the Module pattern by creating a module 
// that is self-contained.
var testModule = (function () {
    //PRIVATE VARIABLE
    var counter = 0;
  
    return {
    //THE FUNCTIONS INSIDE THE RETURN ARE PUBLIC AND REACHABLE IN GLOBAL SCOPE
      incrementCounter: function () {
        return ++counter;
      },
  
      resetCounter: function () {
        console.log( "counter value prior to reset: " + counter );
        counter = 0;
      }
    };
  
  })();
  
  // Usage:
  // Increment our counter
  testModule.incrementCounter();
  
  // Check the counter value and reset
  // Outputs: 1
  testModule.resetCounter();


//   When working with the Module pattern, 
//   we may find it useful to define a simple 
//   template for getting started with it. 
//   Here’s one that covers namespacing, 
//   public, and private variables:

var myNamespace = (function () {


    // A private counter variable
    var myPrivateVar = 0;
  
    // A private function which logs any arguments
    var myPrivateMethod = function( foo ) {
        console.log( foo );
    };
  
    return {
  
      // A public variable
      myPublicVar: "foo",
  
      // A public function utilizing privates
      myPublicFunction: function( bar ) {
  
        // Increment our private counter
        myPrivateVar++;
  
        // Call our private method using bar
        myPrivateMethod( bar );
  
      }
    };
  
  })();