const Solution = require("./solution");
const { assertEqual } = require('../util')

const challenge = {
    number: 1,
    name: "Two Sum",
    difficulty: "Easy",
};

function run() {
    const solution = new Solution();

    const cases = [
        {
            nums: [2, 7, 11, 15],
            target: 9,
            expected: [0, 1],
        },
        {
            nums: [3, 2, 4],
            target: 6,
            expected: [1, 2],
        },
    ];

    cases.forEach((testCase, index) => {
        const result = solution.twoSum(
            testCase.nums,
            testCase.target
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
