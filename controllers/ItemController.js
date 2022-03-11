// controllers Dashboard

// import
const Category = require("../models/Category")
const Item = require("../models/item");
const Images = require("../models/Images");
const mongoose = require('mongoose');

// function 
exports.indexItem = async (request,response) => {
    try {
        const categories = await Category.find();
        // alert 
        const alertMessage = request.flash("alertMessage");
        const alertStatus = request.flash("alertStatus");
        const alert = { message: alertMessage , status: alertStatus}
        response.render("admin/item/index",{ categories,alert})
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
        request.flash("alertMessage", `${error.message}`)
        request.flash("alertStatus", "danger")
        // redirect
        response.redirect("/admin/item");
    }

}


