const EventEmitter = require("events");

// fs,os in event it is differnt because it is class

const event  = new EventEmitter();  

event.on("sayMyName",()=>
{
  console.log("my name is vaibhav");
});


event.on("sayMyName",()=>
{
  console.log("my name is vaibhav");
});


event.on("sayMyName",()=>
{
  console.log("my name is vaibhav");
});


event.on("checkpage",(sc,msg)=>
{
   console.log(`status code is ${sc} is ${msg}`);
});



 event.emit("sayMyName");


event.emit("checkpage",200,"ok");

// here emit means creating your own events like hover on click etc 
// and "on" defines its impelemenation that what a particular emit will do