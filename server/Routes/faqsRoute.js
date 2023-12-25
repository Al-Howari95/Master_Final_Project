const faqsController = require('../Controllers/faqsController');
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
app.use(express.json());
app.use(cors());



router.get('/FAQs',faqsController.getAllFAQs)

router.post('/FAQs',faqsController.createFAQ)

router.delete('/FAQs/:id', faqsController.deleteFAQ);



module.exports = router;