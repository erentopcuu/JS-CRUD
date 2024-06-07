const express = require("express")
const mongoose = require("mongoose")
const Customer = require("../models/CustomerModel")
const CustomerRouter = express.Router()

CustomerRouter.get("/customers",async(req,res)=>{
    try {
        const allCustomers = await Customer.find([])
        res.status(200).send({status:true,message:"All Customers",data: allCustomers})
    } catch (error) {
        res.status(404).send({status:false,message:error.message})
    }
})
CustomerRouter.post("/customers",async(req,res)=>{
    try {
        let newCustomer = req.body
        let savedData = await Customer.create(newCustomer)
        res.status(200).send({
            status:true,
            data:savedData,
            message : "Customer Added"
        })
    } catch (error) {
        res.status(404).send({status:false,message: error.message})
    }
})

CustomerRouter.delete("/customers",async(req,res)=>{
    try {
        let {id} = req.body
        const deletedCustomer = await Customer.findByIdAndDelete(id)
        if (!deletedCustomer) {
        return res.status(404).send({status:false,message: "Customer not deleted"})
        }
        res.status(200).send({status:true,message: "Customer Deleted"})
    } catch (error) {
        res.status(404).send({status:false,message: error.message})
    }
})
CustomerRouter.put("/customers",async(req,res)=>{
    try {
        let data=req.body
        if (!data._id) {
            return res.status(404).send({status:false,message: "Update edielecek Id gönderilemedi"})
        }
        let updatedData = await Customer.findByIdAndUpdate(data._id,data)
        console.log(updatedData)
        res.status(200).send({status:true,message:"Customer Info Updated"})
    } catch (error) {
        return res.status(404).send({status:false,message: error.message})
    }
})





module.exports = CustomerRouter