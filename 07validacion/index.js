import express from 'express';
import 'dotenv/config';
import { connectDb } from './dataBase/dbConnection.js';
import Usuarios from './schemas/schemaUser.js';

connectDb();
const app = express();

app.get('/usuarios', async (req, res) => {
  const user = await Usuarios.find();

  if (user.lenght === 0) {
    res.status(404).json({ message: 'No se encotraron usuarios' });
  }
  res.status(200).json(user);
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});


