/* Image Motion Studio — script comun pentru toate paginile */
const $ = s => document.querySelector(s), $$ = s => document.querySelectorAll(s);
const PAGE = document.body.dataset.page || "home";

const LINKS = {
  ig: "https://www.instagram.com/image_motionstudio",
  tt: "https://www.tiktok.com/@imagemotionstudio",
  fb: "https://www.facebook.com/imagemotionstudio"
};

/* ---------- TEXTE ---------- */
const T = {
ro: {
  ui: {
    "nav.home":"Acasă","nav.services":"Servicii","nav.process":"Cum lucrăm","nav.portfolio":"Portofoliu","nav.about":"Despre","nav.contact":"Contact",
    "hero.title":"Imagini & clipuri AI","hero.sub":"accesibile, rapide, spectaculoase",
    "hero.lead":"De la o imagine la un clip video de reclamă: transformăm ideile tale în conținut care atrage atenția pe TikTok, Instagram și Facebook.",
    "hero.cta1":"Scrie-ne în DM","hero.cta2":"Vezi portofoliul",
    "home.srv":"Ce creăm pentru tine","home.srvMore":"Vezi toate serviciile",
    "home.port":"Lucrări recente","home.portSub":"Apasă pe un clip ca să-l vezi.","home.portMore":"Vezi mai mult",
    "home.proc":"Cum lucrăm","home.procMore":"Află mai multe",
    "svc.h":"Servicii","svc.s":"Tot ce putem crea pentru tine, de la o singură imagine la o reclamă video completă.","svc.cta":"Scrie-ne despre acest serviciu",
    "proc.h":"Cum lucrăm","proc.s":"Un proces simplu, în 4 pași, fără surprize.","proc.needs":"Ce ne trebuie de la tine","proc.faqCta":"Vezi întrebările frecvente",
    "port.h":"Portofoliu","port.s":"Exemple de clipuri și materiale create în studio. Apasă pe un clip ca să-l vezi.","port.more":"Alte materiale",
    "about.h":"Despre noi","about.s":"Cine suntem și cum lucrăm.","about.vals":"Ce ne definește",
    "ct.mail":"E-mail","ct.h":"Contact","ct.s":"Cel mai rapid ne găsești în DM. Alege rețeaua preferată.","ct.faq":"Întrebări frecvente",
    "cta.title":"Hai să creăm ceva spectaculos","cta.lead":"Scrie-ne în DM pentru comenzi — răspundem rapid.",
    "foot.tag":"Imagini și clipuri AI","foot.nav":"Pagini","foot.follow":"Urmărește-ne"
  },
  titles:{home:"Image Motion Studio — Imagini și clipuri AI",services:"Servicii — Image Motion Studio",process:"Cum lucrăm — Image Motion Studio",portfolio:"Portofoliu — Image Motion Studio",about:"Despre — Image Motion Studio",contact:"Contact — Image Motion Studio"},
  services:[
    {t:"Imagini AI",d:"Creăm imagini originale cu AI, exact cum ți le-ai imaginat: portrete, fotografii de produs, concepte, ilustrații sau fundaluri pentru postările tale.",b:["Portrete și personaje","Imagini de produs și ambient","Bannere și postări pentru rețele sociale"]},
    {t:"Restaurare poze vechi",d:"Pozele vechi, zgâriate sau decolorate redevin clare. Eliminăm defectele, recuperăm detaliile și, la cerere, adăugăm culoare.",b:["Eliminare zgârieturi și pete","Claritate și detalii îmbunătățite","Colorizare poze alb-negru"]},
    {t:"Animare imagini",d:"Transformăm o fotografie într-un clip scurt în care persoanele și scena prind viață, cu mișcări naturale.",b:["Portrete de familie animate","Fotografii vechi care prind viață","Clip scurt, gata de postat"]},
    {t:"Clipuri video & reclame",d:"Clipuri verticale scurte, perfecte pentru TikTok, Instagram Reels și Facebook: de la idee și scenariu până la montajul final.",b:["Reclame pentru afaceri locale","Invitații și felicitări video","Text, logo și date de contact în clip"]},
    {t:"Proiecte PDF profesionale",d:"Prezentări, oferte comerciale, meniuri și cataloage cu aspect profesional, în identitatea brandului tău.",b:["Prezentări și oferte","Meniuri și flyere digitale","Cataloage de produse"]},
    {t:"Logo-uri",d:"Un logo și o identitate vizuală care te fac ușor de recunoscut, create împreună cu tine.",b:["Concept de logo","Paletă de culori și stil vizual","Fișiere gata de folosit pe rețele sociale"]},
    {t:"Copywriting: texte publicitare și e-mailuri",d:"Texte care atrag atenția și conving: reclame scrise, texte pentru postări și site, e-mailuri și mesaje către clienți, în tonul brandului tău.",b:["Reclame și texte pentru postări","E-mailuri și newslettere","Descrieri de produse și servicii"]}
  ],
  steps:[
    {t:"Ne scrii ideea",d:"Ne scrii în DM pe Instagram, TikTok sau Facebook. Spune-ne ce ai nevoie, unde vei folosi materialul și, dacă ai, trimite poze sau exemple care îți plac."},
    {t:"Primești oferta",d:"Îți spunem clar ce include comanda, prețul și termenul de livrare. Începem doar după ce ești de acord."},
    {t:"Creăm",d:"Generăm imaginile sau clipul cu AI, apoi le finisăm: montaj, culori, text, logo și sunet."},
    {t:"Livrăm",d:"Primești fișierele gata de postat. Dacă vrei schimbări, avem inclusă o rundă de ajustări."}
  ],
  needs:["O descriere a ideii tale","Pozele de restaurat sau animat, cât mai clare","Logo-ul și datele de contact, dacă apar în clip","Limba dorită: toate limbile"],
  faq:[
    {q:"Ce formate primesc?",a:"Imagini PNG sau JPG, clipuri MP4 verticale (9:16) pentru TikTok, Instagram și Facebook, iar documentele în PDF. Dacă ai nevoie de alt format, spune-ne."},
    {q:"Pot cere modificări?",a:"Da, o rundă de ajustări este inclusă în comandă."},
    {q:"Cât durează o comandă?",a:"Depinde de proiect. Îți spunem termenul în ofertă, înainte să începem."},
    {q:"În ce limbi pot primi materialul?",a:"În orice limbă dorești. Ne poți scrie în română, engleză sau germană, iar materialele le creăm în limba pe care o alegi."},
    {q:"Cum comand?",a:"Scrie-ne în DM pe Instagram, TikTok sau Facebook și stabilim detaliile."}
  ],
  about:["Image Motion Studio transformă ideile în imagini și clipuri create cu inteligență artificială. Lucrăm pentru oameni și afaceri care vor conținut vizual atractiv, fără bugete mari și fără așteptări lungi.","De la restaurarea unei poze de familie până la o reclamă video pentru afacerea ta, combinăm instrumentele AI cu o editare atentă, ca rezultatul să arate profesionist."],
  values:[{t:"Rapide",d:"Livrăm repede, ca să postezi exact când ai nevoie."},{t:"Accesibile",d:"Conținut profesionist, pe înțelesul oricărui buget."},{t:"Spectaculoase",d:"Imagini și clipuri care opresc scroll-ul."}]
},
en: {
  ui: {
    "nav.home":"Home","nav.services":"Services","nav.process":"How it works","nav.portfolio":"Portfolio","nav.about":"About","nav.contact":"Contact",
    "hero.title":"AI images & clips","hero.sub":"affordable, fast, spectacular",
    "hero.lead":"From a single image to a full video ad: we turn your ideas into content that grabs attention on TikTok, Instagram and Facebook.",
    "hero.cta1":"DM us","hero.cta2":"See our portfolio",
    "home.srv":"What we create for you","home.srvMore":"See all services",
    "home.port":"Recent work","home.portSub":"Tap a clip to watch it.","home.portMore":"See more",
    "home.proc":"How it works","home.procMore":"Learn more",
    "svc.h":"Services","svc.s":"Everything we can create for you, from a single image to a complete video ad.","svc.cta":"Message us about this service",
    "proc.h":"How it works","proc.s":"A simple 4-step process, no surprises.","proc.needs":"What we need from you","proc.faqCta":"See the FAQ",
    "port.h":"Portfolio","port.s":"Examples of clips and materials made in the studio. Tap a clip to watch it.","port.more":"More materials",
    "about.h":"About us","about.s":"Who we are and how we work.","about.vals":"What defines us",
    "ct.mail":"Email","ct.h":"Contact","ct.s":"The fastest way to reach us is by DM. Pick your favorite network.","ct.faq":"Frequently asked questions",
    "cta.title":"Let's create something spectacular","cta.lead":"DM us to place an order — we reply fast.",
    "foot.tag":"AI images and clips","foot.nav":"Pages","foot.follow":"Follow us"
  },
  titles:{home:"Image Motion Studio — AI images & clips",services:"Services — Image Motion Studio",process:"How it works — Image Motion Studio",portfolio:"Portfolio — Image Motion Studio",about:"About — Image Motion Studio",contact:"Contact — Image Motion Studio"},
  services:[
    {t:"AI images",d:"We create original AI images exactly as you imagined them: portraits, product shots, concepts, illustrations or backgrounds for your posts.",b:["Portraits and characters","Product and lifestyle images","Banners and social media posts"]},
    {t:"Old photo restoration",d:"Old, scratched or faded photos become clear again. We remove damage, recover detail and, on request, add color.",b:["Scratch and stain removal","Improved sharpness and detail","Colorization of black-and-white photos"]},
    {t:"Image animation",d:"We turn a photograph into a short clip where people and scene come to life with natural motion.",b:["Animated family portraits","Old photos that come alive","Short clip, ready to post"]},
    {t:"Video clips & ads",d:"Short vertical clips, perfect for TikTok, Instagram Reels and Facebook: from idea and script to the final edit.",b:["Ads for local businesses","Video invitations and greetings","Text, logo and contact details in the clip"]},
    {t:"Professional PDF projects",d:"Presentations, commercial offers, menus and catalogs with a professional look, in your brand's identity.",b:["Presentations and offers","Menus and digital flyers","Product catalogs"]},
    {t:"Logos",d:"A logo and visual identity that make you easy to recognize, created together with you.",b:["Logo concept","Color palette and visual style","Files ready for social media"]},
    {t:"Copywriting: ads, texts & emails",d:"Words that grab attention and convince: written ads, copy for posts and websites, emails and customer messages, in your brand's voice.",b:["Ad copy and post captions","Emails and newsletters","Product and service descriptions"]}
  ],
  steps:[
    {t:"Tell us your idea",d:"DM us on Instagram, TikTok or Facebook. Tell us what you need, where you'll use it and, if you have them, send photos or examples you like."},
    {t:"Get a quote",d:"We tell you clearly what the order includes, the price and the delivery time. We only start once you agree."},
    {t:"We create",d:"We generate the images or clip with AI, then polish them: editing, colors, text, logo and sound."},
    {t:"We deliver",d:"You get post-ready files. If you want changes, one round of tweaks is included."}
  ],
  needs:["A description of your idea","Photos to restore or animate, as clear as possible","Your logo and contact details, if they appear in the clip","The language you want: all languages"],
  faq:[
    {q:"What formats do I get?",a:"PNG or JPG images, vertical MP4 clips (9:16) for TikTok, Instagram and Facebook, and PDF documents. If you need another format, just ask."},
    {q:"Can I ask for changes?",a:"Yes, one round of tweaks is included in the order."},
    {q:"How long does an order take?",a:"It depends on the project. We give you the deadline in the quote, before we start."},
    {q:"Which languages can I get the material in?",a:"In any language you like. You can write to us in Romanian, English or German, and we create the materials in the language you choose."},
    {q:"How do I order?",a:"DM us on Instagram, TikTok or Facebook and we'll sort out the details."}
  ],
  about:["Image Motion Studio turns ideas into images and clips made with artificial intelligence. We work for people and businesses who want eye-catching visual content, without big budgets and without long waits.","From restoring a family photo to a video ad for your business, we combine AI tools with careful editing so the result looks professional."],
  values:[{t:"Fast",d:"We deliver quickly, so you can post exactly when you need to."},{t:"Accessible",d:"Professional content, within reach of any budget."},{t:"Spectacular",d:"Images and clips that stop the scroll."}]
},
de: {
  ui: {
    "nav.home":"Start","nav.services":"Leistungen","nav.process":"Ablauf","nav.portfolio":"Portfolio","nav.about":"Über uns","nav.contact":"Kontakt",
    "hero.title":"KI-Bilder & Clips","hero.sub":"erschwinglich, schnell, spektakulär",
    "hero.lead":"Vom einzelnen Bild bis zum Werbevideo: Wir machen aus Ihren Ideen Inhalte, die auf TikTok, Instagram und Facebook auffallen.",
    "hero.cta1":"Schreib uns per DM","hero.cta2":"Portfolio ansehen",
    "home.srv":"Was wir für dich erstellen","home.srvMore":"Alle Leistungen ansehen",
    "home.port":"Aktuelle Arbeiten","home.portSub":"Tippe auf einen Clip, um ihn anzusehen.","home.portMore":"Mehr ansehen",
    "home.proc":"So läuft es ab","home.procMore":"Mehr erfahren",
    "svc.h":"Leistungen","svc.s":"Alles, was wir für dich erstellen können, vom einzelnen Bild bis zum kompletten Werbevideo.","svc.cta":"Schreib uns zu dieser Leistung",
    "proc.h":"So läuft es ab","proc.s":"Ein einfacher Ablauf in 4 Schritten, ohne Überraschungen.","proc.needs":"Was wir von dir brauchen","proc.faqCta":"Häufige Fragen ansehen",
    "port.h":"Portfolio","port.s":"Beispiele für Clips und Materialien aus dem Studio. Tippe auf einen Clip, um ihn anzusehen.","port.more":"Weitere Materialien",
    "about.h":"Über uns","about.s":"Wer wir sind und wie wir arbeiten.","about.vals":"Was uns ausmacht",
    "ct.mail":"E-Mail","ct.h":"Kontakt","ct.s":"Am schnellsten erreichst du uns per DM. Wähle dein Lieblingsnetzwerk.","ct.faq":"Häufige Fragen",
    "cta.title":"Lass uns etwas Spektakuläres schaffen","cta.lead":"Schreib uns per DM für Bestellungen — wir antworten schnell.",
    "foot.tag":"KI-Bilder und Clips","foot.nav":"Seiten","foot.follow":"Folge uns"
  },
  titles:{home:"Image Motion Studio — KI-Bilder & Clips",services:"Leistungen — Image Motion Studio",process:"Ablauf — Image Motion Studio",portfolio:"Portfolio — Image Motion Studio",about:"Über uns — Image Motion Studio",contact:"Kontakt — Image Motion Studio"},
  services:[
    {t:"KI-Bilder",d:"Wir erstellen originelle KI-Bilder genau so, wie du sie dir vorstellst: Porträts, Produktfotos, Konzepte, Illustrationen oder Hintergründe für deine Posts.",b:["Porträts und Charaktere","Produkt- und Ambientebilder","Banner und Social-Media-Posts"]},
    {t:"Alte Fotos restaurieren",d:"Alte, zerkratzte oder verblasste Fotos werden wieder klar. Wir entfernen Schäden, holen Details zurück und färben auf Wunsch ein.",b:["Kratzer und Flecken entfernen","Mehr Schärfe und Details","Schwarz-Weiß-Fotos kolorieren"]},
    {t:"Bilder animieren",d:"Wir verwandeln ein Foto in einen kurzen Clip, in dem Personen und Szene mit natürlichen Bewegungen lebendig werden.",b:["Animierte Familienporträts","Alte Fotos, die lebendig werden","Kurzer Clip, bereit zum Posten"]},
    {t:"Videoclips & Werbung",d:"Kurze Hochformat-Clips, perfekt für TikTok, Instagram Reels und Facebook: von der Idee und dem Skript bis zum fertigen Schnitt.",b:["Werbung für lokale Unternehmen","Video-Einladungen und Grußvideos","Text, Logo und Kontaktdaten im Clip"]},
    {t:"Professionelle PDF-Projekte",d:"Präsentationen, Angebote, Menüs und Kataloge mit professionellem Look, in der Identität deiner Marke.",b:["Präsentationen und Angebote","Menüs und digitale Flyer","Produktkataloge"]},
    {t:"Logos",d:"Ein Logo und eine visuelle Identität, die dich leicht erkennbar machen, gemeinsam mit dir entwickelt.",b:["Logo-Konzept","Farbpalette und visueller Stil","Dateien für Social Media"]},
    {t:"Copywriting: Werbetexte & E-Mails",d:"Texte, die auffallen und überzeugen: Werbeanzeigen, Texte für Posts und Website, E-Mails und Kundennachrichten, im Ton deiner Marke.",b:["Werbetexte und Post-Texte","E-Mails und Newsletter","Produkt- und Leistungsbeschreibungen"]}
  ],
  steps:[
    {t:"Idee senden",d:"Schreib uns per DM auf Instagram, TikTok oder Facebook. Sag uns, was du brauchst, wofür du es nutzt und sende, wenn du magst, Fotos oder Beispiele."},
    {t:"Angebot erhalten",d:"Wir sagen dir klar, was die Bestellung enthält, den Preis und die Lieferzeit. Wir beginnen erst, wenn du zustimmst."},
    {t:"Wir erstellen",d:"Wir generieren Bilder oder Clip mit KI und veredeln sie anschließend: Schnitt, Farben, Text, Logo und Ton."},
    {t:"Lieferung",d:"Du erhältst postfertige Dateien. Wenn du Änderungen möchtest, ist eine Korrekturrunde inklusive."}
  ],
  needs:["Eine Beschreibung deiner Idee","Fotos zum Restaurieren oder Animieren, möglichst klar","Dein Logo und deine Kontaktdaten, falls sie im Clip erscheinen","Die gewünschte Sprache: alle Sprachen"],
  faq:[
    {q:"Welche Formate erhalte ich?",a:"PNG- oder JPG-Bilder, vertikale MP4-Clips (9:16) für TikTok, Instagram und Facebook sowie PDF-Dokumente. Brauchst du ein anderes Format, sag uns Bescheid."},
    {q:"Kann ich Änderungen verlangen?",a:"Ja, eine Korrekturrunde ist in der Bestellung enthalten."},
    {q:"Wie lange dauert eine Bestellung?",a:"Das hängt vom Projekt ab. Den Termin nennen wir dir im Angebot, bevor wir beginnen."},
    {q:"In welchen Sprachen erhalte ich das Material?",a:"In jeder Sprache, die du möchtest. Du kannst uns auf Rumänisch, Englisch oder Deutsch schreiben, und wir erstellen die Materialien in der Sprache deiner Wahl."},
    {q:"Wie bestelle ich?",a:"Schreib uns per DM auf Instagram, TikTok oder Facebook, dann klären wir die Details."}
  ],
  about:["Image Motion Studio macht aus Ideen Bilder und Clips, die mit künstlicher Intelligenz entstehen. Wir arbeiten für Menschen und Unternehmen, die ansprechende visuelle Inhalte wollen, ohne großes Budget und ohne lange Wartezeiten.","Von der Restaurierung eines Familienfotos bis zum Werbevideo für dein Unternehmen verbinden wir KI-Werkzeuge mit sorgfältigem Schnitt, damit das Ergebnis professionell aussieht."],
  values:[{t:"Schnell",d:"Wir liefern zügig, damit du genau dann posten kannst, wenn du willst."},{t:"Erschwinglich",d:"Professionelle Inhalte, für jedes Budget erreichbar."},{t:"Spektakulär",d:"Bilder und Clips, die das Scrollen stoppen."}]
}
};

