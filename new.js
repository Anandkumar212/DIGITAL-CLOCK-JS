function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;

    // document.getElementById("MyClockDisplay").innerText =h 
    // document.getElementById("MyClockDisplay1").innerText =m 
    // document.getElementById("MyClockDisplay2").innerText =s
    // document.getElementById("MyClockDisplay3").innerText =session
    document.getElementById("b2").innerText =h  
    document.getElementById("b3").innerText =m 
    document.getElementById("b4").innerText =s
    document.getElementById("b5").innerText =session
    setTimeout(showTime, 1000);
    
}

showTime();



var x=document.getElementById("value");
var p=document.getElementById("form");
var e=document.getElementById("form1")

function create(){
    var y=x.options[x.selectedIndex].text;
    var z=x.options[x.selectedIndex].value;
//    console.log(z);
    var q=p.options[p.selectedIndex].text;
    var r=p.options[p.selectedIndex].value;
      // console.log(r);
    var f=e.options[e.selectedIndex].text;
    var g=e.options[e.selectedIndex].value;
      // console.log(g);
    var box=document.createElement("div")
    box.setAttribute("class","newbox");
    var a =document.createElement("text");
    a.innerText="wakeup time \t\t---: "+ y 
    var b=document.createElement("text2");
    b.innerText= "\n lunch time\t \t---:"+  q ; 
    var c=document.createElement("text2");
    c.innerText= "\n nap time \t \t---:  "+  f ; 
    box.appendChild(a);
    box.appendChild(b);
    box.appendChild(c);

    var addbox=document.getElementById("addbox");
    addbox.appendChild(box);
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "Am";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "Pm";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h  + session;
    
    // document.getElementById("MyClockDisplay").innerText = time;
    // setTimeout(create(), 1000);
    var messageText;
       var image ="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d99a2025-389a-457c-aa69-00d1e7061341/d2sqji8-73eca998-5e1b-4ae2-9b24-3fa194a34893.jpg"
       var timeEventJS = document.getElementById("timeEvent");
       var lolImageJS = document.getElementById('lolImage');

       if( (time==z) || (time==r) ||(time==g)){
           if( time == z){
               messageText="WAKE UP!!";
               image="wakeupblockimage.svg";;
           }
           else if( time ==r){
               messageText="LET'S HAVE SOME LUNCH !!";
               image="lunchblockimage.svg";
           }
           else if( time ==g){
               messageText="GOOD NIGHT!!";
               image="goodnight_image.svg"
           }
       }
       else
       {
           messageText="Time is not yet done"
           image="https://media.istockphoto.com/photos/sky-and-grass-backround-picture-id182493016?k=20&m=182493016&s=170667a&w=0&h=czS1SqvetVNHDquaCmvsHd24r6RnLPSxN_rNkQPeFig="
       }
       timeEventJS.innerText = messageText;
      lolImageJS.src = image;
}
// x.onchange=create;
// create();