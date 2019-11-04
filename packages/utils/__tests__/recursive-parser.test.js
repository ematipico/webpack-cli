"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const defineTest_1 = require("../defineTest");
defineTest_1.default(path_1.join(__dirname, ".."), "init", "fixture-1", "entry", {
    foo: "Promise.resolve()",
    man: "() => duper",
    nice: "':)'",
    objects: "are",
    super: [
        "yeah",
        {
            enforce: "'pre'",
            include: ["customObj", "'Stringy'"],
            loader: "'eslint-loader'",
            options: {
                formatter: "'someOption'",
            },
            test: new RegExp(/\.(js|vue)$/),
        },
    ],
});
defineTest_1.default(path_1.join(__dirname, ".."), "add", "fixture-2", "entry", {
    foo: "Promise.resolve()",
    man: "() => nice!!",
    mode: "super-man",
    nice: "'=)'",
    objects: "are not",
    super: [
        "op",
        {
            enforce: "'pre'",
            include: ["asd", "'Stringy'"],
            loader: "'pia-loader'",
            options: {
                formatter: "'nao'",
            },
            test: new RegExp(/\.(wasm|c)$/),
        },
    ],
});
defineTest_1.default(path_1.join(__dirname, ".."), "remove", "fixture-3", "resolve", {
    alias: null,
});
defineTest_1.default(path_1.join(__dirname, ".."), "remove", "fixture-3", "plugins", ["plugin2"]);
defineTest_1.default(path_1.join(__dirname, ".."), "remove", "fixture-3", "module", {
    noParse: null,
});
defineTest_1.default(path_1.join(__dirname, ".."), "remove", "fixture-3", "entry", {
    a: null,
});
defineTest_1.default(path_1.join(__dirname, ".."), "remove", "fixture-3", "module", {
    rules: [
        {
            loader: "eslint-loader",
        },
    ],
});