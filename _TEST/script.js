let promise = new Promise(function(resolve, reject) {
  //resolve("done");
  reject("error");
});
 
 
promise
.then((a) => alert(a))
.catch((e) => console.log(e));