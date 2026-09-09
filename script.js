const weddingDate = new Date("2027-07-27T17:00:00+06:00").getTime();

function updateCountdown(){
  const now = Date.now();
  let diff = weddingDate - now;
  if(diff < 0) diff = 0;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(d).padStart(3,"0");
  document.getElementById("hours").textContent = String(h).padStart(2,"0");
  document.getElementById("minutes").textContent = String(m).padStart(2,"0");
  document.getElementById("seconds").textContent = String(s).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

document.getElementById("openBtn").addEventListener("click",()=>{
  document.getElementById("invitation").scrollIntoView({behavior:"smooth"});
});

const audio = document.getElementById("weddingAudio");
const musicButton = document.getElementById("musicButton");
const musicToggle = document.getElementById("musicToggle");

function toggleMusic(){
  if(audio.paused){
    audio.play().then(()=>{
      musicButton.textContent="♫ Музыканы токтотуу";
      musicToggle.textContent="Ⅱ";
    }).catch(()=>{
      musicButton.textContent="♫ Өз музыкаңызды кошуңуз";
    });
  }else{
    audio.pause();
    musicButton.textContent="♫ Музыканы күйгүзүү";
    musicToggle.textContent="♫";
  }
}
musicButton.addEventListener("click",toggleMusic);
musicToggle.addEventListener("click",toggleMusic);

document.getElementById("yesBtn").addEventListener("click",()=>{
  document.getElementById("rsvpMessage").textContent="Рахмат, Айгүл жеңе! Сизди чоң кубаныч менен күтөбүз ❤️";
});
document.getElementById("noBtn").addEventListener("click",()=>{
  document.getElementById("rsvpMessage").textContent="Жооп бергеніңіз үчүн рахмат 🤍";
});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
