const express = require('express');
const router = express.Router();

// controller
const dashboard = require("../controllers/DashboardController")
const category = require("../controllers/CategoryController")
const bank = require("../controllers/BankController")
const item = require("../controllers/ItemController")
const booking  = require("../controllers/BookingController");

// middleware
const multer = require("../controllers/middleware/multer")


// routes

// dashboard
router.get("/dashboard",dashboard.indexDashboard)

// endpoint category
router.get("/category",category.indexCategory)
router.post("/category",category.createCategory)
router.put("/category",category.updateCategory)
router.delete("/category/:id",category.deleteCategory)

// endpoint bank
router.get("/bank",bank.indexBank)
router.post("/bank",multer.singleFilePromise,bank.createBank)
router.put("/bank",multer.singleFilePromise,bank.updateBank)
router.delete("/bank/:id",bank.deleteBank);

// endpoint item
router.get("/item",item.indexItem)
router.post("/item",multer.MultipleFilePromise,item.createdItem)
router.get("/item/images/:id",item.showImages)


router.get("/booking",booking.indexBooking)






module.exports = router;