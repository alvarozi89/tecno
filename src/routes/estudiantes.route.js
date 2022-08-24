const {Router}= require('express')
const router = Router()
const EstudianteCtrl = require('../controller/estudiantes.controller')

router.post('/crearEstudiante',EstudianteCtrl.crear)
router.get('/listar',EstudianteCtrl.listar)
router.put('/actualizar/:id',EstudianteCtrl.actualizarEstudiante)
router.delete('/eliminar/:id',EstudianteCtrl.elimarEstudiante)



module.exports = router