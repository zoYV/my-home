const bgm = document.getElementById("bgm");
const startScreen = document.getElementById("startScreen");
const album = document.getElementById("album");

const photo = document.getElementById("photo");
const caption = document.getElementById("caption");
const count = document.getElementById("count");

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
  { img:"10.jpg", text:"Some memories don’t fade — they just stay quiet." },
  { img:"11.jpg", text:"Us in the small world." }
];

let index = 0;

function show(){
  photo.src = memories[index].img;
  caption.innerText = memories[index].text;
  count.innerText = `${index+1} / ${memories.length}`;
}

function next(){
  if(index < memories.length - 1){
    index++;
    show();
  }
}

function prev(){
  if(index > 0){
    index--;
    show();
  }
}

/* 🔥 USER INTERACTION = MUSIC WILL PLAY */
startScreen.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  album.classList.remove("hidden");

  bgm.volume = 0.7;
  bgm.loop = true;

  bgm.play().catch(err => {
    console.log("Audio blocked:", err);
  });

  show();
});
