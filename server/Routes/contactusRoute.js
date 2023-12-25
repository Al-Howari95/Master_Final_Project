const express = require('express');
const router = express.Router();

const contactusController = require('../Controllers/contactusController');
const middleware = require("../Middleware/authorization")


router.post('/contactus', contactusController.postcontactus);

//.............................................Dashboard contact us.........................................................................


router.get('/getcontactus', contactusController.getmessages);



router.put('/softDeleteContact/:id', contactusController.softDeleteContact);



module.exports = router;