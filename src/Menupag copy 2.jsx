import React, { useState, useEffect, useRef } from 'react';
import GlobalStyles from './globalStyles';
import { Higher,Tela, Menu_esquerdo,Menu_direito,Sdados,Sdocumentos
,
 Photo, Rodape, Des, } from './Styles';
import Menuicon from './menu.jpg';
import { Link, Outlet} from "react-router-dom";
import Voltar from './seta.jpg';
import logo from './logo.png';
import 'aos/dist/aos.css';
import styled from 'styled-components';

const Box_main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
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
  padding-right: 40px;
  border-radius: 20px;
  width: 250px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  font-size: 8px;
  height: 5px;
  border-radius: 5px;
`;

const Button = styled.input`
margin-top:10px;
  border-radius: 5px;
    width: 80px;
    background-color: black;
    font-weight: 500;
    color: white; /* Cor do texto no botão */
`;

function Menu() {
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
          <Box_main>
            <LoginForm>
              <Label htmlFor="name">Nome:</Label>
              <Input type="text" id="name" name="name" required />
              <Label htmlFor="cpf">CPF:</Label>
              <Input type="text" id="cpf" name="cpf" required />
              <Label htmlFor="rg">RG:</Label>
              <Input type="text" id="rg" name="rg" required />
              <Label htmlFor="telefone">Telefone:</Label>
              <Input type="text" id="telefone" name="telefone" required />
              <Label htmlFor="endereco">Endereço:</Label>
              <Input type="text" id="endereco" name="endereco" required />
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
