require("source-map-support").install();
exports.ids = ["history"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/History.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".History-wrapper-93wZv {\n    background-image: url('https://www.publicdomainpictures.net/pictures/180000/velka/sea-background-texture-14667654387Yx.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 76px 0 0 250px;\n    height: calc(100vh - 76px);\n    overflow-y: hidden;\n}\n\n.History-containerOuter-ks5TX {\n    overflow: hidden;\n    width: 1190px;\n}\n\n.History-containerInner-3yqS- {\n    overflow-y: auto;\n    width: 100%;\n    padding-right: 20px;\n    margin: 0 auto;\n    height: calc(100vh - 76px);\n}\n\n@media screen and (max-width: 1280px) {\n    .History-containerOuter-ks5TX \n    {\n        width: 960px;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .History-wrapper-93wZv {\n        padding: 76px 40px 0 40px;\n    }\n\n    .History-containerOuter-ks5TX \n    {\n        width: auto;\n    }\n}", "", {"version":3,"sources":["/Users/irene/Documents/Work/MolaRedux/src/routes/history/History.css"],"names":[],"mappings":"AAAA;IACI,6HAA6H;IAC7H,6BAA6B;IAC7B,uBAAuB;IACvB,wBAAwB;IACxB,2BAA2B;IAC3B,mBAAmB;CACtB;;AAED;IACI,iBAAiB;IACjB,cAAc;CACjB;;AAED;IACI,iBAAiB;IACjB,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,2BAA2B;CAC9B;;AAED;IACI;;QAEI,aAAa;KAChB;CACJ;;AAED;IACI;QACI,0BAA0B;KAC7B;;IAED;;QAEI,YAAY;KACf;CACJ","file":"History.css","sourcesContent":[".wrapper {\n    background-image: url('https://www.publicdomainpictures.net/pictures/180000/velka/sea-background-texture-14667654387Yx.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 76px 0 0 250px;\n    height: calc(100vh - 76px);\n    overflow-y: hidden;\n}\n\n.containerOuter {\n    overflow: hidden;\n    width: 1190px;\n}\n\n.containerInner {\n    overflow-y: auto;\n    width: 100%;\n    padding-right: 20px;\n    margin: 0 auto;\n    height: calc(100vh - 76px);\n}\n\n@media screen and (max-width: 1280px) {\n    .containerOuter \n    {\n        width: 960px;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .wrapper {\n        padding: 76px 40px 0 40px;\n    }\n\n    .containerOuter \n    {\n        width: auto;\n    }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"wrapper": "History-wrapper-93wZv",
	"containerOuter": "History-containerOuter-ks5TX",
	"containerInner": "History-containerInner-3yqS-"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/HistoryCard.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".HistoryCard-movieContainer-2JrnX {\n    display: inline-block;\n    width: 50%;\n    margin-bottom: 40px;\n}\n\n.HistoryCard-movieDetailWrapper-1f4dP {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 20px;\n    color: #FFFFFF;\n    width: calc(100% - 305px);\n}\n\n.HistoryCard-movieImageWrapper-csfou {\n    position: relative;\n    display: inline-block;\n    width: 265px;\n    cursor: pointer;\n}\n\n.HistoryCard-movieImageWrapper-csfou > img {\n    width: 100%;\n}\n\n.HistoryCard-movieDurationBar-18Mgg {\n   position: absolute;\n   bottom: 15px;\n   width: calc(100% - 40px);\n   height: 4px;\n   background-color: #C1C1C1;\n   margin: 0 20px;\n}\n\n.HistoryCard-moviePlayedBar-28-Ro {\n    position: absolute;\n    background-color: #E10B14;\n    height: 100%;\n}\n\n.HistoryCard-movieTitle-2N2o2 {\n    font-size: 18px;\n    font-weight: bold;\n    padding-bottom: 4px;\n}\n\n.HistoryCard-movieChapter-31pbP {\n    font-size: 16px;\n    padding-bottom: 4px;\n}\n\n.HistoryCard-movieDuration-3PM3H {\n    font-size: 20px;\n    padding-bottom: 4px;\n}\n\n@media screen and (max-width: 1280px) {\n    .HistoryCard-movieImageWrapper-csfou {\n        width: 225px;\n    }\n\n    .HistoryCard-movieTitle-2N2o2 {\n        font-size: 14px;\n    }\n    \n    .HistoryCard-movieChapter-31pbP {\n        font-size: 12px;\n    }\n    \n    .HistoryCard-movieDuration-3PM3H {\n        font-size: 12px;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .HistoryCard-movieContainer-2JrnX {\n        display: block;\n        width: auto;\n    }\n\n    .HistoryCard-movieImageWrapper-csfou {\n        display: block;\n        width: calc(100vw - 80px);\n        cursor: pointer;\n    }\n\n    .HistoryCard-movieDetailWrapper-1f4dP {\n        display: block;\n        margin: 10px 0 0 0;\n        width: auto;\n    }\n        \n}", "", {"version":3,"sources":["/Users/irene/Documents/Work/MolaRedux/src/routes/history/components/HistoryCard.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,WAAW;IACX,oBAAoB;CACvB;;AAED;IACI,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,0BAA0B;CAC7B;;AAED;IACI,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,gBAAgB;CACnB;;AAED;IACI,YAAY;CACf;;AAED;GACG,mBAAmB;GACnB,aAAa;GACb,yBAAyB;GACzB,YAAY;GACZ,0BAA0B;GAC1B,eAAe;CACjB;;AAED;IACI,mBAAmB;IACnB,0BAA0B;IAC1B,aAAa;CAChB;;AAED;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;CACvB;;AAED;IACI,gBAAgB;IAChB,oBAAoB;CACvB;;AAED;IACI,gBAAgB;IAChB,oBAAoB;CACvB;;AAED;IACI;QACI,aAAa;KAChB;;IAED;QACI,gBAAgB;KACnB;;IAED;QACI,gBAAgB;KACnB;;IAED;QACI,gBAAgB;KACnB;CACJ;;AAED;IACI;QACI,eAAe;QACf,YAAY;KACf;;IAED;QACI,eAAe;QACf,0BAA0B;QAC1B,gBAAgB;KACnB;;IAED;QACI,eAAe;QACf,mBAAmB;QACnB,YAAY;KACf;;CAEJ","file":"HistoryCard.css","sourcesContent":[".movieContainer {\n    display: inline-block;\n    width: 50%;\n    margin-bottom: 40px;\n}\n\n.movieDetailWrapper {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 20px;\n    color: #FFFFFF;\n    width: calc(100% - 305px);\n}\n\n.movieImageWrapper {\n    position: relative;\n    display: inline-block;\n    width: 265px;\n    cursor: pointer;\n}\n\n.movieImageWrapper > img {\n    width: 100%;\n}\n\n.movieDurationBar {\n   position: absolute;\n   bottom: 15px;\n   width: calc(100% - 40px);\n   height: 4px;\n   background-color: #C1C1C1;\n   margin: 0 20px;\n}\n\n.moviePlayedBar {\n    position: absolute;\n    background-color: #E10B14;\n    height: 100%;\n}\n\n.movieTitle {\n    font-size: 18px;\n    font-weight: bold;\n    padding-bottom: 4px;\n}\n\n.movieChapter {\n    font-size: 16px;\n    padding-bottom: 4px;\n}\n\n.movieDuration {\n    font-size: 20px;\n    padding-bottom: 4px;\n}\n\n@media screen and (max-width: 1280px) {\n    .movieImageWrapper {\n        width: 225px;\n    }\n\n    .movieTitle {\n        font-size: 14px;\n    }\n    \n    .movieChapter {\n        font-size: 12px;\n    }\n    \n    .movieDuration {\n        font-size: 12px;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .movieContainer {\n        display: block;\n        width: auto;\n    }\n\n    .movieImageWrapper {\n        display: block;\n        width: calc(100vw - 80px);\n        cursor: pointer;\n    }\n\n    .movieDetailWrapper {\n        display: block;\n        margin: 10px 0 0 0;\n        width: auto;\n    }\n        \n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"movieContainer": "HistoryCard-movieContainer-2JrnX",
	"movieDetailWrapper": "HistoryCard-movieDetailWrapper-1f4dP",
	"movieImageWrapper": "HistoryCard-movieImageWrapper-csfou",
	"movieDurationBar": "HistoryCard-movieDurationBar-18Mgg",
	"moviePlayedBar": "HistoryCard-moviePlayedBar-28-Ro",
	"movieTitle": "HistoryCard-movieTitle-2N2o2",
	"movieChapter": "HistoryCard-movieChapter-31pbP",
	"movieDuration": "HistoryCard-movieDuration-3PM3H"
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


var apiUrl = 'http://mola.lukitomo.com/v2/videos/tt1179056'; // const apiUrl = 'http://mola.lukitomo.com/v2/userdata/kareemlukitomo123/videos/histories';

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
      console.log("error", error); // throw(error);
    });
  };
};

/***/ }),

