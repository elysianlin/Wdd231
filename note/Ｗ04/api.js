const baseURL = "https://developer.nps.gov/api/v1/";

async function getJSON (endpoint) {
    const apikey = "40UKoXiP0oYHMVlyYb9SlW6iqCgvc4NPw6LsHYEI";
    const url = baseURL + endpoint;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": apikey
        }
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
}

getJSON('alerts?parkConde=acad,dena')



function listTemplate(item) {
    return `<li><a href="${item.url}">${item.name}</a>${item.states}</li>`;
}


async function renderClimbingList() {
    const endpoint = "activities/parks?q=climbing";
    const outputList = document.getQuerySelector("#outputList");
    const data = await getJSON(endpoint);
    const park = data.data;
    const listHTML = park.map(listTemplate).join("");
    outputList.innerHTML = listHTML;
}

renderClimbingList();
