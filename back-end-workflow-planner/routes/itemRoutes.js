const router = require('express').Router()
const {create, index, details, update, deleteItem, projectItems} = require('../controllers/item')

router.post('/create', create)
router.get('/', index)
router.get('/:projectId', projectItems)

router.get('/:id', details)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteItem)

module.exports = router