const REELS = [
  ["cat_office_v3",        {ro:"Video 1", en:"Video 1", de:"Video 1"}],
  ["coffee_ai",            {ro:"Video 2", en:"Video 2", de:"Video 2"}],
  ["pisica_neagra_zapada", {ro:"Video 3", en:"Video 3", de:"Video 3"}],
  ["massage_portofoliu",   {ro:"Video 4", en:"Video 4", de:"Video 4"}],
  ["yourad_test2",         {ro:"Video 5", en:"Video 5", de:"Video 5"}],
  ["traian_decebal",       {ro:"Video 6", en:"Video 6", de:"Video 6"}],
  ["ims_fitness",          {ro:"Video 7", en:"Video 7", de:"Video 7"}],
  ["one_more_video",       {ro:"Video 8", en:"Video 8", de:"Video 8"}]
];

const PLAY = '<svg viewBox="0 0 100 100"><path d="M34 22 L34 78 Q34 84 40 81 L84 54 Q89 50 84 46 L40 19 Q34 16 34 22Z"/></svg>';
const PAGES = [["home","index.html","nav.home"],["services","servicii.html","nav.services"],["process","cum-lucram.html","nav.process"],["portfolio","portofoliu.html","nav.portfolio"],["about","despre.html","nav.about"]];

