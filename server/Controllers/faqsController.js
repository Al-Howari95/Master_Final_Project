const FAQsmodel = require('../Models/faqsModel');

const faqsController = {};

faqsController.getAllFAQs = async (req, res) => {
    try {
        const faqs = await FAQsmodel.getAll();
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

faqsController.createFAQ = async (req, res) => {
    try {
    
        const { question, answer } = req.body;
        
        const newFAQ = await FAQsmodel.create(question, answer);
        res.status(201).json(newFAQ);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


faqsController.deleteFAQ = async (req, res) => {
    try {
        const faqId = req.params.id;
        await FAQsmodel.delete(faqId);
        res.status(200).json({ message: 'FAQ deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = faqsController;