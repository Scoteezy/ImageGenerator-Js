/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/load.js":
/*!********************************!*\
  !*** ./src/js/modules/load.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function load(inputData,gridData,searchData,accesKey){
    const input = document.querySelector(inputData);
    const grid = document.querySelector(gridData);
    const searchBtn = document.querySelector(searchData);
    input.addEventListener('keydown',(e)=>{
        if(e.key==="Enter"){
            loadImg();
        }
    });
    searchBtn.addEventListener('click',loadImg);
    function loadImg(){
        removeImages();
        const url = 'https://api.unsplash.com/search/photos/?query='+input.value+
        '&per_page=9&client_id='+accesKey;
        fetch(url)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{
                alert(response.status);
            }
        }).then(data=>{ 
            const imageNodes =[];
            for(let i =0;i<data.results.length;i++){

            }
            data.results.forEach((e,i) => {
                imageNodes[i] = document.createElement('div');
                imageNodes[i].className = 'img';
                imageNodes[i].style.backgroundImage="url(" + data.results[i].urls.raw+")";
                imageNodes[i].addEventListener('dblclick',()=>{
                    window.open(data.results[i].links.download,'_blank');
                });
                grid.appendChild(imageNodes[i]);
            });
        });
        
    }
    function removeImages(){
        grid.innerHTML='';
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load */ "./src/js/modules/load.js");


window.addEventListener('DOMContentLoaded',()=>{
    (0,_modules_load__WEBPACK_IMPORTED_MODULE_0__["default"])('#input','.grid',"#search",'8d-xBcwWl0Pkze8PAKvsEkk1Qg_iQcFsZOPCllxkS9Q');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map