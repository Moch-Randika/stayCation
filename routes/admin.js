const express = require('express');
const router = express.Router();

// controller
const dashboard = require("../controllers/DashboardController")
const category = require("../controllers/CategoryController")
const bank = require("../controllers/BankController")
const item = require("../controllers/ItemController")
const booking  = require("../controllers/BookingController")


// routes
router.get("/dashboard",dashboard.indexDashboard)
router.get("/category",category.indexCategory)
router.get("/bank",bank.indexBank)
router.get("/item",item.indexItem)
router.get("/booking",booking.indexBooking)





module.exports = router;