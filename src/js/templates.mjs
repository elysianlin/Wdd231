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
    <a href="visitor-center.html?id=${center.id}">
      <h4 class="visitor-center-name">${center.name}</h4>
    </a>
    <p class="visitor-center-description">${center.description}</p>
    <p class="visitor-center-directions">${center.directionsInfo}</p>
  </li>`; 
}

export function activityTemplate(activities) {
  return activities.map((activity) => `
  <li>${activity.name}</li>
  `).join("");
}

export function vcTitleTemplate(name) {
  return `
    <svg class="icon" role="presentation" focusable="false">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/sprite.symbol.svg#ranger-station"></use>
    </svg>
    ${name}`;
}

export function vcInfoTemplate(center) {
  const image = center.images && center.images[0];
  return `
    <figure>
      <img src="${image ? image.url : ''}" alt="${image ? image.altText : 'center image'}" />
      <figcaption>
        ${image ? image.caption : ''} <span>${image ? image.credit : ''}</span>
      </figcaption>
    </figure>
    <p>${center.description || ''}</p>`;
}

export function vcDetailsTemplate(id, heading, iconName, contentHTML) {
  return `
    <details name="vc-details" id="${id}">
      <summary>
        <svg class="icon" role="presentation" focusable="false">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/sprite.symbol.svg#${iconName}"></use>
        </svg>
        ${heading}
      </summary>
      ${contentHTML}
    </details>`;
}

export function vcAddressesListTemplate(addresses) {
  if (!addresses || addresses.length === 0) return "";
  const physical = addresses.find(a => a.type === "Physical");
  const mailing = addresses.find(a => a.type === "Mailing");
  return `
    ${physical ? `
    <section class="vc-addresses__physical">
      <h3>Physical Address</h3>
      <address>
        ${physical.line1}<br />
        ${physical.city}, ${physical.stateCode} ${physical.postalCode}
      </address>
    </section>` : ""}
    ${mailing ? `
    <section class="vc-addresses__mailing">
      <h3>Mailing Address</h3>
      <address>
        ${mailing.line1}<br />
        ${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}
      </address>
    </section>` : ""}`;
}

export function vcDirectionsTemplate(directions) {
  return `<p>${directions || "No directions available."}</p>`;
}

export function vcAmenityTemplate(amenity) {
  return `<li>${amenity}</li>`;
}

export function vcContactsTemplate(contacts) {
  const email = contacts && contacts.emailAddresses && contacts.emailAddresses[0];
  const phone = contacts && contacts.phoneNumbers && contacts.phoneNumbers.find(p => p.type === "Voice");
  return `
    <section class="vc-contact__email">
      <h3>Email Address</h3>
      ${email ? `<a href="mailto:${email.emailAddress}">Send this visitor center an email</a>` : "<p>No email available.</p>"}
    </section>
    <section class="vc-contact__phone">
      <h3>Phone numbers</h3>
      ${phone ? `<a href="tel:${phone.phoneNumber}">${phone.phoneNumber}</a>` : "<p>No phone available.</p>"}
    </section>`;
}

export function vcImageTemplate(image) {
  return `<li><img src="${image.url}" alt="${image.altText}" /></li>`;
}

export function listTemplate(items, templateFn) {
  if (!items || items.length === 0) return "";
  return items.map(templateFn).join("");
}