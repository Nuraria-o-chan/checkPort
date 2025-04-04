module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader", // Вставляет CSS в DOM
            {
              loader: "css-loader", // Обрабатывает @import и url()
              options: {
                modules: true, // Включить CSS Modules (опционально, но рекомендуется)
                localIdentName: "[name]__[local]--[hash:base64:5]", // Настройка имен классов (опционально)
              },
            },
            "sass-loader", // Компилирует Sass в CSS
          ],
        },
      ],
    },
  };