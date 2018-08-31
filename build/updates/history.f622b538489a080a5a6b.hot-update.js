require("source-map-support").install();
exports.id = "history";
exports.modules = {

/***/ "./src/routes/history/components/History.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _History_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/history/components/History.css");
/* harmony import */ var _History_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_History_css__WEBPACK_IMPORTED_MODULE_3__);
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

  function History() {
    _classCallCheck(this, History);

    return _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).apply(this, arguments));
  }

  _createClass(History, [{
    key: "render",
    value: function render() {
      var movies = this.props.movies;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.containerOuter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.containerInner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, movies.map(function (movie) {
        var playedDuration = movie.playedDuration / movie.totalDuration * 100;
        var barStyle = {
          width: "".concat(playedDuration, "%")
        };
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieContainer,
          key: movie.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieImageWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: movie.img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieDurationBar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.moviePlayedBar,
          style: barStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieDetailWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, movie.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieChapter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, "Chapter: ", movie.chapter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieDuration,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, movie.totalDuration, " min.")));
      }))));
    }
  }]);

  return History;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Object.defineProperty(History, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    // movie: PropTypes.shape({
    //     img: PropTypes.string,
    //     title: PropTypes.string,
    //     chapter: PropTypes.string,
    //     totalDuration: PropTypes.number,
    // }),
    movies: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
  }
});
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_History_css__WEBPACK_IMPORTED_MODULE_3___default.a)(History));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9oaXN0b3J5LmY2MjJiNTM4NDg5YTA4MGE1YTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L2NvbXBvbmVudHMvSGlzdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9IaXN0b3J5LmNzcyc7XG5cbmNsYXNzIEhpc3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIG1vdmllOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIC8vICAgICBpbWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vICAgICBjaGFwdGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vICAgICB0b3RhbER1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIH0pLFxuICAgIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtb3ZpZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Mud3JhcHBlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJPdXRlcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVySW5uZXJ9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbW92aWVzLm1hcCggKG1vdmllKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZWREdXJhdGlvbiA9IG1vdmllLnBsYXllZER1cmF0aW9uIC8gbW92aWUudG90YWxEdXJhdGlvbiAqIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhclN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtwbGF5ZWREdXJhdGlvbn0lYFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb3ZpZUNvbnRhaW5lcn0ga2V5PXttb3ZpZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cy5tb3ZpZUltYWdlV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bW92aWUuaW1nfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb3ZpZUR1cmF0aW9uQmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MubW92aWVQbGF5ZWRCYXJ9IHN0eWxlPXtiYXJTdHlsZX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVEZXRhaWxXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vdmllVGl0bGV9Pnttb3ZpZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vdmllQ2hhcHRlcn0+Q2hhcHRlcjoge21vdmllLmNoYXB0ZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb3ZpZUR1cmF0aW9ufT57bW92aWUudG90YWxEdXJhdGlvbn0gbWluLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShIaXN0b3J5KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBV0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQU9BOzs7O0FBN0NBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTs7QUErQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==