var https = require('follow-redirects').https;
var fs = require('fs');

var filePath = 'C:/Users/Mauro Jr/Documents/projetos/form/src/formulario_plugsign/teste.pdf'; // Defina o caminho do arquivo aqui

var options = {
  'method': 'POST',
  'hostname': 'app.plugsign.com.br',
  'path': '/api/files/upload',
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

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\n" +
  "Content-Disposition: form-data; name=\"folder\"\r\n\r\n\r\n" +
  "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\n" +
  "Content-Disposition: form-data; name=\"name\"\r\n\r\n" +
  "teste\r\n" +
  "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\n" +
  "Content-Disposition: form-data; name=\"file\"; filename=\"[PROXY]\"\r\n" +
  "Content-Type: \"application\pdf\"\r\n\r\n" +
  fs.readFileSync(filePath) +
  "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\n" +
  "Content-Disposition: form-data; name=\"optimizer\"\r\n\r\n" +
  "1\r\n" +
  "------WebKitFormBoundary7MA4YWxkTrZu0gW--";
req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
