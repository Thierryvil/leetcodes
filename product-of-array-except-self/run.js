const Solution = require("./solution");
const { assertEqual } = require('../util')

const challenge = {
    number: 238,
    name: "Product of Array Except Self",
    difficulty: "Medium",
};

function run() {
    const solution = new Solution();

    const cases = [
        {
            nums: [1, 2, 3, 4],
            expected: [24, 12, 8, 6],
        },
        {
            nums: [-1, 1, 0, -3, 3],
            expected: [0, 0, 9, 0, 0],
        },
    ];

    cases.forEach((testCase, index) => {
        const result = solution.productExceptSelf(
            testCase.nums,
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
