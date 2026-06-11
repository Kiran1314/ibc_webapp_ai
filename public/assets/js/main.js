function nav(id){
  const pages={home:'index.html',about:'about.html',clients:'clients.html',services:'services.html',work:'work.html',intel:'ibc-intelligence.html',blogs:'blogs.html','blog-post':'blog-post.html',contact:'contact.html'};
  if(pages[id]) window.location.href=pages[id];
}
function toggleMenu(){
  document.body.classList.toggle('menu-open');
}
function closeMenu(){
  document.body.classList.remove('menu-open');
}
function toggleChat(){
  document.body.classList.toggle('chat-open');
}
document.addEventListener('click',e=>{
  if(!document.body.classList.contains('chat-open')) return;
  if(e.target.closest('.chat-panel')||e.target.closest('.chat-fab')) return;
  document.body.classList.remove('chat-open');
});
function updateHeaderState(){
  const onHome = document.getElementById('pg-home')?.classList.contains('active');
  document.body.classList.toggle('home-hero-top', !!onHome && window.scrollY <= 50);
}
function stab(id,btn){
  document.querySelectorAll('.stab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.spanel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  const sp=document.getElementById('sp-'+id);
  if(sp){
    sp.classList.add('active');
    resetReveals(sp);
  }
}
function tfaq(btn){
  const item=btn.parentElement;
  const open=item.classList.contains('open');
  document.querySelectorAll('.fi').forEach(i=>i.classList.remove('open'));
  if(!open)item.classList.add('open');
}
function wf(cat,btn){
  document.querySelectorAll('.wfbtn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.witem').forEach(i=>{
    i.style.display=(cat==='all'||i.dataset.c===cat)?'':'none';
  });
}
const serviceIcons={
  'IVR Systems':'<path d="M5 4h14v16H5z"/><path d="M9 8h6M9 12h1M14 12h1M9 16h1M14 16h1"/>',
  'On-Hold Messaging':'<path d="M4 12a8 8 0 0116 0"/><path d="M4 12v4a2 2 0 002 2h2v-6H4zM20 12v4a2 2 0 01-2 2h-2v-6h4z"/>',
  'Multilingual Voice-Overs':'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',
  'Jingle Production':'<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  'Dubbing & Localization':'<path d="M4 5h10v8H7l-3 3z"/><path d="M12 11h8v8h-5l-3 3z"/>',
  'Sound Design':'<path d="M4 14v-4M8 17V7M12 20V4M16 17V7M20 14v-4"/>',
  'Corporate Films':'<rect x="3" y="6" width="14" height="12" rx="2"/><path d="M17 10l4-3v10l-4-3"/>',
  'Commercials & Ads':'<path d="M4 14l10-5v10L4 14z"/><path d="M14 10h3a3 3 0 010 6h-3"/>',
  'Event Coverage':'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/>',
  'Drone & Aerial':'<path d="M12 12h.01"/><path d="M7 7l5 5 5-5M7 17l5-5 5 5"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>',
  'Post-Production':'<path d="M4 6h16v12H4z"/><path d="M8 6v12M16 6v12M4 10h16M4 14h16"/>',
  'Corporate Documentaries':'<path d="M5 4h10l4 4v12H5z"/><path d="M15 4v4h4M8 13h8M8 17h5"/>',
  'Product Photography':'<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',
  'Real Estate & Architecture':'<path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/>',
  'Industrial Photography':'<path d="M3 20h18"/><path d="M5 20V9l5 3V9l5 3V7h4v13"/>',
  'Corporate Portraits':'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
  'Event Photography':'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M8 14h8"/>',
  'AI Video Generation':'<rect x="3" y="6" width="14" height="12" rx="2"/><path d="M17 10l4-3v10l-4-3"/><path d="M8 3v3M12 3v3"/>',
  'AI Photography':'<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><path d="M12 9v8M8 13h8"/>',
  'Synthetic Media':'<rect x="6" y="5" width="12" height="14" rx="4"/><path d="M9 10h.01M15 10h.01M10 15h4"/>',
  'AI Based Automation':'<path d="M4 12a8 8 0 0113-6"/><path d="M17 2v4h-4M20 12a8 8 0 01-13 6"/><path d="M7 22v-4h4"/>',
  'AI Creative Direction':'<path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z"/>',
  'AI Strategy Consulting':'<path d="M4 19V5h16v14z"/><path d="M8 15l3-3 2 2 4-5"/>',
  'Web Design & Dev':'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  'E-Learning Platforms':'<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5z"/>',
  'Interactive Media':'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8M12 18v4M9 11h6"/>',
  'Custom Digital Tools':'<path d="M14.7 6.3a4 4 0 015.7 5.7L12 20l-4-4z"/><path d="M4 4l5 5"/>',
  'UI/UX Design':'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h5M8 16h8"/>',
  'SEO & Digital Strategy':'<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5M8 12l2 2 5-5"/>',
  'Motion Graphics':'<path d="M4 4h16v16H4z"/><path d="M8 4v16M16 4v16M4 8h16M4 16h16"/>',
  'Virtual Reality (VR)':'<path d="M3 12c0-3 2-5 5-5h8c3 0 5 2 5 5v3a3 3 0 01-3 3h-2l-2-3h-4l-2 3H6a3 3 0 01-3-3z"/>',
  'Augmented Reality (AR)':'<path d="M12 2l8 4v12l-8 4-8-4V6z"/><path d="M12 22V12M4 6l8 6 8-6"/>',
  '2D Animation':'<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6v6H9z"/>',
  '3D Visualization':'<path d="M12 2l8 4v12l-8 4-8-4V6z"/><path d="M12 2v10l8-6M12 12l-8-6"/>',
  '360° Video':'<path d="M4 12a8 8 0 0114-5"/><path d="M18 3v4h-4M20 12a8 8 0 01-14 5"/><path d="M6 21v-4h4"/>'
};
document.querySelectorAll('.sfeat').forEach(card=>{
  const title=card.querySelector('h4')?.textContent.trim();
  const icon=card.querySelector('.sfi svg');
  if(title&&icon&&serviceIcons[title]) icon.innerHTML=serviceIcons[title];
});
const revealTargets='.hcontent>*,.sec,.sec-sm,.sphdr,.srv-card,.tcard,.bcard,.sfeat,.witem,.cpc,.bfcard,.ic,.imc,.ipj,.cform,.cdet,.ahwrap>div,.avwrap,.stats-bar .sitem,.split-grid>div,.fcard,.fquote,.article-kicker,.article-hero h1,.article-standfirst,.article-meta,.article-cover,.article-content>*,#pg-intel .ibdg,#pg-intel .ihg>div,#pg-intel .ivp,#pg-intel .is>.il,#pg-intel .is>.it,#pg-intel .is>.id,#pg-intel .itg,#pg-intel .ibb';
const revealNodes=[...new Set([...document.querySelectorAll(revealTargets)])];
revealNodes.forEach(el=>el.classList.add('reveal'));
['.hcontent','.ahwrap','.ihg','.ics','.itm','.iwk','.srv-grid','.tgrid','.tvid-grid','.sfeat-grid','.bgrid','.cpgrid','.client-stat-grid','.stats-bar','.itgs'].forEach(sel=>{
  document.querySelectorAll(sel).forEach(parent=>{
    [...parent.children].filter(child=>child.classList.contains('reveal')).forEach((child,i)=>{
      child.style.setProperty('--reveal-delay',`${Math.min(i*.055,.24)}s`);
    });
  });
});
const revealer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');revealer.unobserve(entry.target)}});
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
function resetReveals(scope=document){
  scope.querySelectorAll('.reveal').forEach(el=>{
    el.classList.remove('in-view');
    revealer.unobserve(el);
    revealer.observe(el);
  });
}
resetReveals(document);
updateHeaderState();
window.addEventListener('scroll',updateHeaderState,{passive:true});
