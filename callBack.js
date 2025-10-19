const { resolve } = require("path");

/* callBack Hell Example
function TaskOne(callback) {
setTimeout(()=>{
console.log("TaskOne is Completed")
callback()
}, )

}
function TaskThree(callback){
      setTimeout(()=> {
            console.log("TaskThree is Completed")
            callback();
      },)
}
function TaskTwo(callback) {
 setTimeout(()=> {
    console.log("TaskTwo is Completed")
    callback()
 }, )

}
TaskOne( function(){
      TaskTwo(function(){
             TaskThree(()=> console.log("All of the Taskes are Finshied"))
      })
}
)*/
/* Using Promisies
var p = new Promise(function(resolve, reject){
      setTimeout(()=>{
            console.log("TaskOne is Completed")
      }, 10)
      resolve();
})
p.then(function(){
      setTimeout(()=> {
            console.log("TaskTwo is Completed")
      }, 10)
      resolve()
}).then(function(){
      setTimeout(()=> {
            console.log("TaskThree is Completed")
      }, 10)
      resolve()
}).then(function(){
      setTimeout(()=> {
            console.log("All Task aree completed")
      }, 10)
})
      */
async function TaskOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Complete TaskOne");
            resolve();
        }, 1000);
    });
}
function TaskTwo(){
      console.log('Complete TaskedTwo')
}
function TaskThree(){
      console.log("Complete TaskThree")
}
async function getTasks(){
       await TaskOne();
       await TaskTwo();
       await TaskThree();
       console.log("All Task are completed");
}
getTasks()
console.log('Fuck Off')


