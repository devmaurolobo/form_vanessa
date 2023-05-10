import React, { useState } from 'react';
import styled from 'styled-components';

const Login = styled.div`
  /* Estilos do componente Login aqui */
`;

const Textura = styled.div`
  /* Estilos do componente Textura aqui */
`;

const Inputmenu = styled.div`
  /* Estilos do componente Inputmenu aqui */
`;

const Menupag = () => {
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

export default Menupag;
