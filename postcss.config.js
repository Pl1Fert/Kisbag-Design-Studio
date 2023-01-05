module.exports = {
    plugins: [
        require("autoprefixer"),
        require("postcss-import"),
        require("postcss-combine-media-query"),
        require("postcss-extend"),
        require("postcss-mixins"),
        require("postcss-nested"),
        require("postcss-simple-vars")
    ],
};