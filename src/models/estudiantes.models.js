const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DatosSchema= new Schema({

    nombres:String,
    apellidos:String,
    universidad:String,
    docenteAsignado:String,
    date:{type:Date,default:Date.now}

})

module.exports= mongoose.model('dato',DatosSchema)