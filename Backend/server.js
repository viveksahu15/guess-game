const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

mongoose.connect('mongodb+srv://leader_user:leader_pass@cluster0.ntakzq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => app.listen(5000, () => console.log("Server running")))
  .catch(err => console.log(err));
