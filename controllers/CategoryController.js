// controllers Category

// import 
const { request, response } = require("../app");
const Category = require("../models/Category")



// function 
    exports.indexCategory = async (request,response) => {

            try {
                // find data
           const data  = await Category.find();


                // alert 
                const alertMessage = request.flash("alertMessage");
                const alertStatus = request.flash("alertStatus")
                const alert = { message: alertMessage , status: alertStatus}

                
                
           response.render("admin/category/index", {categories : data, alert})


            } catch (error) {
                response.redirect("admin/category")
            }
        
    }

    exports.createCategory = async (request,response) => {

        try{

            const name = request.body.name;     
            // create data .. 
               const alreadyCategory =  await Category.exists({ name : name }) 
               if (alreadyCategory ==  null ) {


                await Category.create({ name });
                // alert
            request.flash("alertMessage", "Add category has been successfully")
            request.flash("alertStatus", "success")
            response.redirect("/admin/category");

               } else {

               request.flash("alertMessage", "category is already exist")
               request.flash("alertStatus", "warning")
               response.redirect("/admin/category");
               }

            
        }catch{
            response.redirect("/admin/category");
        }
       
    }

    exports.updateCategory = async (request,response)=> {

        const id = request.body.id;
        const name = request.body.name;

        // find _id : key->id 
        const category = await Category.findOne({_id : id})
        category.name = name ; // overwrite key - name
        await category.save();
        response.redirect("/admin/category");

    }

    exports.deleteCategory = async (request,response) => {

        const id = request.body.id;
        await  Category.findOne({_id : id}).remove();
        response.redirect("/admin/category");
            
       
        


    }


