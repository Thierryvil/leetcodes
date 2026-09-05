const Solution = require("./solution");
const { assertEqual } = require('../util')

function run() {
    const solution = new Solution();

    const cases = [
        {
            nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
            expected: 6,
        },
        {
            nums: [1],
            expected: 1,
        },
        {
            nums: [5, 4, -1, 7, 8],
            expected: 23,
        },
    ];

    cases.forEach((testCase, index) => {
        const result = solution.maxSubArray(
            testCase.nums,
        );

        assertEqual(
            result,
            testCase.expected,
            index + 1
        );
    });
}

run();