// 2 === "error", 1 === "warn", 0 === "off"
module.exports = {
    root: true,
    rules: {
        // always include parens with arrow functions
        "arrow-parens": [2, "always"],
        // max line width
        "max-len": [
            1,
            {
                code: 100,
            },
        ],
        // 4 space indents
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
                MemberExpression: "off",
                flatTernaryExpressions: true,
            },
        ],
        // no unused params or variables allowed (unless you postfix with an underscore)
        "no-unused-vars": [
            1,
            {
                args: "all",
                // unused vars and args should end with an underscore
                argsIgnorePattern: "(^.+_$)",
                varsIgnorePattern: "(^.+_$)",
            },
        ],
        "comma-spacing": [
            1,
            {
                before: false,
                after: true,
            },
        ],
        // always put a comma at the end of an entry in a multi-line collection
        "comma-dangle": [1, "always-multiline"],
        // every file ends in a newline
        "eol-last": 2,
        // always use === versus ==
        eqeqeq: 2,
        // line feeds only
        "linebreak-style": [2, "unix"],
        radix: [2, "as-needed"],
        semi: [2, "always"],
    },
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "script",
        ecmaFeatures: {
            impliedStrict: true,
        },
    },
    extends: ["eslint:recommended"],
};
