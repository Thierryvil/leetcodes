const Solution = require("./solution");
const { assertEqual } = require('../util')

function run() {
    const solution = new Solution();

    const cases = [
        {
            s: "abcabcbb",
            expected: 3,
        },
        {
            s: "bbbbb",
            expected: 1,
        },
        {
            s: "pwwkew",
            expected: 3,
        },
    ];

    cases.forEach((testCase, index) => {
        const result = solution.lengthOfLongestSubstring(
            testCase.s,
        );

        assertEqual(
            result,
            testCase.expected,
            index + 1
        );
    });
}

run();