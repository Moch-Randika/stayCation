// controllers Dashboard

// import
const Category = require("../models/Category")
const Item = require("../models/item");
const Images = require("../models/Images");
const mongoose = require('mongoose');

// function 
exports.indexItem = async (request,response) => {
    try {
        const items = await Item.find().populate({path: "imageId",select:"id imageUrl", model:"Images"}).populate({path: "categoryId", select:"id name", model:"Categories"}); // relasi in mongo
        const categories = await Category.find();
        // alert 
        const alertMessage = request.flash("alertMessage");
        const alertStatus = request.flash("alertStatus");
        const alert = { message: alertMessage , status: alertStatus}
        response.render("admin/item/index",{ categories,alert,items, action:"showItem"})
    } catch (error) {
        request.flash("alertMessage", `${error.message}`)
        request.flash("alertStatus", "danger")
        // redirect
        response.redirect("/admin/item");
    }
   
}

exports.createdItem = async (request,response) => {

    try {
        const { title,price,city,categoryId,about } = request.body
        const files = request.files;
        // cek files
        if( files.length > 0 ){
            const category = await Category.findOne({ _id: categoryId })
            const item = await Item.create({
                title,
                price,
                city,
                description: about,
                categoryId : category._id
            })
            
            category.itemId.push({_id:item._id})
            category.save();

            for (let index = 0; index < files.length; index++) {

                const image = await Images.create({imageUrl: `/images/${files[index].filename}`})
                item.imageId.push({_id:image._id})
                await item.save()
                
            }
            // alert
            request.flash("alertMessage", `Add Item has been successfully`)
            request.flash("alertStatus", "success")
            // redirect
            response.redirect("/admin/item");
        }


        
    } catch (error) {
       
    }

}

// view images
exports.showImages = async(request,response) => {

    try {
        const {id} = request.params;
        const item = await Item.findOne({_id:id}).populate({path: "imageId", model:"Images",select:"id imageUrl"}) // relasi in mongo
        // alert 
        const alertMessage = request.flash("alertMessage");
        const alertStatus = request.flash("alertStatus");
        const alert = { message: alertMessage , status: alertStatus}
        response.render("admin/item/index",{alert,item, action:"showImage"})
    } catch (error) {
        request.flash("alertMessage", `${error.message}`)
        request.flash("alertStatus", "danger")
        // redirect
        response.redirect("/admin/item");
    }


}

