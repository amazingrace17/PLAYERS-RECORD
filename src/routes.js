const { Router} = require('express');
const controller = require('./controller');  
const router = Router();

router.get('/', controller.getPlayers)
router.get('/:id', controller.getPlayersById)
router.post('/', controller.addPlayers)
router.delete('/:id', controller.deletePlayers)
 

module.exports  = router;