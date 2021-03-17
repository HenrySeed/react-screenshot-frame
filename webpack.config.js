const path = require("path");

module.exports = {
    mode: "production",
    entry: "./dist/AmyRender.js",
    devtool: "inline-source-map",
    output: {
        path: path.resolve("build"),
        filename: "amy-render.js",
        libraryTarget: "commonjs2",
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use: "file-loader?name=fonts/[name].[ext]!static",
            },
        ],
    },
    resolve: {
        alias: {
            react: path.resolve(__dirname, "./node_modules/react"),
            "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
        },
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React",
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM",
        },
        "react-dom/server": {
            commonjs: "react-dom/server",
            commonjs2: "react-dom/server",
            amd: "ReactDOMServer",
            root: "ReactDOMServer",
        },
    },
};
