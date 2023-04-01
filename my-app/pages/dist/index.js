"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var image_1 = require("next/image");
var google_1 = require("next/font/google");
var Home_module_css_1 = require("@/styles/Home.module.css");
var first_jpg_1 = require("../public/first.jpg");
var second_jpg_1 = require("../public/second.jpg");
var third_jpg_1 = require("../public/third.jpg");
var forth_jpg_1 = require("../public/forth.jpg");
var inter = google_1.Inter({ subsets: ['latin'] });
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Create Next App"),
            React.createElement("meta", { name: "description", content: "Generated by create next app" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            React.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        React.createElement("main", { className: "container  px-4 md:px-10 bg-cover bg-center bg-[url('../public/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg')] h-64 md:h-96" },
            React.createElement("div", { className: "md:w-full text-center py-14 md:py-24" },
                React.createElement("h1", { className: 'text-2xl md:text-5xl font-bold md:font-bold mb-7 md:mb-10 text-white' }, "Life is an event. Make it memorable."),
                React.createElement("button", { type: "button", className: "p-2 mt-7 md:mt-10 border rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..." }, "Register Now")),
            React.createElement("h1", { className: 'mt-10 md:mt-20 text-center text-2xl md:text-4xl font-bold' }, "Our Services"),
            React.createElement("div", { className: 'mt-2 h-1 md:mb-20 mb-10 rounded-sm w-32 mx-auto bg-green-600' }),
            React.createElement("div", { className: 'flex justify-evenly md:flex-row flex-col' },
                React.createElement("div", { className: ' md:mr-20 mb-10 ' },
                    React.createElement(image_1["default"], { src: first_jpg_1["default"], alt: 'first', width: 1600 })),
                React.createElement("div", null,
                    React.createElement("h1", { className: 'md:text-4xl text-xl font-bold mb-5 md:mb-10 md:mt-14' }, "Wedding Event"),
                    React.createElement("p", { className: 'mb-10' }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus ipsam assumenda fugit, voluptate eaque error saepe quaerat libero, ut harum a cumque obcaecati excepturi modi placeat explicabo! Soluta, dolorem?"),
                    React.createElement("button", { className: Home_module_css_1["default"].btn }, " Book Me "))),
            React.createElement("div", { className: 'mt-16 flex justify-evenly md:flex-row flex-col' },
                React.createElement("div", { className: 'md:mr-20' },
                    React.createElement("h1", { className: 'md:text-4xl text-xl font-bold mb-5 md:mb-10 md:mt-14' }, "Mehndi Event"),
                    React.createElement("p", { className: 'mb-10' }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus ipsam assumenda fugit, voluptate eaque error saepe quaerat libero, ut harum a cumque obcaecati excepturi modi placeat explicabo! Soluta, dolorem?"),
                    React.createElement("button", { className: Home_module_css_1["default"].btn }, " Book Me ")),
                React.createElement("div", { className: ' mb-10 ' },
                    React.createElement(image_1["default"], { src: second_jpg_1["default"], alt: 'first', width: 1600 }))),
            React.createElement("div", { className: 'mt-16 flex justify-evenly md:flex-row flex-col' },
                React.createElement("div", { className: ' md:mr-20 mb-10 ' },
                    React.createElement(image_1["default"], { src: third_jpg_1["default"], alt: 'first', width: 1600 })),
                React.createElement("div", null,
                    React.createElement("h1", { className: 'md:text-4xl text-xl font-bold mb-5 md:mb-10 md:mt-14' }, "Party Event"),
                    React.createElement("p", { className: 'mb-10' }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus ipsam assumenda fugit, voluptate eaque error saepe quaerat libero, ut harum a cumque obcaecati excepturi modi placeat explicabo! Soluta, dolorem?"),
                    React.createElement("button", { className: Home_module_css_1["default"].btn }, " Book Me "))),
            React.createElement("div", { className: 'mt-16 flex justify-evenly md:flex-row flex-col' },
                React.createElement("div", { className: ' md:mr-20' },
                    React.createElement("h1", { className: 'md:text-4xl text-xl font-bold mb-5 md:mb-14 md:mt-28' }, "Iftari Event"),
                    React.createElement("p", { className: 'mb-10 md:mb-14' }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus ipsam assumenda fugit, voluptate eaque error saepe quaerat libero, ut harum a cumque obcaecati excepturi modi placeat explicabo! Soluta, dolorem?"),
                    React.createElement("button", { className: Home_module_css_1["default"].btn + " mb-10" }, " Book Me ")),
                React.createElement("div", { className: ' mb-10 ' },
                    React.createElement(image_1["default"], { src: forth_jpg_1["default"], alt: 'first', width: 1600, height: 500 }))))));
}
exports["default"] = Home;
