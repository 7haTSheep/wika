const express = require('express');
const router = express.Router();
const Contact = require('../controllers/Contact.controller');




router.get("/getAll", Contact.getAllContact);
router.post("/create", Contact.createContact);
router.patch("/update", Contact.updateContact);
router.get("/get", Contact.getContactById);
router.delete("/del", Contact.deleteContactById);


module.exports = router