import express, { json } from 'express';
import 'dotenv/config';
import { connectDb } from './dataBase/dbConnection.js';
import Usuarios from './schemas/schemaUser.js';
import { z } from 'zod';
import bcrypt from 'bcrypt';

connectDb();
const app = express();
app.use(json());

app.get('/usuarios', async (req, res) => {
  const user = await Usuarios.find();
  if (user.length === 0) {
    res.status(404).json({ message: 'Error, no se encontraron usuarios' });
  }
  res.status(200).json(user);
});

app.post('/usuarios', async (req, res) => {
  const result = validateUser(req.body);
  if (result.error) {
    res.status(400).json({ error: JSON.parse(result.error.message) });
  }
  const { username, email, password } = result.data;
  if (!username || !email || !password) {
    res.status(400).json({ message: 'Todos lo campost son requeridos' });
  }
  // const validar = Usuarios.findOne({ email });
  // if (validar) {
  //   console.log(validar.email);
  // }
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    username,
    email,
    password: hashedPassword
  };
  const registrar = await Usuarios.create(newUser);
  res.status(201).json(registrar);
});



app.post('/usuarios', async (req, res) => {
  try {
    // Validamos los datos del cuerpo de la solicitud
    const result = schemaUsers.safeParse(req.body);

    // Si la validación falla, enviamos un error
    if (!result.success) {
      return res.status(400).json({ error: result.error.errors });
    }

    const { username, email, password } = result.data;

    // Verifica si el correo ya está registrado (descomentado)
    const existingUser = await Usuarios.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Genera el hash de la contraseña
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Crea el nuevo usuario
    const newUser = {
      username,
      email,
      password: hashedPassword
    };

    // Guarda el nuevo usuario en la base de datos
    const registrar = await Usuarios.create(newUser);
    return res.status(201).json(registrar);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Hubo un error al registrar el usuario' });
  }
});
const PORT = process.env.PORT || 5000;


const schemaUsers = z.object({
  username: z.string({
    invalid_type_error: 'El nombre debe ser string',
    message: 'El campo es requerido'
  }),
  email: z.string({
    invalid_type_error: 'El correo debe ser institucional'
  }).endsWith('@ucundi.com'),
  password: z.string()
});


function validateUser (input) {
  return schemaUsers.safeParse(input);
}
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});


