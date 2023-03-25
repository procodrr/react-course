const container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "container"
}, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, "The library for web and native user interfaces"), /*#__PURE__*/React.createElement("img", {
  src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  style: {
    width: 200,
    backgroundColor: 'teal',
    borderRadius: 8,
    padding: 16
  }
})), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "Username"), /*#__PURE__*/React.createElement("input", {
  id: "username"
})), /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "password"
}, "Password"), /*#__PURE__*/React.createElement("input", {
  id: "password",
  type: "password"
})))));
console.log(container);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);