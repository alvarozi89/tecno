//creamos nuestra bd
const mongoose =require('mongoose')

URI =('mongodb+srv://sistemas2021:sistemas@cluster0.zsev0.mongodb.net/tecno?retryWrites=true&w=majority')


mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then (db => console.log('Base de datos conectada', db.connection.name))
.catch(error => console.log(error))

module.exports= mongoose