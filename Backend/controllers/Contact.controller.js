const { Router } = require('express')
const { JSONResponse } = require('../lib/helper');
const ContactModel = require('../models/Contact.model');


exports.getAllContact = async (res) => {
    try{
        const Contact = await ContactModel.find()
            JSONResponse.success(res, 'Success', Contact, 200)
    } catch (err) {
        JSONResponse.error(res, "Faliure Calling Contact", err, 500)
    }


}

exports.createContact = async (req, res) => {
    try{
        const Contact = await ContactModel.create(req.body)
            JSONResponse.success(res, 'Success', Contact, 200)
    } catch (err) {
        JSONResponse.error(res, "Faliure creating Contact", err, 500)
    }

}

exports.getContactById = async (req, res) => {
    try{
        const Contact = await ContactModel.findById(req.params.id)
            JSONResponse.success(res, 'Success', Contact, 200)
    } catch (err) {
        JSONResponse.error(res, "Faliure finding Contact", err, 500)
    }

}

exports.updateContact = async (req, res) => {
    try{
        const Contact = await ContactModel.findByIdAndUpdate(req.params.id, req.body)
            JSONResponse.success(res, 'Success', Contact, 200)
    } catch (err) {
        JSONResponse.error(res, "Update Failed", err, 500)
    }

}

exports.deleteContactById = async (req, res) => {
    try{
        const Contact = await ContactModel.findById(req.params.id)
            JSONResponse.success(res, 'Success', Contact, 200)
    } catch (err) {
        JSONResponse.error(res, "delete Failed", err, 500)
    }

}