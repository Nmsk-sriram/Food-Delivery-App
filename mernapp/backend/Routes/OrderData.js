// // const express = require('express')
// // const router = express.Router()
// // const Order=require('../models/Orders')



// // router.post('/orderData', async (req, res) => {
// //     let data = req.body.order_data
// //     await data.splice(0,0,{Order_date:req.body.order_date})
// //     // console.log("1231242343242354",req.body.email)

// //     //if email not exisitng in db then create: else: InsertMany()
// //     let eId = await Order.findOne({ 'email': req.body.email })    
// //     console.log(eId)
// //     if (eId===null) {
// //         try {
// //             // console.log(data)
// //             // console.log("1231242343242354",req.body.email)
// //             await Order.create({
// //                 email: req.body.email,
// //                 order_data:[data]
// //             }).then(() => {
// //                 res.json({ success: true })
// //             })
// //         } catch (error) {
// //             console.log(error.message)
// //             res.send("Server Error", error.message)

// //         }
// //     }

// //     else {
// //         try {
// //             await Order.findOneAndUpdate({email:req.body.email},
// //                 { $push:{order_data: data} }).then(() => {
// //                     res.json({ success: true })
// //                 })
// //         } catch (error) {
// //             // console.log(error.message)
// //             res.send("Server Error", error.message)
// //         }
// //     }
// // })
// // module.exports=router;



// const express = require('express');
// const router = express.Router();
// const Order = require('../models/Orders');

// router.post('/orderData', async (req, res) => {
//     let data = req.body.order_data;
//     await data.splice(0, 0, { Order_date: req.body.order_date });

//     try {
//         // Check if email exists in the database
//         let eId = await Order.findOne({ 'email': req.body.email });
//         console.log(eId);

//         if (eId === null) {
//             // If email does not exist, create a new order
//             await Order.create({
//                 email: req.body.email,
//                 order_data: [data]
//             });
//             res.status(201).json({ success: true });
//         } else {
//             // If email exists, update the existing order with new data
//             await Order.findOneAndUpdate(
//                 { email: req.body.email },
//                 { $push: { order_data: data } }
//             );
//             res.status(200).json({ success: true });
//         }
//     } catch (error) {
//         console.error('Error placing order:', error.message);
//         res.status(500).send({ error: 'Server Error: ' + error.message });
//     }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    data.splice(0, 0, { Order_date: req.body.order_date });

    try {
        // Check if email exists in the database
        let eId = await Order.findOne({ 'email': req.body.email });

        if (!eId) {
            // If email does not exist, create a new order
            await Order.create({
                email: req.body.email,
                order_data: [data]
            });
        } else {
            // If email exists, update the existing order with new data
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
            );
        }

        // Send a 201 status after the order is successfully placed or updated
        res.status(201).json({ success: true, message: "Order placed successfully" });
    } catch (error) {
        console.error('Error placing order:', error.message);
        res.status(500).send({ error: 'Server Error: ' + error.message });
    }
});



router.post('/myorderData', async (req, res) =>{
  try {
    let myData=await Order.findOne({'email':req.body.email})
    res.json({orderData:myData})
  } catch (error) {
    res.send("server error",error.message)
  }
})

module.exports = router;
