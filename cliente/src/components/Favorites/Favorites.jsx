import {useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import style from "./Favorites.module.css"

import Card from "../card/Card"; 
import { orderCards, filterCards } from "../../redux/actions";



const Favorites = () => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const [aux, setAux] = useState(false)
const handleOrder = (event) => {
  dispatch(orderCards(event.target.value));
  setAux(true);
}

const handleFilter = (event) => {
  dispatch(filterCards(event.target.value));
}


  return (
    <div>
      <select className={style.selectContainer} placeholder="Gender" onChange={handleFilter}>
        {["todos", "Male", "Female", "unknown", "Genderless"].map((gender) => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </select>
      <select className={style.sortContainer} placeholder="Sort" onChange={handleOrder}>
        {["Ascendente", "Descendente"].map((order) => (
          <option key={order} value={order}>
            {order}
          </option>
        ))}

      </select>
        <div className={style.favContainer}>
      { 
      myFavorites?.map(fav => {
        return (
          < Card
          //species, gender, image
          key={fav.id}
          id={fav.id}
          name={fav.name}
          species={fav.species}
          gender={fav.gender}
          image={fav.image}
          onClose={fav.onClose}
          />
          )
        }
        )
      }
      </div>
    </div>
    )

  }
  
  

  export default Favorites;