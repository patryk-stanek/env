var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read(); //odczyt co uzytkownik podal na wejsciu
    process.stdout.write('Echo: ' + input);

    if(input !== null) {
        var instruction = input.trim();

        switch (instruction) {
            case "/lang":
                process.stdout.write(process.env.LANG);
                break;
            case "/ver":
                process.stdout.write(process.versions.node);
                break;
            case "/hello":
                process.stdout.write('Hello world!');
                break;
            case "/info":
                OSinfo.print();
                break;
            case "/exit":
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }
    }
});