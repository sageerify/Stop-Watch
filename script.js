var isStop = true;
var s = 0;
var min = 0;
var hr = 0;

function start() {
    if (isStop == true) {
        isStop = false;
        timer();
    }
}

function timer() {
    if (isStop == false) {
        s = parseInt(s);
        min = parseInt(min);
        hr = parseInt(hr);
        s++;
        if (s == 60) {
            s = 0;
            min++;
        }
        if (min == 60) {
            min = 0;
            hr++;
        }

        // Format numbers
        let sDisplay = s < 10 ? "0" + s : s;
        let minDisplay = min < 10 ? "0" + min : min;
        let hrDisplay = hr < 10 ? "0" + hr : hr;

        document.getElementById("stopwatch").innerHTML =
            hrDisplay + " : " + minDisplay + " : " + sDisplay;

        setTimeout(timer, 1000);
    }
}

function stop() {
    isStop = true;
}

function reset() {
    isStop = true;
    s = 0;
    min = 0;
    hr = 0;
    document.getElementById("stopwatch").innerHTML = "00 : 00 : 00";
}
