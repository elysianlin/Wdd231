function getMailingAddress(addresses) {
    return addresses.find((address) => address.type === "Mailing");
}

function getVoicePhone(phoneNumbers) {
    const vioice = phoneNumbers.find((phone) => phone.type === "Voice");
    return vioice ? vioice.phoneNumber : "";
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