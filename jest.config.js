module.exports = {
    silent: false,
    verbose: false,
    collectCoverage: true,
    collectCoverageFrom: [
        'packages/*/src/**/*.{ts}'
    ],
    roots: [
        'packages/',
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$",
    testPathIgnorePatterns: ["/lib/", "/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};