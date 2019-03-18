process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read(); //odczyt co uzytkownik podal na wejsciu
    process.stdout.write('echo: ' + input);

    if(!input !== null) {
        var instruction = input.trim();

        switch (instruction) {
            case "/lang":
                process.stdout.write(process.env.LANG);
                break;
            case "/ver":
                process.stdout.write(process.versions.node);
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