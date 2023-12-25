const express = require('express');
const router = express.Router();
const userProfileController = require('../Controllers/userprofileController');
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const middleware = require("../Middleware/authorization")
const dashboardController = require('../Controllers/dashboardController');


router.get('/userInfo' ,middleware.authorize, userProfileController.information);
router.post('/adduserimage',middleware.authorize,userProfileController.userimage);
router.put('/updateuserimage', middleware.authorize,dashboardController.imageProduct, userProfileController.updateUserImage);
router.get('/wishlist',middleware.authorize, userProfileController.wishlist);
router.get('/history',middleware.authorize, userProfileController.history);
router.post('/addwishlist/:id',middleware.authorize, userProfileController.addtowishlist);
router.put('/edituser',middleware.authorize, userProfileController.editInformation);
router.delete('/editwishlist/:id',middleware.authorize, userProfileController.editWishlist);
router.post('/logout', userProfileController.logout);



module.exports = router;