/* ---------- LAYOUT COMUN ---------- */
function buildLayout(){
  const nav = PAGES.map(([k,h,i]) => `<a href="${h}" data-i18n="${i}"${k===PAGE?' class="active"':''}></a>`).join("");
  $("#hdr").outerHTML = `
  <header class="nav" id="top">
    <a class="brand" href="index.html" aria-label="Image Motion Studio">
      <img src="assets/logo-icon.svg" alt="" width="44" height="44">
      <span class="brand-txt"><b>IMAGE MOTION</b><i>STUDIO</i></span>
    </a>
    <nav class="links" id="links">${nav}<a href="contact.html" class="btn btn-sm${PAGE==="contact"?" active":""}" data-i18n="nav.contact"></a></nav>
    <div class="lang" role="group" aria-label="Language"><button data-lang="en">EN</button><button data-lang="de">DE</button><button data-lang="ro">RO</button></div>
    <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
  </header>`;
  $("#ftr").outerHTML = `
  <footer class="foot"><div class="wrap foot-in">
    <div class="foot-brand"><img src="assets/logo-icon.svg" alt="" width="40" height="40"><div><b>IMAGE MOTION STUDIO</b><span data-i18n="foot.tag"></span></div></div>
    <div class="foot-col"><h4 data-i18n="foot.nav"></h4>${PAGES.map(([k,h,i])=>`<a href="${h}" data-i18n="${i}"></a>`).join("")}<a href="contact.html" data-i18n="nav.contact"></a></div>
    <div class="foot-col"><h4 data-i18n="foot.follow"></h4><a href="${LINKS.ig}" target="_blank" rel="noopener">Instagram</a><a href="${LINKS.tt}" target="_blank" rel="noopener">TikTok</a><a href="${LINKS.fb}" target="_blank" rel="noopener">Facebook</a></div>
  </div><div class="wrap copy">© <span id="yr"></span> Image Motion Studio</div></footer>`;
  $("#yr").textContent = new Date().getFullYear();
  $("#burger").onclick = () => $("#links").classList.toggle("open");
  $$("#links a").forEach(a => a.addEventListener("click", () => $("#links").classList.remove("open")));
  $$(".lang button").forEach(b => b.onclick = () => setLang(b.dataset.lang));
}

