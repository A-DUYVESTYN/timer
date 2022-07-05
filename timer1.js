let timers = process.argv.slice(2).filter(x => (x >= 0 && !isNaN(x)))

for (const timer of timers) {
  setTimeout(() => {
    process.stdout.write('\x07');
    process.stdout.write(`BEEP at ${timer} seconds \n`);
  }, Number(timer * 1000));
}
