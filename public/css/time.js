
let docDay = document.getElementById('day')
let docHrs = document.getElementById('hrs')
let docMin = document.getElementById('min')
let docSec = document.getElementById('sec')
let docTitle = document.getElementById('time-title')
const countDownDate =  new Date().setHours(24,0,0,0);

let t = setInterval(function () {
    const currentTime = new Date().getTime()
    const distance = countDownDate - currentTime
    const days = Math.floor(distance / (1000 * 3600 * 24))
    const hrs = Math.floor((distance % (1000 * 3600 * 24)) / (1000 * 3600))
    const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((distance % (1000 * 60)) / (1000));
    
    docTitle.innerText = 'Time Is Running Out. Grab Your Spot Fast!'
    docDay.innerText = days;
    docHrs.innerText = hrs;
    docMin.innerText = min;
    docSec.innerText = sec;

    if (distance < 0) {
        console.log(distance);
        docTitle.innerText = 'Time is Up. Thankyou'
        docDay.innerText = '0';
        docHrs.innerText = '0';
        docMin.innerText = '0';
        docSec.innerText = '0';
        clearInterval(t)
    }

}, 1000);
