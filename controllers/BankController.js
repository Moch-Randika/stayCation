// controllers Dashboard

// import 
const Bank = require("../models/Bank");
const validate = require('validator');
const to = require("to-case");
const fs= require("fs/promises");
const path = require("path")


// function 
exports.indexBank = async (request,response) => {
        try {
                // read
                const banks = await Bank.find();
                // alert 
                const alertMessage = request.flash("alertMessage");
                const alertStatus = request.flash("alertStatus");
                const alert = { message: alertMessage , status: alertStatus}
                // render
                response.render("admin/bank/index",{ alert, banks })
        } catch (error) {
                request.flash("alertMessage", `${error.message}`)
                request.flash("alertStatus", "danger")
                response.redirect("/admin/bank")
        }
    
}

exports.createBank = async (request,response) => {

    try {
         
         const nameBank = to.upper(validate.trim(request.body.nameBank))
         const nomorRekening = validate.trim(request.body.nomorRekening)
         const name = to.capital(validate.trim(request.body.name))
         const file = request.file;
         const existsNomorRekening =  await Bank.exists({ nomorRekening })
            if (!existsNomorRekening){
                 //  create bank
                await Bank.create({     
                nameBank,
                nomorRekening,
                name,
                imageUrl: `images/${file.filename}`
                    })
                // alert
                request.flash("alertMessage", `add Bank has been successfully`);
                request.flash("alertStatus", "success");
                // redirect
                response.redirect("/admin/bank")
            } else {
                    // alert
                request.flash("alertMessage", `Nomor Rekening is "${nomorRekening}" already exist`);
                request.flash("alertStatus", "success");
                // redirect
                response.redirect("/admin/bank")
            }
    } catch (error) {
            request.flash("alertMessage", `${error.message}`)
            request.flash("alertStatus", "danger")
            response.redirect("/admin/bank")
    }
}

exports.updateBank = async (request,response) => {

    try {
        const id =  request.body.id;
        const nameBank = to.upper(validate.trim(request.body.nameBank));
        const nomorRekening = validate.trim(request.body.nomorRekening);
        const name = to.capital(validate.trim(request.body.name));
        const file = request.file;
        const existsNomorRekening =  await Bank.exists({ nomorRekening })
        if(!existsNomorRekening || existsNomorRekening._id.valueOf() == id  ){
            const bank = await Bank.findOne({_id:id});
                if(!file){
                        bank.nameBank = nameBank;
                    bank.nomorRekening = nomorRekening;
                    bank.name = name;
                    await bank.save();
                    request.flash("alertMessage", `Bank changed successfully`);
                    request.flash("alertStatus", "success");
                     // redirect
                    response.redirect("/admin/bank");
                }else{
                    // delete old file 
                        await fs.unlink(path.join(`public/${bank.imageUrl}`))
                        bank.nameBank = nameBank;
                        bank.nomorRekening = nomorRekening;
                        bank.name = name;
                        bank.imageUrl = `images/${file.filename}`;
                        await bank.save();
                        request.flash("alertMessage", `Bank changed successfully`);
                        request.flash("alertStatus", "success");
                         // redirect
                        response.redirect("/admin/bank");
                }
        }else{
        // alert
        request.flash("alertMessage", `Nomor Rekening is "${nomorRekening}" already exist`);
        request.flash("alertStatus", "success");
        // redirect
        response.redirect("/admin/bank")
        }
    } catch (error) {
         request.flash("alertMessage", `${error.message}`)
        request.flash("alertStatus", "danger")
        response.redirect("/admin/bank")
    }
    
    




}


