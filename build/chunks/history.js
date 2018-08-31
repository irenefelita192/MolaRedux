require("source-map-support").install();
exports.ids = ["history"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/History.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".History-wrapper-2JRsq {\n    background-image: url('https://www.publicdomainpictures.net/pictures/180000/velka/sea-background-texture-14667654387Yx.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 76px 0 0 250px;\n}\n\n.History-containerOuter-2fOqw {\n    overflow: hidden;\n    width: 1190px;\n}\n\n.History-containerInner-FBbUu {\n    overflow-y: auto;\n    width: 1220px;\n    margin: 0 auto;\n    height: calc(100vh - 76px);\n}\n\n.History-movieContainer-3Tv4n {\n    display: inline-block;\n    width: 50%;\n    margin-bottom: 40px;\n}\n\n.History-movieDetailWrapper-2Ro_N {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 20px;\n    color: #FFFFFF;\n    width: calc(100% - 305px);\n}\n\n.History-movieImageWrapper-3wUYt {\n    position: relative;\n    display: inline-block;\n    width: 265px;\n    cursor: pointer;\n}\n\n.History-movieImageWrapper-3wUYt > img {\n    width: 100%;\n}\n\n.History-movieDurationBar-3klp7 {\n   position: absolute;\n   bottom: 15px;\n   width: calc(100% - 40px);\n   height: 4px;\n   background-color: #C1C1C1;\n   margin: 0 20px;\n}\n\n.History-moviePlayedBar-2PoUG {\n    position: absolute;\n    background-color: #E10B14;\n    height: 100%;\n}\n\n.History-movieTitle-Wn2nZ {\n    font-size: 18px;\n    font-weight: bold;\n    padding-bottom: 4px;\n}\n\n.History-movieChapter-1dSMW {\n    font-size: 16px;\n    padding-bottom: 4px;\n}\n\n.History-movieDuration-1kVCm {\n    font-size: 20px;\n    padding-bottom: 4px;\n}\n\n@media screen and (max-width: 1200px) {\n    .History-containerOuter-2fOqw {\n        width: 960px;\n    }\n\n    .History-containerInner-FBbUu {\n        width: 1000px;\n    }\n\n    .History-movieImageWrapper-3wUYt {\n        width: 240px;\n    }\n\n    .History-movieTitle-Wn2nZ {\n        font-size: 16px;\n    }\n    \n    .History-movieChapter-1dSMW {\n        font-size: 14px;\n    }\n    \n    .History-movieDuration-1kVCm {\n        font-size: 18px;\n    }\n}", "", {"version":3,"sources":["/Users/irene/Documents/Work/MolaRedux/src/routes/history/components/History.css"],"names":[],"mappings":"AAAA;IACI,6HAA6H;IAC7H,6BAA6B;IAC7B,uBAAuB;IACvB,wBAAwB;CAC3B;;AAED;IACI,iBAAiB;IACjB,cAAc;CACjB;;AAED;IACI,iBAAiB;IACjB,cAAc;IACd,eAAe;IACf,2BAA2B;CAC9B;;AAED;IACI,sBAAsB;IACtB,WAAW;IACX,oBAAoB;CACvB;;AAED;IACI,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,0BAA0B;CAC7B;;AAED;IACI,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,gBAAgB;CACnB;;AAED;IACI,YAAY;CACf;;AAED;GACG,mBAAmB;GACnB,aAAa;GACb,yBAAyB;GACzB,YAAY;GACZ,0BAA0B;GAC1B,eAAe;CACjB;;AAED;IACI,mBAAmB;IACnB,0BAA0B;IAC1B,aAAa;CAChB;;AAED;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;CACvB;;AAED;IACI,gBAAgB;IAChB,oBAAoB;CACvB;;AAED;IACI,gBAAgB;IAChB,oBAAoB;CACvB;;AAED;IACI;QACI,aAAa;KAChB;;IAED;QACI,cAAc;KACjB;;IAED;QACI,aAAa;KAChB;;IAED;QACI,gBAAgB;KACnB;;IAED;QACI,gBAAgB;KACnB;;IAED;QACI,gBAAgB;KACnB;CACJ","file":"History.css","sourcesContent":[".wrapper {\n    background-image: url('https://www.publicdomainpictures.net/pictures/180000/velka/sea-background-texture-14667654387Yx.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 76px 0 0 250px;\n}\n\n.containerOuter {\n    overflow: hidden;\n    width: 1190px;\n}\n\n.containerInner {\n    overflow-y: auto;\n    width: 1220px;\n    margin: 0 auto;\n    height: calc(100vh - 76px);\n}\n\n.movieContainer {\n    display: inline-block;\n    width: 50%;\n    margin-bottom: 40px;\n}\n\n.movieDetailWrapper {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 20px;\n    color: #FFFFFF;\n    width: calc(100% - 305px);\n}\n\n.movieImageWrapper {\n    position: relative;\n    display: inline-block;\n    width: 265px;\n    cursor: pointer;\n}\n\n.movieImageWrapper > img {\n    width: 100%;\n}\n\n.movieDurationBar {\n   position: absolute;\n   bottom: 15px;\n   width: calc(100% - 40px);\n   height: 4px;\n   background-color: #C1C1C1;\n   margin: 0 20px;\n}\n\n.moviePlayedBar {\n    position: absolute;\n    background-color: #E10B14;\n    height: 100%;\n}\n\n.movieTitle {\n    font-size: 18px;\n    font-weight: bold;\n    padding-bottom: 4px;\n}\n\n.movieChapter {\n    font-size: 16px;\n    padding-bottom: 4px;\n}\n\n.movieDuration {\n    font-size: 20px;\n    padding-bottom: 4px;\n}\n\n@media screen and (max-width: 1200px) {\n    .containerOuter {\n        width: 960px;\n    }\n\n    .containerInner {\n        width: 1000px;\n    }\n\n    .movieImageWrapper {\n        width: 240px;\n    }\n\n    .movieTitle {\n        font-size: 16px;\n    }\n    \n    .movieChapter {\n        font-size: 14px;\n    }\n    \n    .movieDuration {\n        font-size: 18px;\n    }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"wrapper": "History-wrapper-2JRsq",
	"containerOuter": "History-containerOuter-2fOqw",
	"containerInner": "History-containerInner-FBbUu",
	"movieContainer": "History-movieContainer-3Tv4n",
	"movieDetailWrapper": "History-movieDetailWrapper-2Ro_N",
	"movieImageWrapper": "History-movieImageWrapper-3wUYt",
	"movieDurationBar": "History-movieDurationBar-3klp7",
	"moviePlayedBar": "History-moviePlayedBar-2PoUG",
	"movieTitle": "History-movieTitle-Wn2nZ",
	"movieChapter": "History-movieChapter-1dSMW",
	"movieDuration": "History-movieDuration-1kVCm"
};

/***/ }),

