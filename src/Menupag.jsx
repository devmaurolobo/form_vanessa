import React, { useState, useEffect, useRef } from 'react';
import { Higher,Tela, Menu_esquerdo,Menu_direito,Sdados,Sdocumentos
,Menuicon,
 Photo, Rodape, Des, } from './Styles';
import { Link, Outlet} from "react-router-dom";
import logo from './logo.png';
import 'aos/dist/aos.css';
import styled from 'styled-components';

const Box_main = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e2e2e2;  
    width: 100%;
    height: 80vh;
    align-items: center;
`;

const LoginForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
  background-color: #f0f0f0;
  padding: 20px;
  padding-right: 20px;
  border-radius: 5px;
  width: 250px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
`;

const Button = styled.input`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Menu() {
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
        <Box_main>
          <LoginForm>
            <h2>Login</h2>
            <Label htmlFor="name">Nome:</Label>
            <Input type="text" id="name" name="name" required />
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" required />
            <Label htmlFor="password">Senha:</Label>
            <Input type="password" id="password" name="password" required />
            <Button type="submit" value="Entrar" />
          </LoginForm>
        </Box_main>
      </Menu_esquerdo>

    
      <Rodape>
            <Des>Razão Social xxxxxx</Des>
      </Rodape> 
    </Tela>
    </>
  );
}

export default Menu;