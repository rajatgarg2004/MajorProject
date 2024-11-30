const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const timetable = require('./routes/timetable');
const departments = require('./routes/departments');
const courses = require('./routes/courses');
const cookieParser = require('cookie-parser');
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend URL
    credentials: true, // Allow credentials
}));

// Set COOP and COEP headers
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
});

// Authentication routes
app.use('/api/auth', authRoutes);
app.use('/home/timetable', timetable);
app.use('/home/courses', courses);
app.use('/home/departments', departments);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
