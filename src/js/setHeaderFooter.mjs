import { footerTemplate, parkInfoTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;
  
  document.querySelector("head > title").textContent = data.fullName;
  document.querySelector(".park-banner-image").src = data.images[0].url;
  document.querySelector(".park-banner-content").innerHTML = parkInfoTemplate(data);
}

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.innerHTML = footerTemplate(data);
}

export default function setHeaderFooter(data) {
  setHeaderInfo(data);
  setFooter(data);
}