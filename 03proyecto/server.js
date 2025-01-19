const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const connectDb = require('./config/dbConnection')

connectDb();
const app = express();
const PORT = process.env.PORT || 5000;

//USO DE EXPRESS.JSON PARA RECIBIR DATA
app.use(express.json());

//USAR RUTAS CON EL MIDDLEWARE
//PRIMERO LA RUTA COMUN PARA EL ROUTER; LUEGO SE IMPORTA
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler);
 
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});