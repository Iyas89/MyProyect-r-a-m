import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

import ErrorPage from "./views/ErrorPage/ErrorPage.jsx";
import Form from "./views/Form/Form.jsx";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./views/About/About.jsx";
import Detail from "./views/Detail/Detail.jsx"
import Favorites from "./components/Favorites/Favorites.jsx";
import "./App.css";
import pngeggAll from "./assets/pnAll.png"


function App() {


  const location = useLocation();
  

  const navigate = useNavigate();
const [access, setAccess] = useState( false );
const EMAIL = 'iyasasaad@gmail.com';
const PASSWORD = '123456';

async function login(userData) {
  try {
    const {email, password} = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    const {data} = await axios(URL + `?email=${email}&password=${password}`) 
    const { access } = data;
      setAccess(access);
      access && navigate("/home");
  } catch (error) {
    alert(error.message);
  }
  };



  useEffect(() => {
    !access && navigate('/');
 }, [access]);




  const [characters, setCharacters] = useState([]);

  // nueva API
  //*https://rym2-production.up.railway.app/api/character/${id}?key=henrym-usuariodegithub

  async function searchHandler(id) {
    try {
      const { data } = 
    await axios(`https://rickandmortyapi.com/api/character/${id}`)
    
      if (data.name) {
        setCharacters((Chars) => [...Chars, data]);
      } 
    } catch(error){ 
      return window.alert("¡No hay personajes con este ID!");
    }
}

  function closeHandler(id) {
    // nos llega un string
    let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(filteredCharacters);
  }

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }
   
  return (
    <div className="App">
      <img className="title" src={pngeggAll} alt="logo"/>

      {location.pathname === '/'? null : (<Nav onSearch={searchHandler} randomize={randomHandler} serAccess />)}
      
      <Routes>
      <Route path="/" element={<Form login={login}/>} /> 
<Route path="/home" element={<Cards characters={characters} onClose={closeHandler} />} />
<Route path="/About" element={<About />} />
<Route path="/Detail/:id" element={<Detail />} /> 
<Route path="/favorites" element={<Favorites />} />
<Route path="*" element={<ErrorPage />} />
</Routes>  
    </div>
  );
}

export default App;
