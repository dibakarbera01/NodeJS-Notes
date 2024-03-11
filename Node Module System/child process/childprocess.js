//child process is a node module used to create sub process within a script
// you can perfrom different tasks with your script by just using some methods

const cp=require('child_process')


// cp.execSync('start chrome')

// cp.execSync('calc')

console.log('output:- '+cp.execSync('node demo.js'))