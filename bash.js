
var command = require('./command');

// Output a prompt
process.stdout.write('prompt > ');


// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    var userInput = data.toString().trim(); // remove the newline
    var indexFirstSpace = userInput.indexOf(' ');
    var cmd = userInput.split(' ', 1)[0];
    if(indexFirstSpace > 0){
        var input = userInput.slice(indexFirstSpace+1);
    }
    if(command[cmd])
        command[cmd](input);
    else{
        process.stdout.write('You typed: ' +cmd);
    }
});



//