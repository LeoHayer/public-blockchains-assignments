const hre = require("hardhat");
const {ethers} = require("ethers");

async function main() {
  
  // Define initial questions and answers
  const initialQuestions = [
    "Is Bitcoin a decentralized cryptocurrency?",
    "Is Ethereum a blockchain platform for smart contracts?",
    "Is blockchain technology immutable?",
    "Is it possible to reverse transactions on a blockchain?",
    "Does proof of work (PoW) involve solving complex mathematical puzzles?"
  ];

  const initialAnswers = [
    true, // Yes
    true, // Yes
    true, // Yes
    false, // No
    true // Yes
  ];

  // Deploy the contract with initial questions and answers
  const quiz = await hre.ethers.deployContract("MyQuiz", [initialQuestions, initialAnswers]);

  await quiz.waitForDeployment();

  console.log(`MyQuiz deployed to: ${quiz.target}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
