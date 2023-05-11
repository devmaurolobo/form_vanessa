import styled from 'styled-components';



export const Higher = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
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
    margin-bottom: 10px;
    font-weight: 400;
    cursor: pointer;
    color: white; /* Cor do texto no botão */
`;

export const Sdocumentos = styled.button`
   border-radius: 10px;
    width: 90%;
    height: 10%;
    background-color: black;
    font-weight: 400;
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
    font-size: 150%;
`;
export const Photo = styled.img`
    width: 100px;
    margin-right: 20%;
`;

export const Imgmenu = styled.img`
    width: 40px;
    margin-left: 5%;
    cursor: pointer;
`;



export const Seletores = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 18vh;
    background-color: #E2E2E2; 
    position: absolute;
    left: 11%;
    top: 440px;
    z-index: 999;

`;

export const Tela = styled.div`
  

`;

export const Menu_esquerdo = styled.div`
   display: flex;
   justify-content: space-around;
   width: 100vw;
   height: 50vh;
   background-color: #808080;

`;
export const Teladados = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
   height: 70%;
   width: 80%;
   position: absolute;
   top: 100px;
   left: 135px;
   background-color: #808080;
   overflow: auto;
   z-index: 1;
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

export const Menu_direito = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 10px;
    padding-top: 10px;
   left: 0px;
   width: 10vw;
   height: 71vh;
   background-color: #C0C0C0;
   overflow-y: auto;
`;

export const Description_2= styled.h1`
    font-size: 150%;
`;
export const Select = styled.input`
    border-radius: 5px;
    width: 50%;
    height: 10%;
    color:red;
`;

export const Inf = styled.h1`
     display: flex;
  font-size: 12px;
  font-weight: 800;
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
    height: 280px;
    max-width: 200px;
`;

export const Form2 = styled.form`
    display: flex;
    flex-direction: column; 
    background-color: #808080;
    border-radius: 40px;
    align-items: center;
    border: 2px solid black;
    width: 20vw;
    max-width: 300px;
    height: 150px;
    position: right;
    padding-bottom: 20px;
    z-index: 0;
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
    width: 20vw;
    height: 300px;
    top: 100px;
   
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
    justify-content: space-around;
    left: 100vw;
    height: 50vh; 
    padding-bottom: 20px;
    padding-top: 20px;
    width: 90vw;
    
    background-color: #E2E2E2;
   
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
    background-color: black;
    font-weight: 500;
    color: white; /* Cor do texto no botão */
`;

export const Rodape = styled.footer`
    display:flex;
    flex-direction: column;
    align-items: center;
    top: 500px;
    height: 20vh;  
    justify-content: center;
    width: 100%;
    background-color: #F5F5F5;
  
`;

export const Des = styled.h1`
    font-size: 20px;
    margin-left: 120px;
  
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
  background-color: black;
  font-weight: 400;
  color: white; /* Cor do texto no botão */
  cursor: pointer;
  margin-bottom: 10px;
`;

