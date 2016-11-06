/**
 * Created by nick-dev on 11/5/16.
 * This file sends the drone log info via termix commands
 */
var server_url="http://nranceedd.azurewebsites.net/";
var io = require('socket.io-client')(server_url);
const exec = require('child_process').exec;
var cmd = '';
var child;

// function fivesec() {
//     setInterval(function () {
//             exec(cmd, function(error, stdout, stderr) {
//                 if (error) {
//                     io.emit('drone_message',"Error: "+ error);
//                 }
//                 else{
//                     io.emit('drone_message', "Output: " +stdout);
//                 }
//             });
//
//         }
//         , 5000);
// }

function run_cmd(command) {
    exec(command, function (error, stdout, stderr) {
        if (error) {
            io.emit('drone_message', "Error: " + error);
        }
        else {
            io.emit('drone_message', "Output: " + stdout);
        }
    });
}

function start_location_tracking()
{
    var spawn = require('child_process').spawn;
   // track = spawn('ls', {
    track = spawn('termux-location',['-r'], {
        //stdio: 'ignore',
        shell:true
    });
    track.stdout.on('data', function(data)
    {
        io.emit("drone_message",data);
    })

}


io.on('connect', function(socket){
    console.log('Client has connected');
    start_location_tracking();
     //fivesec();
     io.on('client_message', function(msg){
         console.log("message received");
         cmd = msg.replace("Client: ","");
         run_cmd(cmd);
     });
      io.on('drone_message', function(msg){
          console.log(msg);
      });
});