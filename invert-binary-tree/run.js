const Solution = require("./solution");
const { assertEqual, TreeNode } = require('../util')

const challenge = {
    number: 226,
    name: "Invert Binary Tree",
    difficulty: "Easy",
};

function run() {
    const solution = new Solution();

    const cases = [
        {
            root: new TreeNode(
                4,
                new TreeNode(
                    2,
                    new TreeNode(1),
                    new TreeNode(3)
                ),
                new TreeNode(
                    7,
                    new TreeNode(6),
                    new TreeNode(9)
                )
            ),
            expected: new TreeNode(
                4,
                new TreeNode(
                    7,
                    new TreeNode(9),
                    new TreeNode(6)
                ),
                new TreeNode(
                    2,
                    new TreeNode(3),
                    new TreeNode(1)
                )
            ),
        },
        {
            root: new TreeNode(
                2,
                new TreeNode(1),
                new TreeNode(3)
            ),
            expected: new TreeNode(
                2,
                new TreeNode(3),
                new TreeNode(1)
            ),
        },
        {
            root: new TreeNode(),
            expected: new TreeNode()
        }

    ];

    cases.forEach((testCase, index) => {
        const result = solution.invertTree(
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
