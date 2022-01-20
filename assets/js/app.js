
alert("hello world");



import AjaxHelper from "../../node_modules/ajaxhelper/src/AjaxMaker";

let ajaxHelper = new AjaxHelper("GET", "https://slack.com/api/users.list", (response) => {
    console.log("ok", response);
} );


ajaxHelper.send();