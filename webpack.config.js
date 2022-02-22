const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = "development";
if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode,
    devtool: "source-map",
    devServer: {
        static: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["postcss-preset-env"]],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
};
