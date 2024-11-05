import express from 'express';

import { createLocation, getLoction, updateLocation, deleteLocation, getLocationDataById } from '../controllers/location.controller';

const router = express.Router();

router.post('/createlocation', createLocation);
router.get('/getlocation', getLoction);
router.put('/updatelocation/:id', updateLocation);
router.delete('/deletelocation/:id', deleteLocation);
router.get('/getlocation/:id', getLoction);

export default router