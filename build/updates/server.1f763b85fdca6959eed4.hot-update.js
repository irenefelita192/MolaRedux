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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9zZXJ2ZXIuMWY3NjNiODVmZGNhNjk1OWVlZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL2lyZW5lL0RvY3VtZW50cy9Xb3JrL01vbGFSZWR1eC9zcmMvcmVkdWNlcnMvaGlzdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGRVRDSF9ISVNUT1JZIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGlzdG9yeShzdGF0ZSA9IHsgbW92aWVzOiBbXX0sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGRVRDSF9ISVNUT1JZOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1vdmllcyA6IGFjdGlvbi5yZXN1bHQuZGF0YVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgY29uc29sZS5sb2coXCJERUZBVUxMVFwiKVxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==