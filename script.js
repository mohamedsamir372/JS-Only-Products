document.body.style.cssText =
    "font-family: 'Open Sans', sans-serif; padding: 20px; margin-top: 0px";
// Start Header
let header = document.createElement("div");
header.style.cssText =
    "display: flex; justify-content: space-between; align-items:center"
header.classList.add("header");
let logo = document.createElement("h1");
logo.innerText = "Mohamed E."
let ul = document.createElement("ul")
ul.style.cssText =
    "list-style-type: none; display: flex"
let linksText = ["Home", "About", "Service", "Contact"];
linksText.forEach((ele) => {
    let  links = document.createElement("li");
    links.innerText = ele;
    ul.append(links)
    links.style.cssText =
        "padding-left: 10px; font-weight: bold;"
})
document.body.appendChild(header)
header.appendChild(logo);
header.appendChild(ul);
// Start Products Section
let products = document.createElement("div");
products.style.cssText =
    " display:flex; flex-wrap:wrap; background-color:#EEE"
for (let i = 0; i < 15; i++) {
    let productsContent = document.createElement("div");
     productsContent.style.cssText =
        "width: calc(91% / 3); text-align: center; background:#FFF; padding: 5px 2px 4px 3px; margin: 15px;"
    let span = document.createElement("span");
    span.style.cssText =
        "font-weight: bold"
    let pragraph = document.createElement("p")
    pragraph.style.cssText =
        "font-weight: bold"
    let praText = document.createTextNode = "Product";
    pragraph.append(praText)
    let spanText = document.createTextNode = `${i + 1}`
    span.append(spanText)
    productsContent.append(pragraph)
    productsContent.append(span)
    products.append(productsContent);
    document.body.append(products)
};
// Start Footer
let footer = document.createElement("div");
footer.style.cssText =
    "display: flex; justify-content: center; align-items: center; margin-top: 15px"
let footerText = document.createElement("p")
footerText.style.cssText =
    "font-weight: bold"
footerText.innerText = "Copy Right 2021 | All Right Receved";
footer.appendChild(footerText) 
document.body.appendChild(footer)


