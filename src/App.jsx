import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Higher, Title,Description, Form, Box_main,Description_2, Anexo, Select, Field, Botoes, Photo, StyledInput,Rodape, Botao , Des, SocialIcon, SocialContainer, SocialLink} from "./Styles";
import DragDropField from "./DragDropField.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Estilos globais
const GlobalStyle = createGlobalStyle`
  /* Outros estilos globais aqui */
`;

function App() {
  const [count, setCount] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilesList, setSelectedFilesList] = useState([]);

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
      setSelectedFilesList([...selectedFilesList, selectedFile]); // Adiciona o arquivo selecionado à lista
      // Lógica de envio do arquivo aqui
    } else {
      console.log('Nenhum arquivo selecionado');
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Higher>
        <Title>Certificado Digital</Title>
        <Photo src="./public/img/background.png" alt="Imagem de fundo" />
      </Higher>

      <Box_main>
        <Form data-aos="fade-right" data-aos-duration="3000">
          <Description>Formulário</Description>
          <Select placeholder="Nome" />
          <Select placeholder="CPF" />
          <Select placeholder="RG" />
          <Select placeholder="Telefone" />
          <Select placeholder="Endereço" />
          <Select placeholder="Email" />
        </Form>
        <Anexo id="uploadForm" enctype="multipart/form-data" data-aos="fade-left" data-aos-duration="3000">
          <Description_2>Arquivo</Description_2>
          <Field>
            <DragDropField onFileDrop={handleFileDrop} />
            <Botoes>
              <StyledInput type="file" name="fileInput" id="fileInput" onChange={handleChooseFile} />
              <Botao type="button" onClick={handleUploadFile} disabled={!selectedFile}>Enviar</Botao>
            </Botoes>
          </Field>
          <div>
            {selectedFilesList.map((file, index) => (
              <p key={index}>{file.name}</p>
            ))}
          </div>
        </Anexo>
      </Box_main>
      <Rodape>
        <Des>Desenvolvido por Mauro Lobo</Des>
        <SocialContainer>
          <SocialLink href="https://mail.google.com/mail/u/0/?hl=pt-BR" target="_blank">
            <SocialIcon src="/public/img/email.jpg" alt="E-mail" />
          </SocialLink>
          <SocialLink href="https://wa.me/5519994149901?text=Olá,%20Obrigado%20pelo%20contato!" target="_blank">
            <SocialIcon src="/public/img/wp.png" alt="WhatsApp" />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/" target="_blank">
            <SocialIcon src="/public/img/instagram.jpg" alt="Instagram" />
          </SocialLink>
        </SocialContainer>
      </Rodape>
    </>
  );
}

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js">
  AOS.init();
</script>
export default App;
