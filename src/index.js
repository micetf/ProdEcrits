import "./index.css";

$(document).ready(function() {
    var qui = "webmaster";
    var chez = "micetf.fr";
    $("#contact").attr("href", "mailto:" + qui + "@" + chez);
    $("ul a").attr("target", "_blank");
});
