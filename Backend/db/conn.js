const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://nirajkumar232:niraj123@cluster0.y3up3u5.mongodb.net/notes';

async function conn(){
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
}

module.exports = conn;