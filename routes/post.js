const express = require('express');
const router = express.Router();

const postcontroller=require('../controllers/post_controller');


router.get('/prop',postcontroller.prop);




module.exports=router;
