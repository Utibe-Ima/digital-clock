function clock() {
    var clc = new Date();
    var amPm;

    var hour = clc.getHours();
    var minutes = clc.getMinutes();
    var seconds = clc.getSeconds();
    // console.log(clc)
// check for AM or PM 
    if (hour < 12) {
        amPm = "am"
    } else {
        amPm = "pm"
    }

// change to 12 hour time

    if (hour > 12) {
       hour = hour - 12;
    } else {
        hour = hour
    }

    hour = `0${hour}`.slice(-2)
    minutes = `0${minutes}`.slice(-2)
    seconds = `0${seconds}`.slice(-2)


    document.getElementById('main-clock').innerHTML = `${hour} : ${minutes} : ${seconds} ${amPm}`
    setTimeout(clock, 500)
}