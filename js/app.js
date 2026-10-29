const B = BODA, I = B.img;
const $ = (s) => document.querySelector(s);
const img = (src, alt = "", cls = "") => `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" onerror="this.style.visibility='hidden'">`;
const flor = (pos) => img(I.flores, "", `flor ${pos}`);
const lista = (a) => a.map((x) => `<p>${x}</p>`).join("");
const orn = `<div class="orn reveal"><svg viewBox="0 0 300 24" fill="none" stroke="#b7cabb" stroke-width="1.2"><path d="M0 12h118M182 12h118"/><path d="M150 20c-15-9-15-19-7-19 3 0 6 2 7 5 1-3 4-5 7-5 8 0 8 10-7 19z"/></svg></div>`;
const ico = {
  play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>',
  prev: '<svg viewBox="0 0 24 24"><path d="M6 5h2v14H6zM9 12l10 7V5z"/></svg>',
  next: '<svg viewBox="0 0 24 24"><path d="M16 5h2v14h-2zM15 12L5 5v14z"/></svg>'
};
const wa = `https://wa.me/${B.confirmacion.whatsapp}?text=${encodeURIComponent(B.confirmacion.mensaje)}`;

$("#sobre-titulo").textContent = B.sobre.titulo;
$("#sobre-texto").textContent = B.sobre.texto;
$("#sobre-foto").src = I.fotoSobre;
$("#sobre-sello").src = I.sello;

$("#app").innerHTML = `
<section class="hero">
  <div class="blk"><div class="torn">${img(I.foto1, "Nadia y Óscar")}</div>${flor("bl")}</div>
  <div class="pad">
    <p class="script dorado reveal">${B.titulo}</p>
    <h1 class="script nombres reveal d1">${B.novia} <span>&amp;</span> ${B.novio}</h1>
    <p class="frase reveal d2">${B.frase}</p>
    <p class="mini reveal">Presiona el ▶ para escuchar nuestra canción</p>
    <div class="player reveal d1"><button id="prev" aria-label="Retroceder">${ico.prev}</button><button id="play" class="play" aria-label="Reproducir o pausar">${ico.play}</button><button id="next" aria-label="Adelantar">${ico.next}</button></div>
  </div>
</section>

<section class="banda reveal">
  <h2 class="script">Contamos los segundos</h2>
  <div class="cd" id="cd">
    <div><b id="cdd">0</b><span>Días</span></div><div><b id="cdh">0</b><span>Horas</span></div>
    <div><b id="cdm">0</b><span>Min</span></div><div><b id="cds">0</b><span>Seg</span></div>
  </div>
  <p id="cdfin" class="script" style="display:none;font-size:2rem">¡Hoy es el gran día!</p>
</section>
<p class="center reveal">Hagamos este día un momento inolvidable.</p>

<section class="fecha">
  <p class="reveal">${B.diaSemana}</p>
  <div class="num reveal d1">${B.dia}</div>
  <div class="script mes reveal d2">${B.mes}</div>
  <p class="reveal">${B.bendicion}</p>
</section>

<section class="pad"><div class="card reveal">${flor("tl")}
  <h3 class="script">Padres de la novia</h3>${lista(B.padresNovia)}
  <h3 class="script">Padres del novio</h3>${lista(B.padresNovio)}
</div></section>
${orn}
<p class="center reveal">Y la guía de nuestros padrinos.</p>
<section class="pad"><div class="card reveal">
  <h3 class="script">Padrinos de la boda</h3>${lista(B.padrinos)}
  <h3 class="script">Testigos de la boda</h3>${lista(B.testigos)}${flor("br")}
</div></section>

<section class="blk"><div class="torn alta ambos reveal">${img(I.foto2)}</div>${flor("bl")}</section>

<section class="pad"><div class="card reveal">
  <h3 class="script">Ceremonia</h3>
  <table>${B.ceremonia.horarios.map(([a, b]) => `<tr><td>${a}:</td><td>${b}</td></tr>`).join("")}</table>
  <p>${B.ceremonia.lugar}</p><p class="mini">${B.ceremonia.nota}</p>
  <a class="btn" href="${B.ceremonia.mapa}" target="_blank" rel="noopener">VER MAPA</a>
</div>
<div class="card reveal d1"><h3 class="script">Referencias para llegar a nuestra boda:</h3><div class="refs">${lista(B.referencias)}</div></div></section>
${orn}
<section class="center pad">
  <h3 class="script reveal grande">Código de vestimenta</h3>
  ${img(I.vestimenta, "", "ico reveal")}
  <p class="cod reveal">${B.vestimenta.codigo}</p>
  <p class="reveal">Hombres: ${B.vestimenta.hombres}<br>Mujeres : ${B.vestimenta.mujeres}</p>
</section>
${orn}
<section class="blk"><div class="torn alta ambos reveal">${img(I.foto3)}</div>${flor("bl")}</section>

<section class="pad"><div class="card reveal">
  <h3 class="script">Confirmación de asistencia</h3>${img(I.libro, "", "ico")}
  <p>${B.confirmacion.texto}</p>
  <a class="btn solid" href="${wa}" target="_blank" rel="noopener">CONFIRMAR ASISTENCIA</a>
</div></section>

<section class="center pad">
  <h3 class="script reveal grande">Regalos</h3><p class="reveal d1">${B.regalos}</p>
  ${orn}
  <div class="galeria">${B.galeria.map((g, i) => `<figure class="reveal d${i % 3}" style="--r:${i % 2 ? 2 : -2}deg">${img(g.foto, g.titulo)}<figcaption class="script">${g.titulo}</figcaption></figure>`).join("")}</div>
</section>

<section class="cierre center pad">
  <div class="sello reveal">${flor("")}${img(I.sello, "Sello", "seal")}${flor("flip")}</div>
  <p class="reveal">${B.cierre}</p>
  <p class="script dorado grande reveal d1">${B.despedida}</p>
</section>`;

