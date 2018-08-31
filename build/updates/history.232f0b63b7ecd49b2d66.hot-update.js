require("source-map-support").install();
exports.id = "history";
exports.modules = {

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
var fetchHistory = function fetchHistory(movieHistory) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_HISTORY"],
    result: movieHistory
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

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9oaXN0b3J5LjIzMmYwYjYzYjdlY2Q0OWIyZDY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL2FjdGlvbnMvaGlzdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGRVRDSF9ISVNUT1JZIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGFwaVVybCA9ICdodHRwOi8vbW9sYS5sdWtpdG9tby5jb20vdjIvdmlkZW9zL3R0MTE3OTA1Nic7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEhpc3RvcnkgPSAobW92aWVIaXN0b3J5KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfSElTVE9SWSxcbiAgICByZXN1bHQ6IG1vdmllSGlzdG9yeVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBbGxIaXN0b3J5ID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChhcGlVcmwpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoSGlzdG9yeShyZXNwb25zZS5kYXRhKSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9