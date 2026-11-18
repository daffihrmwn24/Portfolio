/* Drive project refresh from named folder inventory dated 2026-11-18.
 * Project-linked video files were verified as anyone:reader on 18 Nov 2026.
 * Rendering these existing public-link videos does not change Drive permissions.
 * Displayed roles still follow source folder labels and may require credit review.
 */
(()=>{
const projects=[
{title:"Valta Ltd. — Video Content",role:"Videographer Lead",year:"2026",type:"Brand",cover:"VALTA / CONTENT",mediaId:"14KMLhXNrDtFpoF9mbmyy6KeRjK9LFZiQ",desc:"Video content archive associated with Valta Ltd. See the video work from the named Valta Ltd. folder."},
{title:"PARTE Kuala Lumpur — Photosession",role:"Videographer",year:"2026",type:"Brand",cover:"PARTE / KUALA LUMPUR",mediaId:"1W-7OllpyA6QRUrqOJqaSPWVl6HFpxWYW",desc:"Photosession video deliverable. Project association and role are drawn from the named Drive folder."},
{title:"Film & Television UPI — Video Profile",role:"Director",year:"2021",type:"Film",cover:"FILM & / TELEVISION",mediaId:"1NOOscnYMXcAFnolOb-dvbD7saxmYhRUN",desc:"Profile video for Film and Television UPI; year follows the final video filename."},
{title:"Jakarta Light Festival",role:"Lead Videographer",year:"2024",type:"Events",cover:"JAKARTA / LIGHT FEST",mediaId:"17rRlmuQERy3EqSJVMX9VHF4n7oz9RLW8",desc:"Old Town visual-event documentation. Contains two videos in the project folder."},
{title:"VinFast at GIIAS",role:"Videographer",year:"2026",type:"Events",cover:"VINFAST / GIIAS",mediaId:"1hqjamGIkA_xuP2x2vWKQC_Pk_TpgUplR",desc:"VinTalks event recap covering electric mobility at GIIAS."},
{title:"PON XXI — Closing Ceremony",role:"Videographer",year:"2024",type:"Events",cover:"PON / XXI",mediaId:"17xwnc7UBTJ2XpaUXwXGGDhMS1MAYbrrC",desc:"Project archive for visual documentation of the PON XXI closing ceremony."},
{title:"Ngabandungan Bandung",role:"Creative Lead — Documentation",year:"2026",type:"Events",cover:"NGABAN / DUNGAN",mediaId:"1ZEcN6syT17KsytogZBRuOPKurlpZV9e4",desc:"Community and city-event documentation. Detailed individual credits are pending confirmation."},
{title:"BCA Porseni 2026",role:"Videographer (label folder)",year:"2026",type:"Events",cover:"BCA / PORSENI",mediaId:"1t_XnIyJWgZkWRWPUE8UKnq_Kda09PezF",desc:"Dokumentasi acara dengan berbagai penampil dan peserta. Nama proyek mengikuti folder Drive terbaru."},
{title:"iBox — Product Launch",role:"Videographer",year:"—",type:"Brand",cover:"IBOX / LAUNCH",mediaId:"1EI1OLZGQ_bmYEUNW2ItPUCLly8sBwKVU",desc:"Product launch and customer-experience video; source folder title names the iPhone launch."},
{title:"Yamaha MotoGP — Livery Launch",role:"Videographer",year:"2026",type:"Brand",cover:"YAMAHA / MOTOGP",mediaId:"1PV-EUPhIpiD9eThA68MSDV-hHV9aCuSE",desc:"Visual footage from Yamaha MotoGP 2026 campaign launch in Jakarta."},
{title:"BCA Expoversarry",role:"Videographer",year:"2026",type:"Brand",cover:"BCA / EXPO",mediaId:"1i4WzUG7wefeXbmPsY4bQUE4OmmK16ih4",desc:"Event execution documentation, filed as BCA Expoversarry 2026."},
{title:"Cimory Riverside — Case Study",role:"Videographer",year:"—",type:"Brand",cover:"CIMORY / RIVERSIDE",mediaId:"1wHFgOR-KhuFCVTMYrbULB7sjxqOt-_RY",desc:"Study-case and advertising assets for Cimory Riverside. The folder also contains a separate Hutan Menyala file."},
{title:"Sembilan Matahari × Burgerkill",role:"Creative Producer",year:"2022",type:"Film",cover:"25TH / KILL-VESARRY",mediaId:"1bTWg7NrTDq_yqGqO1l0ImlJ06WLdsa7R",desc:"25th Kill-vesarry: creative production, teaser content and vinyl unboxing videos."},
{title:"Tala Session — The High Temple",role:"Videographer Lead (Drive folder)",year:"—",type:"Film",cover:"TALA / SESSION",mediaId:"1u6vpTk67OMNl4_WXsbGizmcZwe5tkp3G",desc:"Performance recap for Tala Session featuring The High Temple. A newly indexed video is in the project folder; individual production credits still require confirmation."},
{title:"Sudut Ke Sudut × Ruang Musik",role:"Freelance Videographer & Photographer (Drive folder)",year:"2023–2025",type:"Film",cover:"RUANG / MUSIK",mediaId:"1ZlHQR2JA6Alf7AN2dNW6wXIubkLpifRo",desc:"Eight new videos of intimate live music sessions, including files naming Adrijati Indi, Arash Buana and Raissa Anggiani. A selected live-session video is available below; individual production credits remain subject to review."}
];
const section=document.createElement('section');section.className='drive-index';section.id='drive-projects';section.innerHTML='<div class="shell"><div class="drive-heading"><div><div class="section-kicker">Project archive / Drive refresh · 18 Nov 2026</div><h2 class="section-title">More projects<span style="color:#9daa46">.</span></h2></div><p>Explore more productions from the current project archive, now organized around individual briefs and credited roles.</p></div><div class="drive-controls" role="group" aria-label="Filter updated projects"></div><div class="drive-grid"></div><p class="drive-footnote">Project titles and roles in this section follow the names of the Google Drive folders. They may not constitute independently verified production credits. Selected source videos were checked for public-link access. Project roles still follow Drive folder names and some production credits need confirmation.</p></div>';
const about=document.querySelector('#about');if(about)about.before(section);else document.querySelector('#work')?.after(section);
const controls=section.querySelector('.drive-controls'),grid=section.querySelector('.drive-grid');
["All","Brand","Events","Film"].forEach((type,i)=>{const b=document.createElement('button');b.type='button';b.textContent=type;b.dataset.type=type;b.setAttribute('aria-pressed',String(i===0));controls.append(b)});
const publicIds=new Set(projects.map(x=>x.mediaId).filter(Boolean));
const previewUrl=id=>'https://drive.google.com/thumbnail?id='+encodeURIComponent(id)+'&sz=w1200';
const fileUrl=id=>'https://drive.google.com/file/d/'+encodeURIComponent(id)+'/view';
const modal=document.createElement('div');modal.className='drive-video-modal';modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-label','Pemutar video proyek');modal.hidden=true;
modal.innerHTML='<div class="drive-video-dialog"><div class="drive-video-heading"><h3></h3><button type="button" class="drive-video-close" aria-label="Tutup video">×</button></div><div class="drive-video-frame"></div><p>Video menggunakan akses lihat melalui tautan Google Drive. Jika pemutar tidak tersedia, buka video aslinya.</p><a class="drive-original" target="_blank" rel="noopener noreferrer">Buka video di Google Drive ↗</a></div>';
document.body.append(modal);let lastTrigger=null;
const close=()=>{modal.hidden=true;modal.querySelector('.drive-video-frame').replaceChildren();document.body.style.overflow='';lastTrigger?.focus()};
modal.querySelector('.drive-video-close').addEventListener('click',close);
modal.addEventListener('click',e=>{if(e.target===modal)close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)close()});
function openVideo(p,trigger){if(!publicIds.has(p.mediaId))return;lastTrigger=trigger;modal.querySelector('h3').textContent=p.title;modal.querySelector('.drive-original').href=fileUrl(p.mediaId);const iframe=document.createElement('iframe');iframe.src='https://drive.google.com/file/d/'+encodeURIComponent(p.mediaId)+'/preview';iframe.title='Video proyek '+p.title;iframe.loading='lazy';iframe.allow='autoplay; fullscreen; picture-in-picture';iframe.allowFullscreen=true;modal.querySelector('.drive-video-frame').replaceChildren(iframe);modal.hidden=false;document.body.style.overflow='hidden';modal.querySelector('.drive-video-close').focus()}
projects.forEach((p,i)=>{
 const card=document.createElement('article');card.className='drive-card';card.dataset.type=p.type;
 const cover=document.createElement('div');cover.className='drive-cover';
 const type=document.createElement('span');type.className='drive-cover-type';type.textContent=p.type+(p.year==='—'?'':' / '+p.year);
 const word=document.createElement('span');word.className='drive-cover-word';word.style.whiteSpace='pre-line';word.textContent=p.cover.replace(' / ','\\n');
 cover.append(type,word);
 if(p.mediaId){
   const thumbnail=new Image();thumbnail.src=previewUrl(p.mediaId);thumbnail.loading='lazy';thumbnail.decoding='async';thumbnail.alt='Cuplikan video proyek '+p.title;
   thumbnail.addEventListener('error',()=>thumbnail.remove(),{once:true});cover.prepend(thumbnail);
   const play=document.createElement('button');play.className='drive-cover-play';play.type='button';play.textContent='▶';play.setAttribute('aria-label','Tonton '+p.title);play.addEventListener('click',()=>openVideo(p,play));cover.append(play);
 }
 const body=document.createElement('div');body.className='drive-card-body';
 const h=document.createElement('h3');h.textContent=p.title;
 const role=document.createElement('p');role.className='role';role.textContent=p.role+' · based on Drive folder label';
 const desc=document.createElement('p');desc.className='detail';desc.textContent=p.desc;
 body.append(h,role,desc);
 if(p.mediaId){const button=document.createElement('button');button.type='button';button.className='drive-watch';button.textContent='Tonton video proyek ↗';button.addEventListener('click',()=>openVideo(p,button));body.append(button)}
 else{const note=document.createElement('span');note.className='drive-count';note.textContent='Video belum tersedia';body.append(note)}
 card.append(cover,body);grid.append(card)
});
controls.addEventListener('click',e=>{const btn=e.target.closest('button[data-type]');if(!btn)return;controls.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));grid.querySelectorAll('.drive-card').forEach(c=>{c.hidden=btn.dataset.type!=='All'&&c.dataset.type!==btn.dataset.type})});
const nav=document.querySelector('.navlinks');if(nav&&!nav.querySelector('a[href="#drive-projects"]')){const a=document.createElement('a');a.href='#drive-projects';a.textContent='Archive';const contact=nav.querySelector('a[href="#contact"]');contact?nav.insertBefore(a,contact):nav.append(a)}
})();
