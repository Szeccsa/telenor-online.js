// This script basically creates a cookie if the user clicks on the login button. No framework or backend used. Made by Szeccsa.
function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

$(document).ready(function() {
    $("button[type='submit']").on("click", function(event) {
        event.preventDefault();
        setCookie("tolid", "0", 7); // Stay logged in for 7 days
        location.reload();
    });

    $("li a[href='#'], a.black-button[href='#']").on("click", function(event) {
        event.preventDefault();
        deleteCookie("tolid"); // Delete the cookie
        location.reload();
    });
});
