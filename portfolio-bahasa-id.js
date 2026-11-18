/* Lokalisasi antarmuka dan cerita portofolio ke Bahasa Indonesia.
 * Hanya teks tampilan yang diubah; kredit pekerjaan dan tautan sumber tetap dijaga.
 */
(() => {
const set=(selector,text)=>{const el=document.querySelector(selector);if(el)el.textContent=text;};
const html=(selector,value)=>{const el=document.querySelector(selector);if(el)el.innerHTML=value;};
const all=(selector,cb)=>document.querySelectorAll(selector).forEach(cb);
set('.hero-bottom p','Saya berkarya melalui film, fotografi, sinematografi, dan produksi kreatif. Setiap proyek adalah kesempatan memahami manusia, menangkap suasana, dan menyusun cerita melalui gambar.');
set('.hero-bottom .outline-btn','Tonton karya saya ↗');
const nav={'#work':'Karya','#about':'Tentang','#experience':'Pengalaman','#contact':'Kontak','#watch':'Video','#research':'Riset','#drive-projects':'Arsip Proyek','#youtube':'YouTube','#story':'Cerita Saya'};
all('.navlinks a',a=>{if(nav[a.getAttribute('href')])a.textContent=nav[a.getAttribute('href')]});
const mediaTexts={
'.media-showcase .section-kicker':'Kumpulan video / Karya pilihan',
'.media-showcase .section-title':'Tonton karya.',
'.media-showcase .media-intro':'Beberapa dokumentasi acara, film kampanye, dan hasil produksi dapat ditonton langsung. Pilih salah satu video untuk melihat cuplikan pekerjaan di balik proyeknya.',
'.media-showcase .section-note':'Cuplikan video asli dari arsip proyek, bukan gambar ilustrasi.',
'.media-showcase .media-privacy':'Video di bagian ini menggunakan tautan Google Drive yang telah tersedia untuk dilihat melalui tautan publik. File tetap disimpan di Drive. Beberapa video ditampilkan sebagai referensi proyek, bukan klaim atas seluruh pekerjaan kreatif dalam video. Kredit individual mengikuti dokumen yang tersedia.',
'.media-lightbox-head small':'Karya pilihan / Pratinjau video',
'#media-original':'Buka video asli di Google Drive ↗',
'.youtube-section .section-kicker':'Video YouTube / Karya film pilihan',
'.youtube-section .section-title':'Karya di layar.',
'.youtube-section .youtube-head>p':'Enam karya video pilihan dengan kredit peran yang sudah kamu berikan, termasuk film pendek Sumpah Dokter FKG Unjani dan kampanye Hotel Maison Teraskita. Tonton di sini atau buka di YouTube.',
'.youtube-note':'Kredit peran dikonfirmasi oleh pemilik portofolio; beberapa judul masih bersifat sementara sampai identitas produksi diverifikasi. Ketersediaan pemutaran dan penyematan diatur oleh YouTube.',
'.drive-index .section-kicker':'Arsip proyek / Pembaruan dari Google Drive',
'.drive-index .section-title':'Proyek lainnya.',
'.drive-heading>p':'Jejak produksi dari berbagai proyek kreatif, disusun berdasarkan konteks kerja dan dokumentasi yang tersedia.',
'.drive-footnote':'Video proyek pada bagian ini memiliki akses lihat melalui tautan Google Drive. Penayangan video bukan verifikasi seluruh kredit produksi; peran pada kartu masih mengacu pada label folder Drive.',
'#experience .section-kicker':'Pengalaman / Perjalanan profesional',
'#experience .section-title':'Perjalanan karier.',
'#experience .section-note':'Jejak peran profesional yang tercatat dalam CV dan portofolio. Sebagian periode dan rincian jabatan masih perlu dicocokkan.',
'#experience .notice':'Riwayat pekerjaan dan kredit disusun dari versi CV dan profil yang tersedia. Perbedaan informasi ditandai untuk verifikasi.',
'#education .section-kicker':'Landasan akademik / Film dan kajian budaya',
'#education .section-title':'Belajar membaca cerita.',
'#education .section-note':'Praktik film dan kajian budaya membentuk cara saya membaca gambar, narasi, dan pengalaman manusia.',
'#research .section-kicker':'Riset / Penulisan dan pemikiran visual',
'#research .section-title':'Di luar lensa.',
'#research .section-note':'Film, memori kolektif, studi budaya, dan kajian visual saling melengkapi dalam perjalanan kreatif saya.'
};
for(const [selector,value] of Object.entries(mediaTexts))set(selector,value);
all('.media-filter',b=>{const map={All:'Semua',Production:'Produksi',Events:'Acara',Brand:'Merek',Film:'Film'};b.textContent=map[b.dataset.kind]||b.textContent});
all('.media-cover-label',el=>el.textContent='TONTON VIDEO ↗');
all('.media-index',el=>el.textContent=el.textContent.replace('/ VIDEO','/ VIDEO'));
all('.drive-controls button',b=>{const map={All:'Semua',Brand:'Merek',Events:'Acara',Film:'Film'};b.textContent=map[b.dataset.type]||b.textContent});
all('.drive-cover-type',el=>{el.textContent=el.textContent.replace('Brand','Merek').replace('Events','Acara')});
all('.drive-card-body .role',p=>{p.textContent=p.textContent.replace(' · based on Drive folder label',' · berdasarkan nama folder Drive')});
all('.drive-card-body>a',a=>a.textContent='Tonton dokumentasi ↗');
all('.drive-count',p=>p.textContent='Video belum tersedia');
const descriptions=[
'Materi konten video untuk Valta Ltd. berdasarkan arsip proyek. Cuplikan video tersedia dan dapat ditonton langsung dari kartu proyek.',
'Video hasil sesi foto PARTE Kuala Lumpur 2026. Hubungan proyek dan peran tercatat dalam folder Drive.',
'Video profil Program Film dan Televisi UPI. Tahun 2021 mengacu pada judul berkas video final.',
'Dokumentasi Jakarta Light Festival di kawasan Kota Tua. Terdapat dua video pada folder proyek.',
'Rekaman kegiatan VinTalks di GIIAS yang membahas perkembangan kendaraan listrik dan V-GREEN.',
'Arsip dokumentasi visual upacara penutupan PON XXI 2024.',
'Dokumentasi kegiatan komunitas Ngabandungan Bandung. Detail kredit produksi masih perlu diverifikasi.',
'Video dokumentasi kolaborasi berbagai penampil dan talenta dalam proyek Unseen Media.',
'Video suasana peluncuran produk dan pengalaman pengunjung dalam kegiatan iBox.',
'Dokumentasi peluncuran kampanye MotoGP 2026 oleh tim Yamaha di Jakarta.',
'Dokumentasi pelaksanaan acara BCA Expoversarry 2026.',
'Materi studi kasus dan iklan Cimory Riverside. Folder yang sama juga memuat video terpisah mengenai Hutan Menyala.',
'Kampanye 25th Kill-vesarry mencakup sejumlah video teaser serta dokumentasi pembukaan kemasan vinyl.',
'Rekaman penampilan The High Temple dalam Tala Session. Video tersedia; detail kredit produksi tetap mengikuti pemeriksaan dokumen.',
'Delapan video sesi musik yang diarsipkan, termasuk berkas yang menyebut Adrijati Indi, Arash Buana, dan Raissa Anggiani. Satu video pilihan tersedia untuk ditonton pada kartu proyek.'
];
all('.drive-card-body .detail',(el,i)=>{if(descriptions[i])el.textContent=descriptions[i]});
const thumbnails=['Produksi kreatif','Dokumentasi acara','Fotografi merek','Dokumenter','Media imersif','Fotografi musik'];
all('#projectgrid .project', (p,i)=>{const tag=p.querySelector('.art-num');if(tag){for(const [j,t] of thumbnails.entries()){if(i===j)tag.textContent=tag.textContent.replace(/\/ .*/, '/ '+t.toUpperCase())}}});
const newProjects=[
['Raissa Anggiani — Intimate Showcase','Arahan visual / Pertunjukan musik'],
['be.fits — Kampanye Gimnasium','Sinematografi / Video kampanye'],
['Ruang Musik — Sinematografi','Director of Photography / Visual musik']
];
all('#projectgrid .project',p=>{const role=p.querySelector('.project-meta p');if(role){const t=role.textContent;const m={
'Creative production / 25th Kill-vesarry':'Produksi kreatif / 25th Kill-vesarry',
'Event documentation / Role credits under review':'Dokumentasi acara / Kredit masih dalam verifikasi',
'Fashion & brand photography':'Fotografi fesyen dan merek',
'Directing / Cinematography':'Penyutradaraan / Sinematografi',
'Video assets / Projection mapping':'Produksi video / Projection mapping',
'Aldi Haqq / Teddy Adhitya / Events':'Aldi Haqq / Teddy Adhitya / Dokumentasi acara',
'Visual Direction / Live Performance':'Arahan visual / Pertunjukan musik',
'Director of Photography / Brand Film':'Sinematografi / Video kampanye merek',
'Director of Photography / Music Visuals':'Sinematografi / Visual musik'
};if(m[t])role.textContent=m[t]}
const b=p.querySelector('.project-detail-btn');if(b)b.textContent='Baca kisah proyek ↗'
});
all('.filter-btn',b=>{const m={All:'Semua',Production:'Produksi',Film:'Film',Photography:'Fotografi',Immersive:'Imersif'};b.textContent=m[b.dataset.filter]||b.textContent});
const count=document.querySelector('#resultcount');if(count){count.textContent='9 proyek pilihan';document.querySelector('.filterbar')?.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;const selected=b.dataset.filter;const c=[...document.querySelectorAll('#projectgrid .project')].filter(p=>selected==='All'||p.dataset.group===selected).length;count.textContent=c+' proyek pilihan'})}
set('.show-more .outline-btn','Diskusikan kolaborasi ↗');
set('#experience #more-roles+button','Lihat pengalaman lainnya +');
const expRows=document.querySelectorAll('#experience .exp-row');
const roles=['Asosiasi Kreatif','Pemimpin Konten Visual','Produksi Media','Pendiri / Sutradara / Penulis Skenario','Asisten Dosen','Pengelola Media Sosial','Direktur Media Sosial'];
expRows.forEach((r,i)=>{const p=r.querySelector('p');if(p&&roles[i])p.textContent=roles[i];const t=r.querySelector('time');if(t)t.textContent=t.textContent.replace('Present','Sekarang').replace('Feb','Feb').replace('Apr','Apr').replace('Nov','Nov').replace('Aug','Agu').replace('Dec','Des').replace('Jan','Jan').replace('Mar','Mar')});
const moreBtn=document.querySelector('#experience button[aria-controls="more-roles"]');if(moreBtn){moreBtn.textContent='Lihat riwayat lainnya +';moreBtn.addEventListener('click',()=>{moreBtn.textContent=moreBtn.getAttribute('aria-expanded')==='true'?'Tampilkan lebih sedikit −':'Lihat riwayat lainnya +'})}
all('#education .edu-block p',p=>{p.textContent=p.textContent.replace('Master of Arts — Cultural Studies / Critical Theory and Analysis','Magister — Kajian Budaya / Teori Kritis dan Analisis').replace('Bachelor of Arts — Film & Television','Sarjana — Film dan Televisi')});
all('#research .research-card',card=>{const p=card.querySelector('p');if(p){const map={
'Film, collective memory and social representation.':'Kajian film, memori kolektif, dan representasi sosial.',
'Psychoanalysis, character development and visual narratives.':'Psikoanalisis, perkembangan karakter, dan narasi visual.',
'A documentary-film study project on environmental and community narratives.':'Kajian film dokumenter tentang lingkungan dan narasi komunitas.',
'Presented research connecting film, digital transformation and social dynamics.':'Presentasi riset mengenai hubungan film, transformasi digital, dan dinamika sosial.'
};if(map[p.textContent])p.textContent=map[p.textContent]}
const a=card.querySelector('a');if(a)a.textContent=a.textContent.replace('Read publication','Baca publikasi').replace('See publication profile','Lihat profil publikasi').replace('View presentation','Lihat presentasi');
const tag=card.querySelector('.research-tag');if(tag)tag.textContent=tag.textContent.replace('Journal article','Artikel jurnal').replace('Research publication','Publikasi riset').replace('Conference presentation','Presentasi konferensi')
});
all('.research-card h3',h=>{if(h.textContent==='The Application of Lacan\'s Psychoanalytic Theory to Character Development in Madoka Magica')return; /* Preserve publication titles */});
all('#youtube .youtube-body',body=>{const kicker=body.querySelector('.youtube-kicker');if(kicker)kicker.textContent=kicker.textContent.replace('Role confirmed by portfolio owner','Peran dikonfirmasi pemilik portofolio').replace('Tautan dalam portofolio PDF','Tercantum dalam PDF portofolio').replace('Film production','Produksi film').replace('Scriptwriting & Direction','Penulisan skenario dan penyutradaraan');
const a=body.querySelector('a');if(a)a.textContent='Tonton di YouTube ↗';
const desc=body.querySelector('p');if(desc)desc.textContent=desc.textContent.replace('Kredit peran diberikan langsung oleh pembuat portofolio. Judul produksi belum dikonfirmasi dari metadata video.','Peran telah dikonfirmasi langsung; judul produksi masih menunggu verifikasi.').replace('Tautan tercantum pada bagian Ruang Musik di PDF portofolio; peran Director of Photography juga dikonfirmasi langsung oleh pembuat portofolio.','Tautan tercantum pada PDF portofolio bagian Ruang Musik dan peran sinematografi telah dikonfirmasi.').replace('Peran dikonfirmasi langsung oleh pembuat portofolio. PDF sebelumnya mengulang tautan pada entri Program TV Playlist dan Askara Sinema, sehingga judul proyek masih perlu dipastikan.','Peran telah dikonfirmasi langsung, tetapi PDF mencantumkan tautan yang sama pada dua entri sehingga judul produksi masih perlu dipastikan.');
});
const translatedCases={
burgerkill:{role:'Creative Producer / Koordinasi Produksi',lede:'Kolaborasi kampanye perayaan 25 tahun Burgerkill bersama Sembilan Matahari.',scope:'Mengelola kebutuhan logistik, koordinasi tim produksi, keputusan kreatif dan pengawasan proses pembuatan materi kampanye.',context:'Proyek tercatat dalam portofolio, CV, dan arsip kampanye Burgerkill.',note:'Lima video teaser dan satu video unboxing vinyl tersedia sebagai referensi; rincian kredit individual tetap mengikuti dokumentasi produksi.'},
pon:{role:'Dokumentasi Visual / Produksi Video',lede:'Dokumentasi visual untuk upacara penutupan PON XXI 2024.',scope:'Mengikuti proses dokumentasi acara dan produksi materi video. Dokumen yang berbeda menyebut fotografer, videografer, dan videografer utama.',context:'Proyek tertera dalam PDF portofolio, CV, serta folder dokumentasi PON XXI.',note:'Detail peran akhir masih ditinjau karena sumber menyebut beberapa jabatan.'},
batik:{role:'Fotografi / Pemimpin Konten Visual',lede:'Kampanye visual Batik Fractal yang menonjolkan produk dan kerja sama dengan mitra kriya lokal.',scope:'Perencanaan konsep, pengambilan foto, pengarahkan pencahayaan, komposisi, serta produksi materi kampanye.',context:'Portofolio PDF mencantumkan kampanye fesyen 2024.',note:'Foto utama belum tersedia untuk ditayangkan di website.'},
mycelia:{role:'Sutradara / Director of Photography',lede:'Dokumenter yang menggali sisi edukatif pengalaman imersif Hutan Mycelia.',scope:'Riset, pemilihan narasumber, pengaturan komposisi, blocking dan pencahayaan.',context:'Proyek tercatat dalam PDF portofolio 2022–2025.',note:'Video final belum disetujui untuk ditayangkan langsung.'},
lawang:{role:'Videografer',lede:'Pengembangan materi visual untuk pengalaman projection mapping 360 derajat di Lawang Sewu.',scope:'Pengambilan gambar dan penyusunan aset visual untuk ruang imersif.',context:'Portofolio PDF menyebut kolaborasi Sembilan Matahari dan KAI pada 2024.',note:'Dokumentasi instalasi dan izin tayang belum tersedia.'},
live:{role:'Fotografer',lede:'Fotografi pertunjukan musik yang memperhatikan energi panggung dan interaksi penonton.',scope:'Dokumentasi penampil dan suasana acara, termasuk proyek yang menyebut Aldi Haqq dan Teddy Adhitya.',context:'Beberapa proyek fotografi konser tercatat dalam PDF portofolio.',note:'Pilihan foto masih menunggu kurasi dan persetujuan tayang.'},
raissa:{role:'Arahan Visual',lede:'Pendekatan visual untuk pertunjukan musik intim dengan perhatian pada suasana dan ekspresi.',scope:'Pengembangan konsep visual, pencahayaan, serta koordinasi tim kamera menurut uraian proyek.',context:'Proyek Raissa Anggiani tercatat pada profil profesional.',note:'Dokumentasi khusus proyek belum seluruhnya disetujui untuk ditampilkan.'},
befits:{role:'Director of Photography',lede:'Video kampanye gimnasium dengan penekanan pada gerak, komposisi dan suasana.',scope:'Pengaturan framing, sudut kamera dan pencahayaan bersama tim produksi.',context:'Peran sinematografi tercantum dalam uraian proyek profesional.',note:'Tanggal produksi dan penggunaan materi masih perlu verifikasi.'},
ruang:{role:'Director of Photography',lede:'Produksi musik yang mengandalkan komposisi gambar dan cahaya untuk membangun kedekatan dengan penampilan.',scope:'Pemilihan lensa, tata cahaya, pengaturan kamera dan komposisi visual sebagaimana dicatat pada PDF portofolio.',context:'Proyek Ruang Musik tercantum pada PDF dan telah dikonfirmasi melalui keterangan kredit YouTube.',note:'Video rujukan tersedia di bagian YouTube.'}
};
document.addEventListener('click',event=>{
const btn=event.target.closest('[data-open-case]');if(!btn)return;const d=translatedCases[btn.dataset.openCase];if(!d)return;
set('#case-lede',d.lede);set('#case-role',d.role+'. '+d.scope);set('#case-context',d.context);set('#case-note',d.note);
const labels=document.querySelectorAll('.case-grid strong');if(labels[0])labels[0].textContent='Peran dan kontribusi';if(labels[1])labels[1].textContent='Latar belakang dan sumber';
});
document.querySelector('.footer-links a[href="#home"]')?.replaceChildren(document.createTextNode('Kembali ke atas ↑'));
})();
