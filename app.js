/**
 * Created by nick-dev on 11/5/16.
 * This file sends the drone log info via termix commands
 */
var server_url="http://nranceedd.azurewebsites.net/";
var io = require('socket.io-client')(server_url);
const exec = require('child_process').exec;
const cmd = 'termux-battery-status';
var child;

function fivesec() {
    setInterval(function () {
            exec(cmd, function(error, stdout, stderr) {
                if (error) {
                    io.emit('drone_message',"Error: "+ error);
                }
                else{
                    io.emit('drone_message', "Output: " +stdout);
                }
            });

        }
        , 5000);
}

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