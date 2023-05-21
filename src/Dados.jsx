import React, { useEffect } from 'react';
import GlobalStyles from './globalStyles';
import { Higher, Tela, Menu_esquerdo, Menu_direito, Box_main, Sdados, Sdocumentos, Photo, Rodape, Des } from './Styles';
import { Link } from "react-router-dom";
import Menuicon from './menu.jpg';
import logo from './logo.png';
import Voltar from './seta.jpg';
import 'aos/dist/aos.css';

function Dadospag() {
  useEffect(() => {
    const name = "John Doe";
    const birthdate = "01/01/1990";
    const email = "johndoe@example.com";

    document.getElementById("name").innerText = "Nome: " + name;
    document.getElementById("birthdate").innerText = "Data de Nascimento: " + birthdate;
    document.getElementById("email").innerText = "Email: " + email;
  }, []);

  return (
    <>
    <GlobalStyles />
      <Tela>
        <Higher>
          <Link to="/">
            <img src={Voltar} alt="Menu" style={{ width: "10%", backgroundColor: "transparent"}} />
          </Link>
        <Photo src={logo} alt="Imagem Exemplo" />
          <Link to="/Menu">
            <img src={Menuicon} alt="Menu" style={{ width: "50px", height: "50px",marginRight: "40px" }} />
          </Link>
          
        </Higher>

        <Menu_esquerdo>
          <Menu_direito>
            <div>
              <Link to="/Dadospag">
                <Sdados>Mostrar Dados</Sdados>
              </Link>
              <Link to="/Docpag">
                <Sdocumentos>Meus Documentos</Sdocumentos>
              </Link>
            </div>
          </Menu_direito>

          <Box_main>
            <div className="container">
              <div className="info">
                <h2>Informações</h2>
                <p id="name"></p>
                <p id="birthdate"></p>
                <p id="email"></p>
              </div>
            </div>
          </Box_main>
        </Menu_esquerdo>

        <Rodape>
          <Des>Razão Social xxxxxx</Des>
        </Rodape>
      </Tela>
    </>
  );
}

export default Dadospag;

