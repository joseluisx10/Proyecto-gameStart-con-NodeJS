require('dotenv').config()
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');
const axios = require('axios');
const dirfileJson = __dirname + process.env.PATH_FILE_JSON;


async function downloadImage(datos) {

    let dirFileImg = path.resolve(__dirname + process.env.PATH_FILE_IMAGE, 'juego' + datos.id + '.jpg');
    axios.get(datos.thumbnail, { responseType: 'arraybuffer' })
        .then((response) => {
            console.log("Redimensionando Imagen")
            return sharp(response.data)
                .gamma()
                .grayscale()
                .resize(300, 200)
                .toFile(dirFileImg)

        })
        .catch((err) => {
            console.log("Error: " + err);
        })

}

let fileJson = JSON.parse(fs.readFileSync(dirfileJson, 'utf-8'))

for (const elemento of fileJson) {

    downloadImage(elemento)
        .then(result => {
            console.log("Espere la descarga puede demorar")
        })
} 