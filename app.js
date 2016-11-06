/**
 * Created by nick-dev on 11/5/16.
 * This file sends the drone log info via termix commands
 */
var server_url="http://nranceedd.azurewebsites.net/";
var io = require('socket.io-client')(server_url);
var exec = require('child_process').exec;
var child;
//var request = require('request');

function fivesec() {
    setInterval(function () {
        //console.log('5 second passed');
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

io.on('connection', function onConnect(socket){
    console.log('Client has connected');
    fivesec();
    socket.on('client_message', function(msg){
       console.log("Client: "+msg);
    });
    socket.on('drone_message', function(msg){
        io.emit('drone_message',"Drone: "+ msg);
    });
});
