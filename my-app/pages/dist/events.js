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
/* eslint-disable react-hooks/rules-of-hooks */
var react_phone_input_2_1 = require("react-phone-input-2");
require("react-phone-input-2/lib/style.css");
var react_1 = require("react");
var event_module_css_1 = require("../styles/event.module.css");
var Home_module_css_1 = require("../styles/Home.module.css");
var react_2 = require("react");
var router_1 = require("next/router");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var events = function (props) {
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        if (!props.token.value) {
            router.push('http://localhost:3000');
        }
    }, [props.token.value, router, router.query]);
    var _a = react_2.useState(""), name = _a[0], setname = _a[1];
    var _b = react_2.useState(''), email = _b[0], setemail = _b[1];
    var _c = react_2.useState(''), phone = _c[0], setphone = _c[1];
    var _d = react_2.useState(''), eventType = _d[0], setevenType = _d[1];
    var _e = react_2.useState(''), eventdesc = _e[0], seteventDesc = _e[1];
    var _f = react_2.useState(''), eventDate = _f[0], setdate = _f[1];
    var _g = react_2.useState(''), startTime = _g[0], setStime = _g[1];
    var _h = react_2.useState(''), endTime = _h[0], setEtime = _h[1];
    var _j = react_2.useState(''), totalGuest = _j[0], setTGuest = _j[1];
    var setValue = function (e) {
        e.preventDefault();
        if (e.target.name == "name") {
            setname(e.target.value);
            console.log(name);
        }
        else if (e.target.name == "email") {
            setemail(e.target.value);
        }
        else if (e.target.name == "phone") {
            setphone(e.target.value);
        }
        else if (e.target.name == "EventType") {
            setevenType(e.target.value);
        }
        else if (e.target.name == "Desc") {
            seteventDesc(e.target.value);
        }
        else if (e.target.name == "date") {
            setdate(e.target.value);
        }
        else if (e.target.name == "STime") {
            setStime(e.target.value);
        }
        else if (e.target.name == "ETime") {
            setEtime(e.target.value);
            console.log(endTime);
        }
        else if (e.target.name == "TGuest") {
            setTGuest(e.target.value);
        }
    };
    var submitInfo = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, res, responce;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    data = { name: name, email: email, phone: phone, eventType: eventType, eventdesc: eventdesc, eventDate: eventDate, startTime: startTime, endTime: endTime, totalGuest: totalGuest };
                    return [4 /*yield*/, fetch('http://localhost:3000/api/Event/addEvent', {
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
                        react_toastify_1.toast.success('Event Created Successfully 😍', {
                            position: "top-left",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark"
                        });
                        setTimeout(function () {
                            router.push('http://localhost:3000/myEvents');
                        }, 2000);
                        setname('');
                        setemail('');
                        setevenType('');
                        seteventDesc('');
                        setphone('');
                        setStime('');
                        setEtime('');
                        setdate('');
                        setTGuest('');
                    }
                    else {
                        react_toastify_1.toast.error('Date not available 😔', {
                            position: "top-left",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark"
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "px-16 container bg-fixed bg-cover bg-center bg-[url('../public/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg')] h-64 md:h-96" },
        react_1["default"].createElement(react_toastify_1.ToastContainer, { position: "top-left", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: "dark" }),
        react_1["default"].createElement("h1", { className: 'text-2xl md:text-5xl pt-40 ml-10 font-bold md:font-bold mb-7 md:mb-10 text-white' }, "Event"),
        react_1["default"].createElement("h1", { className: 'mt-44 md:mt-64 text-center text-2xl md:text-4xl font-bold' }, "Create Event"),
        react_1["default"].createElement("div", { className: 'mt-2 h-1 md:mb-20 mb-10 rounded-sm w-32 mx-auto bg-green-600' }),
        react_1["default"].createElement("form", { action: "", onSubmit: submitInfo },
            react_1["default"].createElement("div", { className: 'mt-20 flex justify-center items-center flex-wrap' },
                react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                    react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Name"),
                    react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", onChange: setValue, value: name, name: "name", type: "text", required: true, minLength: 5, maxLength: 50 })),
                react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                    react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Email"),
                    react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", onChange: setValue, value: email, name: "email", type: "email", required: true })),
                react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                    react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Phone"),
                    react_1["default"].createElement(react_phone_input_2_1["default"], { className: event_module_css_1["default"].input + " mr-16 mb-14", country: 'pk', value: phone, onChange: function (phone) { return setphone(phone); } })),
                react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                    react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Event Type"),
                    react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", onChange: setValue, value: eventType, name: "EventType", type: "text", required: true })),
                react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                    react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Event Description"),
                    react_1["default"].createElement("textarea", { className: event_module_css_1["default"].input + " mr-10 mb-14", onChange: setValue, value: eventdesc, name: "Desc", cols: 50, rows: 6, required: true })),
                react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                    react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Event Date"),
                    react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", onChange: setValue, value: eventDate, name: "date", type: "date", required: true })),
                react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                    react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Start Time"),
                    react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", onChange: setValue, value: startTime, name: "STime", type: "time", required: true })),
                react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                    react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "End Time"),
                    react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", onChange: setValue, value: endTime, name: "ETime", type: "time", required: true })),
                react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                    react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Total Guest"),
                    react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", onChange: setValue, value: totalGuest, name: "TGuest", type: "number", required: true })),
                react_1["default"].createElement("button", { type: 'submit', className: Home_module_css_1["default"].btn + " mb-10" }, " Book Event ")))));
};
exports["default"] = events;
