const axios = require("axios");

async function getCharById(req, res) {
  const URL = "https://rickandmortyapi.com/api/character/";

  try {
    const {id} = req.params;
    const {data} = await axios.get(`${URL}${id}`);

    const character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      location: data.location?.name,
      origin: data.origin?.name, // asi no hay undefined
      image: data.image,
      gender: data.gender,
    };

    character.name
      ? res.status(200).json(character)
      : res.status(404).json({message: "Not Found Coleguillas"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = getCharById;




// const axios = require("axios");

// // const URL = "https://rickandmortyapi.com/api/character/";

// async function getCharById(req, res){
//   try {
//   const {id} = req.params;
//   const respone = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//   const { data } = respone.data;
//         const charcter = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin?.name,
//             image: data.image,
//             status: data.status
//         }
//         charcter.name 
//         ?res.status(200).json(charcter)
//         :res.status(404).json({message: "Not Found Coleguillas"});
//       }
//       catch(error) { 
//         res.status(500).json({message: error.message});
//       }
// }
//     module.exports = getCharById 







// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((res) => res.data)
//     .then ((data) => {
// })
//     res.writeHead(200, {
//         "Content-Type": "application/json",
//       }).end(JSON.stringify(charcter))
//       .catch((error) => res.writeHead(500, {
//         "Content-Type": "text/plain"
//       }).end(error.message)
//       );
//  }