/***/ "./src/routes/history/History.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/History.css");
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
      module.hot.accept("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/History.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
        content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/History.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/history/History.js":
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
/* harmony import */ var _components_HistoryCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/routes/history/components/HistoryCard.js");
/* harmony import */ var _actions_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/actions/history.js");
/* harmony import */ var _History_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/routes/history/History.css");
/* harmony import */ var _History_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_History_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/irene/Documents/Work/MolaRedux/src/routes/history/History.js";

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_7___default.a.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_7___default.a.containerOuter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_7___default.a.containerInner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, movieDummy.map(function (movie) {
        var videosAttr = movie.attributes.videos[0].attributes;
        console.log("ATTR", videosAttr);

        if (!movie.attributes.videos[0].videos || movie.attributes.videos[0].videos !== "not_found") {
          var playedDuration = movie.attributes.timePosition / videosAttr.duration * 100;
          var barStyle = {
            width: "".concat(playedDuration, "%")
          };
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HistoryCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
            key: movie.id,
            videos: videosAttr,
            barStyle: barStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          });
        }
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
      return dispatch(Object(_actions_history__WEBPACK_IMPORTED_MODULE_6__["fetchAllHistory"])());
    }
  };
}; // export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(History));


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_History_css__WEBPACK_IMPORTED_MODULE_7___default.a), Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps))(History));

/***/ }),

/***/ "./src/routes/history/components/HistoryCard.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/HistoryCard.css");
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
      module.hot.accept("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/HistoryCard.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
        content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/HistoryCard.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/history/components/HistoryCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HistoryCard_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/history/components/HistoryCard.css");
/* harmony import */ var _HistoryCard_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_HistoryCard_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/irene/Documents/Work/MolaRedux/src/routes/history/components/HistoryCard.js";

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





var HistoryCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HistoryCard, _React$Component);

  function HistoryCard() {
    _classCallCheck(this, HistoryCard);

    return _possibleConstructorReturn(this, (HistoryCard.__proto__ || Object.getPrototypeOf(HistoryCard)).apply(this, arguments));
  }

  _createClass(HistoryCard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          videos = _props.videos,
          barStyle = _props.barStyle;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HistoryCard_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: _HistoryCard_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieImageWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: videos.coverUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HistoryCard_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieDurationBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _HistoryCard_css__WEBPACK_IMPORTED_MODULE_3___default.a.moviePlayedBar,
        style: barStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HistoryCard_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieDetailWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HistoryCard_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, videos.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HistoryCard_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieChapter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, videos.chapter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HistoryCard_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieDuration,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, videos.duration / 60, " min.")));
    }
  }]);

  return HistoryCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Object.defineProperty(HistoryCard, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    videos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    barStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }
});
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_HistoryCard_css__WEBPACK_IMPORTED_MODULE_3___default.a)(HistoryCard));

/***/ }),

