const db = require('../config');
const FAQs = {};

FAQs.getAll = async () => {
    try {
        const query = 'SELECT * FROM public."FAQs"';
        const result = await db.query(query);
        return result.rows;
    } catch (error) {
        throw error;
    }
};

FAQs.create = async (question, answer) => {
    try {
        // const query = 'INSERT INTO public."FAQs"(question, answer) VALUES ($1, $2) RETURNING *';
        
        const result = await db.query('INSERT INTO public."FAQs"(question, answer) VALUES ($1, $2) RETURNING *', [question, answer]);
        return result.rows;
    } catch (error) {
        throw error;
    }
};



FAQs.delete = async (id) => {
    try {
        const query = 'DELETE FROM public."FAQs" WHERE id = $1';
        await db.query(query, [id]);
    } catch (error) {
        throw error;
    }
};

module.exports = FAQs;