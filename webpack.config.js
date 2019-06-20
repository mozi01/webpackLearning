const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', // 不写默认为main.js
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20480,
                            fallback: 'file-loader',
                            name: '[name]_[hash].[ext]',
                            outputPath: 'images',
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}