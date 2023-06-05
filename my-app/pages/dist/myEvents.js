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
exports.getServerSideProps = void 0;
/* eslint-disable react-hooks/rules-of-hooks */
var sort_by_1 = require("sort-by");
var jsdom = require('jsdom');
var $ = require('jquery')(new jsdom.JSDOM().window);
var react_1 = require("react");
var mongoose_1 = require("mongoose");
var event_1 = require("@/tables/event");
var fi_1 = require("react-icons/fi");
var event_module_css_1 = require("../styles/event.module.css");
var link_1 = require("next/link");
var router_1 = require("next/router");
var myEvents = function (props) {
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        if (!props.token.value) {
            router.push('http://localhost:3000');
        }
    }, [props.token.value, router, router.query]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = react_1.useState(true), sorting = _a[0], setsorting = _a[1];
    var _b = react_1.useState(false), dropFilter = _b[0], setdropFilter = _b[1];
    var _c = react_1.useState(false), droplearn = _c[0], setdroplearn = _c[1];
    var c = Object.values(props.event);
    var sortByName = function () {
        var byName = c.sort(function (a, b) {
            var x = a.eventType.toLowerCase();
            var y = b.eventType.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        return byName;
    };
    var sortByDate = function () {
        var byDate = c.sort(sort_by_1["default"]('eventDate'));
        return byDate;
    };
    $('#sort').hover(function () {
        $('#learnMore').hide();
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'flex flex-row justify-center items-center mt-20' },
            react_1["default"].createElement("div", { className: 'mr-20' },
                react_1["default"].createElement("h1", { className: ' text-center text-2xl md:text-4xl font-bold' }, "Your Events"),
                react_1["default"].createElement("div", { className: 'mt-2 h-1 rounded-sm w-32 mx-auto bg-green-600' })),
            react_1["default"].createElement(fi_1.FiFilter, { onMouseOver: function () { setdropFilter(true); }, onMouseLeave: function () { setdropFilter(false); }, className: 'text-2xl cursor-pointer' }),
            dropFilter && react_1["default"].createElement("ul", { className: "bg-gray-400 absolute " + event_module_css_1["default"].h + " p-5", onMouseOver: function () { setdropFilter(true); }, onMouseLeave: function () { setdropFilter(false); } },
                react_1["default"].createElement("li", { className: 'cursor-pointer hover:text-white text-black font-bold text-sm mb-2', onClick: function () { setsorting(true); } }, "By Name"),
                react_1["default"].createElement("li", { className: 'cursor-pointer hover:text-white text-black font-bold text-sm ', onClick: function () { setsorting(false); } }, "By Date"))),
        react_1["default"].createElement("section", { className: "text-gray-600 body-font" },
            react_1["default"].createElement("div", { className: "container px-5 py-24 mx-auto" },
                react_1["default"].createElement("div", { className: "flex flex-wrap -m-4" },
                    sorting && Object.keys(sortByName()).map(function (item) {
                        return react_1["default"].createElement(link_1["default"], { href: "http://localhost:3000/Events/" + sortByName()[item].uniqueId, key: sortByName()[item]._id, className: "p-4 md:w-1/3" },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { id: 'sort', className: 'hover:opacity-40 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden' },
                                    react_1["default"].createElement("img", { className: "lg:h-48 md:h-36 w-full object-cover object-center", src: "https://dummyimage.com/720x400", alt: "blog" }),
                                    react_1["default"].createElement("div", { className: "p-6" },
                                        react_1["default"].createElement("h2", { className: "tracking-widest text-xs title-font font-medium text-gray-400 mb-1" }, "CATEGORY"),
                                        react_1["default"].createElement("h1", { className: "title-font text-lg font-medium text-gray-900 mb-3" }, sortByName()[item].eventType),
                                        react_1["default"].createElement("p", { className: "leading-relaxed mb-3" },
                                            sortByName()[item].eventdesc.substr(0, 100),
                                            "..."),
                                        react_1["default"].createElement("div", { className: "flex items-center flex-wrap " },
                                            react_1["default"].createElement("div", { id: 'learnMore', className: "text-green-500 inline-flex items-center md:mb-2 lg:mb-0" },
                                                "Learn More",
                                                react_1["default"].createElement("svg", { className: "w-4 h-4 ml-2", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" },
                                                    react_1["default"].createElement("path", { d: "M5 12h14" }),
                                                    react_1["default"].createElement("path", { d: "M12 5l7 7-7 7" }))),
                                            react_1["default"].createElement("span", { className: "text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200" }, sortByName()[item].eventDate),
                                            react_1["default"].createElement("span", { className: "text-gray-400 inline-flex items-center leading-none text-sm" }, sortByName()[item].totalGuest))))));
                    }),
                    !sorting && Object.keys(sortByDate()).map(function (item) {
                        return react_1["default"].createElement(link_1["default"], { key: sortByDate()[item]._id, href: "http://localhost:3000/Events/" + sortByDate()[item].uniqueId, className: "p-4 md:w-1/3" },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: "h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" },
                                    react_1["default"].createElement("img", { className: "lg:h-48 md:h-36 w-full object-cover object-center", src: "https://dummyimage.com/720x400", alt: "blog" }),
                                    react_1["default"].createElement("div", { className: "p-6" },
                                        react_1["default"].createElement("h2", { className: "tracking-widest text-xs title-font font-medium text-gray-400 mb-1" }, "CATEGORY"),
                                        react_1["default"].createElement("h1", { className: "title-font text-lg font-medium text-gray-900 mb-3" }, sortByDate()[item].eventType),
                                        react_1["default"].createElement("p", { className: "leading-relaxed mb-3" }, sortByDate()[item].eventdesc.substr(0, 100)),
                                        react_1["default"].createElement("div", { className: "flex items-center flex-wrap " },
                                            react_1["default"].createElement("a", { className: "text-green-500 inline-flex items-center md:mb-2 lg:mb-0" },
                                                "Learn More",
                                                react_1["default"].createElement("svg", { className: "w-4 h-4 ml-2", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" },
                                                    react_1["default"].createElement("path", { d: "M5 12h14" }),
                                                    react_1["default"].createElement("path", { d: "M12 5l7 7-7 7" }))),
                                            react_1["default"].createElement("span", { className: "text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200" }, sortByDate()[item].eventDate),
                                            react_1["default"].createElement("span", { className: "text-gray-400 inline-flex items-center leading-none text-sm" }, sortByDate()[item].totalGuest))))));
                    }))))));
};
function getServerSideProps() {
    return __awaiter(this, void 0, void 0, function () {
        var getEvent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!mongoose_1["default"].connections[0].readyState) return [3 /*break*/, 2];
                    return [4 /*yield*/, mongoose_1["default"].connect(process.env.MONGODB_URI)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, event_1["default"].find({ "email": "owaisshk1501@gmail.com" })];
                case 3:
                    getEvent = _a.sent();
                    return [2 /*return*/, {
                            props: { event: JSON.parse(JSON.stringify(getEvent)) } // will be passed to the page component as props
                        }];
            }
        });
    });
}
exports.getServerSideProps = getServerSideProps;
exports["default"] = myEvents;
