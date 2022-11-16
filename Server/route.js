const express=require('express')

const router=express.Router()

const Dairy=require('./service/event')



const objectId=require('mongoose').Types.ObjectId


router.post('/event',(req,res)=>{
    let dairy=new Dairy({
        eventName:req.body.eventName,
        eventDate:req.body.eventDate,
        userId:req.body.userId
       
    })
    dairy.save((err,doc)=>{
        if(err){
            console.log("Error",err)
        }else{
            res.send(doc)
        }
    })
})
//GET
router.get('/add',(req,res)=>{
    Dairy.find((err,doc)=>{
        if(err){
            console.log("error",err)
        }else{
            res.send(doc)
        }
    })
})
//DELETE

router.delete('/:id',(req,res)=>{
    if(objectId.isValid(req.params.id)){
        Dairy.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(err){
                console.log("error event id",err)
            }else{
                res.send(doc)
                
            }
        })

    }else{
        return res.status(400).send(`No record found with ID ${req.params.id}`)
    }
})

// router.post('/deleteadd',(req,res)=>{
//     let delete_event=new Delete_event({
//         eventName:req.body.eventName,
//         eventDate:req.body.eventDate,
//         userId:req.body.userId
//     })
//     delete_event.save((err,doc)=>{
//         if(err){
//             console.log("Error",err)
//         }else{
//             res.send(doc)
//         }
//     })
// })

// router.get('/trash',(req,res)=>{
//     Delete_event.find((err,doc)=>{
//         if(err){
//             console.log("error",err)
//         }else{
//             res.send(doc) 

//         }
//     })
// })

module.exports=router
