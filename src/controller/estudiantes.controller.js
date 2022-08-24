const EstudianteCtrl={}
const Estudiante = require('../models/estudiantes.models')



EstudianteCtrl.crear= async(req,res)=>{

    const {nombres,apellidos,universidad,docenteAsignado}= req.body
    const NuevoEstudiante= new Estudiante({
        nombres,
        apellidos,
        universidad,
        docenteAsignado
    })

    const respuesta = await NuevoEstudiante.save()
    res.json({
        mensaje: 'Estudiante creado',
        respuesta
    })
}

EstudianteCtrl.listar= async(req,res)=>{
    const respuesta = await Estudiante.find()
    res.json(respuesta)
}

EstudianteCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta =await Estudiante.findById({_id:id})
    res.json(respuesta)
}

EstudianteCtrl.listarNombre = async (req,res)=>{
    const {titulo} = req.params;
    const respuesta = await Estudiante.find({titulo:{$regex:"^"+ titulo,$options:'i'}})
    res.json(respuesta)
}


EstudianteCtrl.actualizarEstudiante= async(req,res)=>{
    const id = req.params.id 
    await Estudiante.findByIdAndUpdate({_id:id},req.body)
    const respuesta =await Estudiante.findById({_id:id})
    res.json({
        mensaje: 'estudiante actualizado',
        respuesta
    })
} 

EstudianteCtrl.elimarEstudiante = async(req,res)=>{
    const id = req.params.id
    await Estudiante.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Estudiante eliminado'
    })
}


module.exports= EstudianteCtrl