const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(require('./routes/paystackWebhook'));
app.use('/api/admin', require('./routes/admin'));

app.get('/', (req, res) => res.send('Backend is running'));

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running...');
});
