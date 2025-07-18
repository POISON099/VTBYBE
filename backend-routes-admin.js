const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/payments', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM payments ORDER BY paid_at DESC');
  res.json(rows);
});

router.get('/orders', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM orders ORDER BY created_at DESC');
  res.json(rows);
});

module.exports = router;
