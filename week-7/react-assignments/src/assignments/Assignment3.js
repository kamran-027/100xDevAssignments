function renderHTMLElement() {
  const parent = document.getElementById("root");
  parent.appendChild(
    anchorElement(
      "https://kamrank.hashnode.dev/understanding-how-react-js-works",
      "Kamran Hashnode"
    )
  );
}

function createHTMLElement(href, title) {
  const anchorElement = document.createElement("a");
  anchorElement.innerHTML = title;
  anchorElement.setAttribute("href", href);
  return anchorElement;
}
renderHTMLElement();
