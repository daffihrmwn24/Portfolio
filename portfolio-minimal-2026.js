/* Minimal elegant homepage composition.
 * Rendered video stills reference already-public Google Drive files and user-provided YouTube URLs.
 * No invented portraits, metrics, or media. Preserves all lower-page project galleries.
 */
(()=>{
const hero=document.querySelector('.hero'),main=hero?.querySelector('.hero-main');
if(!hero||!main)return;
const left=main.querySelector('.hero-copy'),right=main.querySelector('.hero-aside'),bottom=main.querySelector('.hero-bottom'),title=hero.querySelector('.hero-title');
if(!left||!right||!bottom||!title)return;
hero.querySelector('.hero .eyebrow')?.replaceChildren(document.createTextNode('DAFFI HARMAWAN · BANDUNG'));
title.innerHTML='Saya bikin film,<br>video, dan foto.';
left.append(bottom);
const p=bottom.querySelector('p');
if(p)p.textContent='Saya kerja di balik kamera—kadang di panggung musik, di lokasi film, atau di tengah acara yang cuma terjadi sekali. Di sini ada beberapa pekerjaan yang pernah saya tangani.';
const actions=document.createElement('div');actions.className='hero-actions';
const work=document.createElement('a');work.className='hero-action primary';work.href='#case-stories';work.textContent='Lihat proyek ↗';
const video=document.createElement('a');video.className='hero-action secondary';video.href='#youtube';video.textContent='▶  Tonton video';
actions.append(work,video);
bottom.append(actions);
const visual=document.createElement('div');visual.className='hero-visual';
const poster=document.createElement('img');
poster.src='https://drive.google.com/thumbnail?id=1bTWg7NrTDq_yqGqO1l0ImlJ06WLdsa7R&sz=w1600';
poster.alt='Cuplikan produksi video Burgerkill dari arsip portofolio';poster.decoding='async';poster.loading='eager';
poster.onerror=()=>poster.remove();
const glass=document.createElement('a');glass.href='#story';glass.className='hero-glass';glass.setAttribute('aria-label','Baca cerita di balik karya');
const copy=document.createElement('div');copy.innerHTML='<strong>Di balik layar Burgerkill</strong><span>Creative Producer · 25th Kill-vesarry</span>';
const go=document.createElement('span');go.className='hero-go';go.setAttribute('aria-hidden','true');go.textContent='↗';
glass.append(copy,go);visual.append(poster,glass);
right.replaceChildren(visual);
const bento=hero.querySelector('.hero-bento');
if(bento){
 const tiles=[
 {title:'Burgerkill 25th Kill-vesarry',category:'Produksi kreatif',type:'drive',id:'1bTWg7NrTDq_yqGqO1l0ImlJ06WLdsa7R',url:'#case-stories'},
 {title:'PON XXI',category:'Dokumentasi acara',type:'drive',id:'17xwnc7UBTJ2XpaUXwXGGDhMS1MAYbrrC',url:'#case-stories'},
 {title:'Ruang Musik — Yowha',category:'Sinematografi',type:'youtube',id:'ZpSzEz1hKPs',url:'#youtube'},
 {title:'Film Pendek FKG Unjani',category:'Film pendek · 2021',type:'youtube',id:'3FBrlQIqP4c',url:'#youtube'},
 {title:'Maison Teraskita',category:'Penulisan naskah',type:'youtube',id:'w-2TW4XFvKU',url:'#youtube'},
 {title:'Jakarta Light Festival',category:'Dokumentasi visual',type:'drive',id:'17rRlmuQERy3EqSJVMX9VHF4n7oz9RLW8',url:'#drive-projects'}
 ];
 bento.replaceChildren();
 tiles.forEach((item,i)=>{
 const card=document.createElement('div');card.className='hero-tile';
 const placeholder=document.createElement('div');placeholder.className='tile-placeholder';
 const img=new Image();img.alt='Thumbnail proyek '+item.title;img.loading=i<3?'eager':'lazy';img.decoding='async';
 img.src=item.type==='youtube'?'https://i.ytimg.com/vi/'+encodeURIComponent(item.id)+'/hqdefault.jpg':'https://drive.google.com/thumbnail?id='+encodeURIComponent(item.id)+'&sz=w1200';
 img.onerror=()=>img.remove();
 const eyebrow=document.createElement('span');eyebrow.className='tile-top';eyebrow.textContent=item.category;
 const heading=document.createElement('span');heading.className='tile-label';heading.textContent=item.title;
 const arr=document.createElement('span');arr.className='tile-arrow';arr.textContent='↗';arr.setAttribute('aria-hidden','true');
 const a=document.createElement('a');a.href=item.url;a.setAttribute('aria-label','Jelajahi proyek '+item.title);
 card.append(placeholder,img,eyebrow,heading,arr,a);bento.append(card)
 });
}
const process=document.createElement('section');process.className='story-process-mini';process.id='proses-kreatif';process.setAttribute('aria-label','Pendekatan kreatif');
const summary=document.createElement('div');summary.className='process-summary';summary.innerHTML='<div class="process-kicker">Cara saya kerja</div><h2>Biasanya dimulai dari ngobrol.</h2><p>Setelah tahu apa yang mau dibuat, baru saya pikirkan gambar, orang-orang yang terlibat, dan cara mengerjakannya.</p>';
process.append(summary);
for(const c of [
 {n:'◎',title:'Konteks',desc:'Ngobrol soal kebutuhan proyek dan apa yang perlu ditunjukkan.'},
 {n:'♙',title:'Peran',desc:'Jelas siapa mengerjakan apa, termasuk bagian saya.'},
 {n:'▤',title:'Proses',desc:'Persiapan, pengambilan gambar, dan semua keputusan kecil di lokasi.'},
 {n:'↗',title:'Hasil',desc:'Foto atau video yang akhirnya bisa ditonton.'}
]){const card=document.createElement('article');card.className='process-card';const icon=document.createElement('span');icon.className='symbol';icon.setAttribute('aria-hidden','true');icon.textContent=c.n;const h=document.createElement('h3');h.textContent=c.title;const p=document.createElement('p');p.textContent=c.desc;card.append(icon,h,p);process.append(card)}
hero.after(process);
const nav=document.querySelector('.navlinks');
const selected=['#case-stories','#work','#story','#experience','#youtube','#contact'];
if(nav){
 const labels={'#case-stories':'Studi Kasus','#work':'Karya','#story':'Tentang','#experience':'Pengalaman','#youtube':'Video','#contact':'Kontak'};
 nav.replaceChildren();
 for(const link of selected){const a=document.createElement('a');a.href=link;a.textContent=labels[link];nav.append(a)}
 const menu=document.querySelector('#menu');
 if(menu){nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}))}
}
const contact=document.querySelector('#contact .eyebrow');if(contact)contact.textContent='Punya proyek?';
const footnote=document.querySelector('#contact .contact-intro');if(footnote)footnote.textContent='Kalau lagi cari DoP, videografer, fotografer panggung, atau rekan produksi, kabarin saya. Ceritain proyeknya lewat email atau WhatsApp.';
})();
