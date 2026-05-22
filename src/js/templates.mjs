import spritePath from '../images/sprite.symbol.svg';

function getMailingAddress(addresses) {
    return addresses.find((address) => address.type === "Mailing");
}

function getVoicePhone(phoneNumbers) {
    const voice = phoneNumbers.find((phone) => phone.type === "Voice");
    return voice ? voice.phoneNumber : "";
}

export function parkInfoTemplate(info) {
  return `
    <a href="/" class="park-banner-title">${info.name}</a>
    <p class="park-banner-subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

export function mediaCardTemplate(info) {
  return `
    <div class="media-card">
      <a href="${info.link}">
        <img class="meida-card-img" src="${info.image}" alt="${info.name}">
        <h3 class="meida-card-title">${info.name}</h3>
      </a>
      <p class="media-card-description">${info.description}</p>
    </div>`;
}

export function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `
    <section class="park-footer">
      <h3>Contact Info</h3>
      <h4>Mailing Address:</h4>
      <div>
        <p>${mailing.line1}</p>
        <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
      </div>
      <h4>Phone:</h4>
      <p>${voice}</p>
    </section>`;
}

export function alertTemplate(alert) {
  let alertType = "";

  switch (alert.category.toLowerCase()) {
    case "park closure":
      alertType = "closure";
      break;

    case "caution":
      alertType = "caution";
      break;

    case "information":
      alertType = "information";
      break;

    default:
      alertType = "information";
  }

  return `
  <li class="alert"> 
    <svg class="icon" focusable="false" aria-hidden="true">
      <use xlink:href="${spritePath}#alert-${alertType}"></use>
    </svg>

    <div>
      <h3 class="alert-${alertType}">
        ${alert.title}
      </h3>
      <p>${alert.description}</p>
    </div>
  </li>
  `;
}

export function visitorCenterTemplate(center) {
  return `<li class="visitor-center">
    <h4 class="visitor-center-name">${center.name}</h4>
    <p class="visitor-center-description">${center.description}</p>
    <p class="visitor-center-directions">${center.directionsInfo}</p>
  </li>`; 
}

export function activityTemplate(activities) {
  return activities.map((activity) => `
  <li>${activity.name}</li>
  `).join("");
}