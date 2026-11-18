/* Curated Behance collection.
 * Source: https://www.behance.net/daffiharmawan (public profile).
 * Card links point to the verified profile rather than guessed project URLs.
 * Visual cards are editorial placeholders; original work is viewed on Behance.
 */
(() => {
const profile='https://www.behance.net/daffiharmawan';
const entries=[
{title:'Sal Priadi',type:'Photography',tag:'Live Music',short:'SAL\nPRIADI',summary:'Live music photography, presented in the public Behance project collection.'},
{title:'Photo Stage Juicy Luicy',type:'Photography',tag:'Live Music',short:'JUICY\nLUICY',summary:'Stage photography documenting a live performance by Juicy Luicy.'},
{title:'Teaser Killvesary 25th Burgerkill',type:'Video',tag:'Campaign',short:'KILL\nVESARY',summary:'A video teaser for the 25th Burgerkill anniversary campaign, also represented in the private production archive.'},
{title:'Video Ads For Restory',type:'Video',tag:'Brand Campaign',short:'RESTORY\nADS',summary:'A short-form promotional video project for Restory, published in the Behance project collection.'},
{title:'Photo Stage The Jansen At Tau Tau Fest 2023',type:'Photography',tag:'Live Music',short:'THE\nJANSEN',summary:'Performance photography from The Jansen at Tau Tau Fest 2023.'},
{title:'Photo Stage Isyana Sarasvati At Gaia Music Festival',type:'Photography',tag:'Live Music',short:'ISYANA\nSARASVATI',summary:'Stage photography of Isyana Sarasvati at Gaia Music Festival.'}
];
const section=document.createElement('section');section.className='behance-section';section.id='behance';
section.innerHTML='<div class="shell"><div class="behance-head"><div><div class="section-kicker">03 / Published creative work</div><h2 class="section-title">On Behance<span style="color:#9daa46">.</span></h2></div><p class="behance-intro">Explore photography, stage moments, and campaign projects already published on my Behance profile. Open the collection to see the original media.</p></div><div class="behance-tags" role="group" aria-label="Filter Behance projects"></div><div class="behance-grid"></div><div class="behance-bottom"><p>6 publicly listed Behance projects. Illustrations on this page are placeholders; the original photos and videos are available on Behance.</p><a class="outline-btn" href="'+profile+'" target="_blank" rel="noopener noreferrer">Explore complete Behance ↗</a></div></div>';
const research=document.querySelector('#research'),watch=document.querySelector('#watch'),about=document.querySelector('#about');if(research)research.before(section);else if(watch)watch.after(section);else about?.before(section);
const filters=section.querySelector('.behance-tags'),grid=section.querySelector('.behance-grid');
['All','Photography','Video'].forEach((kind,i)=>{const b=document.createElement('button');b.className='behance-tag';b.type='button';b.dataset.type=kind;b.setAttribute('aria-pressed',String(i===0));b.textContent=kind;filters.append(b)});
entries.forEach((p,i)=>{const card=document.createElement('article');card.className='behance-card';card.dataset.type=p.type;const thumb=document.createElement('div');thumb.className='behance-art p'+(i+1);thumb.setAttribute('aria-hidden','true');const word=document.createElement('span');word.className='behance-big-word';word.style.whiteSpace='pre-line';word.textContent=p.short;thumb.append(word);const body=document.createElement('div');body.className='behance-card-body';const category=document.createElement('div');category.className='behance-category';category.textContent=p.type+' / '+p.tag;const title=document.createElement('h3');title.textContent=p.title;const desc=document.createElement('p');desc.textContent=p.summary;const link=document.createElement('a');link.className='behance-visit';link.href=profile;link.target='_blank';link.rel='noopener noreferrer';link.textContent='View on Behance ↗';link.setAttribute('aria-label','View '+p.title+' via Daffi Harmawan Behance profile');body.append(category,title,desc,link);card.append(thumb,body);grid.append(card)});
filters.addEventListener('click',e=>{const btn=e.target.closest('[data-type]');if(!btn)return;filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));grid.querySelectorAll('.behance-card').forEach(c=>{c.hidden=btn.dataset.type!=='All'&&c.dataset.type!==btn.dataset.type})});
const nav=document.querySelector('.navlinks');if(nav&&!nav.querySelector('a[href="#behance"]')){const a=document.createElement('a');a.href='#behance';a.textContent='Behance';const about=nav.querySelector('a[href="#about"]');about?nav.insertBefore(a,about):nav.append(a)}
})();
