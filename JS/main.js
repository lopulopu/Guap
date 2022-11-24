'use strict';

const e = React.createElement;

class header extends React.Component {
    render() {
        return (
            React.createElement("div", {
                id: "nav",
                className: "row"
            }, React.createElement("a", {
                href: "#",
                id: "logo"
            }, "\u041B\u043E\u0433\u043E"), React.createElement("a", {
                href: "#",
                className: "navlink push"
            }, "\u041E \u043D\u0430\u0441"), React.createElement("a", {
                href: "#",
                className: "navlink"
            }, "\u041A\u0435\u0439\u0441\u044B"), React.createElement("a", {
                href: "#",
                className: "navlink"
            }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"), React.createElement("a", {
                href: "#",
                className: "navlink"
            }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))
        )
    }
}
const domContainer = document.getElementById("nav");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(header, null, null));