import styled from 'styled-components';
import fundo from './fundo.jpg';


export const Higher = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #0000CD;
    height: 15vh;   
    width: 100%;
`;

export const Login = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: #B0E0E6;
    align-items: center;
    width: 100vw;
    justify-content: space-evenly;
    height: 100vh;
`;

export const Inputmenu = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    width: 200px;
    justify-content: space-evenly;
    height: 200px;
    background-color: white;
`;


export const Dados = styled.button`
   border-radius: 10px;
    width: 130px;
    height: 35px;
    background-color: #4682B4;
    font-weight: 400;
    margin-left: 150px;
   
`;

export const Com = styled.button`
    border-radius: 10px;
    width: 130px;
    height: 35px;
    background-color: #4682B4;
    font-weight: 400;
    margin-right: 150px;
    
`;
export const Title = styled.h1`
    font-size: 150%;
    margin-left: 20px;
`;

export const Description = styled.h1`
    font-size: 150%;
`;
export const Photo = styled.img`
    width: 100px;
    margin-right: 20%;
`;

export const Menu = styled.img`
    width: 40px;
    margin-left: 5%;
`;

export const Textura = styled.div`
     background-image: url(${fundo});
`;

export const Seletores = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #F0FFF0; 
    padding-top: 20px;
    padding-bottom: 20px;

`;

export const Description_2= styled.h1`
    font-size: 150%;
`;
export const Select = styled.input`
    display: flex;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 50%;
    height: 15px;
    color:red;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column; 
    background-color: #B0E0E6;
    border-radius: 40px;
    align-items: center;
    border: 2px solid #4682B4;
    width: 20vw;
    max-width: 300px;
    justify-content: space-evenly;
    padding-bottom: 20px;
`;

export const Form2 = styled.form`
    display: flex;
    flex-direction: column; 
    background-color: #B0E0E6;
    border-radius: 40px;
    align-items: center;
    border: 2px solid #4682B4;
    width: 20vw;
    max-width: 300px;
    justify-content: space-evenly;
    position: right;
    padding-bottom: 20px;
`;
export const Field = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 40vw;
    max-width: 300px;
`;

export const Anexo = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align:center;
    justify-content: center;
    background-color: #B0E0E6;
    border-radius: 40px;
    border: 2px solid #4682B4;
    width: 20vw;
    height: 300px;
   
`;

export const StyledInput = styled.input`
    text-decoration: none;
    border-radius: 5px;
    width: 60%;
    border-radius: 5px;
    width: 80px;
    background-color: #4682B4;
    font-weight: 400;
    margin-top: 15px;
    cursor: pointer;
`;

export const Box_main = styled.div`
    display: flex;
    justify-content: space-around;
    height: 50vh; 
    padding-bottom: 20px;
    padding-top: 20px;
    width: 100vw;
    padding-left: -80px;
    background-color: #F0FFF0;
    padding-right: -80px;
    align-items: center;
`;

export const SelectedFileImage = styled.img`
  width: 40px;
  height: 40px;
 
`;



export const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;  
    margin-top: 20px;
    align-items: center;
 
   
`;

export const Botao = styled.button`
    border-radius: 5px;
    width: 80px;
    background-color: #4682B4;
    font-weight: 400;
`;

export const Rodape = styled.footer`
    display:flex;
    flex-direction: column;
    align-items: center;
  
    height: 30vh;  
    justify-content: center;
    width: 100%;
    background-color: #0000CD;
  
`;

export const Des = styled.h1`
    font-size: 20px;
  
`;

export const SocialContainer = styled.div`
  display:flex;

`;

export const SocialLink = styled.a`
  /* Estilos para os links sociais aqui */
`;

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  background-color: transparent;
  margin-left: 5px;
`;

export const FileInputWrapper = styled.div`
  position: relative;
`;

export const CustomFileInput = styled(StyledInput)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
`;

export const FileInputLabel = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  
  border: 1px solid #ccc;
 
  border-radius: 10px;
  width: 120px;
  background-color: #4682B4;
  font-weight: 400;
  cursor: pointer;
  margin-bottom: 10px;
`;

