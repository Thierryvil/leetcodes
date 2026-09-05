const Solution = require("./solution");
const { assertEqual } = require('../util')

const challenge = {
    number: 704,
    name: "Binary Search",
    difficulty: "Easy",
};

function run() {
    const solution = new Solution();

    const cases = [
        {
            nums: [-1, 0, 3, 5, 9, 12],
            target: 9,
            expected: 4,
        },
        {
            nums: [-1, 0, 3, 5, 9, 12],
            target: 2,
            expected: -1,
        },
    ];

    cases.forEach((testCase, index) => {
        const result = solution.search(
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
