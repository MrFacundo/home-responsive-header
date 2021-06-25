let mix = require("laravel-mix");

mix.js("index.js", "js").sass("scss/main.scss", "css").setPublicPath("dist");
