const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const difficulties = ["Easy", "Medium", "Hard"];

const challenges = fs.readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
        const runPath = path.join(root, entry.name, "run.js");

        if (!fs.existsSync(runPath)) {
            return null;
        }

        const { challenge } = require(runPath);

        if (
            !challenge
            || !Number.isInteger(challenge.number)
            || !challenge.name
            || !difficulties.includes(challenge.difficulty)
        ) {
            throw new Error(`Invalid challenge metadata in ${runPath}`);
        }

        return { ...challenge, directory: entry.name };
    })
    .filter(Boolean)
    .sort((a, b) => a.number - b.number);

const challengeNumber = process.argv[2];
let selectedChallenges = challenges;

if (challengeNumber !== undefined) {
    if (!/^\d+$/.test(challengeNumber)) {
        console.error("❌ Informe um número válido do LeetCode. Exemplo: npm start -- 226");
        process.exit(1);
    }

    selectedChallenges = challenges.filter(
        (challenge) => challenge.number === Number(challengeNumber)
    );

    if (selectedChallenges.length === 0) {
        console.error(`❌ Desafio ${challengeNumber} não encontrado.`);
        console.log(`Disponíveis: ${challenges.map(({ number }) => number).join(", ")}`);
        process.exit(1);
    }
}

const passed = [];
const failed = [];

for (const challenge of selectedChallenges) {
    console.log();
    console.log("=".repeat(60));
    console.log(`${challenge.number} - ${challenge.name}`);
    console.log("=".repeat(60));

    const result = spawnSync(
        process.execPath,
        ["run.js"],
        {
            cwd: path.join(root, challenge.directory),
            stdio: "inherit",
        }
    );

    if (result.status === 0) {
        passed.push(challenge);
    } else {
        failed.push(challenge);
    }
}

console.log();
console.log("=".repeat(60));
console.log("Resolvidos por dificuldade:");

for (const difficulty of difficulties) {
    const total = passed.filter(
        (challenge) => challenge.difficulty === difficulty
    ).length;

    console.log(`  ${difficulty}: ${total}`);
}

console.log(`Total: ${passed.length}/${selectedChallenges.length}`);

if (failed.length > 0) {
    console.log(`❌ ${failed.length} desafio(s) falharam:`);

    for (const challenge of failed) {
        console.log(`  - ${challenge.number} - ${challenge.name}`);
    }

    process.exit(1);
}

console.log(`✅ Todos os ${passed.length} desafio(s) passaram!`);
