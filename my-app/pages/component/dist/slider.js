"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var slider_pro_js_1 = require("slider-pro-js");
require("slider-pro-js/css");
var slider = function () {
    document.addEventListener('DOMContentLoaded', function () {
        var mySlider = new slider_pro_js_1["default"]('#my-slider', __assign({ width: '100vw', height: '100vh', autoplay: true }, ));
    });
    document.addEventListener('DOMContentLoaded', function () {
        var mySlider = new slider_pro_js_1["default"]('#my-slider', __assign({ addOns: [slider_pro_js_1.Autoplay, slider_pro_js_1.Buttons, slider_pro_js_1.Thumbnails], width: '100vw' }, ));
    });
    return (react_1["default"].createElement("div", { className: "slider-pro", id: "my-slider" },
        react_1["default"].createElement("div", { className: "sp-slides" },
            react_1["default"].createElement("div", { className: "sp-slide" },
                react_1["default"].createElement("img", { className: "sp-image", src: "path/to/image1.jpg" })),
            react_1["default"].createElement("div", { className: "sp-slide" },
                react_1["default"].createElement("p", null, "Lorem ipsum dolor sit amet")),
            react_1["default"].createElement("div", { className: "sp-slide" },
                react_1["default"].createElement("h3", { className: "sp-layer" }, "Lorem ipsum dolor sit amet"),
                react_1["default"].createElement("p", { className: "sp-layer" }, "consectetur adipisicing elit")))));
};
exports["default"] = slider;
