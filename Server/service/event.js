const mongoose=require('mongoose')


const Dairy = mongoose.model("Dairy", {
    eventName: String,
    eventDate: String,
    userId: String
  
   
})

module.exports=Dairy