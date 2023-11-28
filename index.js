function x() {
    var b = 11;
   return function y() {
    //  console.log(x);
   };
}
// var z= x()
// console.log(z);
// z()



function x() {
  for (var i = 1; i <= 10; i++){
    function close(v) {
      setTimeout(function () {
        console.log(v);
      }, v * 1000);
    }
    close(i)
  }
  // console.log("javascript aditya jain");
}
// x()


function outer(b) {

  function inner() {
    console.log(a,b,c);
  }
  var a = 10 
  let c = 12*3
  return inner
  
}
// var colse = outer("heeloworld")
// colse()


function counter () {
  var count = 0
    this.inceramentCounter = function() {
      count++;
      console.log(count);
    }
    this.deceramentCounter = function() {
      count--;
      console.log(count);
    }
}

var counter1 = new counter()

counter1.inceramentCounter()
counter1.inceramentCounter()
counter1.inceramentCounter()
counter1.deceramentCounter()
counter1.deceramentCounter()
counter1.deceramentCounter()




