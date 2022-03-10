// controllers Category


// import 
const Category = require("../models/Category");
const validate = require('validator');
const to = require('to-case')



// function 
exports.indexCategory = async (request,response) => {

            try {
                // find data
                const data  = await Category.find();
                // alert 
                const alertMessage = request.flash("alertMessage");
                const alertStatus = request.flash("alertStatus");
                const alert = { message: alertMessage , status: alertStatus}
                // render
                response.render("admin/category/index", {categories : data, alert})
            } catch (error) { 
                request.flash("alertMessage", `${error.message}`)
                request.flash("alertStatus", "danger")
                // redirect
                response.redirect("admin/category")
            }
    }

exports.createCategory = async (request,response) => {

            try{
               const name = to.capital(validate.trim(request.body.name));     
               const existsCategory =  await Category.exists({ name })
               if (!existsCategory) {
                    // create data .. 
                await Category.create({ name });
                // alert
                request.flash("alertMessage", `Add category has been successfully`)
                request.flash("alertStatus", "success")
                // redirect
                response.redirect("/admin/category");
               } else {
               request.flash("alertMessage", `category is "${name}" already exist`);
               request.flash("alertStatus", "warning");
               // redirect
               response.redirect("/admin/category");
               }
            }catch(error){
                request.flash("alertMessage", `${error.message}`)
                request.flash("alertStatus", "danger")
                // redirect
                response.redirect("/admin/category");
            }
        }

exports.updateCategory = async (request,response)=> {

            try {
                const id= request.body.id
                const name = to.capital(validate.trim(request.body.name));
                const existsCategory  = await Category.exists({ name })
                if (!existsCategory){
                    const categoryId = await Category.findOne({_id : id})
                    categoryId.name = name ;  // find _id : key->id 
                    // overwrite key - name
                    await categoryId.save();
                    request.flash("alertMessage", `category changed successfully`);
                    request.flash("alertStatus", "success");
                    // redirect
                    response.redirect("/admin/category");
                }else{
                    request.flash("alertMessage", `category is "${name}" already exist`);
                    request.flash("alertStatus", "warning");
                    // redirect
                    response.redirect("/admin/category");
                }
            } catch (error) {
                    request.flash("alertMessage", `${error.message}`)
                    request.flash("alertStatus", "danger")
                    // redirect
                    response.redirect("/admin/category");
            }

        

    }

exports.deleteCategory = async (request,response) => {

        try {
            const id = request.body.id;
            const name = request.body.name;
            await  Category.findOne({_id : id}).remove();
            request.flash("alertMessage", `category "${name}" deleted successfully`);
            request.flash("alertStatus", "success");
            // redirect
            response.redirect("/admin/category");
        } catch (error) {
            request.flash("alertMessage", `${error.message}`)
            request.flash("alertStatus", "danger")
            // redirect
            response.redirect("/admin/category");
        }
    }


