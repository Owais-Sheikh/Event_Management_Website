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
require("@/styles/globals.css");
var react_1 = require("react");
var router_1 = require("next/router");
var navbar_1 = require("./component/navbar");
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    var router = router_1.useRouter();
    var _b = react_1.useState({ value: null }), token = _b[0], settoken = _b[1];
    var _c = react_1.useState({ value: {} }), eventSlug = _c[0], setslug = _c[1];
    react_1.useEffect(function () {
        var tkn = localStorage.getItem("token");
        var event = localStorage.getItem("slug");
        if (tkn) {
            settoken({ value: tkn });
        }
        if (event) {
            setslug({ value: JSON.parse(event) });
        }
    }, [router.query]);
    var logOut = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("slug");
        settoken({ value: null });
        setslug({ value: {} });
    };
    return React.createElement(React.Fragment, null,
        React.createElement(navbar_1["default"], { logOut: logOut, token: token }),
        React.createElement(Component, __assign({}, pageProps, { token: token, slug: eventSlug })));
}
exports["default"] = App;
