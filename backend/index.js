const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Failed to connect to MongoDB", err));

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to Campus Connect API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});