/***/ "./src/routes/history/components/History.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/History.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/History.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
        content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/History.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

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

/***/ }),

/***/ "./src/routes/history/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _components_History__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/history/components/History.js");
var _jsxFileName = "/Users/irene/Documents/Work/MolaRedux/src/routes/history/index.js";



var title = 'History'; // const axios = require('axios');
// // Make a request for a user with a given ID
// axios.get('http://mola.lukitomo.com/v2/videos/playlists/horror')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

function action() {
  var dummyHistory = [{
    id: 1,
    title: 'Hannibal Lecter - Season 3',
    chapter: 'Thirty three',
    playedDuration: 30,
    totalDuration: 49,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 2,
    title: 'The Greatest Showman',
    chapter: 'One',
    playedDuration: 20,
    totalDuration: 100,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 3,
    title: 'Hannibal Lecter - Season 3',
    chapter: 'Thirty three',
    playedDuration: 30,
    totalDuration: 49,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 4,
    title: 'The Greatest Showman',
    chapter: 'One',
    playedDuration: 20,
    totalDuration: 100,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 5,
    title: 'Hannibal Lecter - Season 3',
    chapter: 'Thirty three',
    playedDuration: 30,
    totalDuration: 49,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 6,
    title: 'The Greatest Showman',
    chapter: 'One',
    playedDuration: 20,
    totalDuration: 100,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 7,
    title: 'Hannibal Lecter - Season 3',
    chapter: 'Thirty three',
    playedDuration: 30,
    totalDuration: 49,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 8,
    title: 'The Greatest Showman',
    chapter: 'One',
    playedDuration: 20,
    totalDuration: 100,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 9,
    title: 'Hannibal Lecter - Season 3',
    chapter: 'Thirty three',
    playedDuration: 30,
    totalDuration: 49,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 10,
    title: 'The Greatest Showman',
    chapter: 'One',
    playedDuration: 20,
    totalDuration: 100,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 11,
    title: 'Hannibal Lecter - Season 3',
    chapter: 'Thirty three',
    playedDuration: 30,
    totalDuration: 49,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 12,
    title: 'The Greatest Showman',
    chapter: 'One',
    playedDuration: 20,
    totalDuration: 100,
    img: 'https://via.placeholder.com/331x207'
  }];
  return {
    chunks: ['history'],
    title: title,
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_History__WEBPACK_IMPORTED_MODULE_2__["default"], {
      movies: dummyHistory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2hpc3RvcnkuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L2NvbXBvbmVudHMvSGlzdG9yeS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9oaXN0b3J5L2NvbXBvbmVudHMvSGlzdG9yeS5jc3M/MWViZCIsIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L2NvbXBvbmVudHMvSGlzdG9yeS5qcyIsIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuSGlzdG9yeS13cmFwcGVyLTJKUnNxIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5wdWJsaWNkb21haW5waWN0dXJlcy5uZXQvcGljdHVyZXMvMTgwMDAwL3ZlbGthL3NlYS1iYWNrZ3JvdW5kLXRleHR1cmUtMTQ2Njc2NTQzODdZeC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZzogNzZweCAwIDAgMjUwcHg7XFxufVxcblxcbi5IaXN0b3J5LWNvbnRhaW5lck91dGVyLTJmT3F3IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDExOTBweDtcXG59XFxuXFxuLkhpc3RvcnktY29udGFpbmVySW5uZXItRkJiVXUge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogMTIyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzZweCk7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllQ29udGFpbmVyLTNUdjRuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4uSGlzdG9yeS1tb3ZpZURldGFpbFdyYXBwZXItMlJvX04ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwNXB4KTtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVJbWFnZVdyYXBwZXItM3dVWXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDI2NXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllSW1hZ2VXcmFwcGVyLTN3VVl0ID4gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllRHVyYXRpb25CYXItM2tscDcge1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICBib3R0b206IDE1cHg7XFxuICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgIGhlaWdodDogNHB4O1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICNDMUMxQzE7XFxuICAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllUGxheWVkQmFyLTJQb1VHIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTEwQjE0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllVGl0bGUtV24ybloge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uSGlzdG9yeS1tb3ZpZUNoYXB0ZXItMWRTTVcge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllRHVyYXRpb24tMWtWQ20ge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICAuSGlzdG9yeS1jb250YWluZXJPdXRlci0yZk9xdyB7XFxuICAgICAgICB3aWR0aDogOTYwcHg7XFxuICAgIH1cXG5cXG4gICAgLkhpc3RvcnktY29udGFpbmVySW5uZXItRkJiVXUge1xcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcXG4gICAgfVxcblxcbiAgICAuSGlzdG9yeS1tb3ZpZUltYWdlV3JhcHBlci0zd1VZdCB7XFxuICAgICAgICB3aWR0aDogMjQwcHg7XFxuICAgIH1cXG5cXG4gICAgLkhpc3RvcnktbW92aWVUaXRsZS1XbjJuWiB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5IaXN0b3J5LW1vdmllQ2hhcHRlci0xZFNNVyB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5IaXN0b3J5LW1vdmllRHVyYXRpb24tMWtWQ20ge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvaXJlbmUvRG9jdW1lbnRzL1dvcmsvTW9sYVJlZHV4L3NyYy9yb3V0ZXMvaGlzdG9yeS9jb21wb25lbnRzL0hpc3RvcnkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkhBQTZIO0lBQzdILDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZiwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWU7SUFDZiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7R0FDRyxtQkFBbUI7R0FDbkIsYUFBYTtHQUNiLHlCQUF5QjtHQUN6QixZQUFZO0dBQ1osMEJBQTBCO0dBQzFCLGVBQWU7Q0FDakI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0k7UUFDSSxhQUFhO0tBQ2hCOztJQUVEO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLGFBQWE7S0FDaEI7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7Q0FDSlwiLFwiZmlsZVwiOlwiSGlzdG9yeS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vd3d3LnB1YmxpY2RvbWFpbnBpY3R1cmVzLm5ldC9waWN0dXJlcy8xODAwMDAvdmVsa2Evc2VhLWJhY2tncm91bmQtdGV4dHVyZS0xNDY2NzY1NDM4N1l4LmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwYWRkaW5nOiA3NnB4IDAgMCAyNTBweDtcXG59XFxuXFxuLmNvbnRhaW5lck91dGVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDExOTBweDtcXG59XFxuXFxuLmNvbnRhaW5lcklubmVyIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDEyMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc2cHgpO1xcbn1cXG5cXG4ubW92aWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5tb3ZpZURldGFpbFdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwNXB4KTtcXG59XFxuXFxuLm1vdmllSW1hZ2VXcmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyNjVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW92aWVJbWFnZVdyYXBwZXIgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vdmllRHVyYXRpb25CYXIge1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICBib3R0b206IDE1cHg7XFxuICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgIGhlaWdodDogNHB4O1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICNDMUMxQzE7XFxuICAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi5tb3ZpZVBsYXllZEJhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxMEIxNDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubW92aWVUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5tb3ZpZUNoYXB0ZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5tb3ZpZUR1cmF0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLmNvbnRhaW5lck91dGVyIHtcXG4gICAgICAgIHdpZHRoOiA5NjBweDtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVySW5uZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcXG4gICAgfVxcblxcbiAgICAubW92aWVJbWFnZVdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICB9XFxuXFxuICAgIC5tb3ZpZVRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1vdmllQ2hhcHRlciB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tb3ZpZUR1cmF0aW9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIkhpc3Rvcnktd3JhcHBlci0ySlJzcVwiLFxuXHRcImNvbnRhaW5lck91dGVyXCI6IFwiSGlzdG9yeS1jb250YWluZXJPdXRlci0yZk9xd1wiLFxuXHRcImNvbnRhaW5lcklubmVyXCI6IFwiSGlzdG9yeS1jb250YWluZXJJbm5lci1GQmJVdVwiLFxuXHRcIm1vdmllQ29udGFpbmVyXCI6IFwiSGlzdG9yeS1tb3ZpZUNvbnRhaW5lci0zVHY0blwiLFxuXHRcIm1vdmllRGV0YWlsV3JhcHBlclwiOiBcIkhpc3RvcnktbW92aWVEZXRhaWxXcmFwcGVyLTJSb19OXCIsXG5cdFwibW92aWVJbWFnZVdyYXBwZXJcIjogXCJIaXN0b3J5LW1vdmllSW1hZ2VXcmFwcGVyLTN3VVl0XCIsXG5cdFwibW92aWVEdXJhdGlvbkJhclwiOiBcIkhpc3RvcnktbW92aWVEdXJhdGlvbkJhci0za2xwN1wiLFxuXHRcIm1vdmllUGxheWVkQmFyXCI6IFwiSGlzdG9yeS1tb3ZpZVBsYXllZEJhci0yUG9VR1wiLFxuXHRcIm1vdmllVGl0bGVcIjogXCJIaXN0b3J5LW1vdmllVGl0bGUtV24yblpcIixcblx0XCJtb3ZpZUNoYXB0ZXJcIjogXCJIaXN0b3J5LW1vdmllQ2hhcHRlci0xZFNNV1wiLFxuXHRcIm1vdmllRHVyYXRpb25cIjogXCJIaXN0b3J5LW1vdmllRHVyYXRpb24tMWtWQ21cIlxufTsiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hpc3RvcnkuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hpc3RvcnkuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSGlzdG9yeS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vSGlzdG9yeS5jc3MnO1xuXG5jbGFzcyBIaXN0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBtb3ZpZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAvLyAgICAgaW1nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyAgICAgY2hhcHRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyAgICAgdG90YWxEdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvLyB9KSxcbiAgICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbW92aWVzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLndyYXBwZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyT3V0ZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcklubmVyfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmllcy5tYXAoIChtb3ZpZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVkRHVyYXRpb24gPSBtb3ZpZS5wbGF5ZWREdXJhdGlvbiAvIG1vdmllLnRvdGFsRHVyYXRpb24gKiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7cGxheWVkRHVyYXRpb259JWBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVDb250YWluZXJ9IGtleT17bW92aWUuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3MubW92aWVJbWFnZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e21vdmllLmltZ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVEdXJhdGlvbkJhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLm1vdmllUGxheWVkQmFyfSBzdHlsZT17YmFyU3R5bGV9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vdmllRGV0YWlsV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb3ZpZVRpdGxlfT57bW92aWUudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb3ZpZUNoYXB0ZXJ9PkNoYXB0ZXI6IHttb3ZpZS5jaGFwdGVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVEdXJhdGlvbn0+e21vdmllLnRvdGFsRHVyYXRpb259IG1pbi48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoSGlzdG9yeSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvSGlzdG9yeSc7XG5cbmNvbnN0IHRpdGxlID0gJ0hpc3RvcnknO1xuXG4vLyBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbi8vIC8vIE1ha2UgYSByZXF1ZXN0IGZvciBhIHVzZXIgd2l0aCBhIGdpdmVuIElEXG4vLyBheGlvcy5nZXQoJ2h0dHA6Ly9tb2xhLmx1a2l0b21vLmNvbS92Mi92aWRlb3MvcGxheWxpc3RzL2hvcnJvcicpXG4vLyAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuLy8gICAgIC8vIGhhbmRsZSBzdWNjZXNzXG4vLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuLy8gICB9KVxuLy8gICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4vLyAgICAgLy8gaGFuZGxlIGVycm9yXG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICB9KVxuLy8gICAudGhlbihmdW5jdGlvbiAoKSB7XG4vLyAgICAgLy8gYWx3YXlzIGV4ZWN1dGVkXG4vLyAgIH0pO1xuXG5cbmZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgICBjb25zdCBkdW1teUhpc3RvcnkgPSBbXG4gICAgICAgIHsgaWQ6MSwgdGl0bGU6ICdIYW5uaWJhbCBMZWN0ZXIgLSBTZWFzb24gMycsIGNoYXB0ZXI6ICdUaGlydHkgdGhyZWUnLCBwbGF5ZWREdXJhdGlvbjogMzAsIHRvdGFsRHVyYXRpb246IDQ5LCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgICAgICB7IGlkOjIsIHRpdGxlOiAnVGhlIEdyZWF0ZXN0IFNob3dtYW4nLCBjaGFwdGVyOiAnT25lJywgcGxheWVkRHVyYXRpb246IDIwLCB0b3RhbER1cmF0aW9uOiAxMDAsIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgICAgIHsgaWQ6MywgdGl0bGU6ICdIYW5uaWJhbCBMZWN0ZXIgLSBTZWFzb24gMycsIGNoYXB0ZXI6ICdUaGlydHkgdGhyZWUnLCBwbGF5ZWREdXJhdGlvbjogMzAsIHRvdGFsRHVyYXRpb246IDQ5LCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgICAgICB7IGlkOjQsIHRpdGxlOiAnVGhlIEdyZWF0ZXN0IFNob3dtYW4nLCBjaGFwdGVyOiAnT25lJywgcGxheWVkRHVyYXRpb246IDIwLCB0b3RhbER1cmF0aW9uOiAxMDAsIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgICAgIHsgaWQ6NSwgdGl0bGU6ICdIYW5uaWJhbCBMZWN0ZXIgLSBTZWFzb24gMycsIGNoYXB0ZXI6ICdUaGlydHkgdGhyZWUnLCBwbGF5ZWREdXJhdGlvbjogMzAsIHRvdGFsRHVyYXRpb246IDQ5LCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgICAgICB7IGlkOjYsIHRpdGxlOiAnVGhlIEdyZWF0ZXN0IFNob3dtYW4nLCBjaGFwdGVyOiAnT25lJywgcGxheWVkRHVyYXRpb246IDIwLCB0b3RhbER1cmF0aW9uOiAxMDAsIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgICAgIHsgaWQ6NywgdGl0bGU6ICdIYW5uaWJhbCBMZWN0ZXIgLSBTZWFzb24gMycsIGNoYXB0ZXI6ICdUaGlydHkgdGhyZWUnLCBwbGF5ZWREdXJhdGlvbjogMzAsIHRvdGFsRHVyYXRpb246IDQ5LCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgICAgICB7IGlkOjgsIHRpdGxlOiAnVGhlIEdyZWF0ZXN0IFNob3dtYW4nLCBjaGFwdGVyOiAnT25lJywgcGxheWVkRHVyYXRpb246IDIwLCB0b3RhbER1cmF0aW9uOiAxMDAsIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgICAgIHsgaWQ6OSwgdGl0bGU6ICdIYW5uaWJhbCBMZWN0ZXIgLSBTZWFzb24gMycsIGNoYXB0ZXI6ICdUaGlydHkgdGhyZWUnLCBwbGF5ZWREdXJhdGlvbjogMzAsIHRvdGFsRHVyYXRpb246IDQ5LCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgICAgICB7IGlkOjEwLCB0aXRsZTogJ1RoZSBHcmVhdGVzdCBTaG93bWFuJywgY2hhcHRlcjogJ09uZScsIHBsYXllZER1cmF0aW9uOiAyMCwgdG90YWxEdXJhdGlvbjogMTAwLCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgICAgICB7IGlkOjExLCB0aXRsZTogJ0hhbm5pYmFsIExlY3RlciAtIFNlYXNvbiAzJywgY2hhcHRlcjogJ1RoaXJ0eSB0aHJlZScsIHBsYXllZER1cmF0aW9uOiAzMCwgdG90YWxEdXJhdGlvbjogNDksIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgICAgIHsgaWQ6MTIsIHRpdGxlOiAnVGhlIEdyZWF0ZXN0IFNob3dtYW4nLCBjaGFwdGVyOiAnT25lJywgcGxheWVkRHVyYXRpb246IDIwLCB0b3RhbER1cmF0aW9uOiAxMDAsIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgXVxuXG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ2hpc3RvcnknXSxcbiAgICB0aXRsZSxcbiAgICBjb21wb25lbnQ6IChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIaXN0b3J5IG1vdmllcz17ZHVtbXlIaXN0b3J5fS8+XG4gICAgICA8L0xheW91dD5cbiAgICApLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBV0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQU9BOzs7O0FBN0NBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTs7QUErQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==