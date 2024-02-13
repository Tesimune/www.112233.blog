const postcssConfig = require("postcss-load-config");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: async () => {
                                const { plugins } = await postcssConfig();
                                return {
                                    plugins,
                                };
                            },
                        },
                    },
                ],
            },
        ],
    },
};
