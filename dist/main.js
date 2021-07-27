/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://proyecto-tareas/./src/styles.css?");

/***/ }),

/***/ "./src/class/index.js":
/*!****************************!*\
  !*** ./src/class/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tarea\": () => (/* reexport safe */ _tarea_class__WEBPACK_IMPORTED_MODULE_0__.Tarea),\n/* harmony export */   \"TareaList\": () => (/* reexport safe */ _tarea_list_class__WEBPACK_IMPORTED_MODULE_1__.TareaList)\n/* harmony export */ });\n/* harmony import */ var _tarea_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tarea.class */ \"./src/class/tarea.class.js\");\n/* harmony import */ var _tarea_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tarea-list.class */ \"./src/class/tarea-list.class.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://proyecto-tareas/./src/class/index.js?");

/***/ }),

/***/ "./src/class/tarea-list.class.js":
/*!***************************************!*\
  !*** ./src/class/tarea-list.class.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TareaList\": () => (/* binding */ TareaList)\n/* harmony export */ });\n\r\n\r\nclass TareaList {\r\n\r\n    constructor(){\r\n        this.tareas = [];\r\n    }\r\n\r\n    nuevaTarea(tarea){\r\n        this.tareas.push(tarea);\r\n        this.cargarLocalStorage();\r\n    }\r\n\r\n    eliminarTarea(id){\r\n\r\n        this.tareas = this.tareas.filter(tarea => tarea.id != id);\r\n        this.cargarLocalStorage();\r\n\r\n    }\r\n\r\n    marcarCompletado(id){\r\n\r\n        for(const tarea of this.tareas){\r\n          \r\n            if(tarea.id == id){\r\n                tarea.completado = !tarea.completado;\r\n                this.cargarLocalStorage();\r\n                break;\r\n            }\r\n        }\r\n    }\r\n\r\n    eliminarCompletados(){\r\n        this.tareas = this.tareas.filter(tarea => !tarea.completado);\r\n        this.cargarLocalStorage();\r\n    }\r\n\r\n    guardarLocalStorage(){\r\n\r\n        localStorage.setItem('tarea', JSON.stringify(this.tareas));\r\n    }\r\n\r\n    cargarLocalStorage(){\r\n    \r\n       this.tareas = (localStorage.getItem('tarea')) \r\n                   ?  this.tareas = localStorage.getItem('tarea') \r\n                   : this.tareas = [];\r\n    }\r\n}\n\n//# sourceURL=webpack://proyecto-tareas/./src/class/tarea-list.class.js?");

/***/ }),

/***/ "./src/class/tarea.class.js":
/*!**********************************!*\
  !*** ./src/class/tarea.class.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tarea\": () => (/* binding */ Tarea)\n/* harmony export */ });\nclass Tarea{\r\n\r\n    constructor(tarea){\r\n        \r\n        this.tarea = tarea;\r\n\r\n        this.id = new Date().getTime();\r\n        this.completado = false;\r\n        this.creado = new Date();\r\n    }\r\n}\n\n//# sourceURL=webpack://proyecto-tareas/./src/class/tarea.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tareasList\": () => (/* binding */ tareasList)\n/* harmony export */ });\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ \"./src/class/index.js\");\n/* harmony import */ var _js_tarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/tarea */ \"./src/js/tarea.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst tareasList = new _class__WEBPACK_IMPORTED_MODULE_0__.TareaList();\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://proyecto-tareas/./src/index.js?");

/***/ }),

/***/ "./src/js/tarea.js":
/*!*************************!*\
  !*** ./src/js/tarea.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearTareaHtml\": () => (/* binding */ crearTareaHtml)\n/* harmony export */ });\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class */ \"./src/class/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\nconst divTareaHtml  = document.querySelector('.todo-list');\r\nconst txtInput      = document.querySelector('.new-todo')\r\nconst btnBorrar     = document.querySelector('.clear-completed')\r\nconst  crearTareaHtml = (tareas) => {\r\n\r\n    const tareaLi = `<li class=\"${ (tareas.completado) ? 'completed' : ''}\" data-id=\"${tareas.id}\">\r\n    <div class=\"view\">\r\n        <input class=\"toggle\" type=\"checkbox\" ${(tareas.completado) ? 'checked' : '' } >\r\n        <label>${tareas.tarea}</label>\r\n        <button class=\"destroy\"></button>\r\n    </div>\r\n\r\n    <input class=\"edit\" value=\"Create a TodoMVC template\">\r\n    </li> `;\r\n\r\n    const tareaDiv = document.createElement('div');\r\n    tareaDiv.classList.toggle('completed');\r\n    tareaDiv.innerHTML = tareaLi;\r\n\r\n    divTareaHtml.append(tareaDiv.firstElementChild);\r\n    return tareaDiv.firstElementChild;\r\n\r\n}\r\n\r\n//Eventos\r\ntxtInput.addEventListener('keyup', (event) => {\r\n\r\n    if(event.keyCode === 13 && txtInput.value.length > 0){\r\n\r\n        const nueva = new _class__WEBPACK_IMPORTED_MODULE_0__.Tarea(txtInput.value);\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.tareasList.nuevaTarea(nueva);\r\n        \r\n        crearTareaHtml(nueva);\r\n        txtInput.value = '';  \r\n    }\r\n})\r\n\r\ndivTareaHtml.addEventListener('click', (event) => {\r\n\r\n\r\n      const nombreElemento = event.target.localName;\r\n      const tareaElemento  = event.target.parentElement.parentElement;\r\n      const tareaId        = tareaElemento.getAttribute('data-id');\r\n   \r\n      if(nombreElemento.includes('input')){\r\n\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.tareasList.marcarCompletado(tareaId);\r\n        tareaElemento.classList.toggle('completed');\r\n\r\n      }else if(nombreElemento.includes('button')){\r\n\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.tareasList.eliminarTarea(tareaId);\r\n        divTareaHtml.removeChild(tareaElemento)\r\n      }\r\n\r\n      console.log(_index__WEBPACK_IMPORTED_MODULE_1__.tareasList);\r\n    \r\n});\r\n\r\nbtnBorrar.addEventListener('click', () => {\r\n\r\n    _index__WEBPACK_IMPORTED_MODULE_1__.tareasList.eliminarCompletados();\r\n\r\n    for(let i = divTareaHtml.children.length-1; i >= 0; i--){\r\n\r\n      const elemento = divTareaHtml.children[i];\r\n\r\n      if(elemento.classList.contains('completed')){\r\n\r\n          divTareaHtml.removeChild(elemento);\r\n      }\r\n\r\n    }\r\n})\n\n//# sourceURL=webpack://proyecto-tareas/./src/js/tarea.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;