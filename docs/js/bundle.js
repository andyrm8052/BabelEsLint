/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ConsoleLogIt.js":
/*!********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLogIt)
/* harmony export */ });
function ConsoleLogIt(message) {
  console.log(message);
}

/***/ }),

/***/ "./src/js/TestJs.js":
/*!**************************!*\
  !*** ./src/js/TestJs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestJS)
/* harmony export */ });
function TestJS() {
  console.log("Loaded");
}

/***/ }),

/***/ "./src/js/generateTable.js":
/*!*********************************!*\
  !*** ./src/js/generateTable.js ***!
  \*********************************/
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var generateTableFunction = /*#__PURE__*/function () {
  function generateTableFunction() {
    _classCallCheck(this, generateTableFunction);
  }

  _createClass(generateTableFunction, [{
    key: "generateTableHead",
    value: function generateTableHead(table, data) {
      var thead = table.createTHead();
      var row = thead.insertRow();

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          var th = document.createElement("th");
          var text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "generateTable",
    value: function generateTable(table, data) {
      var _iterator2 = _createForOfIteratorHelper(data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          var row = table.insertRow();
          console.log(element);

          for (var key in element) {
            var cell = row.insertCell();
            var text = document.createTextNode(element[key]);
            cell.appendChild(text);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return generateTableFunction;
}();

module.exports = generateTableFunction;

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
}
;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestJs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs.js */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt.js */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");




var Table = __webpack_require__(/*! ./generateTable */ "./src/js/generateTable.js");

(0,_TestJs_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)("", function (data) {
  console.log(data);
});
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    var table = document.querySelector("table");
    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    var create = new Table();
    create.generateTableHead(table, data);
    create.generateTable(table, dataRecords);
    /*
    let data = Object.keys(records.data[0]);
    generateTable(table, records.data); // generate the table first
    generateTableHead(table, data); // then the head
     */
  }
});
(0,_ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__.default)("this workedss  in the bundle");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0NvbnNvbGVMb2dJdC5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL1Rlc3RKcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2dlbmVyYXRlVGFibGUuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy8uL3NyYy9qcy9nZXRKU09OLmpzIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnNvbGVMb2dJdCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiVGVzdEpTIiwiZ2VuZXJhdGVUYWJsZUZ1bmN0aW9uIiwidGFibGUiLCJkYXRhIiwidGhlYWQiLCJjcmVhdGVUSGVhZCIsInJvdyIsImluc2VydFJvdyIsImtleSIsInRoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY2VsbCIsImluc2VydENlbGwiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0SlNPTiIsInVybCIsImNhbGxiYWNrIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZW5kIiwiVGFibGUiLCJyZXF1aXJlIiwiZXJyIiwicmVjb3JkcyIsImFsZXJ0IiwicXVlcnlTZWxlY3RvciIsIk9iamVjdCIsImtleXMiLCJkYXRhUmVjb3JkcyIsImNyZWF0ZSIsImdlbmVyYXRlVGFibGVIZWFkIiwiZ2VuZXJhdGVUYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxZQUFULENBQXNCQyxPQUF0QixFQUErQjtBQUMxQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGYyxTQUFTRyxNQUFULEdBQWtCO0FBQzdCRixTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0ZLRSxxQjs7Ozs7OztXQUVGLDJCQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQzNCLFVBQUlDLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxXQUFOLEVBQVo7QUFDQSxVQUFJQyxHQUFHLEdBQUdGLEtBQUssQ0FBQ0csU0FBTixFQUFWOztBQUYyQixpREFHWEosSUFIVztBQUFBOztBQUFBO0FBRzNCLDREQUFzQjtBQUFBLGNBQWJLLEdBQWE7QUFDbEIsY0FBSUMsRUFBRSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDtBQUNBLGNBQUlDLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCTCxHQUF4QixDQUFYO0FBQ0FDLFlBQUUsQ0FBQ0ssV0FBSCxDQUFlRixJQUFmO0FBQ0FOLGFBQUcsQ0FBQ1EsV0FBSixDQUFnQkwsRUFBaEI7QUFDSDtBQVIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUzlCOzs7V0FFRCx1QkFBY1AsS0FBZCxFQUFxQkMsSUFBckIsRUFBMkI7QUFBQSxrREFDSEEsSUFERztBQUFBOztBQUFBO0FBQ3ZCLCtEQUEwQjtBQUFBLGNBQWpCWSxPQUFpQjtBQUN0QixjQUFJVCxHQUFHLEdBQUdKLEtBQUssQ0FBQ0ssU0FBTixFQUFWO0FBQ0FULGlCQUFPLENBQUNDLEdBQVIsQ0FBWWdCLE9BQVo7O0FBQ0EsZUFBSyxJQUFJUCxHQUFULElBQWdCTyxPQUFoQixFQUF5QjtBQUNyQixnQkFBSUMsSUFBSSxHQUFHVixHQUFHLENBQUNXLFVBQUosRUFBWDtBQUNBLGdCQUFJTCxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QkUsT0FBTyxDQUFDUCxHQUFELENBQS9CLENBQVg7QUFDQVEsZ0JBQUksQ0FBQ0YsV0FBTCxDQUFpQkYsSUFBakI7QUFDSDtBQUNKO0FBVHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVMUI7Ozs7OztBQUdMTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJsQixxQkFBakIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJlLFNBQVNtQixPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFDM0MsTUFBSUMsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjtBQUNBRCxLQUFHLENBQUNFLElBQUosQ0FBUyxLQUFULEVBQWdCSixHQUFoQixFQUFxQixJQUFyQjtBQUNBRSxLQUFHLENBQUNHLFlBQUosR0FBbUIsTUFBbkI7O0FBQ0FILEtBQUcsQ0FBQ0ksTUFBSixHQUFhLFlBQVc7QUFDcEIsUUFBSUMsTUFBTSxHQUFHTCxHQUFHLENBQUNLLE1BQWpCOztBQUNBLFFBQUlBLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2hCTixjQUFRLENBQUMsSUFBRCxFQUFPQyxHQUFHLENBQUNNLFFBQVgsQ0FBUjtBQUNILEtBRkQsTUFFTztBQUNIUCxjQUFRLENBQUNNLE1BQUQsRUFBU0wsR0FBRyxDQUFDTSxRQUFiLENBQVI7QUFDSDtBQUNKLEdBUEQ7O0FBUUFOLEtBQUcsQ0FBQ08sSUFBSjtBQUNIO0FBQUEsQzs7Ozs7O1VDYkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLGtEQUFELENBQXJCOztBQUVBaEMsbURBQU07QUFDTm9CLGlEQUFPLENBQUMsRUFBRCxFQUFLLFVBQVVqQixJQUFWLEVBQWdCO0FBQ3hCTCxTQUFPLENBQUNDLEdBQVIsQ0FBWUksSUFBWjtBQUNILENBRk0sQ0FBUDtBQUlBaUIsaURBQU8sQ0FBQyxxQ0FBRCxFQUNILFVBQVNhLEdBQVQsRUFBY0MsT0FBZCxFQUF1QjtBQUNuQixNQUFJRCxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNkRSxTQUFLLENBQUMsMkJBQTJCRixHQUE1QixDQUFMO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsUUFBSS9CLEtBQUssR0FBR1EsUUFBUSxDQUFDMEIsYUFBVCxDQUF1QixPQUF2QixDQUFaO0FBQ0EsUUFBSWpDLElBQUksR0FBR2tDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFhSixPQUFPLENBQUMvQixJQUFSLENBQWEsQ0FBYixDQUFiLENBQVg7QUFDQSxRQUFJb0MsV0FBVyxHQUFHTCxPQUFPLENBQUMvQixJQUExQjtBQUNBLFFBQUlxQyxNQUFNLEdBQUcsSUFBSVQsS0FBSixFQUFiO0FBQ0FTLFVBQU0sQ0FBQ0MsaUJBQVAsQ0FBeUJ2QyxLQUF6QixFQUFnQ0MsSUFBaEM7QUFDQXFDLFVBQU0sQ0FBQ0UsYUFBUCxDQUFxQnhDLEtBQXJCLEVBQTRCcUMsV0FBNUI7QUFDQTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ1M7QUFFSixDQWxCRSxDQUFQO0FBbUJBM0MseURBQVksQ0FBQyw4QkFBRCxDQUFaLEMiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uc29sZUxvZ0l0KG1lc3NhZ2UpIHtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdEpTKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJMb2FkZWRcIik7XHJcbn0iLCJjbGFzcyBnZW5lcmF0ZVRhYmxlRnVuY3Rpb24ge1xyXG5cclxuICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKSB7XHJcbiAgICAgICAgbGV0IHRoZWFkID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcclxuICAgICAgICBsZXQgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XHJcbiAgICAgICAgICAgIHRoLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnRba2V5XSk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlVGFibGVGdW5jdGlvbjsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgc3RhdHVzID0geGhyLnN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhzdGF0dXMsIHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhoci5zZW5kKCk7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGVzdEpTIGZyb20gXCIuL1Rlc3RKcy5qc1wiO1xyXG5pbXBvcnQgQ29uc29sZUxvZ0l0IGZyb20gXCIuL0NvbnNvbGVMb2dJdC5qc1wiO1xyXG5pbXBvcnQgZ2V0SlNPTiBmcm9tIFwiLi9nZXRKU09OXCI7XHJcbmNvbnN0IFRhYmxlID0gcmVxdWlyZSgnLi9nZW5lcmF0ZVRhYmxlJyk7XHJcblxyXG5UZXN0SlMoKTtcclxuZ2V0SlNPTihcIlwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbn0pO1xyXG5cclxuZ2V0SlNPTignaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9jaXRpZXMnLFxyXG4gICAgZnVuY3Rpb24oZXJyLCByZWNvcmRzKSB7XHJcbiAgICAgICAgaWYgKGVyciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3Jvbmc6ICcgKyBlcnIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZVwiKTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBPYmplY3Qua2V5cygocmVjb3Jkcy5kYXRhWzBdKSk7XHJcbiAgICAgICAgICAgIGxldCBkYXRhUmVjb3JkcyA9IHJlY29yZHMuZGF0YTtcclxuICAgICAgICAgICAgbGV0IGNyZWF0ZSA9IG5ldyBUYWJsZSgpO1xyXG4gICAgICAgICAgICBjcmVhdGUuZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xyXG4gICAgICAgICAgICBjcmVhdGUuZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YVJlY29yZHMpO1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5rZXlzKHJlY29yZHMuZGF0YVswXSk7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlVGFibGUodGFibGUsIHJlY29yZHMuZGF0YSk7IC8vIGdlbmVyYXRlIHRoZSB0YWJsZSBmaXJzdFxyXG4gICAgICAgICAgICBnZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSk7IC8vIHRoZW4gdGhlIGhlYWRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5Db25zb2xlTG9nSXQoXCJ0aGlzIHdvcmtlZHNzICBpbiB0aGUgYnVuZGxlXCIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9