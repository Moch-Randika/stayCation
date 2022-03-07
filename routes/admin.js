const express = require('express');
const router = express.Router();

// controller
const dashboard = require("../controllers/dashboardController")


router.get("/dashboard",dashboard.indexDashboard)



module.exports = router;