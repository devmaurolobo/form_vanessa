const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'C:/Users/Mauro Jr/Documents/projetos/form/src/formulario_plugsign' });

// Configuração do CORS
app.use(cors());

app.post('/save-file', upload.single('file'), (req, res) => {
  // Lógica para salvar o arquivo na pasta desejada
  // Você pode acessar o arquivo usando req.file

  // Exemplo de código para mover o arquivo para a pasta desejada
  const sourcePath = req.file.path;
  const destinationPath = path.join('C:/Users/Mauro Jr/Documents/projetos/form/src/formulario_plugsign', req.file.originalname);

  fs.rename(sourcePath, destinationPath, error => {
    if (error) {
      console.log('Erro ao mover o arquivo', error);
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor está ouvindo na porta 3000');
});
