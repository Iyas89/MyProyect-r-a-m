import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./card.module.css"

  function Card({name, species, gender, image, onClose, id, addFav, removeFav, myFavorites}) {
  


  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    if (isFav){
      setIsFav(false);
      removeFav(id);
    }
    else {
      setIsFav(true)
      addFav({name, species, gender, image, onClose, id})
    }
    }



    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
  



  return (
    <div className={styles.cardContainer}>
    <div className={styles.cardImage}>
      <Link
       to={`/detail/${id}`} >
      <img src={image} alt={name} className={styles.characterImage}/>
      {/* <h3 className={styles.name}>Name: {name}</h3> */}
      <h3 className={styles.atribut}>{name}</h3>   
      <h3 className={styles.atribut}>Gender: {gender}</h3>
</Link>
      <button onClick={handleFavorite} className={styles.favoriteButton}>{ isFav ? '❤️' : '🤍'}</button>
      <button onClick={() => {onClose(id)}} className={styles.closeButton}>X</button>
    </div>
    </div>
      );
    }
    {/* <h3 className={styles.atributes}>Species: {species}</h3> */}
      {/* <h2>Status:{status}</h2> */}
      {/* <h2>Origin:{origin}</h2> */}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Card)