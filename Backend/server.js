require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


const boardRoutes = require('./routes/boardRoutes');
const taskRoutes = require('./routes/taskRoutes');


const app = express();


connectDB();


app.use(cors());
app.use(express.json());

app.use('/boards', boardRoutes);
app.use('/', taskRoutes);


app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/', (req, res) => res.send('Team Collaboration Board API is running'));


// 404
app.use((req, res) => {
res.status(404).json({ message: 'Route not found' });
});


// Error handler
app.use((err, req, res, next) => {
console.error(err);
res.status(err.status || 500).json({ message: err.message || 'Server error' });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));