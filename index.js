// back/index.js
const express = require('express');
const app = express();
const port = 5000; // You can change this to another port if needed

// Middleware
app.use(express.json()); // Allows the server to parse JSON requests

// Define a basic route
app.get('/', (req, res) => {
  res.send('Welcome to TrustRxHub API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const { checkDrugInteractions } = require('./services/drugAnalysis');

app.post('/api/check-interactions', async (req, res) => {
    const { drugName } = req.body;
    const data = await checkDrugInteractions(drugName);
    res.json(data);
});
