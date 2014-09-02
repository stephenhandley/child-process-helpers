var ChildProcess = require('child_process');

function spawn (args) {
  var command = args.cmd;
  var args    = args.args;

  var args_string = args ? ' ' + args.join(' ') : '';

  process.stdout.write("" + command + args_string + "\n");

  var spawned = ChildProcess.spawn(command, args);
  spawned.stderr.on('data', function(data) {
    process.stderr.write(data + "\n");
  });
  spawned.stdout.on('data', function(data) {
    process.stdout.write(data + "\n");
  });
};

function exec (args) {
  var command  = args.cmd;
  var callback = args.cb;
  var args     = args.args;

  process.stdout.write("" + command + "\n");

  ChildProcess.exec(command, function(error, stdout, stderr) {
    if (error) {
      process.stderr.write(stderr + "\n")
    } else {
      process.stdout.write(stdout + "\n")
    }

    if (callback) {
      callback(error);
    }
  });
};

module.exports = {
  spawn : spawn,
  exec  : exec
}