/* ---------- RANDARE PE LIMBĂ ---------- */
function cta(d){
  return `<div class="wrap center"><img src="assets/logo-icon.svg" alt="" width="84" height="84" class="cta-logo"><h2>${d.ui["cta.title"]}</h2><p class="lead">${d.ui["cta.lead"]}</p>
  <div class="cta-row c"><a class="btn" href="${LINKS.ig}" target="_blank" rel="noopener">Instagram</a><a class="btn ghost" href="${LINKS.tt}" target="_blank" rel="noopener">TikTok</a><a class="btn ghost" href="${LINKS.fb}" target="_blank" rel="noopener">Facebook</a></div></div>`;
}
function faqHtml(d){ return d.faq.map(f => `<details class="faq"><summary>${f.q}</summary><p>${f.a}</p></details>`).join(""); }

function render(l){
  const d = T[l];
  if ($("#srvCards")) $("#srvCards").innerHTML = d.services.map((s,i) => `<a class="card" href="servicii.html#s${i+1}"><span class="num">${i+1}</span><h3>${s.t}</h3><p>${s.d.split(/[:.]/)[0]}</p></a>`).join("");
  if ($("#procMini")) $("#procMini").innerHTML = d.steps.map((s,i) => `<div class="step"><b>0${i+1}</b><h3>${s.t}</h3><p>${s.d}</p></div>`).join("");
  if ($("#svcList")) $("#svcList").innerHTML = d.services.map((s,i) => `<article class="svc" id="s${i+1}"><div class="svc-num">${i+1}</div><div class="svc-body"><h3>${s.t}</h3><p>${s.d}</p><ul>${s.b.map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn btn-sm" href="contact.html">${d.ui["svc.cta"]}</a></div></article>`).join("");
  if ($("#stepList")) $("#stepList").innerHTML = d.steps.map((s,i) => `<div class="step big"><b>0${i+1}</b><div><h3>${s.t}</h3><p>${s.d}</p></div></div>`).join("");
  if ($("#needs")) $("#needs").innerHTML = d.needs.map(x => `<li>${x}</li>`).join("");
  if ($("#faq")) $("#faq").innerHTML = faqHtml(d);
  if ($("#aboutText")) $("#aboutText").innerHTML = d.about.map(p => `<p>${p}</p>`).join("");
  if ($("#values")) $("#values").innerHTML = d.values.map(v => `<div class="card"><h3>${v.t}</h3><p>${v.d}</p></div>`).join("");
  if ($("#cta")) $("#cta").innerHTML = cta(d);
  $$(".reel .cap").forEach((c,i) => c.textContent = REELS[+c.parentElement.dataset.i][1][l]);
  $$("[data-loc]").forEach(img => img.src = img.dataset.loc.replace("{l}", l));
  $$("[data-i18n]").forEach(el => { const v = d.ui[el.dataset.i18n]; if (v) el.textContent = v; });
  document.title = d.titles[PAGE];
  document.documentElement.lang = l;
  $$(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === l));
  setMail();
  observe();
}

