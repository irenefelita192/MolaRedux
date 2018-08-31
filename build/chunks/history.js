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

/***/ "./src/actions/history.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHistory", function() { return fetchHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllHistory", function() { return fetchAllHistory; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var apiUrl = 'http://mola.lukitomo.com/v2/videos/tt1179056';
var fetchHistory = function fetchHistory(movies) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_HISTORY"],
    result: movies
  };
};
var fetchAllHistory = function fetchAllHistory() {
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(apiUrl).then(function (response) {
      dispatch(fetchHistory(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
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

  function History() {
    _classCallCheck(this, History);

    return _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).apply(this, arguments));
  }

  _createClass(History, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.fetchAllHistory();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          movieDummy = _props.movieDummy,
          movies = _props.movies;
      console.log("movieHistory", movies);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.containerOuter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.containerInner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
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
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieImageWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: movie.img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieDurationBar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.moviePlayedBar,
          style: barStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieDetailWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, movie.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieChapter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, "Chapter: ", movie.chapter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_6___default.a.movieDuration,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
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
    movies: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)
  }
});

function mapStateToProps(state, ownProps) {
  console.log("stateeee", state);
  return {
    movies: state.history.movies
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
  // console.log("HISTORY", movieHistory)
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
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_History__WEBPACK_IMPORTED_MODULE_2__["default"], {
      movieDummy: dummyHistory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2hpc3RvcnkuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L2NvbXBvbmVudHMvSGlzdG9yeS5jc3MiLCIvVXNlcnMvaXJlbmUvRG9jdW1lbnRzL1dvcmsvTW9sYVJlZHV4L3NyYy9hY3Rpb25zL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9oaXN0b3J5L2NvbXBvbmVudHMvSGlzdG9yeS5jc3M/MWViZCIsIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L2NvbXBvbmVudHMvSGlzdG9yeS5qcyIsIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuSGlzdG9yeS13cmFwcGVyLTJKUnNxIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5wdWJsaWNkb21haW5waWN0dXJlcy5uZXQvcGljdHVyZXMvMTgwMDAwL3ZlbGthL3NlYS1iYWNrZ3JvdW5kLXRleHR1cmUtMTQ2Njc2NTQzODdZeC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZzogNzZweCAwIDAgMjUwcHg7XFxufVxcblxcbi5IaXN0b3J5LWNvbnRhaW5lck91dGVyLTJmT3F3IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDExOTBweDtcXG59XFxuXFxuLkhpc3RvcnktY29udGFpbmVySW5uZXItRkJiVXUge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogMTIyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzZweCk7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllQ29udGFpbmVyLTNUdjRuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4uSGlzdG9yeS1tb3ZpZURldGFpbFdyYXBwZXItMlJvX04ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwNXB4KTtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVJbWFnZVdyYXBwZXItM3dVWXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDI2NXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllSW1hZ2VXcmFwcGVyLTN3VVl0ID4gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllRHVyYXRpb25CYXItM2tscDcge1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICBib3R0b206IDE1cHg7XFxuICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgIGhlaWdodDogNHB4O1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICNDMUMxQzE7XFxuICAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllUGxheWVkQmFyLTJQb1VHIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTEwQjE0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllVGl0bGUtV24ybloge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uSGlzdG9yeS1tb3ZpZUNoYXB0ZXItMWRTTVcge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllRHVyYXRpb24tMWtWQ20ge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICAuSGlzdG9yeS1jb250YWluZXJPdXRlci0yZk9xdyB7XFxuICAgICAgICB3aWR0aDogOTYwcHg7XFxuICAgIH1cXG5cXG4gICAgLkhpc3RvcnktY29udGFpbmVySW5uZXItRkJiVXUge1xcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcXG4gICAgfVxcblxcbiAgICAuSGlzdG9yeS1tb3ZpZUltYWdlV3JhcHBlci0zd1VZdCB7XFxuICAgICAgICB3aWR0aDogMjQwcHg7XFxuICAgIH1cXG5cXG4gICAgLkhpc3RvcnktbW92aWVUaXRsZS1XbjJuWiB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5IaXN0b3J5LW1vdmllQ2hhcHRlci0xZFNNVyB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5IaXN0b3J5LW1vdmllRHVyYXRpb24tMWtWQ20ge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvaXJlbmUvRG9jdW1lbnRzL1dvcmsvTW9sYVJlZHV4L3NyYy9yb3V0ZXMvaGlzdG9yeS9jb21wb25lbnRzL0hpc3RvcnkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkhBQTZIO0lBQzdILDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZiwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWU7SUFDZiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7R0FDRyxtQkFBbUI7R0FDbkIsYUFBYTtHQUNiLHlCQUF5QjtHQUN6QixZQUFZO0dBQ1osMEJBQTBCO0dBQzFCLGVBQWU7Q0FDakI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0k7UUFDSSxhQUFhO0tBQ2hCOztJQUVEO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLGFBQWE7S0FDaEI7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7Q0FDSlwiLFwiZmlsZVwiOlwiSGlzdG9yeS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vd3d3LnB1YmxpY2RvbWFpbnBpY3R1cmVzLm5ldC9waWN0dXJlcy8xODAwMDAvdmVsa2Evc2VhLWJhY2tncm91bmQtdGV4dHVyZS0xNDY2NzY1NDM4N1l4LmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwYWRkaW5nOiA3NnB4IDAgMCAyNTBweDtcXG59XFxuXFxuLmNvbnRhaW5lck91dGVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDExOTBweDtcXG59XFxuXFxuLmNvbnRhaW5lcklubmVyIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDEyMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc2cHgpO1xcbn1cXG5cXG4ubW92aWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5tb3ZpZURldGFpbFdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwNXB4KTtcXG59XFxuXFxuLm1vdmllSW1hZ2VXcmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyNjVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW92aWVJbWFnZVdyYXBwZXIgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vdmllRHVyYXRpb25CYXIge1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICBib3R0b206IDE1cHg7XFxuICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgIGhlaWdodDogNHB4O1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICNDMUMxQzE7XFxuICAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi5tb3ZpZVBsYXllZEJhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxMEIxNDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubW92aWVUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5tb3ZpZUNoYXB0ZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5tb3ZpZUR1cmF0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLmNvbnRhaW5lck91dGVyIHtcXG4gICAgICAgIHdpZHRoOiA5NjBweDtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVySW5uZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcXG4gICAgfVxcblxcbiAgICAubW92aWVJbWFnZVdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICB9XFxuXFxuICAgIC5tb3ZpZVRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1vdmllQ2hhcHRlciB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tb3ZpZUR1cmF0aW9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIkhpc3Rvcnktd3JhcHBlci0ySlJzcVwiLFxuXHRcImNvbnRhaW5lck91dGVyXCI6IFwiSGlzdG9yeS1jb250YWluZXJPdXRlci0yZk9xd1wiLFxuXHRcImNvbnRhaW5lcklubmVyXCI6IFwiSGlzdG9yeS1jb250YWluZXJJbm5lci1GQmJVdVwiLFxuXHRcIm1vdmllQ29udGFpbmVyXCI6IFwiSGlzdG9yeS1tb3ZpZUNvbnRhaW5lci0zVHY0blwiLFxuXHRcIm1vdmllRGV0YWlsV3JhcHBlclwiOiBcIkhpc3RvcnktbW92aWVEZXRhaWxXcmFwcGVyLTJSb19OXCIsXG5cdFwibW92aWVJbWFnZVdyYXBwZXJcIjogXCJIaXN0b3J5LW1vdmllSW1hZ2VXcmFwcGVyLTN3VVl0XCIsXG5cdFwibW92aWVEdXJhdGlvbkJhclwiOiBcIkhpc3RvcnktbW92aWVEdXJhdGlvbkJhci0za2xwN1wiLFxuXHRcIm1vdmllUGxheWVkQmFyXCI6IFwiSGlzdG9yeS1tb3ZpZVBsYXllZEJhci0yUG9VR1wiLFxuXHRcIm1vdmllVGl0bGVcIjogXCJIaXN0b3J5LW1vdmllVGl0bGUtV24yblpcIixcblx0XCJtb3ZpZUNoYXB0ZXJcIjogXCJIaXN0b3J5LW1vdmllQ2hhcHRlci0xZFNNV1wiLFxuXHRcIm1vdmllRHVyYXRpb25cIjogXCJIaXN0b3J5LW1vdmllRHVyYXRpb24tMWtWQ21cIlxufTsiLCJpbXBvcnQgeyBGRVRDSF9ISVNUT1JZIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGFwaVVybCA9ICdodHRwOi8vbW9sYS5sdWtpdG9tby5jb20vdjIvdmlkZW9zL3R0MTE3OTA1Nic7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEhpc3RvcnkgPSAobW92aWVzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfSElTVE9SWSxcbiAgICByZXN1bHQ6IG1vdmllc1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBbGxIaXN0b3J5ID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChhcGlVcmwpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoSGlzdG9yeShyZXNwb25zZS5kYXRhKSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcbn07IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9IaXN0b3J5LmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9IaXN0b3J5LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hpc3RvcnkuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgZmV0Y2hBbGxIaXN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9oaXN0b3J5JztcbmltcG9ydCBzIGZyb20gJy4vSGlzdG9yeS5jc3MnO1xuXG5jbGFzcyBIaXN0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hBbGxIaXN0b3J5KCk7XG4gICAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1vdmllRHVtbXksIG1vdmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZyhcIm1vdmllSGlzdG9yeVwiLCBtb3ZpZXMpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLndyYXBwZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyT3V0ZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcklubmVyfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmllRHVtbXkubWFwKCAobW92aWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllZER1cmF0aW9uID0gbW92aWUucGxheWVkRHVyYXRpb24gLyBtb3ZpZS50b3RhbER1cmF0aW9uICogMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3BsYXllZER1cmF0aW9ufSVgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vdmllQ29udGFpbmVyfSBrZXk9e21vdmllLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzLm1vdmllSW1hZ2VXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttb3ZpZS5pbWd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vdmllRHVyYXRpb25CYXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5tb3ZpZVBsYXllZEJhcn0gc3R5bGU9e2JhclN0eWxlfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb3ZpZURldGFpbFdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVUaXRsZX0+e21vdmllLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVDaGFwdGVyfT5DaGFwdGVyOiB7bW92aWUuY2hhcHRlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vdmllRHVyYXRpb259Pnttb3ZpZS50b3RhbER1cmF0aW9ufSBtaW4uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG4vLyBIaXN0b3J5LnByb3BUeXBlcyA9IHtcbi8vICAgICBtb3ZpZUhpc3Rvcnk6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuLy8gICB9O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZWVlZVwiLCBzdGF0ZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtb3ZpZXM6IHN0YXRlLmhpc3RvcnkubW92aWVzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBzYW1lIGVmZmVjdFxuICAgICAgICBmZXRjaEFsbEhpc3RvcnkgOiAoKSA9PiBkaXNwYXRjaChmZXRjaEFsbEhpc3RvcnkoKSksXG4gICAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoU3R5bGVzKHMpKEhpc3RvcnkpKTtcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gICAgd2l0aFN0eWxlcyhzKSxcbiAgICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxuKShIaXN0b3J5KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4vY29tcG9uZW50cy9IaXN0b3J5JztcblxuY29uc3QgdGl0bGUgPSAnSGlzdG9yeSc7XG5cbi8vIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuLy8gLy8gTWFrZSBhIHJlcXVlc3QgZm9yIGEgdXNlciB3aXRoIGEgZ2l2ZW4gSURcbi8vIGF4aW9zLmdldCgnaHR0cDovL21vbGEubHVraXRvbW8uY29tL3YyL3ZpZGVvcy9wbGF5bGlzdHMvaG9ycm9yJylcbi8vICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4vLyAgICAgLy8gaGFuZGxlIHN1Y2Nlc3Ncbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4vLyAgIH0pXG4vLyAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbi8vICAgICAvLyBoYW5kbGUgZXJyb3Jcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgIH0pXG4vLyAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbi8vICAgICAvLyBhbHdheXMgZXhlY3V0ZWRcbi8vICAgfSk7XG5cblxuZnVuY3Rpb24gYWN0aW9uKCkge1xuICAvLyBjb25zb2xlLmxvZyhcIkhJU1RPUllcIiwgbW92aWVIaXN0b3J5KVxuICAgIGNvbnN0IGR1bW15SGlzdG9yeSA9IFtcbiAgICAgICAgeyBpZDoxLCB0aXRsZTogJ0hhbm5pYmFsIExlY3RlciAtIFNlYXNvbiAzJywgY2hhcHRlcjogJ1RoaXJ0eSB0aHJlZScsIHBsYXllZER1cmF0aW9uOiAzMCwgdG90YWxEdXJhdGlvbjogNDksIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgICAgIHsgaWQ6MiwgdGl0bGU6ICdUaGUgR3JlYXRlc3QgU2hvd21hbicsIGNoYXB0ZXI6ICdPbmUnLCBwbGF5ZWREdXJhdGlvbjogMjAsIHRvdGFsRHVyYXRpb246IDEwMCwgaW1nOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMzMXgyMDcnfSxcbiAgICAgICAgeyBpZDozLCB0aXRsZTogJ0hhbm5pYmFsIExlY3RlciAtIFNlYXNvbiAzJywgY2hhcHRlcjogJ1RoaXJ0eSB0aHJlZScsIHBsYXllZER1cmF0aW9uOiAzMCwgdG90YWxEdXJhdGlvbjogNDksIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgICAgIHsgaWQ6NCwgdGl0bGU6ICdUaGUgR3JlYXRlc3QgU2hvd21hbicsIGNoYXB0ZXI6ICdPbmUnLCBwbGF5ZWREdXJhdGlvbjogMjAsIHRvdGFsRHVyYXRpb246IDEwMCwgaW1nOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMzMXgyMDcnfSxcbiAgICAgICAgeyBpZDo1LCB0aXRsZTogJ0hhbm5pYmFsIExlY3RlciAtIFNlYXNvbiAzJywgY2hhcHRlcjogJ1RoaXJ0eSB0aHJlZScsIHBsYXllZER1cmF0aW9uOiAzMCwgdG90YWxEdXJhdGlvbjogNDksIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgICAgIHsgaWQ6NiwgdGl0bGU6ICdUaGUgR3JlYXRlc3QgU2hvd21hbicsIGNoYXB0ZXI6ICdPbmUnLCBwbGF5ZWREdXJhdGlvbjogMjAsIHRvdGFsRHVyYXRpb246IDEwMCwgaW1nOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMzMXgyMDcnfSxcbiAgICAgICAgeyBpZDo3LCB0aXRsZTogJ0hhbm5pYmFsIExlY3RlciAtIFNlYXNvbiAzJywgY2hhcHRlcjogJ1RoaXJ0eSB0aHJlZScsIHBsYXllZER1cmF0aW9uOiAzMCwgdG90YWxEdXJhdGlvbjogNDksIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgICAgIHsgaWQ6OCwgdGl0bGU6ICdUaGUgR3JlYXRlc3QgU2hvd21hbicsIGNoYXB0ZXI6ICdPbmUnLCBwbGF5ZWREdXJhdGlvbjogMjAsIHRvdGFsRHVyYXRpb246IDEwMCwgaW1nOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMzMXgyMDcnfSxcbiAgICAgICAgeyBpZDo5LCB0aXRsZTogJ0hhbm5pYmFsIExlY3RlciAtIFNlYXNvbiAzJywgY2hhcHRlcjogJ1RoaXJ0eSB0aHJlZScsIHBsYXllZER1cmF0aW9uOiAzMCwgdG90YWxEdXJhdGlvbjogNDksIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgICAgIHsgaWQ6MTAsIHRpdGxlOiAnVGhlIEdyZWF0ZXN0IFNob3dtYW4nLCBjaGFwdGVyOiAnT25lJywgcGxheWVkRHVyYXRpb246IDIwLCB0b3RhbER1cmF0aW9uOiAxMDAsIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgICAgIHsgaWQ6MTEsIHRpdGxlOiAnSGFubmliYWwgTGVjdGVyIC0gU2Vhc29uIDMnLCBjaGFwdGVyOiAnVGhpcnR5IHRocmVlJywgcGxheWVkRHVyYXRpb246IDMwLCB0b3RhbER1cmF0aW9uOiA0OSwgaW1nOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMzMXgyMDcnfSxcbiAgICAgICAgeyBpZDoxMiwgdGl0bGU6ICdUaGUgR3JlYXRlc3QgU2hvd21hbicsIGNoYXB0ZXI6ICdPbmUnLCBwbGF5ZWREdXJhdGlvbjogMjAsIHRvdGFsRHVyYXRpb246IDEwMCwgaW1nOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMzMXgyMDcnfSxcbiAgICBdXG5cbiAgcmV0dXJuIHtcbiAgICBjaHVua3M6IFsnaGlzdG9yeSddLFxuICAgIHRpdGxlLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhpc3RvcnkgbW92aWVEdW1teT17ZHVtbXlIaXN0b3J5fS8+XG4gICAgICA8L0xheW91dD5cbiAgICApLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQU9BOzs7O0FBNUNBO0FBZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBbkRBOzs7O0FBS0E7QUFDQTtBQURBOzs7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==