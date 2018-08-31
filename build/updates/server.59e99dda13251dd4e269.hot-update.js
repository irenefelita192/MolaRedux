require("source-map-support").install();
exports.id = "server";
exports.modules = {

/***/ "./src/reducers/history.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return history; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/constants/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


function history() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    movies: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_HISTORY"]:
      console.log("MASUK SINIII", action.result.data, state);
      return _toConsumableArray(state).concat([movies]);

    default:
      console.log("DEFAULLT");
      return state;
  }
}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9zZXJ2ZXIuNTllOTlkZGExMzI1MWRkNGUyNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL2lyZW5lL0RvY3VtZW50cy9Xb3JrL01vbGFSZWR1eC9zcmMvcmVkdWNlcnMvaGlzdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGRVRDSF9ISVNUT1JZIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGlzdG9yeShzdGF0ZSA9IHsgbW92aWVzOiBbXX0sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGRVRDSF9ISVNUT1JZOlxuICAgIGNvbnNvbGUubG9nKFwiTUFTVUsgU0lOSUlJXCIsIGFjdGlvbi5yZXN1bHQuZGF0YSwgc3RhdGUpXG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbW92aWVzOiBhY3Rpb24ucmVzdWx0LmRhdGFcbiAgICAgIF1cbiAgICBkZWZhdWx0OlxuICAgIGNvbnNvbGUubG9nKFwiREVGQVVMTFRcIilcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==