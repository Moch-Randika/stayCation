// controllers Dashboard

// import
const Category = require("../models/Category")


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


