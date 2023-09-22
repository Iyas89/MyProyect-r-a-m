const {Router} = require("express");
const  getCharById  = require("../controllers/getCharById.js")
const {login} = require("../controllers/login.js")
const { postFav, deleteFav } = require("../controllers/handleFavorites.js")



const mainRouter = Router();

mainRouter.get("/character/:id", getCharById);
mainRouter.get("/login", login);
mainRouter.post("/fav", postFav);
mainRouter.delete( "/fav/:id", deleteFav);

module.exports = mainRouter;
