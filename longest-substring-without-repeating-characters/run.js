const Solution = require("./solution");
const { assertEqual } = require('../util')

const challenge = {
    number: 3,
    name: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
};

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

if (require.main === module) {
    run();
}

module.exports = { challenge, run };
