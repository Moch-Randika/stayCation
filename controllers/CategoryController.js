// controllers Category


// import 
const Category = require("../models/Category");
const validate = require('validator');



// function 
    exports.indexCategory = async (request,response) => {

            try {
                // find data
           const data  = await Category.find();


                // alert 
                const alertMessage = request.flash("alertMessage");
                const alertStatus = request.flash("alertStatus");
                const alert = { message: alertMessage , status: alertStatus}

                
                
           response.render("admin/category/index", {categories : data, alert})


            } catch (error) {
                response.redirect("admin/category", { alert : { message: `${error.message}` , status: "danger"} } )
            }
        
    }

    exports.createCategory = async (request,response) => {

            try{

               const name = validate.trim(request.body.name);     

            
               const existsCategory =  await Category.exists({ name })

               if (existsCategory ==  null ) {

                    // create data .. 
                await Category.create({ name });
                // alert
                request.flash("alertMessage", `Add category "${name}" has been successfully`)
                request.flash("alertStatus", "success")
                response.redirect("/admin/category");

               } else {

               request.flash("alertMessage", `category is "${name}" already exist`);
               request.flash("alertStatus", "warning");
               response.redirect("/admin/category");
               }

            
            }catch(error){
                request.flash("alertMessage", `${error.message}`)
                request.flash("alertStatus", "danger")
                response.redirect("/admin/category");
            }
       
        }

    exports.updateCategory = async (request,response)=> {

            try {


                    const id = validate.trim(request.body.id);
                    const name = validate.trim(request.body.name);
                    const existsCategory  = await Category.exists({ name })
        
                if (existsCategory ==  null ){
                    const categoryId = await Category.findOne({_id : id})
                    categoryId.name = name ;  // find _id : key->id 
                    // overwrite key - name
                    await category.save();
                    request.flash("alertMessage", `category "${name}" changed successfully`);
                    request.flash("alertStatus", "success");
                    response.redirect("/admin/category");
                }else{
                    request.flash("alertMessage", `category is "${name}" already exist`);
                    request.flash("alertStatus", "warning");
                    response.redirect("/admin/category");
                }

            } catch (error) {
                    request.flash("alertMessage", `${error.message}`)
                    request.flash("alertStatus", "danger")
                    response.redirect("/admin/category");
            }

        

    }

    exports.deleteCategory = async (request,response) => {

        try {
            const id = validate.trim(request.body.id);
            const name = validate.trim(request.body.name);
            await  Category.findOne({_id : id}).remove();
            request.flash("alertMessage", `category "${name}" deleted successfully`);
            request.flash("alertStatus", "success");
            response.redirect("/admin/category");
        } catch (error) {
            request.flash("alertMessage", `${error.message}`)
            request.flash("alertStatus", "danger")
            response.redirect("/admin/category");
        }

        
            
       
        


    }


