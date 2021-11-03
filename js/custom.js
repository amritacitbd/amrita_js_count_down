
//GET ALL ELEMENTS FROM HTML
var year = document.getElementById('year');
var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');


// GET CURRENT DATE AND NEXT YEAR DATE 
var currentYear = new Date().getFullYear();
var nextYear = new Date(`Jan 01 ${currentYear + 1} 00:00:00`);


// FUNCTION FOR COUNTDOWN FROM CURRENT YEAT TO GET NEXT YEAR 
function countDown ()
{

    var currentTime = new Date();
    var diff = nextYear - currentTime;

    var sec = Math.floor(diff / 1000) % 60;
    var min = Math.floor(diff / 1000 / 60) % 60 ;
    var hr = Math.floor(diff / 1000 / 60 / 60) % 24;
    var day = Math.floor(diff / 1000 / 60 / 60 /24);


// DOM
    if(day < 10){
        d + '0'
    }
    else{

    }
    days.innerHTML = (day < 10) ? '0'+ d   : day;
    hours.innerHTML = (hr < 10) ? '0' + hr   : hr;
    minutes.innerHTML = (min < 10) ? '0' + min : min;
    seconds.innerHTML = (sec < 10) ? '0'+ sec   : sec;
}

// JS TIMING -----BOM
setInterval(countDown, 1000);

year.innerHTML = nextYear.getFullYear(); 




