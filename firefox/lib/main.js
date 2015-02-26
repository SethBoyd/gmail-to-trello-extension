var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: "https://mail.google.com/mail*",
    contentScriptWhen: 'end',
    contentScriptFile: [
        "./lib/jquery.min.js",
        "./lib/jquery-ui-1.10.3.custom.min.js",
        "./lib/jquery.datetimepicker.js",
        "./lib/trello.min.js",
        "./lib/date.js",
        "./lib/eventTarget.js",
        "./lib/menuControl.js",
        "./lib/waitCounter.js",
        "./views/gmailView.js",
        "./views/popupView.js",
        "./model.js",
        "./app.js",
        "./content-script.js",
    ],
    contentStyleFile: [
        "./style.css",
        "./lib/jquery.datetimepicker.css"
    ],
    attachTo: ["existing", "top"]
})

/* Manage storage between ext & content script
*/
