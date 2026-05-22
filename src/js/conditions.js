import "../css/style.css";
import "../css/conditions.css";
import {
  getParkData,
  getParkAlerts,
  getVisitorCenterData     
} from "./parkService.mjs";
import {
  alertTemplate,
  visitorCenterTemplate,
  activityTemplate
} from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

const alertPriority = {
    "Park Closure": 1,
    "Caution": 2,
    "Information": 3,
}

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const sorted = [...alerts].sort((a, b) => {
    const pa = alertPriority[a.category.toLowerCase()] ?? 99;
    const pb = alertPriority[b.category.toLowerCase()] ?? 99;
    return pa - pb;
  });
  console.log(sorted.map(a => ({ category: a.category, title: a.title })));
  const html = sorted.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(centers) {
    const centercontainer = document.querySelector(".visitor-services details ul");
    centercontainer.innerHTML = centers.map(visitorCenterTemplate).join("");
}

function setActivities(activities) {
  const activitiesContainer = document.querySelector(".activities ul");
  const html = activityTemplate(activities);
  activitiesContainer.insertAdjacentHTML("afterbegin", html);
}



async function init() {
  const parkData = await getParkData();
  const [alerts, centers] = await Promise.all([
    getParkAlerts(parkData.parkCode),
    getVisitorCenterData(parkData.parkCode),
  ]);
  setHeaderFooter(parkData);
  setAlerts(alerts);
  setVisitorCenters(centers);
  setActivities(parkData.activities);
}

init();