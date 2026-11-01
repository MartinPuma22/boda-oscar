const B = BODA, I = B.img;
const $ = (s) => document.querySelector(s);
const img = (src, alt = "", cls = "") => `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" onerror="this.style.visibility='hidden'">`;
const flor = (pos) => img(I.flores, "", `flor ${pos}`);
const lista = (a) => a.map((x) => `<p>${x}</p>`).join("");
const corazon = (x) => `<path transform="translate(${x} 26) scale(.55) translate(-150 -10.5)" d="M150 20c-15-9-15-19-7-19 3 0 6 2 7 5 1-3 4-5 7-5 8 0 8 10-7 19z" fill="#d3ded6" stroke="none"/>`;
const ladoOnda = `<path d="M38 26C50 14 64 38 78 26S106 14 120 26S142 36 160 32"/>`;
const lazo = `<path d="M160 32C176 20 188 6 174 4C168 3 162 8 160 14C158 8 152 3 146 4C132 6 144 20 160 32"/>`;
/* ---------- Siluetas dibujadas con código ---------- */
const corazonLinea = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 5C-9 -1 -5 -9 0 -4C5 -9 9 -1 0 5z"/>`;
/* ---------- Siluetas de personas (rellenas) ---------- */
const FIG = "#8ea396", OSC = "#6f8579", DET = "#fffdf4";
const mitad = (d) => `<path d="${d}"/><path d="${d}" transform="matrix(-1 0 0 1 100 0)"/>`;
const hombre = (x) => `<g transform="translate(${x - 50} 0)" fill="${FIG}">
<ellipse cx="50" cy="15" rx="8" ry="10"/><path d="M41.5 13C41 3 59 3 58.5 13C55 8 45 8 41.5 13Z" fill="${OSC}"/>
<path d="M45.5 23H54.5L55 32H45Z"/>
${mitad("M50 31H55C62 33 70 34 74 38C77 42 77 50 77 58L74 94L72 104H50Z")}
${mitad("M50 104H69C69 130 68 160 66.5 190H56C54 160 52 140 50 120Z")}
${mitad("M55 189H67C72 190 75 193 75 197H55Z")}
<ellipse cx="71" cy="109" rx="3" ry="5"/><ellipse cx="29" cy="109" rx="3" ry="5"/>
<path d="M45 31L50 62L55 31Z" fill="${DET}"/><path d="M50 35L48.2 56L50 64L51.8 56Z" fill="${OSC}"/>
<g fill="none" stroke="${DET}" stroke-width="1.1" stroke-linecap="round"><path d="M45 31L38 52L50 70L62 52L55 31"/><path d="M67 56C68 74 67 90 66 103M33 56C32 74 33 90 34 103"/></g></g>`;
const mujer = (x, velo) => `<g transform="translate(${x - 50} 0)" fill="${FIG}">
${velo ? `<g opacity=".35">${mitad("M50 5C66 10 72 40 74 98C72 102 66 102 64 98C64 60 60 30 50 22Z")}</g>` : ""}
<ellipse cx="50" cy="16" rx="7.2" ry="9.3"/><path d="M42.5 15C42 6 58 6 57.5 15C55 10 45 10 42.5 15Z" fill="${OSC}"/><circle cx="50" cy="6" r="4.5" fill="${OSC}"/>
<path d="M46.5 25H53.5L54 32H46Z"/>
${mitad("M50 31H54C59 33 64 34 66 38C68 42 68 48 67 56C66 66 65 74 64 84L63 90L60 88C60 80 59 70 59 52C58 60 57 70 57 78C58 82 72 150 88 190C72 194 60 194 50 193Z")}
<g fill="none" stroke="${DET}" stroke-width="1.1" stroke-linecap="round"><path d="M43 36C47 45 53 45 57 36"/><path d="M43 79Q50 82 57 79"/><path d="M50 90C49 130 46 160 40 192M50 90C51 130 54 160 60 192" stroke-opacity=".5"/></g>
<g fill="#b7cabb" stroke="${DET}" stroke-width="1"><circle cx="50" cy="86" r="4.5"/><circle cx="45" cy="90" r="3.8"/><circle cx="55" cy="90" r="3.8"/><circle cx="50" cy="93" r="3.8"/></g></g>`;
const svgPareja = `<svg class="ico ico-pareja reveal" viewBox="0 0 170 205">${hombre(45)}${mujer(125, true)}<g fill="none" stroke="#b7cabb" stroke-width="1.2">${corazonLinea(85, 22)}${corazonLinea(99, 14, 0.8)}${corazonLinea(73, 14, 0.7)}</g></svg>`;
const svgVestimenta = `<svg class="ico ico-vestir reveal" viewBox="0 0 150 205">${hombre(38)}${mujer(112, false)}</svg>`;
const trazo = 'fill="none" stroke="#7f9186" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"';
const svgLibro = `<svg class="ico ico-libro" viewBox="0 0 100 70"><path d="M50 14C38 8 22 8 8 12V58C22 54 38 54 50 60Z" fill="#bccfc1"/><path d="M50 14C62 8 78 8 92 12V58C78 54 62 54 50 60Z" fill="#c9d8cd"/><path d="M16 22C26 20 38 22 44 26M16 30C26 28 38 30 44 34M16 38C26 36 38 38 44 42M84 22C74 20 62 22 56 26M84 30C74 28 62 30 56 34M84 38C74 36 62 38 56 42" fill="none" stroke="#fffdf4" stroke-width="1.2" stroke-linecap="round"/><g fill="none" stroke="#b7cabb" stroke-width="1.2">${corazonLinea(50, 6, 1.1)}</g></svg>`;
const svgCofre = `<svg class="ico ico-cofre reveal" viewBox="0 0 100 80" fill="none" stroke="#b7cabb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 34V26C12 12 28 8 50 8C72 8 88 12 88 26V34Z"/><rect x="12" y="34" width="76" height="38" rx="2"/><path d="M26 11V72M74 11V72"/><path d="M12 46H88M12 58H88"/><rect x="41" y="27" width="18" height="15" rx="3" fill="#fffdf4"/><circle cx="50" cy="33.5" r="2.2"/><path d="M50 35.7V39"/></svg>`;const orn = `<div class="orn reveal"><svg viewBox="0 0 320 40" fill="none" stroke="#c9d7cd" stroke-width="1.4" stroke-linecap="round">${corazon(30)}${corazon(290)}${ladoOnda}<g transform="matrix(-1 0 0 1 320 0)">${ladoOnda}</g>${lazo}</svg></div>`;const ico = {
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
  <h3 class="script">Ceremonia</h3>${svgPareja}
  <table>${B.ceremonia.horarios.map(([a, b]) => `<tr><td>${a}:</td><td>${b}</td></tr>`).join("")}</table>
  <p>${B.ceremonia.lugar}</p><p class="mini">${B.ceremonia.nota}</p>
  <a class="btn" href="${B.ceremonia.mapa}" target="_blank" rel="noopener">VER MAPA</a>
</div>
<div class="card reveal d1"><h3 class="script">Referencias para llegar a nuestra boda:</h3><div class="refs">${lista(B.referencias)}</div></div></section>
${orn}
<section class="center pad">
  <h3 class="script reveal grande">Código de vestimenta</h3>
  ${svgVestimenta}
  <p class="cod reveal">${B.vestimenta.codigo}</p>
  <p class="reveal">Hombres: ${B.vestimenta.hombres}<br>Mujeres : ${B.vestimenta.mujeres}</p>
</section>
${orn}
<section class="blk"><div class="torn alta ambos reveal">${img(I.foto3)}</div>${flor("bl")}</section>

<section class="pad"><div class="card reveal">
  <h3 class="script">Confirmación de asistencia</h3>${svgLibro}
  <p>${B.confirmacion.texto}</p>
  <a class="btn solid" href="${wa}" target="_blank" rel="noopener">CONFIRMAR ASISTENCIA</a>
</div></section>

<section class="center pad">
  ${svgCofre}<h3 class="script reveal grande">Regalos</h3><p class="reveal d1">${B.regalos}</p>
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
