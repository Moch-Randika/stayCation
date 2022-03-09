// controllers Dashboard

// import 
const Bank = require("../models/Bank");
const validate = require('validator');
// function 
exports.indexBank = async (request,response) => {
    try {
                    // read
                const banks = await Bank.find();

                // alert 
                const alertMessage = request.flash("alertMessage");
                const alertStatus = request.flash("alertStatus");
                const alert = { message: alertMessage , status: alertStatus}


                response.render("admin/bank/index",{ alert, banks })
    } catch (error) {
        request.flash("alertMessage", `${error.message}`)
        request.flash("alertStatus", "danger")
        response.redirect("/admin/bank")
    }
    
}

exports.createBank = async (request,response) => {

    try {
     
         const {nameBank, nomorRekening,name} = request.body;  
         
        //  create bank
        await Bank.create({ 
            nameBank,
            nomorRekening,
            name,
            imageUrl: `images/${request.file.filename}`
        })

        // alert
        request.flash("alertMessage", `add Bank "${nameBank} - ${nomorRekening} -  ${name}" has been successfully`);
        request.flash("alertStatus", "success");


        response.redirect("/admin/bank")
    } catch (error) {
        request.flash("alertMessage", `${error.message}`)
        request.flash("alertStatus", "danger")
        response.redirect("/admin/bank")
    }

}


