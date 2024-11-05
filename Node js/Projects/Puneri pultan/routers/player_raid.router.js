import express from 'express';

import { getPlayerRaid, createPlayerRaid } from '../controllers/player_raid.controller';

const router = express.Router();

router.get('/getPlayerRaid', getPlayerRaid);
router.post('/createPlayerRaid', createPlayerRaid);

export default router;