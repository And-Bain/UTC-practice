var timeforpost = document.getElementById('postTime');

// utc

var today2 = Date.now();

function settime (){
    var today = new Date();
    var day = today.getDate()
    var month = today.getMonth()
    var year =  today.getFullYear()
    var date = month + 1 + '-' + day + '-' + year
    timeforpost.innerHTML = date
}

settime()

