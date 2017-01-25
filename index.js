'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = exports.list = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('graceful-fs');
var join = require('path').join;

var dir = join(__dirname, 'files');

var fin = function fin(resolve, reject, cb) {
  return function (err, res) {

    if (err) {
      reject(err);
      if (cb) cb(err);
      return;
    }

    resolve(res);

    if (cb) cb(null, res);
  };
};

var list = exports.list = function list(cb) {
  return new _promise2.default(function (resolve, reject) {

    var done = fin(resolve, reject, cb);

    fs.readdir(dir, function (err, res) {
      if (err) return done(err);
      done(null, res.map(function (f) {
        return join(dir, f);
      }));
    });
  });
};

var read = exports.read = function read(path, cb) {
  return new _promise2.default(function (resolve, reject) {

    var done = fin(resolve, reject, cb);
    fs.readFile(path, function (err, d) {
      if (err) return done(err);
      done(null, JSON.parse(d));
    });
  });
};