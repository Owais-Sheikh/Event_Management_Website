"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Login_module_css_1 = require("../styles/Login.module.css");
var link_1 = require("next/link");
var react_2 = require("react");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var router_1 = require("next/router");
var Login = function () {
    var router = router_1.useRouter();
    var _a = react_2.useState(false), showPass = _a[0], setshowPass = _a[1];
    var _b = react_2.useState(''), email = _b[0], setemail = _b[1];
    var _c = react_2.useState(''), password = _c[0], setpassword = _c[1];
    var showPassword = function () {
        setshowPass(!showPass);
    };
    var SetemailValue = function (e) {
        e.preventDefault();
        setemail(e.target.value);
        console.log(email);
    };
    var SetpasswordValue = function (e) {
        e.preventDefault();
        setpassword(e.target.value);
        console.log(password);
    };
    var submitInfo = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, res, responce;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    data = { email: email, password: password };
                    return [4 /*yield*/, fetch('http://localhost:3000/api/login', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(data)
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    responce = _a.sent();
                    console.log(responce);
                    if (responce.success) {
                        react_toastify_1.toast.success('Login Successfully 😍', {
                            position: "top-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark"
                        });
                        setTimeout(function () {
                            router.push('http://localhost:3000');
                            localStorage.setItem("token", responce.token);
                        }, 1000);
                    }
                    else {
                        react_toastify_1.toast.error('Invalid input 😔', {
                            position: "top-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark"
                        });
                    }
                    setemail('');
                    setpassword('');
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: 'flex items-center justify-center h-[100vh] bg-gradient-to-r from-green-400 to-blue-500 px-4 py-3' },
        react_1["default"].createElement(react_toastify_1.ToastContainer, { position: "top-left", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: "dark" }),
        react_1["default"].createElement("form", { className: Login_module_css_1["default"].form, onSubmit: submitInfo },
            react_1["default"].createElement("p", { className: Login_module_css_1["default"].form_title }, "Sign in to your account"),
            react_1["default"].createElement("div", { className: Login_module_css_1["default"].input_container },
                react_1["default"].createElement("input", { placeholder: "Enter email", type: "email", value: email, onChange: SetemailValue }),
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("svg", { stroke: "currentColor", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1["default"].createElement("path", { d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207", "stroke-width": "2", "stroke-linejoin": "round", "stroke-linecap": "round" })))),
            react_1["default"].createElement("div", { className: Login_module_css_1["default"].input_container },
                react_1["default"].createElement("input", { placeholder: "Enter password", onChange: SetpasswordValue, value: password, type: "" + (showPass ? "text" : "password") }),
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("svg", { onClick: showPassword, stroke: "currentColor", viewBox: "0 0 24 24", fill: "none", className: 'cursor-pointer' },
                        react_1["default"].createElement("path", { d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z", "stroke-width": "2", "stroke-linejoin": "round", "stroke-linecap": "round" }),
                        react_1["default"].createElement("path", { d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", "stroke-width": "2", "stroke-linejoin": "round", "stroke-linecap": "round" })))),
            react_1["default"].createElement("button", { className: Login_module_css_1["default"].submit, type: "submit" }, "Sign in"),
            react_1["default"].createElement("p", { className: Login_module_css_1["default"].signup_link },
                "No account?",
                react_1["default"].createElement(link_1["default"], { href: '/SignUp' }, "Sign up")))));
};
exports["default"] = Login;
