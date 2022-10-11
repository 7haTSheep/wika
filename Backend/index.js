require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 9214

app.use(cors( ))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
const ContactRouter = require('./Routes/Contact.route')


// Routes
app.use('/Contact', ContactRouter)

// Start Express
mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true }, (err) => {
    if (err) throw err

    console.log('MongoDB Connected')

    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost${PORT}`)
    })
})