

let myFavorites= [];

const postFav = (req, res) => {
    const charcter = req.body
    myFavorites.push(charcter)
    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
     const { id } = req.params;
     myFavorites = myFavorites.filter((fav) => fav.id !== Number(id))

    return res.status(200).json(myFavorites);
}

module.exports = { postFav, deleteFav }
