var Assert = require('assert')
var Asserts = require('asserts')

var CPH = require('./index')
var spawn = CPH.spawn;
var exec  = CPH.exec;

Asserts({
  "exec" : {
    "invalid command should error" : function () {
      exec("asdfsdf", function (error) {
        Assert.notEqual(error, null);
        Assert(error.message.match(/command not found/));
      })
    },

    "valid command should work" : function () {
      exec("ls", function (error) {
        Assert.equal(error, null);
      })
    },

    "shouldn't require callback" : function () {
      Assert.doesNotThrow(function () {
        exec("ls");
      });
    }
  },

  // need to buffer output and test too lazy noow
  // "spawn" : {
  //   "invalid command should error": function () {
  //     spawn("asdfsdf", ['-b', '-a', '-r', '-f']);
  //   },

  //   "shouldnt require args" : function () {
  //     spawn("ls");
  //   }
  // }
});