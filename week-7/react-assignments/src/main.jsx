import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

function renderHTMLElement() {
  const parent = document.getElementById("root");
  parent.innerHTML = "";
  const anchorElement = createAnchor(
    "https://kamrank.hashnode.dev/understanding-how-react-js-works",
    "Kamran Hashnode"
  );
  parent.appendChild(anchorElement);
  const HTMLElement = createHTMLElement("h2", "Here is an HTML element");
  parent.appendChild(HTMLElement);
}

function createAnchor(href, title) {
  const anchorElement = document.createElement("a");
  anchorElement.innerHTML = title;
  anchorElement.setAttribute("href", href);
  return anchorElement;
}

function createHTMLElement(elementType, title) {
  const element = document.createElement(elementType);
  element.innerHTML = title;
  return element;
}

// renderHTMLElement();

//Making React-like Elements and rednering using JS
const reactElementDetails = {
  type: "a",
  props: {
    href: "https://kamrank.hashnode.dev/understanding-how-react-js-works",
    children: "React Elem",
  },
};

const reactElement = (details) => {
  const HTMLElement = document.createElement(details.type);

  Object.entries(details.props).map(([key, value]) => {
    if (key != "children") {
      HTMLElement.setAttribute(key, value);
    } else {
      HTMLElement.innerHTML = value;
    }
  });

  return HTMLElement;
};

const customRender = (details, container) => {
  const parent = document.getElementById(container);
  const element = reactElement(details);
  parent.appendChild(element);
};

customRender(reactElementDetails, "root");
