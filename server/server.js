const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors({
  origin: "https://loanaptech-ten.vercel.app",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/loans', require('./routes/loans'));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Home route
app.get('/', (req, res) => {
  res.send('Server works');
});

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect DB after server starts
connectDB();