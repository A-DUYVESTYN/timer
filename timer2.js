const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// uses recursion. Learning note: loops do not work to implement multiple user input functionalitiy  (whileloop :infinite loop stuck on prompt; for loop: does not ask for multiple inputs) .. 

// SIGINT: This event is invoked whenever the user press ctrl + c button.
rl.on('SIGINT', () => {
  console.log('Thanks for using the timer. ciao!')
  rl.close()
})

const beepTimer = function () {

  rl.question('Type b for beep or input the beep delay in sec. (ctrl+c to exit):\n', (answer1) => {
    if (answer1 === 'b') {
      process.stdout.write('\x07'); // system beep code
      process.stdout.write(`BEEP\n`);
      beepTimer()
    }

    if (answer1 >= 0 && !isNaN(answer1)) {
      setTimeout(() => {
        process.stdout.write('\x07'); // system beep code
        process.stdout.write(`BEEP after ${answer1} seconds \n`);
      }, Number(answer1 * 1000));

      beepTimer()
    }
    if (answer1 < 0) {
      process.stdout.write(`Error: Please provide a positive number or 'b'\n`);
      beepTimer()
    }
    // add case for input strings other than 'b'

  });

}

beepTimer()
