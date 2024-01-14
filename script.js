const days=document.querySelector("#day");
const hours=document.querySelector("#hour");
const minutes=document.querySelector("#minute");
const seconds=document.querySelector("#second");



function update(){
 const currentyear = new Date().getFullYear();
const newyear = new Date(`january 1 ${currentyear + 1} 00:00:00`);
const currentdate = new Date();
const diff = newyear - currentdate;
const d = Math.floor(diff / 1000 / 60 / 60 / 24);
const h = Math.floor((diff / 1000 / 60 / 60) % 24);
const m = Math.floor((diff / 1000 / 60) % 60);
const s = Math.floor((diff / 1000) % 60);
// console.log(d+" "+h+" "+m+" "+s)
days.innerHTML=d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;

}
setInterval(update,1000);