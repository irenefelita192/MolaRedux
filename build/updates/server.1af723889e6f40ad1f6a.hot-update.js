require("source-map-support").install();
exports.id = "server";
exports.modules = {

/***/ "./src/reducers/history.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return history; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/constants/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function history() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    movies: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_HISTORY"]:
      console.log("MASUK SINIII", action.result.data, state);
      return _objectSpread({}, state, {
        movies: action.result.data
      });

    default:
      console.log("DEFAULLT");
      return state;
  }
}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9zZXJ2ZXIuMWFmNzIzODg5ZTZmNDBhZDFmNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL2lyZW5lL0RvY3VtZW50cy9Xb3JrL01vbGFSZWR1eC9zcmMvcmVkdWNlcnMvaGlzdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGRVRDSF9ISVNUT1JZIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGlzdG9yeShzdGF0ZSA9IHsgbW92aWVzOiBbXX0sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGRVRDSF9ISVNUT1JZOlxuICAgIGNvbnNvbGUubG9nKFwiTUFTVUsgU0lOSUlJXCIsIGFjdGlvbi5yZXN1bHQuZGF0YSwgc3RhdGUpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbW92aWVzIDogYWN0aW9uLnJlc3VsdC5kYXRhXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICBjb25zb2xlLmxvZyhcIkRFRkFVTExUXCIpXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQVdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=