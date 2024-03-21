const readline = require('read');

const readmeGenerator = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const questions = [
    'What is your project title?',
    'Please enter a short description of your project.',
    'What are the installation instructions for your project?'
    // Add more questions as needed
  ];

  const answers = [];

  const askQuestion = (i) => {
    rl.question(questions[i], (answer) => {
      answers.push(answer);
      if (i < questions.length - 1) {
        askQuestion(i + 1);
      } else {
        rl.close();
        // Generate the README file using the answers array
        generateREADME(answers);
      }
    });
  };

  askQuestion(0);
};

const generateREADME = (answers) => {
  // Generate the README file using the answers array
  // You can use a template literal or a library like `fs` to write the README to a file
};

readmeGenerator();
