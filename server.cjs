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
    'Authorization': 'Bearer {{Y8FzM715u1x83jsKGrYjg3SgN6ZlyTVxhB0lXnz96b4Otvk97ACElANyGXNIxflz2NwXoAsRpibHZz6TrSPqOoCSpfXYrsIi1wIhtMsVNZBZSTCAiyYCtkXcgdWSfXm5xeWG5jDCpWb7gT4TLmbxyKQ3IsWxLL0A8NiP2elJmBEgfNcWq2TYWzAKdWlHAQ6sqjvx8IwZAqatECEXi2fcpcE7WL1gd4ILhKlzrlGkoczdc9zWdbYt1hQtYLd0acQ8aWArksyvnohvFLjoCYGGYpvPyddF8G9pVVOmdoMHmE63DoyKsZmVppGE1RnEeAvaCuHkiEOXzybtezYXB}}',
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
