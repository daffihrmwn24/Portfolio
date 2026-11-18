/* Responsive art-directed layout inspired by the three user-provided references.
 * Preserves existing project/video/Behance sections and does not move Google Drive media.
 */
(() => {
const hero=document.querySelector('.hero');if(!hero)return;
const intro=hero.querySelector('.eyebrow'),headline=hero.querySelector('.hero-title'),bottom=hero.querySelector('.hero-bottom');
if(intro)intro.textContent='Independent Visual Creative · Bandung, Indonesia';
if(headline)headline.innerHTML='Stories worth<br><span class="indented">seeing<em aria-label="Explore the work"></em></span>';
const main=document.createElement('div');main.className='hero-main';
const left=document.createElement('div');left.className='hero-copy';
const right=document.createElement('div');right.className='hero-aside';
if(intro)left.append(intro);if(headline)left.append(headline);if(bottom)right.append(bottom);
hero.prepend(main);main.append(left,right);
const bento=document.createElement('div');bento.className='hero-bento';
const tiles=[
 {title:'25th Kill-vesarry',label:'01 / Creative production',id:'1bTWg7NrTDq_yqGqO1l0ImlJ06WLdsa7R',url:'#watch'},
 {title:'PON XXI — Closing',label:'02 / Event documentation',id:'17xwnc7UBTJ2XpaUXwXGGDhMS1MAYbrrC',url:'#watch'},
 {title:'Brand & Campaigns',label:'03 / Art direction',id:'1wHFgOR-KhuFCVTMYrbULB7sjxqOt-_RY',url:'#work'},
 {title:'Music & Motion',label:'04 / Visual stories',id:'17rRlmuQERy3EqSJVMX9VHF4n7oz9RLW8',url:'#behance'}
];
tiles.forEach(t=>{
const tile=document.createElement('div');tile.className='hero-tile';
const bg=document.createElement('div');bg.className='tile-placeholder';tile.append(bg);
if(t.id){const im=new Image();im.alt='Project preview — '+t.title;im.loading='eager';im.decoding='async';im.src='https://drive.google.com/thumbnail?id='+encodeURIComponent(t.id)+'&sz=w1200';im.onerror=()=>im.remove();tile.append(im)}
const top=document.createElement('span');top.className='tile-top';top.textContent=t.label;
const label=document.createElement('span');label.className='tile-label';label.textContent=t.title;
const arrow=document.createElement('span');arrow.className='tile-arrow';arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';
const link=document.createElement('a');link.href=t.url;link.setAttribute('aria-label','Explore '+t.title);
tile.append(top,label,arrow,link);bento.append(tile)
});
hero.append(bento);
const nav=document.querySelector('.navlinks');
const about=nav?.querySelector('a[href="#about"]');if(about)about.textContent='About me';
const home=nav?.querySelector('a[href="#work"]');if(home)home.textContent='Projects';
const watch=nav?.querySelector('a[href="#watch"]');if(watch)watch.textContent='Films';
const behance=nav?.querySelector('a[href="#behance"]');if(behance)behance.textContent='Photography';
const researcher=nav?.querySelector('a[href="#research"]');if(researcher)researcher.textContent='Research';
const exp=nav?.querySelector('a[href="#experience"]');if(exp)exp.textContent='Experience';
})();
