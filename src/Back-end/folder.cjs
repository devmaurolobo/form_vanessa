const express = require('express');
const app = express();
const port = 3001;

// Rotas
app.get('/', (req, res) => {
  res.send('Servidor em execução');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'app.plugsign.com.br',
  'path': '/api/folders?name=Contratos&folder=&accesbility=Everyone',
  'headers': {
    'Authorization': 'Bearer RxZzZoDttRDAVsybC5yUzKZ6p0sXfjnjU8yhItg4rcLVA9KbFl5iRCDXhDE3eeZQv1kC01yONR4658kmBN3PsTWGCFvHWaNqjKYj7ANY2pxlNf8qTaMhgaMiGOTowUKqVwYLVT51EzL4xO5C165xuUZKwZ8btRNp3BVc14GVWm8zWSGaqh2iOYvGfu6MP2I4bVONpTEDpGzhuktizlBnIxpRaUAIClGFP6K6eOz2rViRNXELnybNASftDhvJtbpj8rbZVOPH8bAlDe6FeWLXCH8dlD7lfaJFeOYZoTDhH0q1F49hyHX21p3b9mBSXoNyi2ucqaeoKum234kHY',
    'Accept': 'application/json'
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

req.end();