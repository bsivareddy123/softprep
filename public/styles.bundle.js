webpackJsonp(["styles"],{

/***/ "../../../../../src/section1.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/section1.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/lib/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--8-3!./section1.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/lib/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--8-3!./section1.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.item {\r\n  width: 100px;\r\n  height: 100px;\r\n  position: absolute;\r\n}\r\n\r\n.item-1 {\r\n  background-color: #FA5667;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  -webkit-animation: item-1_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;\r\n          animation: item-1_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;\r\n}\r\n\r\n.item-2 {\r\n  background-color: #7A45E5;\r\n  top: 0;\r\n  right: 0;\r\n  -webkit-animation: item-2_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;\r\n          animation: item-2_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;\r\n}\r\n\r\n.item-3 {\r\n  background-color: #1B91F7;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  -webkit-animation: item-3_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;\r\n          animation: item-3_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;\r\n}\r\n\r\n.item-4 {\r\n  background-color: #FAC24C;\r\n  bottom: 0;\r\n  left: 0;\r\n  -webkit-animation: item-4_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;\r\n          animation: item-4_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;\r\n}\r\n\r\n@-webkit-keyframes item-1_move {\r\n  0%, 100% {-webkit-transform: translate(0, 0);transform: translate(0, 0)} \r\n  25% {-webkit-transform: translate(0, 100px);transform: translate(0, 100px)} \r\n  50% {-webkit-transform: translate(100px, 100px);transform: translate(100px, 100px)} \r\n  75% {-webkit-transform: translate(100px, 0);transform: translate(100px, 0)} \r\n}\r\n\r\n@keyframes item-1_move {\r\n  0%, 100% {-webkit-transform: translate(0, 0);transform: translate(0, 0)} \r\n  25% {-webkit-transform: translate(0, 100px);transform: translate(0, 100px)} \r\n  50% {-webkit-transform: translate(100px, 100px);transform: translate(100px, 100px)} \r\n  75% {-webkit-transform: translate(100px, 0);transform: translate(100px, 0)} \r\n}\r\n\r\n@-webkit-keyframes item-2_move {\r\n  0%, 100% {-webkit-transform: translate(0, 0);transform: translate(0, 0)} \r\n  25% {-webkit-transform: translate(-100px, 0);transform: translate(-100px, 0)} \r\n  50% {-webkit-transform: translate(-100px, 100px);transform: translate(-100px, 100px)} \r\n  75% {-webkit-transform: translate(0, 100px);transform: translate(0, 100px)} \r\n}\r\n\r\n@keyframes item-2_move {\r\n  0%, 100% {-webkit-transform: translate(0, 0);transform: translate(0, 0)} \r\n  25% {-webkit-transform: translate(-100px, 0);transform: translate(-100px, 0)} \r\n  50% {-webkit-transform: translate(-100px, 100px);transform: translate(-100px, 100px)} \r\n  75% {-webkit-transform: translate(0, 100px);transform: translate(0, 100px)} \r\n}\r\n\r\n@-webkit-keyframes item-3_move {\r\n  0%, 100% {-webkit-transform: translate(0, 0);transform: translate(0, 0)} \r\n  25% {-webkit-transform: translate(0, -100px);transform: translate(0, -100px)} \r\n  50% {-webkit-transform: translate(-100px, -100px);transform: translate(-100px, -100px)} \r\n  75% {-webkit-transform: translate(-100px, 0);transform: translate(-100px, 0)} \r\n}\r\n\r\n@keyframes item-3_move {\r\n  0%, 100% {-webkit-transform: translate(0, 0);transform: translate(0, 0)} \r\n  25% {-webkit-transform: translate(0, -100px);transform: translate(0, -100px)} \r\n  50% {-webkit-transform: translate(-100px, -100px);transform: translate(-100px, -100px)} \r\n  75% {-webkit-transform: translate(-100px, 0);transform: translate(-100px, 0)} \r\n}\r\n\r\n@-webkit-keyframes item-4_move {\r\n  0%, 100% {-webkit-transform: translate(0, 0);transform: translate(0, 0)} \r\n  25% {-webkit-transform: translate(100px, 0);transform: translate(100px, 0)} \r\n  50% {-webkit-transform: translate(100px, -100px);transform: translate(100px, -100px)} \r\n  75% {-webkit-transform: translate(0, -100px);transform: translate(0, -100px)} \r\n}\r\n\r\n@keyframes item-4_move {\r\n  0%, 100% {-webkit-transform: translate(0, 0);transform: translate(0, 0)} \r\n  25% {-webkit-transform: translate(100px, 0);transform: translate(100px, 0)} \r\n  50% {-webkit-transform: translate(100px, -100px);transform: translate(100px, -100px)} \r\n  75% {-webkit-transform: translate(0, -100px);transform: translate(0, -100px)} \r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/section1.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@import url(\"//fonts.googleapis.com/css?family=Pacifico&text=Pure\");\n@import url(\"//fonts.googleapis.com/css?family=Roboto:700&text=css\");\n@import url(\"//fonts.googleapis.com/css?family=Kaushan+Script&text=!\");\n@charset \"UTF-8\";\n.stage {\n  height: 300px;\n  width: 500px;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-perspective: 9999px;\n          perspective: 9999px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n.layer {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-animation: ಠ_ಠ 5s infinite alternate ease-in-out -7.5s;\n          animation: ಠ_ಠ 5s infinite alternate ease-in-out -7.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-transform: rotateY(40deg) rotateX(33deg) translateZ(0);\n          transform: rotateY(40deg) rotateX(33deg) translateZ(0); }\n.layer:after {\n  font: 150px/0.65 'Pacifico', 'Kaushan Script', Futura, 'Roboto', 'Trebuchet MS', Helvetica, sans-serif;\n  content: 'Texas\\A      Review!';\n  white-space: pre;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 150px;\n  color: whitesmoke;\n  letter-spacing: -2px;\n  text-shadow: 4px 0 10px rgba(0, 0, 0, 0.13); }\n.layer:nth-child(1):after {\n  -webkit-transform: translateZ(0px);\n          transform: translateZ(0px); }\n.layer:nth-child(2):after {\n  -webkit-transform: translateZ(-1.5px);\n          transform: translateZ(-1.5px); }\n.layer:nth-child(3):after {\n  -webkit-transform: translateZ(-3px);\n          transform: translateZ(-3px); }\n.layer:nth-child(4):after {\n  -webkit-transform: translateZ(-4.5px);\n          transform: translateZ(-4.5px); }\n.layer:nth-child(5):after {\n  -webkit-transform: translateZ(-6px);\n          transform: translateZ(-6px); }\n.layer:nth-child(6):after {\n  -webkit-transform: translateZ(-7.5px);\n          transform: translateZ(-7.5px); }\n.layer:nth-child(7):after {\n  -webkit-transform: translateZ(-9px);\n          transform: translateZ(-9px); }\n.layer:nth-child(8):after {\n  -webkit-transform: translateZ(-10.5px);\n          transform: translateZ(-10.5px); }\n.layer:nth-child(9):after {\n  -webkit-transform: translateZ(-12px);\n          transform: translateZ(-12px); }\n.layer:nth-child(10):after {\n  -webkit-transform: translateZ(-13.5px);\n          transform: translateZ(-13.5px); }\n.layer:nth-child(11):after {\n  -webkit-transform: translateZ(-15px);\n          transform: translateZ(-15px); }\n.layer:nth-child(12):after {\n  -webkit-transform: translateZ(-16.5px);\n          transform: translateZ(-16.5px); }\n.layer:nth-child(13):after {\n  -webkit-transform: translateZ(-18px);\n          transform: translateZ(-18px); }\n.layer:nth-child(14):after {\n  -webkit-transform: translateZ(-19.5px);\n          transform: translateZ(-19.5px); }\n.layer:nth-child(15):after {\n  -webkit-transform: translateZ(-21px);\n          transform: translateZ(-21px); }\n.layer:nth-child(16):after {\n  -webkit-transform: translateZ(-22.5px);\n          transform: translateZ(-22.5px); }\n.layer:nth-child(17):after {\n  -webkit-transform: translateZ(-24px);\n          transform: translateZ(-24px); }\n.layer:nth-child(18):after {\n  -webkit-transform: translateZ(-25.5px);\n          transform: translateZ(-25.5px); }\n.layer:nth-child(19):after {\n  -webkit-transform: translateZ(-27px);\n          transform: translateZ(-27px); }\n.layer:nth-child(20):after {\n  -webkit-transform: translateZ(-28.5px);\n          transform: translateZ(-28.5px); }\n.layer:nth-child(n+10):after {\n  -webkit-text-stroke: 3px rgba(0, 0, 0, 0.25); }\n.layer:nth-child(n+11):after {\n  -webkit-text-stroke: 15px dodgerblue;\n  text-shadow: 6px 0 6px #00366b, 5px 5px 5px #002951, 0 6px 6px #00366b; }\n.layer:nth-child(n+12):after {\n  -webkit-text-stroke: 15px #0077ea; }\n.layer:last-child:after {\n  -webkit-text-stroke: 17px rgba(0, 0, 0, 0.1); }\n.layer:first-child:after {\n  color: white;\n  text-shadow: none; }\n@-webkit-keyframes ಠ_ಠ {\n  100% {\n    -webkit-transform: rotateY(-40deg) rotateX(-43deg);\n            transform: rotateY(-40deg) rotateX(-43deg); } }\n@keyframes ಠ_ಠ {\n  100% {\n    -webkit-transform: rotateY(-40deg) rotateX(-43deg);\n            transform: rotateY(-40deg) rotateX(-43deg); } }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../../src/styles.css");
module.exports = __webpack_require__("../../../../../src/section1.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map