import React, { useEffect } from 'react';
import { Higher, Tela, Menu_esquerdo, Menu_direito, Box_main, Sdados, Sdocumentos, Menuicon, Photo, Rodape, Des } from './Styles';
import { Link } from "react-router-dom";
import logo from './logo.png';
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
      <Tela>
        <Higher>
          <Photo src={logo} alt="Imagem Exemplo" />
          <Link to="/Menu">
            <img src={Menuicon} alt="Menu" />
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

