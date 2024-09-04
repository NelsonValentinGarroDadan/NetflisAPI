const app = require('./src/server');
const dbConfig = require('./src/config/dbCon')
const port = process.env.PORT || 3000;
dbConfig()
    .then((res)=>{
        console.log("Se pudo conectar con exito la BD")
        app.listen(port, ()=>{
            console.log("Servidor escuchando en el puerto:", port);
            
        });
    })
        
    .catch((err)=>{
        console.log(err);
    });
