import React, { useState } from 'react';
import { Higher, Form, Box_main, Anexo, Select, Field, Footer, Botoes } from "./Styles";
import DragDropField from "./DragDropField.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileDrop = (files) => {
    setSelectedFile(files[0]);
  };

  const handleChooseFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadFile = () => {
    // Lógica para enviar o arquivo
    if (selectedFile) {
      console.log('Arquivo selecionado:', selectedFile);
      // Lógica de envio do arquivo aqui
    } else {
      console.log('Nenhum arquivo selecionado');
    }
  };

  return (
    <>
      <Higher>
        <h1>Formulario Certificado Digital</h1>
        <img src="./img/background.jpg" alt="Imagem de fundo" />
      </Higher>

      <Box_main>
        <Form>
          <h1>Formulários</h1>
          <Select placeholder="Nome" />
          <Select placeholder="CPF" />
          <Select placeholder="RG" />
          <Select placeholder="Telefone" />
          <Select placeholder="Endereço" />
          <Select placeholder="Email" />
        </Form>
        <Anexo id="uploadForm" enctype="multipart/form-data">
          <h1>Anexar documento</h1>
          <Field>
            <DragDropField onFileDrop={handleFileDrop} />
            <Botoes>
              <input type="file" name="fileInput" id="fileInput" onChange={handleChooseFile} />
              <button type="button" onClick={handleUploadFile} disabled={!selectedFile}>Enviar</button>
            </Botoes>
          </Field>
        </Anexo>
      </Box_main>
      <Footer>
        <h1>Desenvolvido por Mauro Lobo</h1>
      </Footer>
    </>
  );
}

export default App;