/***/ "./src/routes/history/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _History__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/history/History.js");
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
    "type": "user-video-history",
    "id": 2,
    "attributes": {
      "uid": "kareemlukitomo123",
      "timePosition": 670,
      "updatedAt": "2018-07-17T17:41:33.000Z",
      "videos": [{
        "type": "video",
        "attributes": {
          "title": "Football Colours - Sporting Gijon",
          "chapter": "Chapter One",
          "description": "Seorang raja pernah menjadi presiden kehormatan klub ini. Raja tersebut adalah Raja Alfonso XIII. Sebuah kehormatan yang diberikan kepadanya pada tahun 1912. Kepemilikan seorang raja inilah yang membuat klub ini memiliki nama “Real” di depannya.  Klub yang berdiri pada 1902 dengan nama Gijon Sports ini identik dengan warna merah dan putih.  Merupakan sebuah kebanggaan bagi para pemain setiap kali mengenakan jersey utama, terlebih kala bertarung di El Molinon, stadion mereka yang merupakan stadion tertua di Spanyol.  Dari mana asal pemilihan jersey? Siapa yang memprakarsai klub ini serta hubungan mereka dengan sang Raja Alfonso XIII?",
          "shortDescription": null,
          "fullDescription": null,
          "homeTeamId": null,
          "awayTeamId": null,
          "visibility": 0,
          "permission": 1,
          "contentType": 1,
          "audioLanguage": null,
          "subtitleLanguage": null,
          "viewsCount": null,
          "likesCount": null,
          "rating": null,
          "source": "vos360",
          "streamSourceUrl": "https://cdn-supersoccer-b-01.akamaized.net/Content/HLS/VOD/0fb82f5b-da51-4bbb-849b-f4a558ac4550/68fb97dc-8666-635a-5742-c1ccce4088de/index.m3u8",
          "coverUrl": "https://cdn01.supersoccer.tv/images/26/f12105146129696d6a7e0ed521db2e48/original.jpg",
          "previewUrl": null,
          "duration": 7200,
          "matchStart": null,
          "matchEnd": null,
          "displayOrder": null,
          "expireAt": null,
          "createdAt": "2017-10-15T21:41:44.000Z"
        }
      }]
    }
  }, {
    "type": "user-video-history",
    "id": 2,
    "attributes": {
      "uid": "kareemlukitomo123",
      "timePosition": 499,
      "updatedAt": "2018-07-17T17:40:32.000Z",
      "videos": [{
        "type": "video",
        "attributes": {
          "title": "Dream Teams - It Takes Eleven to Tango",
          "chapter": "Chapter One",
          "description": "Menyusun tim impian bermaterikan talenta-talenta Argentina bukanlah perkara gampang. Dengan formasi 3-4-3, kami menyajikan sebuah skuad impian yang akan memanjakan semua manajer maupun pelatih di seantora Bumi. Saking dahsyatnya, kita hanya bisa bisa menyayangkan bahwa mimpi ini tidak akan pernah menjadi kenyataan. Siapa yang tidak ingin melihat Maradona dan Messi berada di dalam sebuah line-up yang sama, ditemani sembilan pemain terbaik tim Tango sepanjang masa?  Bayern Munchen mungkin pantas disebut sebagai salah satu tim yang paling konsisten di kancah sepakbola. Dari era Franz Beckenbauer, Karl-Heinz Rummenigge, Lothar Mattheus, Michael Ballack, hingga Arjen Robben, “Die Roten” selalu menjadi penguasa Jerman dan menjuarai Eropa selama lintas dekade. Mewakili eranya masing-masing, terbentuklah sebuah tim impian milik Bayern Munchen.",
          "shortDescription": null,
          "fullDescription": null,
          "homeTeamId": null,
          "awayTeamId": null,
          "visibility": 0,
          "permission": 1,
          "contentType": 1,
          "audioLanguage": null,
          "subtitleLanguage": null,
          "viewsCount": null,
          "likesCount": null,
          "rating": null,
          "source": "vos360",
          "streamSourceUrl": "https://cdn-supersoccer-b-01.akamaized.net/Content/HLS/VOD/7dd438e6-f98b-451a-885b-c5cd81af6bdd/68fb97dc-8666-635a-5742-c1ccce4088de/index.m3u8",
          "coverUrl": "https://cdn01.supersoccer.tv/images/457e54f4cb3c0ed26945e30dd2f53edf/original.jpg",
          "previewUrl": null,
          "duration": 800,
          "matchStart": null,
          "matchEnd": null,
          "displayOrder": 4,
          "expireAt": null,
          "createdAt": "2017-10-15T21:41:44.000Z"
        }
      }]
    }
  }, {
    "type": "user-video-history",
    "id": 2,
    "attributes": {
      "uid": "kareemlukitomo123",
      "timePosition": 7779,
      "updatedAt": "2018-07-16T16:16:23.000Z",
      "videos": [{
        "type": "video",
        "attributes": {
          "title": "SSTV One",
          "description": null,
          "shortDescription": null,
          "fullDescription": null,
          "homeTeamId": null,
          "awayTeamId": null,
          "visibility": 0,
          "permission": 3,
          "contentType": 2,
          "audioLanguage": null,
          "subtitleLanguage": null,
          "viewsCount": null,
          "likesCount": null,
          "rating": null,
          "source": "vos360",
          "streamSourceUrl": "https://cdn-supersoccer-b-01.akamaized.net/Content/HLS/Live/channel(SSP01)/index.m3u8",
          "coverUrl": "http://cdn01.supersoccer.tv/v3/img/covers/sstv.jpg",
          "previewUrl": null,
          "duration": 8000,
          "matchStart": null,
          "matchEnd": null,
          "displayOrder": null,
          "expireAt": null,
          "createdAt": "2017-10-22T09:46:41.000Z"
        }
      }]
    }
  }, {
    "type": "user-video-history",
    "id": 2,
    "attributes": {
      "uid": "kareemlukitomo123",
      "timePosition": 7779,
      "updatedAt": "2018-07-16T16:16:23.000Z",
      "videos": [{
        "type": "video",
        "attributes": {
          "title": "SSTV One",
          "description": null,
          "shortDescription": null,
          "fullDescription": null,
          "homeTeamId": null,
          "awayTeamId": null,
          "visibility": 0,
          "permission": 3,
          "contentType": 2,
          "audioLanguage": null,
          "subtitleLanguage": null,
          "viewsCount": null,
          "likesCount": null,
          "rating": null,
          "source": "vos360",
          "streamSourceUrl": "https://cdn-supersoccer-b-01.akamaized.net/Content/HLS/Live/channel(SSP01)/index.m3u8",
          "coverUrl": "http://cdn01.supersoccer.tv/v3/img/covers/sstv.jpg",
          "previewUrl": null,
          "duration": 8000,
          "matchStart": null,
          "matchEnd": null,
          "displayOrder": null,
          "expireAt": null,
          "createdAt": "2017-10-22T09:46:41.000Z"
        }
      }]
    }
  }, {
    "type": "user-video-history",
    "id": 2,
    "attributes": {
      "uid": "kareemlukitomo123",
      "timePosition": 7779,
      "updatedAt": "2018-07-16T16:16:23.000Z",
      "videos": [{
        "type": "video",
        "attributes": {
          "title": "SSTV One",
          "description": null,
          "shortDescription": null,
          "fullDescription": null,
          "homeTeamId": null,
          "awayTeamId": null,
          "visibility": 0,
          "permission": 3,
          "contentType": 2,
          "audioLanguage": null,
          "subtitleLanguage": null,
          "viewsCount": null,
          "likesCount": null,
          "rating": null,
          "source": "vos360",
          "streamSourceUrl": "https://cdn-supersoccer-b-01.akamaized.net/Content/HLS/Live/channel(SSP01)/index.m3u8",
          "coverUrl": "http://cdn01.supersoccer.tv/v3/img/covers/sstv.jpg",
          "previewUrl": null,
          "duration": 8000,
          "matchStart": null,
          "matchEnd": null,
          "displayOrder": null,
          "expireAt": null,
          "createdAt": "2017-10-22T09:46:41.000Z"
        }
      }]
    }
  }, {
    "type": "user-video-history",
    "id": 2,
    "attributes": {
      "uid": "kareemlukitomo123",
      "timePosition": 7779,
      "updatedAt": "2018-07-16T16:16:23.000Z",
      "videos": [{
        "type": "video",
        "attributes": {
          "title": "SSTV One",
          "description": null,
          "shortDescription": null,
          "fullDescription": null,
          "homeTeamId": null,
          "awayTeamId": null,
          "visibility": 0,
          "permission": 3,
          "contentType": 2,
          "audioLanguage": null,
          "subtitleLanguage": null,
          "viewsCount": null,
          "likesCount": null,
          "rating": null,
          "source": "vos360",
          "streamSourceUrl": "https://cdn-supersoccer-b-01.akamaized.net/Content/HLS/Live/channel(SSP01)/index.m3u8",
          "coverUrl": "http://cdn01.supersoccer.tv/v3/img/covers/sstv.jpg",
          "previewUrl": null,
          "duration": 8000,
          "matchStart": null,
          "matchEnd": null,
          "displayOrder": null,
          "expireAt": null,
          "createdAt": "2017-10-22T09:46:41.000Z"
        }
      }]
    }
  }, {
    "type": "user-video-history",
    "id": 2,
    "attributes": {
      "uid": "kareemlukitomo123",
      "timePosition": 7779,
      "updatedAt": "2018-07-16T16:16:23.000Z",
      "videos": [{
        "type": "video",
        "attributes": {
          "title": "SSTV One",
          "description": null,
          "shortDescription": null,
          "fullDescription": null,
          "homeTeamId": null,
          "awayTeamId": null,
          "visibility": 0,
          "permission": 3,
          "contentType": 2,
          "audioLanguage": null,
          "subtitleLanguage": null,
          "viewsCount": null,
          "likesCount": null,
          "rating": null,
          "source": "vos360",
          "streamSourceUrl": "https://cdn-supersoccer-b-01.akamaized.net/Content/HLS/Live/channel(SSP01)/index.m3u8",
          "coverUrl": "http://cdn01.supersoccer.tv/v3/img/covers/sstv.jpg",
          "previewUrl": null,
          "duration": 8000,
          "matchStart": null,
          "matchEnd": null,
          "displayOrder": null,
          "expireAt": null,
          "createdAt": "2017-10-22T09:46:41.000Z"
        }
      }]
    }
  }, {
    "type": "user-video-history",
    "id": 2,
    "attributes": {
      "uid": "kareemlukitomo123",
      "timePosition": 7779,
      "updatedAt": "2018-07-16T16:16:23.000Z",
      "videos": [{
        "type": "video",
        "attributes": {
          "title": "SSTV One",
          "description": null,
          "shortDescription": null,
          "fullDescription": null,
          "homeTeamId": null,
          "awayTeamId": null,
          "visibility": 0,
          "permission": 3,
          "contentType": 2,
          "audioLanguage": null,
          "subtitleLanguage": null,
          "viewsCount": null,
          "likesCount": null,
          "rating": null,
          "source": "vos360",
          "streamSourceUrl": "https://cdn-supersoccer-b-01.akamaized.net/Content/HLS/Live/channel(SSP01)/index.m3u8",
          "coverUrl": "http://cdn01.supersoccer.tv/v3/img/covers/sstv.jpg",
          "previewUrl": null,
          "duration": 8000,
          "matchStart": null,
          "matchEnd": null,
          "displayOrder": null,
          "expireAt": null,
          "createdAt": "2017-10-22T09:46:41.000Z"
        }
      }]
    }
  }, {
    "type": "user-video-history",
    "id": 2,
    "attributes": {
      "uid": "kareemlukitomo123",
      "timePosition": 7779,
      "updatedAt": "2018-07-16T16:16:23.000Z",
      "videos": [{
        "type": "video",
        "attributes": {
          "title": "SSTV One",
          "description": null,
          "shortDescription": null,
          "fullDescription": null,
          "homeTeamId": null,
          "awayTeamId": null,
          "visibility": 0,
          "permission": 3,
          "contentType": 2,
          "audioLanguage": null,
          "subtitleLanguage": null,
          "viewsCount": null,
          "likesCount": null,
          "rating": null,
          "source": "vos360",
          "streamSourceUrl": "https://cdn-supersoccer-b-01.akamaized.net/Content/HLS/Live/channel(SSP01)/index.m3u8",
          "coverUrl": "http://cdn01.supersoccer.tv/v3/img/covers/sstv.jpg",
          "previewUrl": null,
          "duration": 8000,
          "matchStart": null,
          "matchEnd": null,
          "displayOrder": null,
          "expireAt": null,
          "createdAt": "2017-10-22T09:46:41.000Z"
        }
      }]
    }
  }, {
    "type": "user-video-history",
    "id": 2,
    "attributes": {
      "uid": "kareemlukitomo123",
      "timePosition": 7779,
      "updatedAt": "2018-07-16T16:16:23.000Z",
      "videos": [{
        "type": "video",
        "attributes": {
          "title": "SSTV One",
          "description": null,
          "shortDescription": null,
          "fullDescription": null,
          "homeTeamId": null,
          "awayTeamId": null,
          "visibility": 0,
          "permission": 3,
          "contentType": 2,
          "audioLanguage": null,
          "subtitleLanguage": null,
          "viewsCount": null,
          "likesCount": null,
          "rating": null,
          "source": "vos360",
          "streamSourceUrl": "https://cdn-supersoccer-b-01.akamaized.net/Content/HLS/Live/channel(SSP01)/index.m3u8",
          "coverUrl": "http://cdn01.supersoccer.tv/v3/img/covers/sstv.jpg",
          "previewUrl": null,
          "duration": 8000,
          "matchStart": null,
          "matchEnd": null,
          "displayOrder": null,
          "expireAt": null,
          "createdAt": "2017-10-22T09:46:41.000Z"
        }
      }]
    }
  }, {
    "type": "user-video-history",
    "id": 2,
    "attributes": {
      "uid": "kareemlukitomo123",
      "timePosition": 7779,
      "updatedAt": "2018-07-16T16:16:23.000Z",
      "videos": [{
        "type": "video",
        "attributes": {
          "title": "SSTV One",
          "description": null,
          "shortDescription": null,
          "fullDescription": null,
          "homeTeamId": null,
          "awayTeamId": null,
          "visibility": 0,
          "permission": 3,
          "contentType": 2,
          "audioLanguage": null,
          "subtitleLanguage": null,
          "viewsCount": null,
          "likesCount": null,
          "rating": null,
          "source": "vos360",
          "streamSourceUrl": "https://cdn-supersoccer-b-01.akamaized.net/Content/HLS/Live/channel(SSP01)/index.m3u8",
          "coverUrl": "http://cdn01.supersoccer.tv/v3/img/covers/sstv.jpg",
          "previewUrl": null,
          "duration": 8000,
          "matchStart": null,
          "matchEnd": null,
          "displayOrder": null,
          "expireAt": null,
          "createdAt": "2017-10-22T09:46:41.000Z"
        }
      }]
    }
  }, {
    "type": "user-video-history",
    "id": 2,
    "attributes": {
      "uid": "kareemlukitomo123",
      "timePosition": 999,
      "updatedAt": "2018-07-16T15:13:16.000Z",
      "videos": [{
        "videos": "not_found"
      }]
    }
  }]; // const dummyHistory = [
  //     { id:1, title: 'Hannibal Lecter - Season 3', chapter: 'Thirty three', playedDuration: 30, totalDuration: 49, img: 'https://via.placeholder.com/331x207'},
  //     { id:2, title: 'The Greatest Showman', chapter: 'One', playedDuration: 20, totalDuration: 100, img: 'https://via.placeholder.com/331x207'},
  //     { id:3, title: 'Hannibal Lecter - Season 3', chapter: 'Thirty three', playedDuration: 30, totalDuration: 49, img: 'https://via.placeholder.com/331x207'},
  //     { id:4, title: 'The Greatest Showman', chapter: 'One', playedDuration: 20, totalDuration: 100, img: 'https://via.placeholder.com/331x207'},
  //     { id:5, title: 'Hannibal Lecter - Season 3', chapter: 'Thirty three', playedDuration: 30, totalDuration: 49, img: 'https://via.placeholder.com/331x207'},
  //     { id:6, title: 'The Greatest Showman', chapter: 'One', playedDuration: 20, totalDuration: 100, img: 'https://via.placeholder.com/331x207'},
  //     { id:7, title: 'Hannibal Lecter - Season 3', chapter: 'Thirty three', playedDuration: 30, totalDuration: 49, img: 'https://via.placeholder.com/331x207'},
  //     { id:8, title: 'The Greatest Showman', chapter: 'One', playedDuration: 20, totalDuration: 100, img: 'https://via.placeholder.com/331x207'},
  //     { id:9, title: 'Hannibal Lecter - Season 3', chapter: 'Thirty three', playedDuration: 30, totalDuration: 49, img: 'https://via.placeholder.com/331x207'},
  //     { id:10, title: 'The Greatest Showman', chapter: 'One', playedDuration: 20, totalDuration: 100, img: 'https://via.placeholder.com/331x207'},
  //     { id:11, title: 'Hannibal Lecter - Season 3', chapter: 'Thirty three', playedDuration: 30, totalDuration: 49, img: 'https://via.placeholder.com/331x207'},
  //     { id:12, title: 'The Greatest Showman', chapter: 'One', playedDuration: 20, totalDuration: 100, img: 'https://via.placeholder.com/331x207'},
  // ]

  return {
    chunks: ['history'],
    title: title,
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_History__WEBPACK_IMPORTED_MODULE_2__["default"], {
      movieDummy: dummyHistory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504
      },
      __self: this
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2hpc3RvcnkuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L0hpc3RvcnkuY3NzIiwiL1VzZXJzL2lyZW5lL0RvY3VtZW50cy9Xb3JrL01vbGFSZWR1eC9zcmMvcm91dGVzL2hpc3RvcnkvY29tcG9uZW50cy9IaXN0b3J5Q2FyZC5jc3MiLCIvVXNlcnMvaXJlbmUvRG9jdW1lbnRzL1dvcmsvTW9sYVJlZHV4L3NyYy9hY3Rpb25zL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9oaXN0b3J5L0hpc3RvcnkuY3NzPzU0MDgiLCIvVXNlcnMvaXJlbmUvRG9jdW1lbnRzL1dvcmsvTW9sYVJlZHV4L3NyYy9yb3V0ZXMvaGlzdG9yeS9IaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaGlzdG9yeS9jb21wb25lbnRzL0hpc3RvcnlDYXJkLmNzcz9mMDgxIiwiL1VzZXJzL2lyZW5lL0RvY3VtZW50cy9Xb3JrL01vbGFSZWR1eC9zcmMvcm91dGVzL2hpc3RvcnkvY29tcG9uZW50cy9IaXN0b3J5Q2FyZC5qcyIsIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuSGlzdG9yeS13cmFwcGVyLTkzd1p2IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5wdWJsaWNkb21haW5waWN0dXJlcy5uZXQvcGljdHVyZXMvMTgwMDAwL3ZlbGthL3NlYS1iYWNrZ3JvdW5kLXRleHR1cmUtMTQ2Njc2NTQzODdZeC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZzogNzZweCAwIDAgMjUwcHg7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc2cHgpO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5IaXN0b3J5LWNvbnRhaW5lck91dGVyLWtzNVRYIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDExOTBweDtcXG59XFxuXFxuLkhpc3RvcnktY29udGFpbmVySW5uZXItM3lxUy0ge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc2cHgpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXG4gICAgLkhpc3RvcnktY29udGFpbmVyT3V0ZXIta3M1VFggXFxuICAgIHtcXG4gICAgICAgIHdpZHRoOiA5NjBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAuSGlzdG9yeS13cmFwcGVyLTkzd1p2IHtcXG4gICAgICAgIHBhZGRpbmc6IDc2cHggNDBweCAwIDQwcHg7XFxuICAgIH1cXG5cXG4gICAgLkhpc3RvcnktY29udGFpbmVyT3V0ZXIta3M1VFggXFxuICAgIHtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICB9XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvaXJlbmUvRG9jdW1lbnRzL1dvcmsvTW9sYVJlZHV4L3NyYy9yb3V0ZXMvaGlzdG9yeS9IaXN0b3J5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZIQUE2SDtJQUM3SCw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsMkJBQTJCO0NBQzlCOztBQUVEO0lBQ0k7O1FBRUksYUFBYTtLQUNoQjtDQUNKOztBQUVEO0lBQ0k7UUFDSSwwQkFBMEI7S0FDN0I7O0lBRUQ7O1FBRUksWUFBWTtLQUNmO0NBQ0pcIixcImZpbGVcIjpcIkhpc3RvcnkuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53cmFwcGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5wdWJsaWNkb21haW5waWN0dXJlcy5uZXQvcGljdHVyZXMvMTgwMDAwL3ZlbGthL3NlYS1iYWNrZ3JvdW5kLXRleHR1cmUtMTQ2Njc2NTQzODdZeC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZzogNzZweCAwIDAgMjUwcHg7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc2cHgpO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5jb250YWluZXJPdXRlciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMTkwcHg7XFxufVxcblxcbi5jb250YWluZXJJbm5lciB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzZweCk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xcbiAgICAuY29udGFpbmVyT3V0ZXIgXFxuICAgIHtcXG4gICAgICAgIHdpZHRoOiA5NjBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAud3JhcHBlciB7XFxuICAgICAgICBwYWRkaW5nOiA3NnB4IDQwcHggMCA0MHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXJPdXRlciBcXG4gICAge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIndyYXBwZXJcIjogXCJIaXN0b3J5LXdyYXBwZXItOTN3WnZcIixcblx0XCJjb250YWluZXJPdXRlclwiOiBcIkhpc3RvcnktY29udGFpbmVyT3V0ZXIta3M1VFhcIixcblx0XCJjb250YWluZXJJbm5lclwiOiBcIkhpc3RvcnktY29udGFpbmVySW5uZXItM3lxUy1cIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkhpc3RvcnlDYXJkLW1vdmllQ29udGFpbmVyLTJKcm5YIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4uSGlzdG9yeUNhcmQtbW92aWVEZXRhaWxXcmFwcGVyLTFmNGRQIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDVweCk7XFxufVxcblxcbi5IaXN0b3J5Q2FyZC1tb3ZpZUltYWdlV3JhcHBlci1jc2ZvdSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjY1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLkhpc3RvcnlDYXJkLW1vdmllSW1hZ2VXcmFwcGVyLWNzZm91ID4gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5IaXN0b3J5Q2FyZC1tb3ZpZUR1cmF0aW9uQmFyLTE4TWdnIHtcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgYm90dG9tOiAxNXB4O1xcbiAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gICBoZWlnaHQ6IDRweDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzFDMUMxO1xcbiAgIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG4uSGlzdG9yeUNhcmQtbW92aWVQbGF5ZWRCYXItMjgtUm8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMTBCMTQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLkhpc3RvcnlDYXJkLW1vdmllVGl0bGUtMk4ybzIge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uSGlzdG9yeUNhcmQtbW92aWVDaGFwdGVyLTMxcGJQIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uSGlzdG9yeUNhcmQtbW92aWVEdXJhdGlvbi0zUE0zSCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XFxuICAgIC5IaXN0b3J5Q2FyZC1tb3ZpZUltYWdlV3JhcHBlci1jc2ZvdSB7XFxuICAgICAgICB3aWR0aDogMjI1cHg7XFxuICAgIH1cXG5cXG4gICAgLkhpc3RvcnlDYXJkLW1vdmllVGl0bGUtMk4ybzIge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuSGlzdG9yeUNhcmQtbW92aWVDaGFwdGVyLTMxcGJQIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLkhpc3RvcnlDYXJkLW1vdmllRHVyYXRpb24tM1BNM0gge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5IaXN0b3J5Q2FyZC1tb3ZpZUNvbnRhaW5lci0ySnJuWCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5IaXN0b3J5Q2FyZC1tb3ZpZUltYWdlV3JhcHBlci1jc2ZvdSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gODBweCk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLkhpc3RvcnlDYXJkLW1vdmllRGV0YWlsV3JhcHBlci0xZjRkUCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICB9XFxuICAgICAgICBcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L2NvbXBvbmVudHMvSGlzdG9yeUNhcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixlQUFlO0lBQ2YsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0dBQ0csbUJBQW1CO0dBQ25CLGFBQWE7R0FDYix5QkFBeUI7R0FDekIsWUFBWTtHQUNaLDBCQUEwQjtHQUMxQixlQUFlO0NBQ2pCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJO1FBQ0ksYUFBYTtLQUNoQjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsWUFBWTtLQUNmOztJQUVEO1FBQ0ksZUFBZTtRQUNmLDBCQUEwQjtRQUMxQixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFlBQVk7S0FDZjs7Q0FFSlwiLFwiZmlsZVwiOlwiSGlzdG9yeUNhcmQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb3ZpZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLm1vdmllRGV0YWlsV3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzA1cHgpO1xcbn1cXG5cXG4ubW92aWVJbWFnZVdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDI2NXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb3ZpZUltYWdlV3JhcHBlciA+IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW92aWVEdXJhdGlvbkJhciB7XFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGJvdHRvbTogMTVweDtcXG4gICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XFxuICAgaGVpZ2h0OiA0cHg7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogI0MxQzFDMTtcXG4gICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLm1vdmllUGxheWVkQmFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTEwQjE0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb3ZpZVRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLm1vdmllQ2hhcHRlciB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLm1vdmllRHVyYXRpb24ge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xcbiAgICAubW92aWVJbWFnZVdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xcbiAgICB9XFxuXFxuICAgIC5tb3ZpZVRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1vdmllQ2hhcHRlciB7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tb3ZpZUR1cmF0aW9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAubW92aWVDb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgfVxcblxcbiAgICAubW92aWVJbWFnZVdyYXBwZXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDgwcHgpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5tb3ZpZURldGFpbFdyYXBwZXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgfVxcbiAgICAgICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJtb3ZpZUNvbnRhaW5lclwiOiBcIkhpc3RvcnlDYXJkLW1vdmllQ29udGFpbmVyLTJKcm5YXCIsXG5cdFwibW92aWVEZXRhaWxXcmFwcGVyXCI6IFwiSGlzdG9yeUNhcmQtbW92aWVEZXRhaWxXcmFwcGVyLTFmNGRQXCIsXG5cdFwibW92aWVJbWFnZVdyYXBwZXJcIjogXCJIaXN0b3J5Q2FyZC1tb3ZpZUltYWdlV3JhcHBlci1jc2ZvdVwiLFxuXHRcIm1vdmllRHVyYXRpb25CYXJcIjogXCJIaXN0b3J5Q2FyZC1tb3ZpZUR1cmF0aW9uQmFyLTE4TWdnXCIsXG5cdFwibW92aWVQbGF5ZWRCYXJcIjogXCJIaXN0b3J5Q2FyZC1tb3ZpZVBsYXllZEJhci0yOC1Sb1wiLFxuXHRcIm1vdmllVGl0bGVcIjogXCJIaXN0b3J5Q2FyZC1tb3ZpZVRpdGxlLTJOMm8yXCIsXG5cdFwibW92aWVDaGFwdGVyXCI6IFwiSGlzdG9yeUNhcmQtbW92aWVDaGFwdGVyLTMxcGJQXCIsXG5cdFwibW92aWVEdXJhdGlvblwiOiBcIkhpc3RvcnlDYXJkLW1vdmllRHVyYXRpb24tM1BNM0hcIlxufTsiLCJpbXBvcnQgeyBGRVRDSF9ISVNUT1JZIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGFwaVVybCA9ICdodHRwOi8vbW9sYS5sdWtpdG9tby5jb20vdjIvdmlkZW9zL3R0MTE3OTA1Nic7XG4vLyBjb25zdCBhcGlVcmwgPSAnaHR0cDovL21vbGEubHVraXRvbW8uY29tL3YyL3VzZXJkYXRhL2thcmVlbWx1a2l0b21vMTIzL3ZpZGVvcy9oaXN0b3JpZXMnO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hIaXN0b3J5ID0gKG1vdmllcykgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX0hJU1RPUlksXG4gICAgcmVzdWx0OiBtb3ZpZXNcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQWxsSGlzdG9yeSA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiBheGlvcy5nZXQoYXBpVXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEhpc3RvcnkocmVzcG9uc2UuZGF0YSkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICAgIC8vIHRocm93KGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xufTsiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hpc3RvcnkuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hpc3RvcnkuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSGlzdG9yeS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5cbmltcG9ydCBIaXN0b3J5Q2FyZCBmcm9tICcuL2NvbXBvbmVudHMvSGlzdG9yeUNhcmQnO1xuXG5pbXBvcnQgeyBmZXRjaEFsbEhpc3RvcnkgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2hpc3RvcnknO1xuaW1wb3J0IHMgZnJvbSAnLi9IaXN0b3J5LmNzcyc7XG5cblxuY2xhc3MgSGlzdG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQWxsSGlzdG9yeSgpO1xuICAgIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcbiAgfTtcblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1vdmllRHVtbXksIG1vdmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy53cmFwcGVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lck91dGVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJJbm5lcn0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtb3ZpZUR1bW15Lm1hcCggKG1vdmllKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWRlb3NBdHRyID0gbW92aWUuYXR0cmlidXRlcy52aWRlb3NbMF0uYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVRUUlwiLCB2aWRlb3NBdHRyKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIW1vdmllLmF0dHJpYnV0ZXMudmlkZW9zWzBdLnZpZGVvcyB8fCBtb3ZpZS5hdHRyaWJ1dGVzLnZpZGVvc1swXS52aWRlb3MhPT0gXCJub3RfZm91bmRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllZER1cmF0aW9uID0gbW92aWUuYXR0cmlidXRlcy50aW1lUG9zaXRpb24gLyB2aWRlb3NBdHRyLmR1cmF0aW9uICogMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhclN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7cGxheWVkRHVyYXRpb259JWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhpc3RvcnlDYXJkIGtleT17bW92aWUuaWR9IHZpZGVvcz17dmlkZW9zQXR0cn0gYmFyU3R5bGU9e2JhclN0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG4vLyBIaXN0b3J5LnByb3BUeXBlcyA9IHtcbi8vICAgICBtb3ZpZUhpc3Rvcnk6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuLy8gICB9O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZWVlZVwiLCBzdGF0ZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtb3ZpZXM6IHN0YXRlLmhpc3RvcnkubW92aWVzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBzYW1lIGVmZmVjdFxuICAgICAgICBmZXRjaEFsbEhpc3RvcnkgOiAoKSA9PiBkaXNwYXRjaChmZXRjaEFsbEhpc3RvcnkoKSksXG4gICAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoU3R5bGVzKHMpKEhpc3RvcnkpKTtcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gICAgd2l0aFN0eWxlcyhzKSxcbiAgICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxuKShIaXN0b3J5KSIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSGlzdG9yeUNhcmQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hpc3RvcnlDYXJkLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hpc3RvcnlDYXJkLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9IaXN0b3J5Q2FyZC5jc3MnO1xuXG5jbGFzcyBIaXN0b3J5Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB2aWRlb3M6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIGJhclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIH07XG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB2aWRlb3MsIGJhclN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cy5tb3ZpZUltYWdlV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2aWRlb3MuY292ZXJVcmx9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVEdXJhdGlvbkJhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MubW92aWVQbGF5ZWRCYXJ9IHN0eWxlPXtiYXJTdHlsZX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVEZXRhaWxXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVUaXRsZX0+e3ZpZGVvcy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVDaGFwdGVyfT57dmlkZW9zLmNoYXB0ZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vdmllRHVyYXRpb259Pnt2aWRlb3MuZHVyYXRpb24gLyA2MH0gbWluLjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEhpc3RvcnlDYXJkKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuL0hpc3RvcnknO1xuXG5jb25zdCB0aXRsZSA9ICdIaXN0b3J5JztcblxuLy8gY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG4vLyAvLyBNYWtlIGEgcmVxdWVzdCBmb3IgYSB1c2VyIHdpdGggYSBnaXZlbiBJRFxuLy8gYXhpb3MuZ2V0KCdodHRwOi8vbW9sYS5sdWtpdG9tby5jb20vdjIvdmlkZW9zL3BsYXlsaXN0cy9ob3Jyb3InKVxuLy8gICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbi8vICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xuLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbi8vICAgfSlcbi8vICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuLy8gICAgIC8vIGhhbmRsZSBlcnJvclxuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgfSlcbi8vICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuLy8gICAgIC8vIGFsd2F5cyBleGVjdXRlZFxuLy8gICB9KTtcblxuXG5mdW5jdGlvbiBhY3Rpb24oKSB7XG5cbiAgICBjb25zdCBkdW1teUhpc3RvcnkgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVzZXItdmlkZW8taGlzdG9yeVwiLFxuICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICAgICAgICBcInVpZFwiOiBcImthcmVlbWx1a2l0b21vMTIzXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lUG9zaXRpb25cIjogNjcwLFxuICAgICAgICAgICAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0wNy0xN1QxNzo0MTozMy4wMDBaXCIsXG4gICAgICAgICAgICAgICAgXCJ2aWRlb3NcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ2aWRlb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiRm9vdGJhbGwgQ29sb3VycyAtIFNwb3J0aW5nIEdpam9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGFwdGVyXCI6IFwiQ2hhcHRlciBPbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2VvcmFuZyByYWphIHBlcm5haCBtZW5qYWRpIHByZXNpZGVuIGtlaG9ybWF0YW4ga2x1YiBpbmkuIFJhamEgdGVyc2VidXQgYWRhbGFoIFJhamEgQWxmb25zbyBYSUlJLiBTZWJ1YWgga2Vob3JtYXRhbiB5YW5nIGRpYmVyaWthbiBrZXBhZGFueWEgcGFkYSB0YWh1biAxOTEyLiBLZXBlbWlsaWthbiBzZW9yYW5nIHJhamEgaW5pbGFoIHlhbmcgbWVtYnVhdCBrbHViIGluaSBtZW1pbGlraSBuYW1hIOKAnFJlYWzigJ0gZGkgZGVwYW5ueWEuICBLbHViIHlhbmcgYmVyZGlyaSBwYWRhIDE5MDIgZGVuZ2FuIG5hbWEgR2lqb24gU3BvcnRzIGluaSBpZGVudGlrIGRlbmdhbiB3YXJuYSBtZXJhaCBkYW4gcHV0aWguICBNZXJ1cGFrYW4gc2VidWFoIGtlYmFuZ2dhYW4gYmFnaSBwYXJhIHBlbWFpbiBzZXRpYXAga2FsaSBtZW5nZW5ha2FuIGplcnNleSB1dGFtYSwgdGVybGViaWgga2FsYSBiZXJ0YXJ1bmcgZGkgRWwgTW9saW5vbiwgc3RhZGlvbiBtZXJla2EgeWFuZyBtZXJ1cGFrYW4gc3RhZGlvbiB0ZXJ0dWEgZGkgU3BhbnlvbC4gIERhcmkgbWFuYSBhc2FsIHBlbWlsaWhhbiBqZXJzZXk/IFNpYXBhIHlhbmcgbWVtcHJha2Fyc2FpIGtsdWIgaW5pIHNlcnRhIGh1YnVuZ2FuIG1lcmVrYSBkZW5nYW4gc2FuZyBSYWphIEFsZm9uc28gWElJST9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3J0RGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bGxEZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9tZVRlYW1JZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXdheVRlYW1JZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVybWlzc2lvblwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1ZGlvTGFuZ3VhZ2VcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1YnRpdGxlTGFuZ3VhZ2VcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdzQ291bnRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpa2VzQ291bnRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhdGluZ1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic291cmNlXCI6IFwidm9zMzYwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJlYW1Tb3VyY2VVcmxcIjogXCJodHRwczovL2Nkbi1zdXBlcnNvY2Nlci1iLTAxLmFrYW1haXplZC5uZXQvQ29udGVudC9ITFMvVk9ELzBmYjgyZjViLWRhNTEtNGJiYi04NDliLWY0YTU1OGFjNDU1MC82OGZiOTdkYy04NjY2LTYzNWEtNTc0Mi1jMWNjY2U0MDg4ZGUvaW5kZXgubTN1OFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY292ZXJVcmxcIjogXCJodHRwczovL2NkbjAxLnN1cGVyc29jY2VyLnR2L2ltYWdlcy8yNi9mMTIxMDUxNDYxMjk2OTZkNmE3ZTBlZDUyMWRiMmU0OC9vcmlnaW5hbC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXZpZXdVcmxcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDcyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRjaFN0YXJ0XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRjaEVuZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheU9yZGVyXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBpcmVBdFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxNy0xMC0xNVQyMTo0MTo0NC4wMDBaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXNlci12aWRlby1oaXN0b3J5XCIsXG4gICAgICAgICAgICBcImlkXCI6IDIsXG4gICAgICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICAgICAgICAgIFwidWlkXCI6IFwia2FyZWVtbHVraXRvbW8xMjNcIixcbiAgICAgICAgICAgICAgICBcInRpbWVQb3NpdGlvblwiOiA0OTksXG4gICAgICAgICAgICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTA3LTE3VDE3OjQwOjMyLjAwMFpcIixcbiAgICAgICAgICAgICAgICBcInZpZGVvc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInZpZGVvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJEcmVhbSBUZWFtcyAtIEl0IFRha2VzIEVsZXZlbiB0byBUYW5nb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhcHRlclwiOiBcIkNoYXB0ZXIgT25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1lbnl1c3VuIHRpbSBpbXBpYW4gYmVybWF0ZXJpa2FuIHRhbGVudGEtdGFsZW50YSBBcmdlbnRpbmEgYnVrYW5sYWggcGVya2FyYSBnYW1wYW5nLiBEZW5nYW4gZm9ybWFzaSAzLTQtMywga2FtaSBtZW55YWppa2FuIHNlYnVhaCBza3VhZCBpbXBpYW4geWFuZyBha2FuIG1lbWFuamFrYW4gc2VtdWEgbWFuYWplciBtYXVwdW4gcGVsYXRpaCBkaSBzZWFudG9yYSBCdW1pLiBTYWtpbmcgZGFoc3lhdG55YSwga2l0YSBoYW55YSBiaXNhIGJpc2EgbWVueWF5YW5na2FuIGJhaHdhIG1pbXBpIGluaSB0aWRhayBha2FuIHBlcm5haCBtZW5qYWRpIGtlbnlhdGFhbi4gU2lhcGEgeWFuZyB0aWRhayBpbmdpbiBtZWxpaGF0IE1hcmFkb25hIGRhbiBNZXNzaSBiZXJhZGEgZGkgZGFsYW0gc2VidWFoIGxpbmUtdXAgeWFuZyBzYW1hLCBkaXRlbWFuaSBzZW1iaWxhbiBwZW1haW4gdGVyYmFpayB0aW0gVGFuZ28gc2VwYW5qYW5nIG1hc2E/ICBCYXllcm4gTXVuY2hlbiBtdW5na2luIHBhbnRhcyBkaXNlYnV0IHNlYmFnYWkgc2FsYWggc2F0dSB0aW0geWFuZyBwYWxpbmcga29uc2lzdGVuIGRpIGthbmNhaCBzZXBha2JvbGEuIERhcmkgZXJhIEZyYW56IEJlY2tlbmJhdWVyLCBLYXJsLUhlaW56IFJ1bW1lbmlnZ2UsIExvdGhhciBNYXR0aGV1cywgTWljaGFlbCBCYWxsYWNrLCBoaW5nZ2EgQXJqZW4gUm9iYmVuLCDigJxEaWUgUm90ZW7igJ0gc2VsYWx1IG1lbmphZGkgcGVuZ3Vhc2EgSmVybWFuIGRhbiBtZW5qdWFyYWkgRXJvcGEgc2VsYW1hIGxpbnRhcyBkZWthZGUuIE1ld2FraWxpIGVyYW55YSBtYXNpbmctbWFzaW5nLCB0ZXJiZW50dWtsYWggc2VidWFoIHRpbSBpbXBpYW4gbWlsaWsgQmF5ZXJuIE11bmNoZW4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG9ydERlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdWxsRGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvbWVUZWFtSWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF3YXlUZWFtSWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcm1pc3Npb25cIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdWRpb0xhbmd1YWdlXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJ0aXRsZUxhbmd1YWdlXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3c0NvdW50XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWtlc0NvdW50XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYXRpbmdcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiBcInZvczM2MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyZWFtU291cmNlVXJsXCI6IFwiaHR0cHM6Ly9jZG4tc3VwZXJzb2NjZXItYi0wMS5ha2FtYWl6ZWQubmV0L0NvbnRlbnQvSExTL1ZPRC83ZGQ0MzhlNi1mOThiLTQ1MWEtODg1Yi1jNWNkODFhZjZiZGQvNjhmYjk3ZGMtODY2Ni02MzVhLTU3NDItYzFjY2NlNDA4OGRlL2luZGV4Lm0zdThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdmVyVXJsXCI6IFwiaHR0cHM6Ly9jZG4wMS5zdXBlcnNvY2Nlci50di9pbWFnZXMvNDU3ZTU0ZjRjYjNjMGVkMjY5NDVlMzBkZDJmNTNlZGYvb3JpZ2luYWwuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2aWV3VXJsXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiA4MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRjaFN0YXJ0XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRjaEVuZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheU9yZGVyXCI6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBpcmVBdFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxNy0xMC0xNVQyMTo0MTo0NC4wMDBaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXNlci12aWRlby1oaXN0b3J5XCIsXG4gICAgICAgICAgICBcImlkXCI6IDIsXG4gICAgICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICAgICAgICAgIFwidWlkXCI6IFwia2FyZWVtbHVraXRvbW8xMjNcIixcbiAgICAgICAgICAgICAgICBcInRpbWVQb3NpdGlvblwiOiA3Nzc5LFxuICAgICAgICAgICAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0wNy0xNlQxNjoxNjoyMy4wMDBaXCIsXG4gICAgICAgICAgICAgICAgXCJ2aWRlb3NcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ2aWRlb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiU1NUViBPbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG9ydERlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdWxsRGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvbWVUZWFtSWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF3YXlUZWFtSWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcm1pc3Npb25cIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdWRpb0xhbmd1YWdlXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJ0aXRsZUxhbmd1YWdlXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3c0NvdW50XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWtlc0NvdW50XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYXRpbmdcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiBcInZvczM2MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyZWFtU291cmNlVXJsXCI6IFwiaHR0cHM6Ly9jZG4tc3VwZXJzb2NjZXItYi0wMS5ha2FtYWl6ZWQubmV0L0NvbnRlbnQvSExTL0xpdmUvY2hhbm5lbChTU1AwMSkvaW5kZXgubTN1OFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY292ZXJVcmxcIjogXCJodHRwOi8vY2RuMDEuc3VwZXJzb2NjZXIudHYvdjMvaW1nL2NvdmVycy9zc3R2LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldmlld1VybFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogODAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hdGNoU3RhcnRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hdGNoRW5kXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5T3JkZXJcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGlyZUF0XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDE3LTEwLTIyVDA5OjQ2OjQxLjAwMFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1c2VyLXZpZGVvLWhpc3RvcnlcIixcbiAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ1aWRcIjogXCJrYXJlZW1sdWtpdG9tbzEyM1wiLFxuICAgICAgICAgICAgICAgIFwidGltZVBvc2l0aW9uXCI6IDc3NzksXG4gICAgICAgICAgICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTA3LTE2VDE2OjE2OjIzLjAwMFpcIixcbiAgICAgICAgICAgICAgICBcInZpZGVvc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInZpZGVvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJTU1RWIE9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3J0RGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bGxEZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9tZVRlYW1JZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXdheVRlYW1JZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVybWlzc2lvblwiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1ZGlvTGFuZ3VhZ2VcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1YnRpdGxlTGFuZ3VhZ2VcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdzQ291bnRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpa2VzQ291bnRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhdGluZ1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic291cmNlXCI6IFwidm9zMzYwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJlYW1Tb3VyY2VVcmxcIjogXCJodHRwczovL2Nkbi1zdXBlcnNvY2Nlci1iLTAxLmFrYW1haXplZC5uZXQvQ29udGVudC9ITFMvTGl2ZS9jaGFubmVsKFNTUDAxKS9pbmRleC5tM3U4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3ZlclVybFwiOiBcImh0dHA6Ly9jZG4wMS5zdXBlcnNvY2Nlci50di92My9pbWcvY292ZXJzL3NzdHYuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2aWV3VXJsXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiA4MDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF0Y2hTdGFydFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF0Y2hFbmRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlPcmRlclwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwaXJlQXRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTctMTAtMjJUMDk6NDY6NDEuMDAwWlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVzZXItdmlkZW8taGlzdG9yeVwiLFxuICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICAgICAgICBcInVpZFwiOiBcImthcmVlbWx1a2l0b21vMTIzXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lUG9zaXRpb25cIjogNzc3OSxcbiAgICAgICAgICAgICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMDctMTZUMTY6MTY6MjMuMDAwWlwiLFxuICAgICAgICAgICAgICAgIFwidmlkZW9zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidmlkZW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNTVFYgT25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvcnREZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVsbERlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob21lVGVhbUlkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhd2F5VGVhbUlkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJtaXNzaW9uXCI6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50VHlwZVwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXVkaW9MYW5ndWFnZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3VidGl0bGVMYW5ndWFnZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld3NDb3VudFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlrZXNDb3VudFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmF0aW5nXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2VcIjogXCJ2b3MzNjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cmVhbVNvdXJjZVVybFwiOiBcImh0dHBzOi8vY2RuLXN1cGVyc29jY2VyLWItMDEuYWthbWFpemVkLm5ldC9Db250ZW50L0hMUy9MaXZlL2NoYW5uZWwoU1NQMDEpL2luZGV4Lm0zdThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdmVyVXJsXCI6IFwiaHR0cDovL2NkbjAxLnN1cGVyc29jY2VyLnR2L3YzL2ltZy9jb3ZlcnMvc3N0di5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXZpZXdVcmxcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDgwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRjaFN0YXJ0XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRjaEVuZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheU9yZGVyXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBpcmVBdFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxNy0xMC0yMlQwOTo0Njo0MS4wMDBaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXNlci12aWRlby1oaXN0b3J5XCIsXG4gICAgICAgICAgICBcImlkXCI6IDIsXG4gICAgICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICAgICAgICAgIFwidWlkXCI6IFwia2FyZWVtbHVraXRvbW8xMjNcIixcbiAgICAgICAgICAgICAgICBcInRpbWVQb3NpdGlvblwiOiA3Nzc5LFxuICAgICAgICAgICAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0wNy0xNlQxNjoxNjoyMy4wMDBaXCIsXG4gICAgICAgICAgICAgICAgXCJ2aWRlb3NcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ2aWRlb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiU1NUViBPbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG9ydERlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdWxsRGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvbWVUZWFtSWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF3YXlUZWFtSWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcm1pc3Npb25cIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdWRpb0xhbmd1YWdlXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJ0aXRsZUxhbmd1YWdlXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3c0NvdW50XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWtlc0NvdW50XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYXRpbmdcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiBcInZvczM2MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyZWFtU291cmNlVXJsXCI6IFwiaHR0cHM6Ly9jZG4tc3VwZXJzb2NjZXItYi0wMS5ha2FtYWl6ZWQubmV0L0NvbnRlbnQvSExTL0xpdmUvY2hhbm5lbChTU1AwMSkvaW5kZXgubTN1OFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY292ZXJVcmxcIjogXCJodHRwOi8vY2RuMDEuc3VwZXJzb2NjZXIudHYvdjMvaW1nL2NvdmVycy9zc3R2LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldmlld1VybFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogODAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hdGNoU3RhcnRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hdGNoRW5kXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5T3JkZXJcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGlyZUF0XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDE3LTEwLTIyVDA5OjQ2OjQxLjAwMFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1c2VyLXZpZGVvLWhpc3RvcnlcIixcbiAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ1aWRcIjogXCJrYXJlZW1sdWtpdG9tbzEyM1wiLFxuICAgICAgICAgICAgICAgIFwidGltZVBvc2l0aW9uXCI6IDc3NzksXG4gICAgICAgICAgICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTA3LTE2VDE2OjE2OjIzLjAwMFpcIixcbiAgICAgICAgICAgICAgICBcInZpZGVvc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInZpZGVvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJTU1RWIE9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3J0RGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bGxEZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9tZVRlYW1JZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXdheVRlYW1JZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVybWlzc2lvblwiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1ZGlvTGFuZ3VhZ2VcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1YnRpdGxlTGFuZ3VhZ2VcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdzQ291bnRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpa2VzQ291bnRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhdGluZ1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic291cmNlXCI6IFwidm9zMzYwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJlYW1Tb3VyY2VVcmxcIjogXCJodHRwczovL2Nkbi1zdXBlcnNvY2Nlci1iLTAxLmFrYW1haXplZC5uZXQvQ29udGVudC9ITFMvTGl2ZS9jaGFubmVsKFNTUDAxKS9pbmRleC5tM3U4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3ZlclVybFwiOiBcImh0dHA6Ly9jZG4wMS5zdXBlcnNvY2Nlci50di92My9pbWcvY292ZXJzL3NzdHYuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2aWV3VXJsXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiA4MDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF0Y2hTdGFydFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF0Y2hFbmRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlPcmRlclwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwaXJlQXRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTctMTAtMjJUMDk6NDY6NDEuMDAwWlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVzZXItdmlkZW8taGlzdG9yeVwiLFxuICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICAgICAgICBcInVpZFwiOiBcImthcmVlbWx1a2l0b21vMTIzXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lUG9zaXRpb25cIjogNzc3OSxcbiAgICAgICAgICAgICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMDctMTZUMTY6MTY6MjMuMDAwWlwiLFxuICAgICAgICAgICAgICAgIFwidmlkZW9zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidmlkZW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNTVFYgT25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvcnREZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVsbERlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob21lVGVhbUlkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhd2F5VGVhbUlkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJtaXNzaW9uXCI6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50VHlwZVwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXVkaW9MYW5ndWFnZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3VidGl0bGVMYW5ndWFnZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld3NDb3VudFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlrZXNDb3VudFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmF0aW5nXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2VcIjogXCJ2b3MzNjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cmVhbVNvdXJjZVVybFwiOiBcImh0dHBzOi8vY2RuLXN1cGVyc29jY2VyLWItMDEuYWthbWFpemVkLm5ldC9Db250ZW50L0hMUy9MaXZlL2NoYW5uZWwoU1NQMDEpL2luZGV4Lm0zdThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdmVyVXJsXCI6IFwiaHR0cDovL2NkbjAxLnN1cGVyc29jY2VyLnR2L3YzL2ltZy9jb3ZlcnMvc3N0di5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXZpZXdVcmxcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDgwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRjaFN0YXJ0XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRjaEVuZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheU9yZGVyXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBpcmVBdFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxNy0xMC0yMlQwOTo0Njo0MS4wMDBaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXNlci12aWRlby1oaXN0b3J5XCIsXG4gICAgICAgICAgICBcImlkXCI6IDIsXG4gICAgICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICAgICAgICAgIFwidWlkXCI6IFwia2FyZWVtbHVraXRvbW8xMjNcIixcbiAgICAgICAgICAgICAgICBcInRpbWVQb3NpdGlvblwiOiA3Nzc5LFxuICAgICAgICAgICAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0wNy0xNlQxNjoxNjoyMy4wMDBaXCIsXG4gICAgICAgICAgICAgICAgXCJ2aWRlb3NcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ2aWRlb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiU1NUViBPbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG9ydERlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdWxsRGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvbWVUZWFtSWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF3YXlUZWFtSWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcm1pc3Npb25cIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdWRpb0xhbmd1YWdlXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJ0aXRsZUxhbmd1YWdlXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3c0NvdW50XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWtlc0NvdW50XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYXRpbmdcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiBcInZvczM2MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyZWFtU291cmNlVXJsXCI6IFwiaHR0cHM6Ly9jZG4tc3VwZXJzb2NjZXItYi0wMS5ha2FtYWl6ZWQubmV0L0NvbnRlbnQvSExTL0xpdmUvY2hhbm5lbChTU1AwMSkvaW5kZXgubTN1OFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY292ZXJVcmxcIjogXCJodHRwOi8vY2RuMDEuc3VwZXJzb2NjZXIudHYvdjMvaW1nL2NvdmVycy9zc3R2LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldmlld1VybFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogODAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hdGNoU3RhcnRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hdGNoRW5kXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5T3JkZXJcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGlyZUF0XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDE3LTEwLTIyVDA5OjQ2OjQxLjAwMFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1c2VyLXZpZGVvLWhpc3RvcnlcIixcbiAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ1aWRcIjogXCJrYXJlZW1sdWtpdG9tbzEyM1wiLFxuICAgICAgICAgICAgICAgIFwidGltZVBvc2l0aW9uXCI6IDc3NzksXG4gICAgICAgICAgICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTA3LTE2VDE2OjE2OjIzLjAwMFpcIixcbiAgICAgICAgICAgICAgICBcInZpZGVvc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInZpZGVvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJTU1RWIE9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3J0RGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bGxEZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9tZVRlYW1JZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXdheVRlYW1JZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVybWlzc2lvblwiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1ZGlvTGFuZ3VhZ2VcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1YnRpdGxlTGFuZ3VhZ2VcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdzQ291bnRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpa2VzQ291bnRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhdGluZ1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic291cmNlXCI6IFwidm9zMzYwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJlYW1Tb3VyY2VVcmxcIjogXCJodHRwczovL2Nkbi1zdXBlcnNvY2Nlci1iLTAxLmFrYW1haXplZC5uZXQvQ29udGVudC9ITFMvTGl2ZS9jaGFubmVsKFNTUDAxKS9pbmRleC5tM3U4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3ZlclVybFwiOiBcImh0dHA6Ly9jZG4wMS5zdXBlcnNvY2Nlci50di92My9pbWcvY292ZXJzL3NzdHYuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2aWV3VXJsXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiA4MDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF0Y2hTdGFydFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF0Y2hFbmRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlPcmRlclwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwaXJlQXRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTctMTAtMjJUMDk6NDY6NDEuMDAwWlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVzZXItdmlkZW8taGlzdG9yeVwiLFxuICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICAgICAgICBcInVpZFwiOiBcImthcmVlbWx1a2l0b21vMTIzXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lUG9zaXRpb25cIjogNzc3OSxcbiAgICAgICAgICAgICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMDctMTZUMTY6MTY6MjMuMDAwWlwiLFxuICAgICAgICAgICAgICAgIFwidmlkZW9zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidmlkZW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNTVFYgT25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvcnREZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVsbERlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob21lVGVhbUlkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhd2F5VGVhbUlkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJtaXNzaW9uXCI6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50VHlwZVwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXVkaW9MYW5ndWFnZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3VidGl0bGVMYW5ndWFnZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld3NDb3VudFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlrZXNDb3VudFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmF0aW5nXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2VcIjogXCJ2b3MzNjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cmVhbVNvdXJjZVVybFwiOiBcImh0dHBzOi8vY2RuLXN1cGVyc29jY2VyLWItMDEuYWthbWFpemVkLm5ldC9Db250ZW50L0hMUy9MaXZlL2NoYW5uZWwoU1NQMDEpL2luZGV4Lm0zdThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdmVyVXJsXCI6IFwiaHR0cDovL2NkbjAxLnN1cGVyc29jY2VyLnR2L3YzL2ltZy9jb3ZlcnMvc3N0di5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXZpZXdVcmxcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDgwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRjaFN0YXJ0XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRjaEVuZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheU9yZGVyXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBpcmVBdFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxNy0xMC0yMlQwOTo0Njo0MS4wMDBaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXNlci12aWRlby1oaXN0b3J5XCIsXG4gICAgICAgICAgICBcImlkXCI6IDIsXG4gICAgICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICAgICAgICAgIFwidWlkXCI6IFwia2FyZWVtbHVraXRvbW8xMjNcIixcbiAgICAgICAgICAgICAgICBcInRpbWVQb3NpdGlvblwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTA3LTE2VDE1OjEzOjE2LjAwMFpcIixcbiAgICAgICAgICAgICAgICBcInZpZGVvc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlkZW9zXCI6IFwibm90X2ZvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF1cbiAgICAvLyBjb25zdCBkdW1teUhpc3RvcnkgPSBbXG4gICAgLy8gICAgIHsgaWQ6MSwgdGl0bGU6ICdIYW5uaWJhbCBMZWN0ZXIgLSBTZWFzb24gMycsIGNoYXB0ZXI6ICdUaGlydHkgdGhyZWUnLCBwbGF5ZWREdXJhdGlvbjogMzAsIHRvdGFsRHVyYXRpb246IDQ5LCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgIC8vICAgICB7IGlkOjIsIHRpdGxlOiAnVGhlIEdyZWF0ZXN0IFNob3dtYW4nLCBjaGFwdGVyOiAnT25lJywgcGxheWVkRHVyYXRpb246IDIwLCB0b3RhbER1cmF0aW9uOiAxMDAsIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgLy8gICAgIHsgaWQ6MywgdGl0bGU6ICdIYW5uaWJhbCBMZWN0ZXIgLSBTZWFzb24gMycsIGNoYXB0ZXI6ICdUaGlydHkgdGhyZWUnLCBwbGF5ZWREdXJhdGlvbjogMzAsIHRvdGFsRHVyYXRpb246IDQ5LCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgIC8vICAgICB7IGlkOjQsIHRpdGxlOiAnVGhlIEdyZWF0ZXN0IFNob3dtYW4nLCBjaGFwdGVyOiAnT25lJywgcGxheWVkRHVyYXRpb246IDIwLCB0b3RhbER1cmF0aW9uOiAxMDAsIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgLy8gICAgIHsgaWQ6NSwgdGl0bGU6ICdIYW5uaWJhbCBMZWN0ZXIgLSBTZWFzb24gMycsIGNoYXB0ZXI6ICdUaGlydHkgdGhyZWUnLCBwbGF5ZWREdXJhdGlvbjogMzAsIHRvdGFsRHVyYXRpb246IDQ5LCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgIC8vICAgICB7IGlkOjYsIHRpdGxlOiAnVGhlIEdyZWF0ZXN0IFNob3dtYW4nLCBjaGFwdGVyOiAnT25lJywgcGxheWVkRHVyYXRpb246IDIwLCB0b3RhbER1cmF0aW9uOiAxMDAsIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgLy8gICAgIHsgaWQ6NywgdGl0bGU6ICdIYW5uaWJhbCBMZWN0ZXIgLSBTZWFzb24gMycsIGNoYXB0ZXI6ICdUaGlydHkgdGhyZWUnLCBwbGF5ZWREdXJhdGlvbjogMzAsIHRvdGFsRHVyYXRpb246IDQ5LCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgIC8vICAgICB7IGlkOjgsIHRpdGxlOiAnVGhlIEdyZWF0ZXN0IFNob3dtYW4nLCBjaGFwdGVyOiAnT25lJywgcGxheWVkRHVyYXRpb246IDIwLCB0b3RhbER1cmF0aW9uOiAxMDAsIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgLy8gICAgIHsgaWQ6OSwgdGl0bGU6ICdIYW5uaWJhbCBMZWN0ZXIgLSBTZWFzb24gMycsIGNoYXB0ZXI6ICdUaGlydHkgdGhyZWUnLCBwbGF5ZWREdXJhdGlvbjogMzAsIHRvdGFsRHVyYXRpb246IDQ5LCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgIC8vICAgICB7IGlkOjEwLCB0aXRsZTogJ1RoZSBHcmVhdGVzdCBTaG93bWFuJywgY2hhcHRlcjogJ09uZScsIHBsYXllZER1cmF0aW9uOiAyMCwgdG90YWxEdXJhdGlvbjogMTAwLCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgIC8vICAgICB7IGlkOjExLCB0aXRsZTogJ0hhbm5pYmFsIExlY3RlciAtIFNlYXNvbiAzJywgY2hhcHRlcjogJ1RoaXJ0eSB0aHJlZScsIHBsYXllZER1cmF0aW9uOiAzMCwgdG90YWxEdXJhdGlvbjogNDksIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgLy8gICAgIHsgaWQ6MTIsIHRpdGxlOiAnVGhlIEdyZWF0ZXN0IFNob3dtYW4nLCBjaGFwdGVyOiAnT25lJywgcGxheWVkRHVyYXRpb246IDIwLCB0b3RhbER1cmF0aW9uOiAxMDAsIGltZzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMzF4MjA3J30sXG4gICAgLy8gXVxuXG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ2hpc3RvcnknXSxcbiAgICB0aXRsZSxcbiAgICBjb21wb25lbnQ6IChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIaXN0b3J5IG1vdmllRHVtbXk9e2R1bW15SGlzdG9yeX0vPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQU9BOzs7O0FBcENBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBM0NBOzs7O0FBS0E7QUFDQTtBQURBOzs7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBeEJBO0FBQ0E7QUFEQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUZBOztBQXlCQTs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBRkE7QUFMQTtBQUhBO0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBRkE7QUFMQTtBQUhBO0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQUZBO0FBTEE7QUFIQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUFGQTtBQUxBO0FBSEE7QUF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBRkE7QUFMQTtBQUhBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQUZBO0FBTEE7QUFIQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUFGQTtBQUxBO0FBSEE7QUF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBRkE7QUFMQTtBQUhBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQUZBO0FBTEE7QUFIQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUFGQTtBQUxBO0FBSEE7QUF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBRkE7QUFMQTtBQUhBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUxBO0FBSEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9