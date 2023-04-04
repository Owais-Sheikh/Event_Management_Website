"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var router_1 = require("next/router");
var react_1 = require("react");
var ai_1 = require("react-icons/ai");
var md_1 = require("react-icons/md");
var Home_module_css_1 = require("@/styles/Home.module.css");
var Navbar = function (props) {
    var router = router_1.useRouter();
    var _a = react_1.useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    var _b = react_1.useState(""), searchQuery = _b[0], setSearchQuery = _b[1];
    var _c = react_1.useState(false), dropdown = _c[0], setdropdown = _c[1];
    var handleMenuClick = function () {
        setIsMenuOpen(!isMenuOpen);
    };
    var handleSearchSubmit = function (event) {
        event.preventDefault();
        if (searchQuery !== "") {
            router.push("/search?q=" + searchQuery);
            setSearchQuery("");
        }
    };
    return (React.createElement("nav", { className: "stic flex flex-wrap items-center justify-between bg-gradient-to-r from-green-400 to-blue-500 px-4 py-3" },
        React.createElement(ai_1.AiOutlineMenu, { className: " text-xl md:hidden", onClick: handleMenuClick }),
        React.createElement("div", { className: "flex items-center" },
            React.createElement(link_1["default"], { href: "/", className: "text-xl font-bold text-white mr-10 md:mr-6" }, "Event Planner"),
            React.createElement("form", { onSubmit: handleSearchSubmit },
                React.createElement("div", { className: "relative" },
                    React.createElement("input", { type: "text", placeholder: "Search", value: searchQuery, onChange: function (event) { return setSearchQuery(event.target.value); }, className: "px-3 w-40 md:w-64 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:shadow-outline" }),
                    React.createElement("button", { type: "submit", className: "absolute right-0 top-0 mt-2 mr-2" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-search" },
                            React.createElement("circle", { cx: "11", cy: "11", r: "8" }),
                            React.createElement("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })))))),
        React.createElement("div", { className: (isMenuOpen ? "block" : "hidden") + " sm:flex flex-grow sm:flex-grow-0 md:items-center mt-4 sm:mt-0" },
            React.createElement("ul", { className: "sm:flex flex-row" },
                React.createElement(NavItem, { href: "/", label: "Home", active: router.pathname === "/" }),
                React.createElement(NavItem, { href: props.token.value ? '/events' : '/Login', label: "Events", active: router.pathname === "/events" }),
                React.createElement(NavItem, { href: "/contact", label: "Contact", active: router.pathname === "/contact" })),
            props.token.value && React.createElement(md_1.MdAccountCircle, { onMouseOver: function () { setdropdown(true); }, onMouseLeave: function () { setdropdown(false); }, className: 'text-3xl text-white cursor-pointer' }),
            props.token.value && dropdown && React.createElement("div", { onMouseOver: function () { setdropdown(true); }, onMouseLeave: function () { setdropdown(false); }, className: "bg-white absolute right-5 top-11 p-4" },
                React.createElement("ul", null,
                    React.createElement("li", { className: "cursor-pointer hover:text-gray-500 text-black font-bold text-sm mb-2" }, "My Account"),
                    React.createElement(link_1["default"], { href: '/myEvents' },
                        React.createElement("li", { className: "cursor-pointer hover:text-gray-500 text-black font-bold text-sm mb-2" }, "My Events")),
                    React.createElement("li", { onClick: props.logOut, className: "cursor-pointer hover:text-gray-500 text-black font-bold  text-sm" }, "LogOut"))),
            !props.token.value && React.createElement(link_1["default"], { href: '/Login' },
                React.createElement("button", { className: Home_module_css_1["default"].button }, " Login ")))));
};
var NavItem = function (_a) {
    var href = _a.href, label = _a.label, active = _a.active;
    return (React.createElement("li", { className: "mr-6" },
        React.createElement(link_1["default"], { href: href, className: (active ? "font-bold text-white" : "text-gray-200") + " hover:text-white" }, label)));
};
exports["default"] = Navbar;
