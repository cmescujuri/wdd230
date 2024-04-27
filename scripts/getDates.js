const currentYear = new Date().getFullYear();
document.querySelector("#currentYear").innerHTML = currentYear;

const oLastModif = new Date(document.lastModified);
document.querySelector("#lastModified").innerHTML = `Last Modified: ${oLastModif}`;