/* ---------- Música ---------- */
const audio = new Audio(B.musica); audio.loop = true; audio.volume = B.volumen;
const playBtn = $("#play");
const sync = () => (playBtn.innerHTML = audio.paused ? ico.play : ico.pause);
playBtn.onclick = () => { audio.paused ? audio.play().catch(() => {}) : audio.pause(); };
$("#prev").onclick = () => (audio.currentTime = Math.max(0, audio.currentTime - 15));
$("#next").onclick = () => (audio.currentTime += 15);
audio.onplay = audio.onpause = sync;

/* ---------- Cuenta regresiva ---------- */
const meta = new Date(B.fecha).getTime();
const tick = () => {
  const t = meta - Date.now();
  if (t <= 0) { $("#cd").style.display = "none"; $("#cdfin").style.display = "block"; return; }
  const s = Math.floor(t / 1000), p = (n) => String(n).padStart(2, "0");
  $("#cdd").textContent = Math.floor(s / 86400); $("#cdh").textContent = p(Math.floor((s % 86400) / 3600));
  $("#cdm").textContent = p(Math.floor((s % 3600) / 60)); $("#cds").textContent = p(s % 60);
};
tick(); setInterval(tick, 1000);

/* ---------- Apertura del sobre ---------- */
$("#bow").addEventListener("click", () => {
  const env = $("#env"); if (env.classList.contains("opening")) return;
  env.classList.add("opening"); $("#stage").classList.add("opening");
  audio.play().catch(() => {});                      // la música empieza al tocar el lazo
  setTimeout(() => {
    $("#stage").classList.add("gone"); document.body.classList.add("opened");
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.2 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    petalos();
  }, 4800);
});

/* ---------- Pétalos (caída lenta: 16 a 26 segundos) ---------- */
function petalos() {
  let n = 0;
  const iv = setInterval(() => {
    const p = document.createElement("div"); p.className = "petal";
    p.style.left = Math.random() * 100 + "vw";
    p.style.setProperty("--dx", Math.random() * 200 - 100 + "px");
    const d = 16 + Math.random() * 10; p.style.animationDuration = d + "s";
    p.style.width = 9 + Math.random() * 8 + "px"; p.style.height = p.style.width;
    document.body.appendChild(p); setTimeout(() => p.remove(), d * 1000);
    if (++n > 90) clearInterval(iv);
  }, 800);
}
