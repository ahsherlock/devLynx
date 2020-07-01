const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API RUNNING..'));

// if no port, listen on port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`));
