
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import GlobalStyles from './globalStyles';
import { Higher, Description, Form,Tela,Blocos, Menu_esquerdo,Menu_direito, Form2, Com, Seletores, FileInputLabel, FileInputWrapper,Inf,Inf2,Login,
 CustomFileInput, Box_main, Description_2, Anexo, Select, Dados, Field, Botoes,Sdocumentos,Sdados,Box,Select_wp,Menuselect,Form1
 ,Photo, Rodape, Botao, Des, } from './Styles';
import DragDropField from './DragDropField.jsx';
import { Link, Outlet} from "react-router-dom";
import Menuicon from './menu.jpg';
import Voltar from './seta.jpg';
import logo from './logo.png';
import pdf from './pdf.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuIcon2 = styled.button`
  display: none;
    background-color: #523333;
    font-weight: 400;
    
    cursor: pointer;
    color: white; /* Cor do texto no botão */
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 10px;
    display: flex;
    width: 70px;
    align-items: center;
    justify-content: center;
    height: 35px;
    background-color: black;
    font-weight: 400;
    cursor: pointer;
    color: white; /* Cor do texto no botão */
    }
`;

const MenuDireito = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  background-color: #C0C0C0;


     @media (max-width: 768px) {
      max-height: 0;
      transition: max-height 0.3s ease;
      width: 70px;;
      height: auto;
      height: 80vh;
      overflow: hidden;
  }
  &.show {
    max-height: 80vh;
  }
`;



function App() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilesList, setSelectedFilesList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  
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
          <Link to="/">
          <img src={Voltar} alt="Menu" style={{ width: "70%",display: "none", backgroundColor: "transparent",}} />
          </Link>
        <Photo src={logo} alt="Imagem Exemplo" />
          <Link to="/Menu">
            <img src={Menuicon} alt="Menu" style={{ width: "50px", height: "50px",marginRight: "40px" }} />
          </Link>
          
      </Higher>

      <Menu_esquerdo>
          <Menuselect>
          <MenuIcon2
              onClick={toggleMenu}
            > Exibir Menu
            </MenuIcon2>
            <MenuDireito className={isMenuOpen ? "show" : ""}>   

            
              <div>
                <Dados onClick={() => setShowForm(!showForm)}>Adicionar mensagem</Dados>
                <Com onClick={() => setShowForm2(!showForm2)}>Adicionar destinatario</Com>
                <Link to="/Dadospag">
                  <Sdados >Mostrar Dados</Sdados>
                </Link>
                <Link to="/Docpag">
                  <Sdocumentos >Meus Documentos</Sdocumentos>
                </Link>
              </div>
               
            </MenuDireito>
          </Menuselect>
          <Box_main>
            <Description_2>Arquivo</Description_2>
            <Box>
              {showForm && (
                <>
               <Form data-aos="fade-up" data-aos-duration="1">
                  <Description>Enviar Mensagem</Description>
                  <Form1>
                    <label htmlFor="assunto">Assunto:</label>
                    <Select id="assunto" placeholder="Escreva o assunto" />
                  </Form1>
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
