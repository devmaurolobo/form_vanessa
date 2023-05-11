import React, { useState } from 'react';
import styled from 'styled-components';
import fundo from './fundo.jpg';


const Inputmenu = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    width: 200px;
    justify-content: space-evenly;
    height: 200px;
    background-color: white;
`;

const Textura = styled.div`
     background-image: url(${fundo});
`;

const Login = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: #B0E0E6;
    align-items: center;
    width: 100vw;
    justify-content: space-evenly;
    height: 100vh;
`;

const Menu = () => {
  const [name, setName] = useState('');
  const [emailmenu, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEnviar = () => {
    console.log('Enviar');
  };

  return (
    <Login>
      <Textura></Textura>
      <Inputmenu>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={emailmenu}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
     
        <button onClick={handleEnviar}>Enviar</button>
      </Inputmenu>
    </Login>
  );
};

export default Menu;
