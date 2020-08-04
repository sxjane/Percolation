const path = require ("path");
module.exports = {
    PUBLIC_TEXTS_PATH: path.join(__dirname, "..", "public", "texts"),
    PUBLIC_IMAGES_PATH: path.join(__dirname, "..", "public", "images"),
    PUBLIC_PATH:path.join(__dirname, "..", "public"),
    BUILD: path.join(__dirname, "..", "build"),
    CLIENT: path.join(__dirname, "..", "client")
};
