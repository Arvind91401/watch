const time = document.getElementById("time");
const timeformat = document.getElementById("timeformat");

document.addEventListener('DOMContentLoaded',() => {
    setInterval(ShowTime, 1000);
});

const ShowTime = () => {
    let date = new Date();

    let hr = date.getHours();

    let min = date.getMinutes();

    let secs = date.getSeconds();

    // time.innerHTML = '$(hr) : $(min) : $(secs)';

    hr = hr < 10 ? `0${hr}` : hr;
    min = min < 10 ? `0${min}` : min;
    secs = secs < 10 ? `0${secs}` : secs;
    
    time.innerHTML = `${hr} : ${min} : ${secs}` ;

    timeformat.innerHTML = hr > 12 ? "PM" : "AM";
 
    // console.log("hours" + hr + "mins" + min + "sec" +secs);

}

