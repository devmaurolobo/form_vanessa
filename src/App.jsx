
import React, { useState, useEffect, useRef } from 'react';
import GlobalStyles from './globalStyles';
import { Higher, Description, Form,Tela,Blocos, Menu_esquerdo,Menu_direito, Form2, Com, Seletores, FileInputLabel, FileInputWrapper,Inf,Inf2,Login,
 CustomFileInput, Box_main, Description_2, Anexo, Select, Dados, Field, Botoes,Sdocumentos,Sdados,Box,Select_wp,
 Photo, Rodape, Botao, Des, } from './Styles';
import DragDropField from './DragDropField.jsx';
import { Link, Outlet} from "react-router-dom";
import Menuicon from './menu.jpg';
import logo from './logo.png';
import pdf from './pdf.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilesList, setSelectedFilesList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);

 

  
  const handleScrollToForm = () => {
    teladadosRef.current.scrollIntoView({ behavior: 'smooth' });
  };

   

  function handleFileDrop(files) {
    setSelectedFile(files[0]);
  }

 
 

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


  return (
      <>

<GlobalStyles />
    
    <Tela>
      <Higher>
            <Photo src={logo} alt="Imagem Exemplo" />
              <Link to="/Menu">
                <img src={Menuicon} alt="Menu" style={{ width: "50px", height: "50px",marginRight: "40px" }} />
              </Link>
      </Higher>

      <Menu_esquerdo>
          <Menu_direito>
          
            <div>
              <Link to="/Dadospag">
                <Sdados >Mostrar Dados</Sdados>
              </Link>
              <Link to="/Docpag">
                <Sdocumentos >Meus Documentos</Sdocumentos>
              </Link>
            </div>
          </Menu_direito>
        
          <Box_main>
            <Description_2>Arquivo</Description_2>
            <Box>
              {showForm && (
                <>
               <Form data-aos="fade-up" data-aos-duration="1">
                  <Description>Enviar Mensagem</Description>
                  <div>
                    <label htmlFor="assunto">Assunto:</label>
                    <Select id="assunto" placeholder="Escreva o assunto" />
                  </div>
                  <div>
                    <label htmlFor="mensagem">Escreva sua mensagem:</label>
                    <Select id="mensagem" placeholder="Escreva sua mensagem" />
                  </div>
                </Form></>
              )}
            
              <Anexo id="uploadForm" encType="multipart/form-data" data-aos="fade-up" data-aos-duration="3000">
                  <Field>
                    <DragDropField onFileDrop={handleFileDrop} selectedFile={selectedFile}/>
                    <Botoes>
                    <FileInputWrapper>
                        <CustomFileInput type="file" onChange={handleChooseFile} accept=".pdf" />
                        <FileInputLabel>Selecione o arquivo</FileInputLabel>
                        </FileInputWrapper>
                      <Botao type="button" onClick={handleUploadFile} disabled={!selectedFile} > Upload</Botao>
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
           
            {showForm2 && (
              <>
           <Form2 data-aos="fade-up" data-aos-duration="1">
              <Description>Destinatários</Description>
              <div>
                <label htmlFor="nome">Nome:</label>
                <Select id="nome" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <Select id="email" placeholder="Seu email" />
              </div>
              <div>
                <label htmlFor="whatsapp">WhatsApp:</label>
                <Select_wp id="whatsapp" type="text" placeholder="WhatsApp" />
              </div >
            </Form2>
            </>
            )}
            </Box>
            <Seletores>
            <Dados onClick={() => setShowForm(!showForm)}>Adicionar mensagem</Dados>
            <Com onClick={() => setShowForm2(!showForm2)}>Adicionar destino</Com>
          </Seletores>

          </Box_main>
        
      </Menu_esquerdo>
    
      <Rodape>
            <Des>Razão Social xxxxxx</Des>
      </Rodape> 
    </Tela>
  
    </>
  );

}  
export default App;
