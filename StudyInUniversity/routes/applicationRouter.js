var express = require('express');
var path = require('path');
var router = express.Router();
var applicationController = require("../controllers/applicationController");


router.get("/home", applicationController.getHome);

router.get("/about", applicationController.getAbout);

router.get("/signup", applicationController.getSignup);

router.get("/login", applicationController.getLogin);

router.get("/subjects", applicationController.getSubjects);

module.exports = router;