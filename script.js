const hour=document.getElementById("hour"),minute=document.getElementById("minute"),smallSecond=document.getElementById("smallSecond"),dateNumber=document.getElementById("dateNumber"),ampm=document.getElementById("ampm");
function updateClock(){const now=new Date();dateNumber.textContent=now.getDate();ampm.textContent=now.getHours()<12?"AM":"PM";const s=now.getSeconds()+now.getMilliseconds()/1000,m=now.getMinutes()+s/60,h=(now.getHours()%12)+m/60;
hour.style.transform=`rotate(${h*30}deg)`;
minute.style.transform=`rotate(${m*6}deg)`;
smallSecond.style.transform=`rotate(${s*6}deg)`;
requestAnimationFrame(updateClock)
if (ampm.textContent == "AM") {
  ampm.style.color = "#111"; // Vert si > 10
} else {
  ampm.style.color = "#8B0000";   // Rouge sinon
}
}

updateClock();