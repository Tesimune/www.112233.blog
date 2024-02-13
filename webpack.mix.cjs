const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
const path = require("path");

mix.js("resources/js/app.jsx", "public/js")
    .react()
    .postCss("resources/css/app.css", "public/css", [
        tailwindcss("./tailwind.config.js"),
    ])
    .options({
        processCssUrls: false,
        postCss: [],
        terser: {},
        autoprefixer: {},
        legacyNodePolyfills: false
    })
    .version();

mix.alias({
    "@": path.join(__dirname, "resources/js"),
});

