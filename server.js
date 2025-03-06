const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hola mun idaira :3');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
