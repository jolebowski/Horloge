var secondHand = document.querySelector(".second-hand")
var minHand = document.querySelector(".min-hand")
var hourHand = document.querySelector(".hour-hand")

function setDate(){

    var now = new Date();

    var seconds = now.getSeconds();
    var secondsDegres = ((seconds/60) * 360) + 90;
    secondHand.style.transform = "rotate(" + secondsDegres + "deg)";


    var hour = now.getMinutes()
    var hourDegres = ((minutes/12) * 360) + 90
    hourHand.style.transform = "rotate(" + hourDegres + "deg)";

    var minutes = now.getMinutes();
    var minutesDegres = ((minutes/60) * 360) + 90;
    minHand.style.transform = "rotate(" + minutesDegres + "deg)";

}

setInterval(setDate, 1000);