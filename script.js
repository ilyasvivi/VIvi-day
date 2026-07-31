
const text=`Happy girlfriend day l the most beautiful girl fhad denya lfer7a chadani mn bitani 7it ana meak flewl i was just imaging ou db chouf fin wsselna im so happy that i sent the first message ou im proud beli jawbti mn nhar lewl ldb kanchofek nefss choufa lbent li dewat lia 3aynia ou newrat lia 7yati sara7a kan had nhar ikon a7ssen koun kena bjoj 7da ba3diatna ou had lhedra katebha lik fwer9a ou kat9raya bc hado machi ghir hedra ou kelmat hadchi feeling

Kan7ass brassi im so lucky beli l9ina ba3diatna fhad l3mer bc u are my love of my life wakha t3awd l7ayat 1000 mera ou ntzado fblouldan wa7da akhra i will choise you bin ga3 lbnat bc nti machi normal for me u are evrything i wish and i want to stay for ever with you. you aree theee beeest viiiviii

— Ilyas 💜`;

const p=document.getElementById('particles');
for(let i=0;i<180;i++){let s=document.createElement('div');s.className='star';s.style.left=Math.random()*100+'vw';s.style.top=Math.random()*100+'vh';s.style.animationDelay=Math.random()*3+'s';p.appendChild(s);}
setInterval(()=>{let f=document.createElement('div');f.className='petal';f.textContent=Math.random()>.5?'🌸':'🪻';f.style.left=Math.random()*100+'vw';f.style.top='-5vh';f.style.fontSize=(16+Math.random()*18)+'px';f.style.animationDuration=(7+Math.random()*5)+'s';p.appendChild(f);setTimeout(()=>f.remove(),12000)},220);

document.getElementById('envelope').onclick=()=>{
const music = document.getElementById("bgMusic");

music.volume = 0;

music.play().catch(()=>{});

let volume = 0;

const fade = setInterval(() => {

    volume += 0.02;

    if(volume >= 0.4){

        volume = 0.4;

        clearInterval(fade);

    }

    music.volume = volume;

},100);
document.querySelector('.flap').style.transform='rotateX(180deg)';
setTimeout(()=>{
landing.style.display='none';
card.classList.remove('hidden');
document.body.style.overflow='auto';
let i=0;
let timer=setInterval(()=>{letter.textContent+=text[i]||'';if(++i>=text.length)clearInterval(timer)},18);
},900);
};

document.addEventListener('mousemove',e=>{
let t=document.createElement('div');
t.className='trail';
t.textContent='✦';
t.style.left=e.clientX+'px';
t.style.top=e.clientY+'px';
t.style.color='#fde047';
p.appendChild(t);
t.animate([{opacity:1,transform:'scale(1)'},{opacity:0,transform:'translateY(-20px) scale(0)'}],{duration:600});
setTimeout(()=>t.remove(),600);
});

document.getElementById('hug').onclick=()=>{
for(let i=0;i<250;i++){
let h=document.createElement('div');
h.className='trail';
h.textContent=Math.random()>.5?'💜':'🌸';
h.style.left='50vw';h.style.top='70vh';
p.appendChild(h);
let x=(Math.random()-.5)*1200,y=(Math.random()-1)*900;
h.animate([{transform:'translate(0,0)',opacity:1},{transform:`translate(${x}px,${y}px)`,opacity:0}],{duration:2200});
setTimeout(()=>h.remove(),2300);
}
};
