const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const departments = require('./routes/departments');
const courses = require('./routes/courses');
const timetable = require('./routes/timetable')
const room = require('./routes/roomRoutes');
const cookieParser = require('cookie-parser');
dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend URL
    credentials: true, // Allow credentials
}));

app.use(express.json());
app.use(cookieParser());



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
app.use('/home/timetable', timetable);
app.use('/home/rooms',room);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
