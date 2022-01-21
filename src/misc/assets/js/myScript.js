$(function () {
    $.get("footer.html", function (data) {
        $('#footer').append(data);
    });
    $.get("offices.html", function (data) {
        $('#office-locations').append(data);
    });
});