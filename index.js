"use strict";

function App() {
  const [checked, setChecked] = (0, React.useReducer)(checked => !checked, true);
  const [checked2, setChecked2] = (0, React.useReducer)(checked2 => !checked2, false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    value: checked,
    onClick: setChecked
  }, /*#__PURE__*/React.createElement("label", null, checked ? "👍" : "👎")), /*#__PURE__*/React.createElement("button", {
    value: checked2,
    onClick: setChecked2
  }, /*#__PURE__*/React.createElement("label", null, checked2 ? "👍" : "👎")));
}


const e = React.createElement;

function LikeButton () {
    return e(
      App
    );
  
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));