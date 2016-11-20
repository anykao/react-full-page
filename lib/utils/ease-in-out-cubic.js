"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = easeInOutCubic;
function easeInOutCubic(currentTime, startValue, changeInValue, duration) {
  var time = currentTime;
  time /= duration;
  time--;
  return changeInValue * (time * time * time + 1) + startValue;
}