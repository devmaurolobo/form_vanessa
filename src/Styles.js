import styled from 'styled-components';
import Menu from './menu.jpg';



export const Higher = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F5F5F5;
    height: 15vh;   
    width: 100%;
`;

export const Dados = styled.button`
    border-radius: 10px;
    width: 130px;
    height: 35px;
    background-color: black;
    font-weight: 400;
    margin-top: 20px;
    font-weight: 400;
    cursor: pointer;
    color: white; /* Cor do texto no botão */
`;

export const Sdados = styled.button`
   border-radius: 10px;
    width: 90%;
    height: 10%;
    background-color: black;
    font-weight: 400;
    margin-top: 10px;
    font-weight: 400;
    margin-left: 10px;
    cursor: pointer;
    color: white; /* Cor do texto no botão */
`;

export const Sdocumentos = styled.button`
   border-radius: 10px;
    width: 90%;
    height: 10%;
    background-color: black;
    font-weight: 400;
    margin-left: 10px;
    margin-top: 10px;
    font-weight: 400;
    cursor: pointer;
    color: white; /* Cor do texto no botão */
`;

export const Com = styled.button`
    border-radius: 10px;
    width: 130px;
    height: 35px;
    background-color: black;
    font-weight: 400;
    margin-top: 10px;
    cursor: pointer;
    color: white; /* Cor do texto no botão */
  
    
`;
export const Title = styled.h1`
    font-size: 150%;
    margin-left: 20px;
`;

export const Description = styled.h1`
    text-align: center;
    font-size: 120%;
`;
export const Photo = styled.img`
    width: 100px;
    margin-right: 30%;
`;

export const Menuicon = styled.img`
    width: 5px;
    margin-right: 20px;
    cursor: pointer;
    background-image: url(${Menu});
`;



export const Textura = styled.div`
    
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


export const Seletores = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    background-color: #E2E2E2; 
 
  

`;

export const Tela = styled.div`
  

`;

export const Menu_esquerdo = styled.div`
   display: flex;
   flex-direction: row;
   background-color: green;
   

`;

export const Box = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   width: 100%;

`;

export const Documento = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: center;
    
   height: 70%;
   width: 60%;
   position: absolute;
   top: 100px;
   left: 135px;
   background-color: #808080;
   overflow: auto;
   padding-left: 200px;
   padding-right: 200px;
   z-index: 1;
`;

export const Blocos = styled.div`
   width: 90px;
   border-radius: 20px;
   text-align: center;
   padding: 30px;
   height: 90px;
   background-color: white;
   margin: 10px;
`;

export const Caixa_blocos = styled.div`
    display: flex;
    flex-direction: wrap;
    justify-content: space-around;
    width: 100%;
`;

export const Menu_direito = styled.div`
    display: flex;
    justify-content: center;
    width: 15%;
    height: 80vh;
     background-color: #C0C0C0;
  
`;

export const Description_2= styled.h1`
    font-size: 15px;
    text-align: center;
`;
export const Select = styled.input`
    border-radius: 5px;
    width: 80%;
    height: 40%;

`;
export const Select_wp = styled.input`
    border-radius: 5px;
    width: 80%;
    height: 40%;
    

`;

export const Inf = styled.p`
  display: flex;
  font-size: 15px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 50px;
  text-align: left;

`;

export const Inf2 = styled.h1`
     display: flex;
  font-size: 12px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 60px;
  text-align: left;

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; 
    background-color: #808080;
    border-radius: 40px;
    align-items: center;
    border: 2px solid black;
    width: 20vw;
    padding-bottom: 10px;
    height: 200px;
    max-width: 200px;
    padding-left: 15px;
    font-weight: 500;
`;

export const Form2 = styled.form`
    display: flex;
    flex-direction: column; 
    background-color: #808080;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    width: 20%;
    padding:20px;
    max-width: 300px;
    height: 160px;
    padding-bottom: 30px;

`;
export const Field = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    max-width: 300px;
`;

export const Anexo = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align:center;
    justify-content: center;
    background-color: #808080;
    border-radius: 40px;
    border: 2px solid black;
    width: 30%;
    height: 300px;
    position: center;
  
   
`;

export const StyledInput = styled.input`
    text-decoration: none;
    border-radius: 5px;
    width: 60%;
    border-radius: 5px;
    width: 80px;
    background-color: black;
    font-weight: 400;
    margin-top: 15px;
    cursor: pointer;
`;

export const Box_main = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e2e2e2;    
    width: 85%;
    height: 80vh;
    align-items: center;
`;

export const SelectedFileImage = styled.img`
  width: 40%;
  height: 40%;
 
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
    background-color: black;
    font-weight: 500;
    color: white; /* Cor do texto no botão */
`;

export const Rodape = styled.footer`
    display:flex;
    flex-direction: column;
    align-items: center;
      
    justify-content: center;
    width: 100%;
    background-color: #F5F5F5;
  
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
`;

export const FileInputLabel = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 80%;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 40%;
  background-color: black;
  font-weight: 400;
  color: white; /* Cor do texto no botão */
  cursor: pointer;
  margin-bottom: 10px;
`;

