"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Login_module_css_1 = require("../styles/Login.module.css");
var SignUp = function () {
    return (react_1["default"].createElement("div", { className: 'flex items-center justify-center h-[88vh] bg-gradient-to-r from-green-400 to-blue-500 px-4 py-3' },
        react_1["default"].createElement("form", { className: Login_module_css_1["default"].form },
            react_1["default"].createElement("p", { className: Login_module_css_1["default"].form_title }, "Sign Up"),
            react_1["default"].createElement("div", { className: Login_module_css_1["default"].input_container },
                react_1["default"].createElement("input", { placeholder: "Enter Name", type: "text" }),
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("svg", { stroke: "currentColor", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1["default"].createElement("path", { d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207", "stroke-width": "2", "stroke-linejoin": "round", "stroke-linecap": "round" })))),
            react_1["default"].createElement("div", { className: Login_module_css_1["default"].input_container },
                react_1["default"].createElement("input", { placeholder: "Enter email", type: "email" }),
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("svg", { stroke: "currentColor", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1["default"].createElement("path", { d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207", "stroke-width": "2", "stroke-linejoin": "round", "stroke-linecap": "round" })))),
            react_1["default"].createElement("div", { className: Login_module_css_1["default"].input_container },
                react_1["default"].createElement("input", { placeholder: "Enter password", type: "password" }),
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("svg", { stroke: "currentColor", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1["default"].createElement("path", { d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z", "stroke-width": "2", "stroke-linejoin": "round", "stroke-linecap": "round" }),
                        react_1["default"].createElement("path", { d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", "stroke-width": "2", "stroke-linejoin": "round", "stroke-linecap": "round" })))),
            react_1["default"].createElement("button", { className: Login_module_css_1["default"].submit, type: "submit" }, "Sign Up"),
            react_1["default"].createElement("p", { className: Login_module_css_1["default"].signup_link },
                "If you have an account",
                react_1["default"].createElement("a", { href: "" }, " Sign up")))));
};
exports["default"] = SignUp;
