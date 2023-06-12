const express = require('express');
const app = express();
const port = 3000;
const https = require('follow-redirects').https;
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(cors());
app.use(bodyParser.json());

const upload = multer({ dest: 'uploads/' });
let documentKey = '';



// Rotas
app.get('/', (req, res) => {
  res.send('Servidor em execução');
});

app.post('/start-upload', upload.single('file'), (req, res) => {
  const file = req.file;
  const filePath = file.path;

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      res.status(500).send('Erro ao fazer o upload');
      return;
    }

    var options = {
      'method': 'POST',
      'hostname': 'app.plugsign.com.br',
      'path': '/api/files/upload',
      'headers': {
        'Authorization': 'Bearer RxZzZoDttRDAVsybC5yUzKZ6p0sXfjnjU8yhItg4rcLVA9KbFl5iRCDXhDE3eeZQv1kC01yONR4658kmBN3PsTWGCFvHWaNqjKYj7ANY2pxlNf8qTaMhgaMiGOTowUKqVwYLVT51EzL4xO5C165xuUZKwZ8btRNp3BVc14GVWm8zWSGaqh2iOYvGfu6MP2I4bVONpTEDpGzhuktizlBnIxpRaUAIClGFP6K6eOz2rViRNXELnybNASftDhvJtbpj8rbZVOPH8bAlDe6FeWLXCH8dlD7lfaJFeOYZoTDhH0q1F49hyHX21p3b9mBSXoNyi2ucqaeoKum234kHY',
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
      },
      'maxRedirects': 20
    };

    const reqUpload = https.request(options, (resUpload) => {
      const chunks = [];

      resUpload.on("data", function (chunk) {
        chunks.push(chunk);
      });

      resUpload.on("end", function () {
        const body = Buffer.concat(chunks);
        const response = JSON.parse(body.toString());
        documentKey = response.data.document_key; // Atribuir o valor do document_key à variável

        console.log('Valor do document_key:', documentKey); // Imprimir o valor do document_key no terminal

        const fileInfo = {
          id: response.data.id,
          name: response.data.name,
          file_name: response.data.file_name,
          extension: response.data.extension,
          size: response.data.size,
          status: response.data.status,
          document_key: response.data.document_key,
          editted: response.data.editted,
          is_template: response.data.is_template,
          template_fields: response.data.template_fields,
          accessibility: response.data.accessibility,
          departments: response.data.departments,
          folder: response.data.folder,
          uploaded_by: {
            name: response.data.uploaded_by.name,
            last_name: response.data.uploaded_by.last_name
          },
          uploaded_on: response.data.uploaded_on,
          download: response.data.download
        };
      
        console.log(fileInfo);
      });

      resUpload.on("error", function (error) {
        console.error(error);
        res.status(500).send('Erro ao fazer o upload');
      });
    });

    const postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\n" +
      "Content-Disposition: form-data; name=\"folder\"\r\n\r\n\r\n" +
      "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\n" +
      "Content-Disposition: form-data; name=\"name\"\r\n\r\n" +
      "testea\r\n" +
      "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\n" +
      "Content-Disposition: form-data; name=\"file\"; filename=\"teste.pdf\"\r\n" +
      "Content-Type: application/pdf\r\n\r\n";

    const postDataEnd = "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

    reqUpload.write(postData);
    reqUpload.write(data); // Use o conteúdo lido do arquivo
    reqUpload.write(postDataEnd);
    reqUpload.end();
  });
  res.status(200).json({ message: 'Arquivo enviado com sucesso!' });
});


app.post('/start-envio', (req, res) => {

  const email = req.body.email;
  console.log("PROCESSO INICIADO");

    var options = {
      'method': 'POST',
      'hostname': 'app.plugsign.com.br',
      'path': '/api/requests/documents',
      'headers': {
        'Authorization': 'Bearer RxZzZoDttRDAVsybC5yUzKZ6p0sXfjnjU8yhItg4rcLVA9KbFl5iRCDXhDE3eeZQv1kC01yONR4658kmBN3PsTWGCFvHWaNqjKYj7ANY2pxlNf8qTaMhgaMiGOTowUKqVwYLVT51EzL4xO5C165xuUZKwZ8btRNp3BVc14GVWm8zWSGaqh2iOYvGfu6MP2I4bVONpTEDpGzhuktizlBnIxpRaUAIClGFP6K6eOz2rViRNXELnybNASftDhvJtbpj8rbZVOPH8bAlDe6FeWLXCH8dlD7lfaJFeOYZoTDhH0q1F49hyHX21p3b9mBSXoNyi2ucqaeoKum234kHY',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
    };

    var req = https.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });

      res.on("error", function (error) {
        console.error(error);
      });

   
    });

    var postData = JSON.stringify({
      "document_key": [documentKey],
      "email": [email],
      "message": "Mensagem de envio de documento para assinatura",
      "due_months": 12,
      "expire_date": "2023-10-20 10:10:10",
      "width_page": "1000",
      "fields": [
        [
          {
            "page": 1,
            "type": "image",
            "width": 200,
            "height": 75,
            "xPos": 100,
            "yPos": 100
          }
        ]
      ]
    });

    req.write(postData);

    req.end();
  

  
  res.status(200).json({ message: 'Email enviado com sucesso!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})