import React, { useState, useEffect, useRef } from 'react';
import GlobalStyles from './globalStyles';
import { Higher,Tela, Menu_esquerdo,Menu_direito,Box_main,Sdados,Sdocumentos,Blocos,Caixa_blocos
,
 Photo, Rodape, Des, } from './Styles';
 import Menuicon from './menu.jpg';
import { Link, Outlet} from "react-router-dom";
import logo from './logo.png';
import Voltar from './seta.jpg';
import 'aos/dist/aos.css';


function Docpag() {




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
                <Sdados >Mostrar Dados</Sdados>
              </Link>
              <Link to="/Docpag">
                <Sdocumentos >Meus Documentos</Sdocumentos>
              </Link>
            </div>
          </Menu_direito>
        
          <Box_main>
            <Caixa_blocos>
              <Blocos>Doc1</Blocos>
              <Blocos>Doc2</Blocos>
              <Blocos>Doc3</Blocos>
              <Blocos>Doc4</Blocos>
              <Blocos>Doc5</Blocos>
              <Blocos>Doc6</Blocos>
              <Blocos>Doc7</Blocos>
              <Blocos>Doc8</Blocos>
              <Blocos>Doc9</Blocos>
              <Blocos>Doc10</Blocos>
            </Caixa_blocos>
            
          </Box_main>
        
      </Menu_esquerdo>
    
      <Rodape>
            <Des>Razão Social xxxxxx</Des>
      </Rodape> 
    </Tela>
  
    </>
  );

}  
export default Docpag;