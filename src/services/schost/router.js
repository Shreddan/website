const Database = require('./database.js');

const express = require('express');
const router = express.Router();
const fs = require('fs');

router.use(express.static(require('../../../storage/schost/storageHelper.js').path));

module.exports = router;
