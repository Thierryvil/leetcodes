const Solution = require("./solution");
const { assertEqual, TreeNode } = require('../util')

const challenge = {
    number: 102,
    name: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
};

function run() {
    const solution = new Solution();

    const cases = [
        {
            root: new TreeNode(
                3,
                new TreeNode(
                    9,
                ),
                new TreeNode(
                    20,
                    new TreeNode(15),
                    new TreeNode(7)
                )
            ),
            expected: [
                [3],
                [9, 20],
                [15, 7],
            ],
        },
        {
            root: new TreeNode(
                1,
            ),
            expected: [[1]]
        },
        {
            root: null,
            expected: [],
        },
        {
            root: new TreeNode(
                10,
                new TreeNode(
                    5,
                    new TreeNode(2),
                    new TreeNode(7),
                ),
                new TreeNode(
                    15,
                    new TreeNode(20),
                )
            ),
            expected: [
                [10],
                [5, 15],
                [2, 7, 20],
            ],
        },
    ];

    cases.forEach((testCase, index) => {
        const result = solution.levelOrder(
            testCase.root,
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
