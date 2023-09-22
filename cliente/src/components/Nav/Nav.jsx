import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

function Nav({onSearch, randomize, setAcces}) {
  return (
    <div className={style.navContainer}>
      <SearchBar onSearch={onSearch} />
      <button 
     className={style.randomButton} onClick={randomize}>ADD RANDOM</button>
      <br/>
      <div>
      <Link to="/Favorites">
      <button className={style.button}>Favorites</button>
      </Link>
      <Link to="/home">
        <button className={style.button}>Home</button>
      </Link>
      <Link to="/About">
      <button className={style.button}>About</button>
      </Link>
      </div>
      <div>
      <Link to="/">
        <button className={style.logoutButton}>
          Log Out
          </button>
          </Link>
      </div>
      </div>
  );
}

export default Nav;
