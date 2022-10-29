const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
       main: path.resolve(__dirname, './src/pages/main/main.js'), 
       login: path.resolve( __dirname, './src/pages/login/login.js')  
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename:"[name].js",
        clean:true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/main/main.html',
            chunks:['main']
        }), 
        new HtmlWebpackPlugin({
            filename: './login/index.html',
            template: './src/pages/login/login.html',
            chunks:['login']
        })
    ]      
}