function setLang(l){ render(l); try { localStorage.setItem("ims-lang", l); } catch(e){} }

/* ---------- CLIPURI ---------- */
function buildReels(){
  const box = $("#reels"); if (!box) return;
  const n = +(box.dataset.count || REELS.length);
  box.innerHTML = REELS.slice(0,n).map(([f],i) => `<div class="reel" data-i="${i}"><video src="assets/portfolio/${f}.mp4" poster="assets/portfolio/${f}.jpg" playsinline loop preload="none"></video><span class="pl">${PLAY}</span><span class="cap"></span></div>`).join("");
  $$(".reel").forEach(r => {
    const v = r.querySelector("video");
    r.onclick = () => {
      if (v.paused) {
        $$(".reel video").forEach(o => { if (o !== v) { o.pause(); o.parentElement.classList.remove("playing"); } });
        const hv = $("#heroVid"); if (hv) { hv.pause(); $("#heroPhone").classList.remove("playing"); }
        v.play(); r.classList.add("playing");
      } else { v.pause(); r.classList.remove("playing"); }
    };
  });
}

/* ---------- CLIP HERO (play la apasare) ---------- */
function buildHero(){
  const ph = $("#heroPhone"), v = $("#heroVid"); if (!ph || !v) return;
  const stop = () => { v.pause(); ph.classList.remove("playing"); };
  ph.onclick = () => {
    if (v.paused) {
      $$(".reel video").forEach(o => { o.pause(); o.parentElement.classList.remove("playing"); });
      v.play(); ph.classList.add("playing");
    } else stop();
  };
  v.onended = () => { v.currentTime = 0; ph.classList.remove("playing"); };
}

/* ---------- ANIMAȚII LA SCROLL ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.12});
function observe(){
  $$(".card,.step,.svc,.faq,.social,.page-head h1,.sec h2").forEach((el,i) => {
    if (el.classList.contains("reveal")) return;
    el.classList.add("reveal"); el.style.transitionDelay = (i%6)*60+"ms"; io.observe(el);
  });
}

/* ---------- START ---------- */
buildLayout();
buildReels();
buildHero();
let saved = "en";
try { saved = localStorage.getItem("ims-lang") || (navigator.language||"en").slice(0,2); } catch(e){}
render(T[saved] ? saved : "en");

/* e-mail asamblat in browser (nu apare in clar in sursa paginii) */
function setMail(){
  const a = atob("ZGFuaWVsY29qb2NlYTdAZ21haWwuY29t"), h = "mail" + "to:" + a;
  const c = $("#mailCard"); if (c) { c.href = h; $("#mailTxt").textContent = a; }
}
