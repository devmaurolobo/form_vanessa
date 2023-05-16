const express = require('express');
const app = express();
const port = 3001; // ou a porta de sua escolha

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
  'path': '/api/files/upload',
  'headers': {
    'Authorization': 'Bearer {{Lu0yItNgbGzN5cWlBBf8wNUEM1RrRSL1u5GJ2YKUwSUiEb49MdFJ1rUPFy99ZAOYbctcCvMld2lXcdccoQVANyXcTKUwgBltw4aDThgNRBJ5Bt92LM7hunwxm5lmnhygsjz9q75zrhXail7JDhqwU1XhYo2LkJmjiSZFmFizZikV0FRiqmabsBjzstQegQEzE3oL3zAsRiaQLNks7BWuMDQVbEQMikU7HUX7dcYql4trIm0LIwhSnnhpD6JJsGmEIlg61B1KhWBt0MH0lv03mXgrfYzKOkQ5c4DQjPykdLvBxh5rfdrfX0Ur58ga3soXKK3DeOnRa0tm0S3Fb}}',
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

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"folder\"\r\n\r\n461\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\nMeu documento importante!\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"file\"; filename=\"modelo-doc-plugsign.pdf\"\r\nContent-Type: \"{application/pdf}\"\r\n\r\n" + fs.readFileSync('C:/Users/Mauro Jr/Documents/projetos/form/src/formulario_plugsign/FICHA DE LOCAÇÃO LOCATÁRIO PF.pdf') + "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"optimizer\"\r\n\r\n1\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";


req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
