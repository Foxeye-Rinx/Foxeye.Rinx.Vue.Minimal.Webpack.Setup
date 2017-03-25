let path = require("path");
let onServerHostFolder = "my-root";

module.exports = {
    entry: './src/js/script.js',
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: `/${onServerHostFolder}/`,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.vue', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
    },    
    devtool: "source-map", // any "source-map"-like devtool is possible
    devServer: { inline: true },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            }
        ]
    }    
}