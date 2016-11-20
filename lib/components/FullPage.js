'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _animatedScrollTo = require('../utils/animated-scroll-to');

var _animatedScrollTo2 = _interopRequireDefault(_animatedScrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullPage = function (_React$Component) {
  _inherits(FullPage, _React$Component);

  function FullPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FullPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FullPage.__proto__ || Object.getPrototypeOf(FullPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      switched: false
    }, _this.onResize = function () {
      _this.slides = [];

      for (var i = 0; i < _this.slidesCount; i++) {
        _this.slides.push(window.innerHeight * i);
      }

      _this.setState({
        height: window.innerHeight
      });
    }, _this.scrollToSlide = function (slide) {
      if (slide >= 0 && slide < _this.slidesCount) {
        _this.setState({
          activeSlide: slide
        });

        _this.scrollPending = true;
        (0, _animatedScrollTo2.default)(_this.slides[slide], 700, function () {
          _this.scrollPending = false;
        });
      }
    }, _this.onTouchStart = function (e) {
      _this.touchStart = e.touches[0].clientY;
    }, _this.onTouchEnd = function (e) {
      var touchEnd = e.changedTouches[0].clientY;

      if (_this.touchStart > touchEnd + _this.touchSensitivity) {
        _this.scrollToSlide(_this.state.activeSlide + 1);
      } else if (_this.touchStart < touchEnd - _this.touchSensitivity) {
        _this.scrollToSlide(_this.state.activeSlide - 1);
      }
    }, _this.onArrowClick = function () {
      _this.scrollToSlide(_this.state.activeSlide + 1);
    }, _this.onScroll = function (e) {
      e.preventDefault();
      if (_this.scrollPending) {
        return false;
      }

      var scrollDown = (e.wheelDelta || -e.deltaY || -e.detail) < 0;
      var activeSlide = _this.state.activeSlide;

      if (scrollDown) {
        activeSlide++;
      } else {
        activeSlide--;
      }

      _this.scrollToSlide(activeSlide);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FullPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('wheel', this.onScroll);
      document.addEventListener('touchstart', this.onTouchStart);
      document.addEventListener('touchend', this.onTouchEnd);
      window.addEventListener('resize', this.onResize);

      this.slidesCount = this.props.children.length;
      this.onResize();
      this.scrollToSlide(0);
      this.touchStart = 0;
      this.touchSensitivity = 5;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('wheel', this.onScroll);
      document.removeEventListener('touchstart', this.onTouchStart);
      document.removeEventListener('touchend', this.onTouchEnd);
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { height: this.state.height } },
        this.props.children
      );
    }
  }]);

  return FullPage;
}(_react2.default.Component);

FullPage.propTypes = {
  children: _react2.default.PropTypes.node.isRequired
};
exports.default = FullPage;