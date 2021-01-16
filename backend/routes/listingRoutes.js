const express = require('express');

const listingControllers = require('../controllers/listingControllers');

const router = express.Router();

router.get('/address', listingControllers.getListingsByAddress);
router.post('/donate', listingControllers.donate);
router.post('/createListing', listingControllers.createListing);

module.exports = router;
