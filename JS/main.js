'use strict';

const e = React.createElement;

class header extends React.Component {
    render() {
        return (
            React.createElement("div", {
                id: "nav",
                className: "row"
            }, React.createElement("a", {
                href: "index.html",
                id: "logo"
            }, React.createElement("img", {
                src: "../Pics/logo.png"
            })), React.createElement("a", {
                href: "about.html",
                className: "navlink push"
            }, "\u041E \u043D\u0430\u0441"), React.createElement("a", {
                href: "news.html",
                className: "navlink"
            }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"), React.createElement("a", {
                href: "cont.html",
                className: "navlink"
            }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))
        )
    }
}

class footer extends React.Component {
    render() {
        return React.createElement("footer", {
            id: "footer",
            class: "container row"
        }, React.createElement("div", {
            class: "row"
        }, React.createElement("h1", null, "\u041D\u0430\u043F\u0438\u0448\u0438 \u043D\u0430\u043C")), React.createElement("div", {
            class: "row"
        }, React.createElement("div", {
            class: "row col2 col"
        }, React.createElement("a", {
            href: "#",
            class: "col col2"
        }, "\u041F\u043E\u0447\u0442\u0430")), React.createElement("div", {
            class: "row col2 col"
        }, React.createElement("a", {
            href: "#",
            class: "col col2"
        }, "\u041E \u043D\u0430\u0441"), React.createElement("a", {
            href: "#",
            class: "col col2"
        }, "\u0418\u043D\u0441\u0442\u0430\u0433\u0440\u0430\u043C"), React.createElement("a", {
            href: "#",
            class: "col col2"
        }, "\u0422\u0432\u0438\u0442\u0442\u0435\u0440"))));
    }
}


const domContainer = document.getElementById("nav");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(header, null, null));

ReactDOM.createRoot(document.getElementById("foot")).render(React.createElement(footer, null, null))
