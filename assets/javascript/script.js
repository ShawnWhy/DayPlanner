//the page loads 
//theheader is loaded that displays the month and year

//a div is created that correspond with the number of dates in the month and is genereated one by one.
//a 


//the date planner is created with the display of of the dayofweek, date month and year displayed in the header
//a div is created in the main container that correspont to each hour of the work week. 
//

var hourDivs = document.querySelectorAll(".hour");
var eventCounterNumber=0;
var thingsToDo = JSON.parse( localStorage.getItem("ThingsToDo"));
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
function setCounterNumber(){
    $(".minitesTillNumber").text
}

function EventCounter(){
    for(var i=0;i<thingsToDo.length;i++){
        if(thingsToDo[i].events){
            eventCounterNumber+=1;}
        $(".counterNumber").text(eventCounterNumber);


    }
function eventPast(){
var timeCounter = moment(thingsToDo[i].time, "mm :ss").fromNow(true);
}


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
    
        for(var i = 0;i<hourDivs.length;i++){
            
        if(thingsToDo[i].events){
        hourDivs[i].textContent =thingsToDo[i].events;}
        else if(thingsToDo[i].events&&thingsToDo[i].time){
        hourDivs[i].textContent =thingsToDo[i].events; + "time:"+ ":" + moment(thingsToDo[i].time).format("hh:mm:ss a");}
    }
};
function readySetup(){
    $(".eventForm").attr("style","visibility:hidden");
    $(".eventForm").val("hidden");

    $(".dayOfWeek").text(thisDayOfWeek);
    
    var timeInterval = setInterval(timeTick,1000);
    $(".date").text(thisMonth+ " " +thisDate+ " " + (parseInt(thisYear)+1900));
    addEvents();
    EventCounter();
    
};



$(document).ready(readySetup);

function inputEvent(event){
    event.preventDefault();
    event.stopPropagation();
     var eventInputValue =$(this).parent().children(":first-child").val();
     console.log(eventInputValue);
     var eventTimeValue = $(this).parent().children(":nth-child(2)").val();
    console.log(eventTimeValue);
    var eventIndex = event.target.parent.parent.value;
    console.log(eventIndex);
    thingsToDo[eventIndex].events=eventInputValue;
    thingsToDo[eventIndex].time = eventTimeValue;
    localStorage.setitem("thingsToDo",JSON.stringify(thingsToDo));
    addEvents();


};
// $('.selected').parent().parent().children(':first-child')
 

$(".eventSubmit").on("click",inputEvent);
$(".hour").on("click",function(event){
     event.preventDefault();
     event.stopPropagation();
     
if(this ===event.target){
     if($(".eventForm").val()=="hidden"){
    $(".eventForm").attr("style", "visibility:visible");
    $(".eventForm").val("visible");
    // $(".hour").classList.add("enlarge");
    }
    else if (($(".eventForm").val()=="visible")){
        $(".eventForm").val("ready"); 

    }
    else{
        $(".eventForm").attr("style", "visibility:hidden");
        $(".eventForm").val("hidden");
    // $(".hour").classList.remove("enlarge");}
}
    }}

);


//     this.parent.val()
//     var eventHour=$(this).parent.val()
//    var eventItem={"eventhour":eventHour,
//                     "eventDescription":eventInput,
//                     "eventTime":eventTime};
//    eventSource.push(eventItem);
//    localStorage.setItem("events",JSON.stringify(eventSource));

