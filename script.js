// How to set Interval and Time Out ?
// date provide present date and time.

const button = document.getElementById("stop-btn");

function showTime() {
    const currentTime = new Date();
    // console.log(currentTime);
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    // console.log(time);
    document.getElementById('time').innerText = time;
}

let interval = setInterval(showTime, 1000);

button.addEventListener('click', () => {
    clearInterval(interval);
})

// Create a Stop Watch timer and Alarm Clock ?