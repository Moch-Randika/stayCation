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
router.delete("/category",category.deleteCategory)

// endpoint bank
router.get("/bank",bank.indexBank)
router.post("/bank",multer.singleImagePromise,bank.createBank)

router.get("/item",item.indexItem)
router.get("/booking",booking.indexBooking)






module.exports = router;