const express = require('express');
const mongoose = require('mongoose');
const { v4 } = require('uuid');
const path = require('path');
const cors = require("cors");
require('dotenv').config();

const users = require('./routes/api/Users');
const auth = require('./routes/api/Auth');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.listen(port, () => console.log(`Server started and listening on port ${port}`));

const db = process.env.mongoURI;

//connect to mongoose database
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('Connected to mongoose database'))
    .catch(error => console.log(error));

//routes
app.use('/api/auth', auth);
app.use('/api/users', users);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}