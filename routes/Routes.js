const express = require("express");
const router = express.Router();

const {createContactUs,getContactUs} = require('../controller/contact');
const {home} = require('../controller/home')

router.get('/', home);
router.get('/getContactUs', getContactUs)
router.post('/createContact', createContactUs)
// router.put('/:id', updateTask)
// router.delete('/:id', deleteTask) 

module.exports = router