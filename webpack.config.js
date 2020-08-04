const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const PATHS = {
    app: path.join(__dirname, "client", "index.jsx"),
    build: path.join(__dirname, "build"),
};

module.exports = {
    entry: PATHS.app,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "client")
        ],
        extensions: [".js", ".json", ".jsx", ".css"]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./client/index.html",

        })
    ]
};