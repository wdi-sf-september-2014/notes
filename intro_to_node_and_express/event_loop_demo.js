/*
  will multiply a number passed to it
  by two if the passed in number is even 
  and invoke a callback function passing 
  the result of multiplying by 2.
*/
function multiplyByTwoIfEven(num,cb) {
  var time = Math.floor(Math.random() * 1000);
  console.log("About to put a function on event loop", time);
  if (num % 2 === 0) {
    console.log("Even number");
    setTimeout(function(){
     cb(null, num * 2); 
    },time);
  } else {
    console.log("Odd number");
    setTimeout(function(){
      cb(new Error("we only multiply by two if num is even!!"));
    },time);
  }
}

function cb (error, num) {
  if (error) {
    console.log(error.message);
  } else {
    console.log(num);
  }
}

for (var i = 0; i < 10; i++) {
  multiplyByTwoIfEven(i, cb);
}

