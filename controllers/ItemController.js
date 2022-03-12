// controllers Dashboard

// import
const Category = require("../models/Category")
const Item = require("../models/item");
const Images = require("../models/Images");
const mongoose = require('mongoose');

// function 
exports.indexItem = async (request,response) => {
    try {
        const items = await Item.find();
        const categories = await Category.find();
        // alert 
        const alertMessage = request.flash("alertMessage");
        const alertStatus = request.flash("alertStatus");
        const alert = { message: alertMessage , status: alertStatus}
        response.render("admin/item/index",{ categories,alert,items, action:"show_item"})
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
        const category = await Category.findOne({ _id: categoryId })
        // cek files
        if( files.length > 0 ){
            const item = await Item.create({
                title,
                price,
                city,
                description: about,
                categoryId : category._id
            })
            category.itemId.push({_id:item._id})
            category.save();
            // image
            for (let index = 0; index < files.length; index++) {
                const image = await Images.create({imageUrl: `/images/${files[index].filename}`})
                item.imageId.push({_id:image._id})
                image.itemId.push({_id: item._id})
                await item.save()
                await image.save()
                
            }
            // alert
            request.flash("alertMessage", `Add Item has been successfully`)
            request.flash("alertStatus", "success")
            // redirect
            response.redirect("/admin/item");
        }else {
            const item = await Item.create({
                title,
                price,
                city,
                description: about,
                categoryId : category._id
            })
            category.itemId.push({_id:item._id})
            category.save();
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

exports.showUpdateItem =  async (request,response) => {

    try {
        const {id} = request.params;
        const item = await Item.findOne({_id:id}).populate({path: "categoryId", model:"Categories",select:"id name"})
        const categories = await Category.find();
        const alertMessage = request.flash("alertMessage");
        const alertStatus = request.flash("alertStatus");
        const alert = { message: alertMessage , status: alertStatus}
        response.render("admin/item/index",{item,alert,categories,action: "editItem"})
        
    } catch (error) {
        request.flash("alertMessage", `${error.message}`)
        request.flash("alertStatus", "danger")
        // redirect
        response.redirect("/admin/item");
    }


}

exports.updatedItem = async (request,response) => {

    try {
    const {id} = request.params;
    const file =  request.files;
    const { title,price,city,categoryId,about } = request.body;
    const item = await Item.findOne({_id:id}).populate({path: "categoryId", model:"Categories",select:"id name"});
         if( file.length > 0 ){


        } else {
            item.title = title
            item.price = price
            item.city = city 
            item.categoryId = categoryId
            item.description = about
            await item.save();
            request.flash("alertMessage", `Update Item has been successfully`)
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



// view images
exports.showImages = async(request,response) => {

    try {
        const {id} = request.params;
        const item = await Item.findOne({_id:id}).populate({path: "imageId", model:"Images",select:"id imageUrl"}).populate({path: "categoryId", model:"Categories",select:"id name"}); // relasi in mongo
        // alert 
        const alertMessage = request.flash("alertMessage");
        const alertStatus = request.flash("alertStatus");
        const alert = { message: alertMessage , status: alertStatus}
        response.render("admin/item/index",{alert,item, action:"show_detail_image"})
    } catch (error) {
        request.flash("alertMessage", `${error.message}`)
        request.flash("alertStatus", "danger")
        // redirect
        response.redirect("/admin/item");
    }


}

