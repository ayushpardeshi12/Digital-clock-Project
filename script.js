let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minutes");
let secondEl = document.getElementById("seconds");
let sessionEl = document.getElementById("session");

function clock() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    let session = "AM";

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    } else {
        session = "AM";
    }

    hour = hour < 10 ? hourEl.innerHTML = "0" + hour : hourEl.innerHTML = hour;
    minute = minute < 10 ? minuteEl.innerHTML = "0" + minute : minuteEl.innerHTML = minute;
    second = second < 10 ? secondEl.innerHTML = "0" + second : secondEl.innerHTML = second;

    sessionEl.innerHTML = session;

}

setInterval(() => {
    clock();
}, 1000);

// setInterval(clock,1000);