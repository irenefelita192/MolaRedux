require("source-map-support").install();
exports.id = "history";
exports.modules = {

/***/ "./src/routes/history/components/History.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/actions/history.js");
/* harmony import */ var _History_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/routes/history/components/History.css");
/* harmony import */ var _History_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_History_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/irene/Documents/Work/MolaRedux/src/routes/history/components/History.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








var History =
/*#__PURE__*/
function (_React$Component) {
  _inherits(History, _React$Component);

  function History(props) {
    var _this;

    _classCallCheck(this, History);

    _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, props));
    var movies = props.movies;
    console.log("AAA", movies);
    return _this;
  }

  _createClass(History, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchAllHistory();
    }
  }, {
    key: "render",
    value: function render() {
      var movieDummy = this.props.movieDummy; // console.log("movieHistory", movies);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.containerOuter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.containerInner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, movieDummy.map(function (movie) {
        var playedDuration = movie.playedDuration / movie.totalDuration * 100;
        var barStyle = {
          width: "".concat(playedDuration, "%")
        };
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieContainer,
          key: movie.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieImageWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: movie.img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieDurationBar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.moviePlayedBar,
          style: barStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieDetailWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, movie.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieChapter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "Chapter: ", movie.chapter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieDuration,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, movie.totalDuration, " min.")));
      }))));
    }
  }]);

  return History;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // History.propTypes = {
//     movieHistory: PropTypes.arrayOf(PropTypes.object),
//   };


Object.defineProperty(History, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    // movies: PropTypes.shape({
    //     img: PropTypes.string,
    //     title: PropTypes.string,
    //     chapter: PropTypes.string,
    //     totalDuration: PropTypes.number,
    // }),
    movies: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)
  }
});

function mapStateToProps(state, ownProps) {
  console.log("MOVIE", movies);
  console.log("stateeee", state);
  return {
    movieHistory: state.history.movies
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // same effect
    fetchAllHistory: function fetchAllHistory() {
      return dispatch(Object(_actions_history__WEBPACK_IMPORTED_MODULE_5__["fetchAllHistory"])());
    }
  };
}; // export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(History));


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_History_css__WEBPACK_IMPORTED_MODULE_6___default.a), Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps))(History));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9oaXN0b3J5LmQ1NjJlYzgxYjQ4NmE0YzI1NjcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L2NvbXBvbmVudHMvSGlzdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCB7IGZldGNoQWxsSGlzdG9yeSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvaGlzdG9yeSc7XG5pbXBvcnQgcyBmcm9tICcuL0hpc3RvcnkuY3NzJztcblxuY2xhc3MgSGlzdG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBjb25zdCB7IG1vdmllcyB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQUFBXCIsIG1vdmllcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEFsbEhpc3RvcnkoKTtcbiAgICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBtb3ZpZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgLy8gICAgIGltZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gICAgIGNoYXB0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gICAgIHRvdGFsRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLy8gfSksXG4gICAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1vdmllRHVtbXkgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gY29uc29sZS5sb2coXCJtb3ZpZUhpc3RvcnlcIiwgbW92aWVzKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy53cmFwcGVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lck91dGVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJJbm5lcn0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtb3ZpZUR1bW15Lm1hcCggKG1vdmllKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZWREdXJhdGlvbiA9IG1vdmllLnBsYXllZER1cmF0aW9uIC8gbW92aWUudG90YWxEdXJhdGlvbiAqIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhclN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtwbGF5ZWREdXJhdGlvbn0lYFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb3ZpZUNvbnRhaW5lcn0ga2V5PXttb3ZpZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cy5tb3ZpZUltYWdlV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bW92aWUuaW1nfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb3ZpZUR1cmF0aW9uQmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MubW92aWVQbGF5ZWRCYXJ9IHN0eWxlPXtiYXJTdHlsZX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVEZXRhaWxXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vdmllVGl0bGV9Pnttb3ZpZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vdmllQ2hhcHRlcn0+Q2hhcHRlcjoge21vdmllLmNoYXB0ZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb3ZpZUR1cmF0aW9ufT57bW92aWUudG90YWxEdXJhdGlvbn0gbWluLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuLy8gSGlzdG9yeS5wcm9wVHlwZXMgPSB7XG4vLyAgICAgbW92aWVIaXN0b3J5OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbi8vICAgfTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIGNvbnNvbGUubG9nKFwiTU9WSUVcIiwgbW92aWVzKVxuICAgIGNvbnNvbGUubG9nKFwic3RhdGVlZWVcIiwgc3RhdGUpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbW92aWVIaXN0b3J5OiBzdGF0ZS5oaXN0b3J5Lm1vdmllc1xuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gc2FtZSBlZmZlY3RcbiAgICAgICAgZmV0Y2hBbGxIaXN0b3J5IDogKCkgPT4gZGlzcGF0Y2goZmV0Y2hBbGxIaXN0b3J5KCkpLFxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzKShIaXN0b3J5KSk7XG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICAgIHdpdGhTdHlsZXMocyksXG4gICAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcbikoSGlzdG9yeSkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQURBO0FBR0E7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBWUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBT0E7Ozs7QUF4REE7QUE0REE7QUFDQTtBQUNBO0FBQ0E7QUEvREE7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7OztBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9