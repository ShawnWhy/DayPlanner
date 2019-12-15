//the page loads 
//theheader is loaded that displays the month and year

//a div is created that correspond with the number of dates in the month and is genereated one by one.
//a 


//the date planner is created with the display of of the dayofweek, date month and year displayed in the header

//a div is created in the main container that correspont to each hour of the work week. 
var j=0;
var nowTimeToString=moment().format("HH:mm").toString();
var difference;
var nowTimeNumberValue={};
var hourDivs = document.querySelectorAll(".hour");
var eventCounterNumber=0;
var thingsToDo = JSON.parse( localStorage.getItem("thingsToDo"));
var thingsToDoHours=[];
var today = new Date();
var thisMonthUnformated = today.getMonth();
var thisMonth=formatMonth(thisMonthUnformated);
var thisDayOfWeekUnformated = today.getDay();
var thisDayOfWeek = formatDayWeek(thisDayOfWeekUnformated);
var thisDate = today.getDate();
var thisYear=  today.getYear();
var thisHour= today.getHours();
var thisMinute=today.getMinutes();
var thisSecond = today.getSeconds();
var ampm = "AM"
var monthNames=["January", "Feburary", "March","April","May","June","July","August",
"September", "October", "November","December"];
var weekDayNames=["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
if(thisHour>12){
    thisHour-=12;
    ampm="PM";
}
else if (thisHour===0){
    thisHour=12;
};
if(thisMinute<10){thisMinute="0"+thisMinute;

};
// function momentTest(){
//     alert("momentTEst");
//     var dateTest = thingsToDo[0].time;
//     console.log(dateTest)
//     dateTest = dateTest.toString();
//     console.log(dateTest);
//     var fromNow2 = moment().subtract(dateTest).from(moment());
//     console.log(fromNow2);
//     var momentTest = new moment(dateTest, "HH:mm:ss");
//     console.log(momentTest);
//     var fromNow = momentTest.fromNow(true);
//     console.log(fromNow);
//     var fromNowMinutes = moment(fromNow,"HH:mm:ss");
//     console.log(fromNowMinutes);
//     var timeList=[];
//     for (var i =0;i<thingsToDo.length;i++){
//         timeList[i]=thingsToDo[i].time;
//         }
//     console.log(timeList);


    
// }
// momentTest();


function formatMonth(month){
     month = parseInt(month,10);
    if(month>11){month=11;}
    else if(month<0){month=0};
    monthNames=["January", "Feburary", "March","April","May","June","July","August",
"September", "October", "November","December"];
    return monthNames[month];
};

function formatDayWeek(day){
   day= parseInt(day, 10);
    if(day>6){day=6}
    else if(day<0){
        day=0
    };
    weekDayNames=["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    return weekDayNames[day];
}

function timeTick(){
today=new Date();
 thisMonthUnformated = today.getMonth();
 thisMonth=formatMonth(thisMonthUnformated);
 thisDayOfWeekUnformated = today.getDay();
 thisDayOfWeek = formatDayWeek(thisDayOfWeekUnformated);
 thisDate = today.getDate();
 thisYear=  today.getYear();
 thisHour= today.getHours();
 thisMinute=today.getMinutes();
 thisSecond = today.getSeconds();
 ampm = "AM"
 monthNames=["January", "Feburary", "March","April","May","June","July","August",
"September", "October", "November","December"];
var weekDayNames=["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
if(thisHour>12){
    thisHour-=12;
    ampm="PM";
}
else if (thisHour===0){
    thisHour=12;
};
if(thisMinute<10){thisMinute="0"+thisMinute;
};
var dotClass = "";
if(today.getSeconds() % 2 ===1){
        dotClass = "Color:#ffffff00";}
    var dots = "<span style='"+ dotClass + "'>:</span>";
    $(".time").html(thisHour + dots + thisMinute + " " + ampm);

};


function eventCounter(){
    eventCounterNumber=0;
    for(var i=0;i<thingsToDo.length;i++){
        if(thingsToDo[i].events){
            eventCounterNumber+=1;}
        $(".counterNumber").text(eventCounterNumber);


    }
// function eventPast(){
// var timeCounter = moment(thingsToDo[i].time, "mm :ss").fromNow(true);
// }


}


function addEvents(){
    if(thingsToDo === null){
        thingsToDo = [
           {"hour":"9AM", "events":"","time":""},
           {"hour":"10AM", "events":"","time":""},
           {"hour":"11AM", "events":"","time":""},
           {"hour":"12AM", "events":"","time":""},
           {"hour":"1PM", "events":"","time":""},
           {"hour":"2PM", "events":"","time":""},
           {"hour":"3PM", "events":"","time":""},
           {"hour":"4PM", "events":"","time":""},
           
       
       ];
       
    } 
    else{
        thingsToDo=JSON.parse(localStorage.getItem("thingsToDo"));
    }
    console.log(thingsToDo);
    
        for(var i = 0;i<hourDivs.length;i++){
            
        if(thingsToDo[i].events&&thingsToDo[i].time){
            console.log(thingsToDo[i].time.toString());
        hourDivs[i].firstChild.textContent =thingsToDo[i].events +  " " + "TIME:"+ "" +thingsToDo[i].time;
        }
        else if(thingsToDo[i].events){
            hourDivs[i].firstChild.textContent =thingsToDo[i].events;};
            
    
    }
};
function readySetup(){
    $(".eventForm").attr("style","visibility:hidden");
    $(".eventForm").val("hidden");
    $(".hourText").attr("style","visibility:visible");
    $(".hourText").val("visible");

    $(".dayOfWeek").text(thisDayOfWeek);
    
    var timeInterval = setInterval(timeTick,1000);
    $(".date").text(thisMonth+ " " +thisDate+ " " + (parseInt(thisYear)+1900));
    addEvents();
    eventCounter();
    
};



$(document).ready(readySetup);

function inputEvent(event){
    event.preventDefault();
    event.stopPropagation();
     var eventInputValue =$(this).parent().children(":first-child").val();
     console.log(eventInputValue);
     var eventTimeValue = $(this).parent().children(":nth-child(2)").val();
    console.log(eventTimeValue);
    var eventIndex = $(this).parent().parent().attr("value");
    console.log(eventIndex);
    thingsToDo[eventIndex].events=eventInputValue;
    thingsToDo[eventIndex].time = eventTimeValue;
    localStorage.setItem("thingsToDo",JSON.stringify(thingsToDo));
    addEvents();
    eventCounter();
};
// $('.selected').parent().parent().children(':first-child')
//set time 
//first parse the time now and the time obtained to strings

function timeToNumbers(){
    
  //this turns the time variables of now and the event time into arrays of numbers minute: and Hour:  
    var thingstoDoHours=[];
    //  console.log(thingsToDo);
    for (var i = 0; i<thingsToDo.length;i++){
        var hourTime = thingsToDo[i].time.toString();
        var timeStringToArray=hourTime.split(":");
        var timeNumberValue={};
        timeNumberValue={"hour":parseInt(timeStringToArray[0]),
        "minute":parseInt(timeStringToArray[1])};
        thingsToDoHours.push(timeNumberValue);
        // console.log(timeNumberValue);
        // console.log(timeStringToArray);
        // console.log(thingstoDoHours);
        
        
        
    // console.log(nowTimeNumberValue);
    // console.log(nowTimeStringToArray);}
    }
    setTimeCountDown();
    
        
    }
    timeToNumbers()

    function setTimeCountDown(){
        // if(thingsToDoHours[j].hour==undefined){$(".minutesTillNumber").text("no more event today");
        // setTimeout(
        // clearInterval(countDownInterval),1000)};
                 
        var countDownInterval= setInterval(function(){
        nowTimeToString=moment().format("HH:mm").toString();
        var nowTimeStringToArray=nowTimeToString.split(":");
        nowTimeNumberValue={"hour":parseInt(nowTimeStringToArray[0]),
        "minute":parseInt(nowTimeStringToArray[1])};
        var nowTimeInMinutes = nowTimeNumberValue.hour*60+nowTimeNumberValue.minute;
        var hourTimeMinutes = thingsToDoHours[j].hour*60+thingsToDoHours[j].minute;
        console.log(nowTimeInMinutes);
        console.log(hourTimeMinutes);
        difference = hourTimeMinutes-nowTimeInMinutes;
        if(difference<=0&&thingsToDo[j+1].time!==null){clearInterval(countDownInterval);j+=1;setTimeCountDown()}
        // else if (thingsToDo[j])
        {$(".minutesTillNumber").text("no more event today");
        setTimeout(
        clearInterval(countDownInterval),50);};
       
        
        
        var differenceHour=Math.floor(difference/60);
        console.log(difference);
         differenceHour = differenceHour.toString();
        console.log(differenceHour);
        var differenceMinute=Math.floor(difference%60);
        console.log(differenceMinute);
        if (Math.abs(differenceMinute)<10){differenceMinute="0"+differenceMinute};
        console.log(differenceMinute);

        
        $(".minutesTillNumber").text(differenceHour + ":" + differenceMinute)},1000);}
        // if(difference<=0){clearInterval(countDownInterval);};
        
        


        
    
    
   
 


// timeToNumbers();
// function setCounterNumber(){
//     $(".minitesTillNumber").text
// }
 

$(".eventSubmit").on("click",inputEvent);
$(".hour").on("click",function(event){
     event.preventDefault();
     event.stopPropagation();
     
if(this ===event.target){
     if($(".eventForm").val()=="hidden"){
    $(".eventForm").attr("style", "visibility:visible");
    $(".eventForm").val("visible");
     $(".hourText").attr("style","visibility:hidden");
    }
    else if (($(".eventForm").val()=="visible")){
        $(".eventForm").val("ready"); 

    }
    else{
        $(".eventForm").attr("style", "visibility:hidden");
        $(".eventForm").val("hidden");
        $(".hourText").attr("style","visibility:visible");
        
    // $(".hour").classList.remove("enlarge");}
}
    }});


//     this.parent.val()
//     var eventHour=$(this).parent.val()
//    var eventItem={"eventhour":eventHour,
//                     "eventDescription":eventInput,
//                     "eventTime":eventTime};
//    eventSource.push(eventItem);
//    localStorage.setItem("events",JSON.stringify(eventSource));

