import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimerLink = document.querySelector(".disclaimer > a");

disclaimerLink.href = parkData.url;
disclaimerLink.innerHTML = parkData.fullName

document.querySelector(".park-banner-title").innerHTML = parkData.fullName;

const heroImage = document.querySelector(".park-banner-image");
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText;

function parkInfoTemplate(info) {
  return `
    <a href="/" class="prak-banner-title">${info.name}</a>
    <p class="park-banner-subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

const bannerContent = document.querySelector(".park-banner-conent");
bannerContent.innerHTML = parkInfoTemplate(parkData);