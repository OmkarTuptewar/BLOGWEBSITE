const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { chats } = require('./data/data');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS

app.get('/api/blogs', (req, res) => {
    res.send(chats); // Ensure you're sending JSON data
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
