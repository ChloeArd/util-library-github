import AjaxHelper from "./../node_modules/ajaxhelper/src/AjaxMaker";

let ajaxHelper = new AjaxHelper("./../api", "GET", "Tous est ok");

console.log(ajaxHelper.onResponseOk);

function displayContent(json) {
    let p = document.createElement("p");
    p.innerHTML = "Bonjour, je m'appelle " + json.prenom + " " + json.nom.toUpperCase() + ", j'ai " + json.age + " ans.";
    document.getElementById("body").append(p);
}

ajaxHelper.get(displayContent);

let data = {
    "prenom": "Chloé",
    "nom": "Ardoise",
    "age": "19"
}

ajaxHelper.post(data);