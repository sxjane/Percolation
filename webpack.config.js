const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const PATHS = {
    app: path.join(__dirname, "client"),
    build: path.join(__dirname, "build"),
};

module.exports = {
    entry: path.resolve(PATHS.app, "index.jsx"),
    output: {
        path: path.resolve(PATHS.build),
        filename: "webpack.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: "html-loader"
            //         }
            //     ]
            // },
            {
                test: /\.css$/i,
                use: ['css-loader'],
            }
        ]
    },
    // resolve: {
    //     modules: [
    //         "node_modules",
    //          path.resolve(__dirname, "client")
    //     ],
    //     extensions: [".js", ".json", ".jsx", ".css"]
    // },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(PATHS.app, "index.html"),
        })
    ],
    target: "node"
};