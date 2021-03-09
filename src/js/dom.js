
if (window.location.href === "https://oakland.trapac.com/quick-check/?terminal=OAK&transaction=availability") {
    const transAction = document.getElementById("transactions");
    const div = window.document.createElement("div");
    div.id = "autoHarvest";
    transAction.insertBefore(div, document.getElementById("transactions").firstChild);
} else if (window.location.href === "http://www.hmm21.com/cms/business/ebiz/trackTrace/trackTrace/index.jsp") {
    // const transAction = document.getElementById("transactions");
    // const div = window.document.createElement("div");
    // div.id = "autoHarvest";
    // transAction.insertBefore(div, document.getElementById("transactions").firstChild);
}
