$(function(){
var mode=0;
var timecount=0;
var lapcount=0;
var action;
var lapnum=0;
var timemin;var timesec;var timecensec;
var lapmin,lapsec,lapcensec;
hideshowbuttons("#start","#Lap");
$("#start").click(function(){
mode=1;
hideshowbuttons("#Stop","#Lap");
StartAction();


});

$("#Stop").click(function(){
    hideshowbuttons("#Resume","#Reset");
    clearInterval(action);
    });
    
    $("#Resume").click(function(){
        hideshowbuttons("#Stop","#Lap");
    
        StartAction();
        });
        
        $("#Reset").click(function(){
            location.reload();
            });
$("#Lap").click(function(){
    if(mode){
clearInterval(action);
lapcount=0;
addlap();
StartAction();}

});





function hideshowbuttons(x,y)
{
    $(".controlbut").hide();
    $(x).show();
    $(y).show();
}

function StartAction()
{
    
    action = setInterval(function(){
        timecount++;
        if(timecount==100*60*100)
        {timecount=0;}
        lapcount++;
        if(lapcount==100*60*100)
        {lapcount=0;}
        updatetime();
    },10);
}

function updatetime(){
    timemin=Math.floor(timecount/6000);
    timesec=Math.floor((timecount%6000)/100);
    timecensec=(((timecount%6000)%100));
    

    $("#timemin").text(formatnum(timemin));
    $("#timesec").text(formatnum(timesec));
    $("#timecensec").text(formatnum(timecensec));
    lapmin=Math.floor(lapcount/6000);
    lapsec=Math.floor((lapcount%6000)/100);
    lapcensec=(((lapcount%6000)%100));
    
    $("#lapmin").text(formatnum(lapmin));
    $("#lapsec").text(formatnum(lapsec));
    $("#lapcensec").text(formatnum(lapcensec));
}


function formatnum(x)
{
    if(x<10)
    {return '0'+x;}
    else
    {return x;}
}

function addlap(){
    lapnum++;
    var lapdetail='<div class="lapdivjs">'+
    '<div class="laptimetitle">'+'Lap '+lapnum+
    '</div>'+
    '<div class="laptimekey">'+'<span>'+formatnum(lapmin)+'</span>'+':'+'<span>'+formatnum(lapsec)+'</span>'+':'+'<span>'+formatnum(lapcensec)+'</span>'
    '</div>'+
    '</div>';
    $(lapdetail).prependTo("#laplist");
}








});