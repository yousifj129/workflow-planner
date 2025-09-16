const router = require('express').Router()
const { create, index, details, update, deleteProject } = require('../controllers/project')

router.post('/create', create)
router.get('/', index)
router.get('/:id', details)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteProject)

module.exports = router