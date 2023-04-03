"use strict";
exports.__esModule = true;
var react_1 = require("react");
var event_module_css_1 = require("../styles/event.module.css");
var Home_module_css_1 = require("../styles/Home.module.css");
var react_2 = require("react");
var router_1 = require("next/router");
var events = function () {
    var router = router_1.useRouter();
    react_2.useEffect(function () {
        var token = localStorage.getItem('token');
        if (token) {
        }
        else {
            router.push('http://localhost:3000');
        }
    }, [router.query]);
    return (react_1["default"].createElement("div", { className: "px-16 container bg-fixed bg-cover bg-center bg-[url('../public/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg')] h-64 md:h-96" },
        react_1["default"].createElement("h1", { className: 'text-2xl md:text-5xl pt-40 ml-10 font-bold md:font-bold mb-7 md:mb-10 text-white' }, "Event"),
        react_1["default"].createElement("h1", { className: 'mt-44 md:mt-64 text-center text-2xl md:text-4xl font-bold' }, "Create Event"),
        react_1["default"].createElement("div", { className: 'mt-2 h-1 md:mb-20 mb-10 rounded-sm w-32 mx-auto bg-green-600' }),
        react_1["default"].createElement("div", { className: 'mt-20 flex justify-center items-center flex-wrap' },
            react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Name"),
                react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", name: "text", type: "text" })),
            react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Email"),
                react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", name: "text", type: "email" })),
            react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Phone"),
                react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", name: "text", type: "tel" })),
            react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Event Type"),
                react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", name: "text", type: "text" })),
            react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Event Description"),
                react_1["default"].createElement("textarea", { className: event_module_css_1["default"].input + " mr-10 mb-14", name: "text", cols: 30, rows: 2 })),
            react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Event Date"),
                react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", name: "text", type: "date" })),
            react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Start Time"),
                react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", name: "text", type: "time" })),
            react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "End Time"),
                react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", name: "text", type: "time" })),
            react_1["default"].createElement("div", { className: 'flex items-start flex-col' },
                react_1["default"].createElement("label", { className: 'mb-2 text-green-800 font-semibold', htmlFor: "" }, "Total Guest"),
                react_1["default"].createElement("input", { className: event_module_css_1["default"].input + " mr-10 mb-14", name: "text", type: "text" })),
            react_1["default"].createElement("button", { className: Home_module_css_1["default"].btn + " mb-10" }, " Book Event "))));
};
exports["default"] = events;
