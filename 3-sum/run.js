const Solution = require("./solution");
const { assertEqual } = require('../util')

function run() {
    const solution = new Solution();

    const cases = [
        {
            nums: [-1, 0, 1, 2, -1, -4],
            expected: [[-1, -1, 2], [-1, 0, 1]],
        },
        {
            nums: [0, 1, 1],
            expected: [],
        },
        {
            nums: [0, 0, 0],
            expected: [[0, 0, 0]],
        },
    ];

    cases.forEach((testCase, index) => {
        const result = solution.threeSum(
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