// controllers Category

// import 
const { request, response } = require("../app");
const Category = require("../models/Category")



// function 
    exports.indexCategory = async (request,response) => {

        // find data
           const data  = await Category.find();
        
        response.render("admin/category/index", {categories : data})
    }

    exports.createCategory = async (request,response) => {

           
        const name = request.body.name;     
        // create data ..   
        await Category.create({ name });
        response.redirect("/admin/category");
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


