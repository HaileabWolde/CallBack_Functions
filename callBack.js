function TaskOne(callback) {
setTimeout(()=>{
console.log("TaskOne is Completed")
}, 10)
callback()
}
function TaskTwo(callback) {
 setTimeout(()=> {
    console.log("TaskTwo is Completed")
 }, 50)
 callback()
}
TaskOne( function(){
      TaskTwo(()=> console.log("Both Functions are Completed"))
}
)



