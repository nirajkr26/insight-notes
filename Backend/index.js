const express = require('express');
const app = express();
const cors = require('cors');
const conn = require('./db/conn.js');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const port = 3000;

app.use(cors());
app.use(express.json());
conn();
app.use('/api/user', userRoutes);
app.use('/api/note', noteRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});