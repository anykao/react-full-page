'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _easeInOutCubic = require('./ease-in-out-cubic');

var _easeInOutCubic2 = _interopRequireDefault(_easeInOutCubic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function animatedScrollTo(to, duration, callback) {
  var start = window.scrollY;
  var change = to - start;
  var currentTime = 0;
  var increment = 20;
  var animateScroll = function animateScroll() {
    currentTime += increment;
    var val = (0, _easeInOutCubic2.default)(currentTime, start, change, duration);

    window.scrollTo(0, val);
    if (currentTime > duration) {
      return callback();
    }

    setTimeout(animateScroll, increment);
  };
  animateScroll();
}

exports.default = animatedScrollTo;