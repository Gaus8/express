import express from 'express';
import 'dotenv/config';
import expressEjsLayouts from 'express-ejs-layouts';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('HELLO WORLD');
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
});