
import React, { useState, useEffect, useRef } from 'react';
import { Higher, Description, Form,Tela,Blocos, Menu_esquerdo,Menu_direito,
Teladados,Documento, Form2, Com, Seletores, FileInputLabel, FileInputWrapper,
 CustomFileInput, Box_main, Description_2, Anexo, Select, Dados, Field, Botoes,Imgmenu,Sdocumentos,Sdados,
 Photo, Rodape, Botao, Des, } from './Styles';
import DragDropField from './DragDropField.jsx';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import Menu from './Menupag';
import logo from './logo.png';
import menuIcon from './menu.jpg';
import pdf from './pdf.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [showDados, setShowDados] = useState(false);
  const [showDocumentos, setShowDocumentos] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilesList, setSelectedFilesList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const history = useHistory(); // Obtém o objeto de histórico de navegação
  const teladadosRef = useRef(null);

  const handleShowDados = () => {
    setShowDados(!showDados);
    setShowDocumentos(false);

    if (!showDados) {
      handleScrollToForm(); // Chama a função para rolar o formulário para a visualização
    }
  };
 
  const handleScrollToForm = () => {
    teladadosRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  

  function handleFileDrop(files) {
    setSelectedFile(files[0]);
  }

  const handleShowDocumentos = () => {
    setShowDocumentos(!showDocumentos);
    setShowDados(false);
  };
 

  const handleChooseFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadFile = () => {
    // Lógica para enviar o arquivo
    if (selectedFile) {
      setSelectedFilesList([...selectedFilesList, selectedFile]); // Adiciona o arquivo selecionado à lista
      // Lógica de envio do arquivo aqui
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const handleOpenMenuPage = () => {
    history.push('/menupag.jsx'); // Redireciona para a página "/menupag"
  };

  return (
    <Router>
      <>
    {showDocumentos && (
      
        <Documento>
          <Blocos>Documento 1</Blocos>
          <Blocos>Documento 2</Blocos>
          <Blocos>Documento 3</Blocos>
          <Blocos>Documento 4</Blocos>
          <Blocos>Documento 5</Blocos>
          <Blocos>Documento 6</Blocos>
          <Blocos>Documento 7</Blocos>
          <Blocos>Documento 8</Blocos>
          <Blocos>Documento 9</Blocos>
          <Blocos>Documento 10</Blocos>
          <Blocos>Documento 11</Blocos>
          <Blocos>Documento 12</Blocos>
        </Documento>
     
      )}
    <Tela>
      <Higher>
            <Photo src={logo} alt="Imagem Exemplo" />
            <Imgmenu id="menu-icon" src={menuIcon} alt="Menu" onClick={handleOpenMenuPage} />
        </Higher>

      
      <Menu_esquerdo>
            <Menu_direito>
              {showDados && (
              <Teladados ref={teladadosRef}>
                <div>
                  <div>Nome Alegre de Souza</div>
                  <div>Idade 00/00/1990</div>
                  <div>Endereço Rua Geronimos</div>
                  <button>Editar</button>
                </div>
              </Teladados>)}
            <div>
            <Sdados onClick={handleShowDados}>Mostrar Dados</Sdados>
            <Sdocumentos onClick={handleShowDocumentos}>Meus Documentos</Sdocumentos>
            </div>
            </Menu_direito>
        <Box_main>
          <div>
          {showForm && (
            <>
              <Form data-aos="fade-up" data-aos-duration="1">
                <Description>Comentarios</Description>
                <Select placeholder="Nome" />
                <Select placeholder="CPF" />
                <Select placeholder="RG" />
                <Select placeholder="Telefone" />
                <Select placeholder="Endereço" />
                <Select placeholder="Email" />
              </Form>  </>
          )}
          </div> 
          <div>
            <Anexo id="uploadForm" encType="multipart/form-data" data-aos="fade-up" data-aos-duration="3000">
                <Description_2>Arquivo</Description_2>
                <Field>
                  <DragDropField onFileDrop={handleFileDrop} selectedFile={selectedFile}/>
                  <Botoes>
                  <FileInputWrapper>
                      <CustomFileInput type="file" onChange={handleChooseFile} accept=".pdf" />
                      <FileInputLabel>Selecione o arquivo</FileInputLabel>
                      </FileInputWrapper>
                    <Botao type="button" onClick={handleUploadFile} disabled={!selectedFile} >
                    Upload
                    </Botao>
                  </Botoes>
                </Field>
                <div>
                  {selectedFilesList.map((file, index) => (
                    <div key={index}>
                      <p>{file.name}</p>
                      {file.type === 'application/pdf' ? (
                        <img src={pdf} alt="Ícone do arquivo PDF" />
                      ) : (
                        <img src="caminho-do-icone-padrao.png" alt="Ícone do arquivo" />
                      )}
                    </div>
                  ))}
                </div>
          </Anexo>

          </div>
          <div>             
          {showForm2 && (
            <>
              <Form2 data-aos="fade-up" data-aos-duration="1">
                <Description>Dados envio</Description>
                <Select placeholder="Nome" />
                <Select placeholder="Email" />
              </Form2></>
          )}
          </div> 
        </Box_main>
       
      </Menu_esquerdo>
      <Seletores>
            <Dados onClick={() => setShowForm(!showForm)}>Adicionar mensagem</Dados>
            <Com onClick={() => setShowForm2(!showForm2)}>Adicionar destino</Com>
        </Seletores>
      <Rodape>
          <Des>Razão Social xxxxxx</Des>
      </Rodape>
    </Tela>
  
    </>
    </Router>
  );

}  
export default App;
