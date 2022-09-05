var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.projectsController.getProjects(res);


})

router.post('/', (req, res) => {
    Controllers.projectsController.createProject(req.body, res)

})


module.exports = router;