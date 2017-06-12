
var exports = module.exports = {};
var fs = require('fs');

exports.pwd = function(){
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
}

exports.date = function(){
  process.stdout.write(new Date().toString());
  process.stdout.write('\nprompt > ');
}

exports.ls = function(){
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      if(file.toString().indexOf('.') !== 0)
        process.stdout.write(file.toString() + '\n');
    })
    process.stdout.write('\nprompt > ');
  });
}

exports.echo = function(input){
  process.stdout.write(input);
  process.stdout.write('\nprompt > ');
}
