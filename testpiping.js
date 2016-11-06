/**
 * Created by nick-dev on 11/6/16.
 */

const spawn = require('child_process').spawn;
const ls = spawn('termux-battery-status');

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});