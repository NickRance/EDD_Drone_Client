/**
 * Created by nick-dev on 11/5/16.
 * This file sends the drone log info via termix commands
 */
var server_url="http://nranceedd.azurewebsites.net/";
var io = require('socket.io-client')(server_url);
var exec = require('child_process').exec;
var child;

function fivesec() {
    setInterval(function () {
       // console.log('5 second passed');
        io.emit('drone_message', "5 seconds have passed");
    }, 5000);
}

// child = exec("echo 'This is being called from my node script'",function (error, stdout, stderr) {
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     if (error !== null) {
//         console.log('exec error: ' + error);
//     }
// });

io.on('connect', function(socket){
    console.log('Client has connected');
     fivesec();
     io.on('client_message', function(msg){
         console.log(msg);
     });
      io.on('drone_message', function(msg){
          console.log(msg);
      });
});
