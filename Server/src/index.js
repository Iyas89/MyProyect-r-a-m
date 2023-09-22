const express = require('express');
const mainRouter = require("./routes/index.js");
const morgan = require("morgan")


const server = express();
const PORT = 3001;


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
      );
      next();
    });
    server.use(express.json());
    server.use(morgan("dev"))
    
    server.use("/rickandmorty", mainRouter);

    server.listen(PORT, () => {
       console.log('Server raised in port: ' + PORT);
    });




















// const http = require("http");
// // const characters = require("./utils/data");

// const PORT = 3001;

// http
//   .createServer((req, res) => {

//     const {url} = req;

//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (url.includes("rickandmorty/character/")) {
//         //       let urlId = url.split("/").pop();
//         getCharById(res, id);
//     }
      
// //       let found = characters.find(
// //         (character) => character.id === Number(urlId)
// //       );
// //       res.writeHead(200, {
// //           "Content-Type": "application/json",
// //         })
// //         .end(JSON.stringify(found));
// //     }
//   })
//   .listen(PORT);
  
