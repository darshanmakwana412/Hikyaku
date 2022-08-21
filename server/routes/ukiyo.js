const express = require('express');
const {
    createUkiyo, getUkiyos, getUkiyo, deleteUkiyo, updateUkiyo,
} = require('../controllers/ukiyoController');
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

router.use(requireAuth)

router.get('/', getUkiyos);

router.post('/', createUkiyo);

router.get('/:id', getUkiyo);

router.delete('/:id', deleteUkiyo);

router.patch('/:id', updateUkiyo);

module.exports = router;