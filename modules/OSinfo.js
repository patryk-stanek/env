var os = require('os');
var timeCalc = require('./timeCalc');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var user = os.userInfo();

    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }

    console.log('System: ', type);
    console.log('Release: ', release);
    console.log('CPU: ', cpu);
    console.log(timeCalc.print(uptime));
    console.log('User name: ', user.username);
    console.log('Home dir: ', user.homedir);
}

exports.print = getOSinfo;