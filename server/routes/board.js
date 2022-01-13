const express = require("express");
const router = express.Router();
const boardController = require('../controllers/boardcon');

router.get('/', boardController.getBoard);
router.post('/', boardController.writeBoard);
router.put('/', boardController.updateBoard);
router.delete('/', boardController.deleteBoard);

router.put('/hit', boardController.hitInc)

router.get('/comment', boardController.getComment);
router.post('/comment', boardController.writeComment);
// router.put('/comment', boardController.updateComment);
router.delete('/comment', boardController.deleteComment);



module.exports = router;