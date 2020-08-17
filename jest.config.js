module.exports = module.exports.default = {
    "setupFilesAfterEnv": [
        "/Users/ab/.fnm/node-versions/v14.8.0/installation/lib/node_modules/mhy/dist/configs/jest/setup.js"
    ],
    "rootDir": "/Users/ab/Sites/algo-coding",
    "roots": [
        "/Users/ab/Sites/algo-coding/src"
    ],
    "watchPathIgnorePatterns": [
        "__.*__"
    ],
    "moduleFileExtensions": [
        "js",
        "jsx",
        "json",
        "ts",
        "tsx"
    ],
    "modulePaths": [
        "/Users/ab/Sites/algo-coding/src",
        "/Users/ab/Sites/algo-coding/node_modules",
        "/Users/ab/.fnm/node-versions/v14.8.0/installation/lib/node_modules/mhy/node_modules"
    ],
    "transform": {
        "^.+\\.[jt]sx?$": "/Users/ab/.fnm/node-versions/v14.8.0/installation/lib/node_modules/mhy/dist/configs/jest/preprocess.js"
    },
    "transformIgnorePatterns": [],
    "bail": true,
    "testRegex": "\\.?(test|tests|spec|integration)\\.[jt]sx?$",
    "collectCoverage": false,
    "verbose": true,
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
        "\\.(s?css|less)$": "identity-obj-proxy",
        "\\.(svgx?)$": "/Users/ab/.fnm/node-versions/v14.8.0/installation/lib/node_modules/mhy/dist/configs/jest/mocks/react-null.js"
    },
    "collectCoverageFrom": [
        "**/*.js"
    ],
    "watchPlugins": []
}