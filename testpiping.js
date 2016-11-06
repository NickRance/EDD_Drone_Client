/**
 * Created by nick-dev on 11/6/16.
 */



const exec = require('child_process').exec;
const cmd = 'termux-battery-status';

exec(cmd, function(error, stdout, stderr) {
    if (error) {
        console.error('exec error: '+error);
        return;
    }
    console.log('stdout: '+ stdout);
    console.log('stderr: ' + stderr);
});

/***
ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
 ***/