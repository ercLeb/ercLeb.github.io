//#region Tripoli
var tripoliMap = L.map("tripoli-map").setView(
  [34.41638025038974, 35.8432888099137],
  17
);
var markerTripoli = L.marker([34.41638025038974, 35.8432888099137]).addTo(
  tripoliMap
);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 100,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(tripoliMap);

markerTripoli.bindPopup("ERC Tripoli").openPopup();
// zoom map to marker
markerTripoli.on("click", function () {
  //navigate to a new window
  window.open("https://goo.gl/maps/pjaGFeiH5vi5uK9DA", "_blank");
});
//#endregion

//https://maps.google.com/?q=34.4303573,35.8253531
//#region LSA
var lsaMap = L.map("lsa-map").setView([34.4303573, 35.8253531], 17);
var markerLsa = L.marker([34.4303573, 35.8253531]).addTo(lsaMap);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 100,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(lsaMap);

markerLsa.bindPopup("LSA Center").openPopup();
// zoom map to marker
markerLsa.on("click", function () {
  //navigate to a new window
  window.open("https://goo.gl/maps/iYsGXqzVsFhBKLeB9", "_blank");
});
//#endregion

//#region danniye
var danniyeMap = L.map("danniye-map").setView(
  [34.38387780838364, 36.02436016880581],
  17
);
var markerDanniye = L.marker([34.38387780838364, 36.02436016880581]).addTo(
  danniyeMap
);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 100,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(danniyeMap);

markerDanniye.bindPopup("ERC Danniye").openPopup();
// zoom map to marker
markerDanniye.on("click", function () {
  //navigate to a new window
  window.open("https://goo.gl/maps/BtnW5KmbBwTbkNnd8", "_blank");
});
//#endregion

//#region Qalamoun
var qalamoun = L.map("qalamoun-map").setView(
  [34.38900706367163, 35.78670569901084],
  17
);
var markerQalamoun = L.marker([34.38900706367163, 35.78670569901084]).addTo(
  qalamoun
);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 100,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(qalamoun);

markerQalamoun.bindPopup("ERC Qalamoun").openPopup();
// zoom map to marker
markerQalamoun.on("click", function () {
  //navigate to a new window
  window.open("https://goo.gl/maps/H99rmKuNXbTQMupx7", "_blank");
});
//#endregion

//#region Irsal
var irsal = L.map("irsal-map").setView(
  [34.184557684922495, 36.42477773621617],
  17
);
var markerIrsal = L.marker([34.184557684922495, 36.42477773621617]).addTo(
  irsal
);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 100,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(irsal);

markerIrsal.bindPopup("ERC Aarsal").openPopup();
// zoom map to marker
markerIrsal.on("click", function () {
  //navigate to a new window
  window.open("https://goo.gl/maps/q1xs6ahn94RisTiv6", "_blank");
});
//#endregion

//#region Rafid
var rafid = L.map("rafid-map").setView(
  [33.57467247237051, 35.82813160350973],
  17
);
var markerRafid = L.marker([33.57467247237051, 35.82813160350973]).addTo(rafid);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 100,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(rafid);

markerRafid.bindPopup("ERC Rafid").openPopup();
// zoom map to marker
markerRafid.on("click", function () {
  //navigate to a new window
  window.open("https://goo.gl/maps/rNn8ANcG5UiXFegE9", "_blank");
});
//#endregion

//#region Ber Elias
var berElias = L.map("berElias-map").setView(
  [33.768425171592, 35.90480413298247],
  17
);
var markerBerElias = L.marker([33.768425171592, 35.90480413298247]).addTo(
  berElias
);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 100,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(berElias);

markerBerElias.bindPopup("ERC Ber Elias").openPopup();
// zoom map to marker
markerBerElias.on("click", function () {
  //navigate to a new window
  window.open("https://goo.gl/maps/EPGEikRb4K72kxJg8", "_blank");
});
//#endregion

//#region Arkob
var arkob = L.map("arkob-map").setView([33.366878, 35.6976596], 17);
var markerArkob = L.marker([33.366878, 35.6976596]).addTo(arkob);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 100,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(arkob);

markerArkob.bindPopup("ERC Arkoob").openPopup();
// zoom map to marker
markerArkob.on("click", function () {
  //navigate to a new window
  window.open("https://maps.app.goo.gl/jV4fCjYSM8iYd4EQA", "_blank");
});
//#endregion

//#region meshmesh
var meshmesh = L.map("meshmesh-map").setView([34.1456636, 35.7814317], 17);
var markerMeshmesh = L.marker([34.1456636, 35.7814317]).addTo(meshmesh);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 100,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(meshmesh);

markerMeshmesh.bindPopup("ERC Meshmesh").openPopup();
// zoom map to marker
markerMeshmesh.on("click", function () {
  //navigate to a new window
  window.open("https://maps.app.goo.gl/sRr1AH2ehvQk3Gby7", "_blank");
});
//#endregion
