const memoryBox = document.getElementById("memoryBox");
const finalStill = document.getElementById("finalStill");
const bgm = document.getElementById("bgm");

const memories = [
  { img:"1.jpg", text:"This wasn’t just a day. It became a memory." },
  { img:"2.jpg", text:"This is how I remember us — without noise, just holding on." },
  { img:"3.jpg", text:"I felt safe here. I still do when I think about it." },
  { img:"4.jpg", text:"You always made even ordinary moments feel lighter." },
  { img:"5.jpg", text:"This smile was real. Nothing was forced." },
  { img:"6.jpg", text:"You always wanted this moment saved on your digicam." },
  { img:"7.jpg", text:"You were my home." },
  { img:"8.jpg", text:"In those moments, the world felt smaller, just us." },
  { img:"9.jpg", text:"You took care of me in ways I never asked for." },
  { img:"10.jpg", text:"Some memories don’t fade — they just stay quiet." }
];

let index = 0;

function dropPhoto(){
  if(index >= memories.length){
    clearInterval(interval);
    setTimeout(showFinal, 4000);
    return;
  }

  const mem = memories[index];

  const p = document.createElement("div");
  p.className = "polaroid";

  const img = document.createElement("img");
  img.src = mem.img;

  const span = document.createElement("span");
  span.innerText = mem.text;

  const rotate = Math.random()*30 - 15;
  const left = Math.random()*70 + 10;

  p.style.left = left + "vw";
  p.style.animationDuration = (10 + Math.random()*4) + "s";
  p.style.setProperty("--rotate", rotate + "deg");

  p.appendChild(img);
  p.appendChild(span);
  memoryBox.appendChild(p);

  setTimeout(()=>p.remove(), 17000);
  index++;
}

function showFinal(){
  bgm.volume = 0.4;
  finalStill.classList.remove("hidden");
}

const interval = setInterval(dropPhoto, 2600);
