module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader", 
            {
              loader: "css-loader",
              options: {
                modules: true, 
                localIdentName: "[name]__[local]--[hash:base64:5]", 
              },
            },
            "sass-loader", 
          ],
        },
      ],
    },
  };
