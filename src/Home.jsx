import { useState } from "react";
import { Main, Button } from './Style.js';
import { Link, Outlet } from "react-router-dom";
import Menu from "./img/menu.jpg";

function App() {
  return (
    <>
    <div>
      <ul>
        <Link to ="/"><li>Home</li></Link>
        <Link to ="/Pagina1"><li>Pagina1</li></Link>
        <Link to ="Pagina2"><li>Pagina2</li></Link>
        <Link to ="Pagina3"><li>Pagina3</li></Link>      
      </ul>                
    </div>
          <Outlet>
          </Outlet>
    </>
  );
}

export default App;
