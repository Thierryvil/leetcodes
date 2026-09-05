const Solution = require("./solution");
const { assertEqual } = require('../util')

const challenge = {
    number: 121,
    name: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
};

function run() {
    const solution = new Solution();

    const cases = [
        {
            prices: [7, 1, 5, 3, 6, 4],
            expected: 5
        },
        {
            prices: [7, 6, 4, 3, 1],
            expected: 0
        },
    ];

    cases.forEach((testCase, index) => {
        const result = solution.maxProfit(
            testCase.prices,
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
