const contactusModel = require('../Models/contactusModel');



async function postcontactus(req, res) {
    // const id = req.user.id;

    const { id, name, email, message } = req.body;
    // console.log(id, name, email, message)
    try {
        const result = await contactusModel.contactus(id, name, email, message);
        // console.log(result);
        res.status(201).json({ message: 'Contact us form data saved successfully!' });
    } catch (error) {
        console.log(error);
        res.status(401).json("error in contact us controller");
    }
  };


//.............................................Dashboard contact us.........................................................................

async function getmessages(req, res){   
    try{
        console.log("contactus controller");
        const get = await contactusModel.gatall();
        res.status(200).json(get);
    }catch(error){
        res.status(500).json(error);
    }
}



async function softDeleteContact(req, res) {
    try {
        const contactId = req.params.id;

        // Update the 'is_deleted' column to mark the contact as deleted
        const softDeleteResult = await contactusModel.softDeleteContact(contactId);

        res.status(200).json({ message: 'Contact soft deleted successfully.' });
    } catch (error) {
        res.status(500).json(error);
    }
}



  module.exports ={
    postcontactus,
    getmessages,
    softDeleteContact
};