var form = new FormData();
form.append("folder", "");
form.append("name", fileInput.files[0], "");
form.append("file", "C:/Users/Mauro Jr/Documents/projetos/form/src/formulario_plugsign/teste.pdf");
form.append("optimizer", "1");

var settings = {
  "url": "https://app.plugsign.com.br/api/files/upload",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Authorization": "Bearer RxZzZoDttRDAVsybC5yUzKZ6p0sXfjnjU8yhItg4rcLVA9KbFl5iRCDXhDE3eeZQv1kC01yONR4658kmBN3PsTWGCFvHWaNqjKYj7ANY2pxlNf8qTaMhgaMiGOTowUKqVwYLVT51EzL4xO5C165xuUZKwZ8btRNp3BVc14GVWm8zWSGaqh2iOYvGfu6MP2I4bVONpTEDpGzhuktizlBnIxpRaUAIClGFP6K6eOz2rViRNXELnybNASftDhvJtbpj8rbZVOPH8bAlDe6FeWLXCH8dlD7lfaJFeOYZoTDhH0q1F49hyHX21p3b9mBSXoNyi2ucqaeoKum234kHY",
    "Accept": "application/json"
  },
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
