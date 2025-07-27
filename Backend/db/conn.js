require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

async function conn() {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
}

module.exports = conn;