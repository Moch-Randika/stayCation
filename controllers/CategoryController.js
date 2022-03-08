// controllers Category

// import 
const Category = require("../models/Category")



// function 
    exports.indexCategory = async (request,response) => {

        // find data
           const data  = await Category.find();
        
        response.render("admin/category/index", {categories : data})
    }

    exports.addCategory = async (request,response) => {

           
        const name = request.body.name;     
        // create data ..   
        await Category.create({ name });
        response.redirect("/admin/category");
    }


