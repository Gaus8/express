const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModels')

//@desc GET all contacts
//@route GET /api/contacts
//@access public
const getContact = asyncHandler( async(req,res) => { 
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts)
});

//@desc CREATE all contacts
//@route CREATE /api/contacts
//@access public
const createContact = asyncHandler( async (req,res) => { 
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error('All fields are Mandatory!')
    }
//ENVIAR A LA BASE DE DATOS
    const crear = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });

    res.status(201).json({crear})
});

//@desc UPDATE individual contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler( async(req,res) => { 
    const consultarIndividuo = await Contact.findById(req.params.id);
    if(!consultarIndividuo){
        res.status(404);
        throw new Error('Contact not found!')
    }
    
    if(consultarIndividuo.user_id.toString() !== req.user.id){
        req.status(403);
        throw new Error ("USer does not have permission")
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updateContact);
});

//@desc Delete individual contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req,res) => { 
    const consultarIndividuo = await Contact.findById(req.params.id);
    if(!consultarIndividuo){
        res.status(400);
        throw new Error('All fields are Mandatory!')
    }
    
    if(consultarIndividuo.user_id.toString() !== req.user.id){
        req.status(403);
        throw new Error ("USer does not have permission")
    }
    const deleteContact = await Contact.findByIdAndDelete(req.params.id); 
    res.status(200).json( `Objeto eliminado: ${deleteContact}`)
});

//@desc GET individual contact
//@route GET /api/contacts/:id
//@access public
const getIndividualContact = asyncHandler( async(req,res) => { 
    const consultarIndividuo = await Contact.findById(req.params.id);
    console.log(typeof consultarIndividuo)
    if(!consultarIndividuo){
        res.status(404);
        throw new Error(`The user with ${req.params.id} doesn't exist`)
    }
    res.status(201).json({consultarIndividuo})
}) ;

module.exports = {
    getContact,
    createContact,
    updateContact,
    deleteContact,
    getIndividualContact
}