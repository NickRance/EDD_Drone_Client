/**
 * Created by nick-dev on 11/7/16.
 */

var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client
    .after(4000, function() {
        this.stop();
    })
    .after(3000, function() {
        this.land();
    });