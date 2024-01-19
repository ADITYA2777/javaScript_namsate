
function outerfun() {
    let outerfun = "i am from  the outr function"
  
    function innerfun() {
        console.log(outerfun);
    }
    return innerfun;
    
}
// const closures = outerfun()

// closures()

function x() {
    for (let i = 1; i <= 5; i++){

        function colse(x) {
           setTimeout(function () {
             console.log(x);
           }, x * 1000); 
        }
        colse(i)
    }
    console.log("namste aditya ");
}
x()
