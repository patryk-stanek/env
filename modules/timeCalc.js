function timeCalc(time) {
    var hours = Math.floor(time / 3600);
    time %= 3600;
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    switch (true) {
        case (hours>=1):
            console.log('hours: ' + hours);
        case (minutes>=1):
            console.log('minutes: ' + minutes);
        default:
            console.log("seconds: " + seconds);
    }
};

exports.print = timeCalc;