import AjaxHelper from "./../node_modules/ajaxhelper/src/AjaxMaker";

let ajaxHelper = new AjaxHelper("./../api", "GET", "Tous est ok");

console.log(ajaxHelper.onResponseOk);

ajaxHelper.get();

let data = {
    "prenom": "Chloé",
    "nom": "Ardoise",
    "age": "19"
}

ajaxHelper.post(data);