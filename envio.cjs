const express = require('express');
const port = 3001;
const https = require('follow-redirects').https;
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');




app.use(cors());



app.get('/', (req, res) => {
  res.send('Servidor em execução');
});

app.use(bodyParser.json());


app.post('/start-envio', (req, res) => {

  const email = req.body.email;
  console.log("PROCESSO INICIADO");

app.post('/document_key', (req, res) => {
  const  documentKey  = req.body.documentKey;
  console.log([documentKey]);

    res.status(200).json({ message: 'Valor de documentKey recebido com sucesso!' });
  });




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