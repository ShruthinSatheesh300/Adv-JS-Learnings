//A JavaScript Promise object can be:

//Pending:-
//Fulfilled:-
//Rejected:-
//While a Promise object is "pending" (working), the result is undefined.

//When a Promise object is "fulfilled", the result is a value.

//When a Promise object is "rejected", the result is an error object.

let myPromise = new Promise(function(myResolve, myReject) {
   
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    myPromise.then(
        function(value) { /* code if successful */ },
        function(error) { /* code if some error */ }
      );
