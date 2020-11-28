setInterval(function () {

    var enddate = new Date("Dec 08 2020 00:00:00 GMT+05:30"); // change your date here like Jan 10 2015
    
    var today = new Date();
    
    var difference = Math.floor((enddate.getTime() - today.getTime()) / 1000);
    
    var seconds = GlobalFunctn(difference % 60);
    
    difference = Math.floor(difference / 60);
    
    var minutes = GlobalFunctn(difference % 60);
    
    difference = Math.floor(difference / 60);
    
    var hours = GlobalFunctn(difference % 24);
    
    difference = Math.floor(difference / 24);
    
    var days = difference;
    
    $("#second-number").text(seconds);
    
    $("#minute-number").text(minutes);
    
    $("#hour-number").text(hours);
    
    $("#day-number").text(days);
    
    }, 1000);
    
    function GlobalFunctn(valuesmy) {
    
    if (valuesmy < 0)
    
    valuesmy = 0;
    
    if (valuesmy < 10)
    
    return "0" + valuesmy;
    
    return "" + valuesmy;
    
    }




