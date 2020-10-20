if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 500);

}

var x = 0;

var titleText = ["I", "I ", "I H","I HA","I HAT","I HAT","I HATE","I HATE ","I HATE M","I HATE MY","I HATE MY W","I HATE MY WI","I HATE MY WIF","I HATE MY WIFE","I HATE MY WIF","I HATE MY WI","I HATE MY W","I HATE MY W","I HATE MY ","I HATE M","I HATE ", "I HAT", "I HA", "I H", "I "];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
