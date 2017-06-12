// added comment

var exports = module.exports = {};
var fs = require('fs');

exports.pwd = function(filename){
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
}

exports.date = function(filename){
  process.stdout.write(new Date().toString());
  process.stdout.write('\nprompt > ');
}

exports.ls = function(filename){
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      if(file.toString().indexOf('.') !== 0)
        process.stdout.write(file.toString() + '\n');
    })
    process.stdout.write('\nprompt > ');
  });
}

exports.echo = function(filename){
  process.stdout.write(filename);
  process.stdout.write('\nprompt > ');
}

exports.cat = function(filename){
  fs.readFile(filename, (err,data) => {
    if(err) throw err;
    process.stdout.write(data.toString());
    process.stdout.write('\nprompt > ');
  });
  
}

exports.head = function(filename){
   fs.readFile(filename, (err,data) => {
    if(err) throw err;
    var allData = data.toString();
    var arrOfLines = allData.split('\n');
    var head = "";
    for(let i = 0; i < 5; i++){
      head+= arrOfLines[i] + "\n";
    }
    process.stdout.write(head);
    process.stdout.write('\nprompt > ');
  });
}
exports.tail = function(filename){
    fs.readFile(filename, (err,data) => {
    if(err) throw err;
    var allData = data.toString();
    var arrOfLines = allData.split('\n');
    var tail = "";
    for(let i = arrOfLines.length-5; i < arrOfLines.length; i++){
      tail+= arrOfLines[i] + "\n";
    }
    process.stdout.write(tail);
    process.stdout.write('\nprompt > ');
  });

}