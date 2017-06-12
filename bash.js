//console.log(process, "process itself");
//console.log(Object.keys(process), "keys")

// Output a prompt
process.stdout.write('prompt > ');


// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if(cmd === "pwd"){
      process.stdout.write(process.cwd());
     
  }
  if(cmd === "date"){
      var dateVal = new Date();

      process.stdout.write(dateVal.toString());
      
  }
  else{
      process.stdout.write('You typed: ' + cmd);
      
  }
  
  process.stdout.write('\nprompt > ');

});



