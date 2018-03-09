define(["require", "exports", "./template", "./dom"], function (require, exports, template_1, dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HAS_ROW = /^[\n\r.]+\<tr|^\<tr/;
    function compile(templateString, helper) {
        var compiler = engineObj.compile(templateString, helper);
        return function (data, component, propName) {
            var result = compiler(data, component, propName);
            if (typeof result === 'string') {
                var ele = dom_1.createElement((HAS_ROW.test(result) ? 'table' : 'div'), { innerHTML: result });
                return ele.childNodes;
            }
            else {
                return result;
            }
        };
    }
    exports.compile = compile;
    function setTemplateEngine(classObj) {
        engineObj.compile = classObj.compile;
    }
    exports.setTemplateEngine = setTemplateEngine;
    function getTemplateEngine() {
        return engineObj.compile;
    }
    exports.getTemplateEngine = getTemplateEngine;
    var Engine = (function () {
        function Engine() {
        }
        Engine.prototype.compile = function (templateString, helper) {
            if (helper === void 0) { helper = {}; }
            return template_1.compile(templateString, helper);
        };
        return Engine;
    }());
    var engineObj = { compile: new Engine().compile };
});
