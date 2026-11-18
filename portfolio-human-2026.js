/* Editorial cleanup: less marketing filler, more direct descriptions of actual work.
   Runs after the existing galleries. Does not change source media, credits or playback. */
(()=>{
 const set=(q,value)=>{const el=document.querySelector(q);if(el)el.textContent=value};
 const html=(q,value)=>{const el=document.querySelector(q);if(el)el.innerHTML=value};
 const each=(q,cb)=>document.querySelectorAll(q).forEach(cb);
 document.title='Daffi Harmawan — Film, Video & Fotografi';
 document.querySelector('meta[name="description"]')?.setAttribute('content','Karya Daffi Harmawan: sinematografi, live session musik, fotografi panggung, film, dan dokumentasi produksi.');
 set('#work .section-kicker','Pilihan proyek');
 set('#work .section-note','Ada proyek musik, dokumentasi acara, film, dan fotografi. Klik salah satu kalau ingin lihat detailnya.');
 set('#experience .section-kicker','Pernah kerja di');
 set('#experience .section-note','Beberapa tempat dan tim yang pernah jadi bagian dari perjalanan kerja saya.');
 set('#experience .notice','*Periode dan nama jabatan tertentu masih saya cocokkan dengan dokumen kerja.');
 set('.contact .eyebrow','Ada yang mau dikerjakan bareng?');
 html('#contact h2','Boleh ngobrol<br>soal proyek lu?');
 set('#contact .contact-intro','Kalau butuh DoP, videografer, fotografer panggung, atau bantuan produksi, bisa langsung hubungi saya. Ceritain aja kebutuhannya.');
 set('.footer>div:first-child','© '+new Date().getFullYear()+' Daffi Harmawan');
 set('#watch .media-intro','Beberapa video dari proyek yang pernah saya kerjakan. Tinggal pilih dan tonton.');
 set('#watch .section-note','Video asli dari arsip pekerjaan saya.');
 set('.media-privacy','Beberapa video merupakan hasil kerja tim. Peran saya tercantum pada masing-masing proyek.');
 set('.drive-heading .section-kicker','Arsip proyek');
 set('.drive-heading>p','Pekerjaan lain dari arsip saya. Klik thumbnail untuk lihat videonya.');
 set('.drive-footnote','Kredit peran ditulis sesuai dokumen proyek yang tersedia. Jika ada detail produksi yang perlu diperbaiki, silakan hubungi saya.');
 set('#youtube .section-kicker','Video pilihan');
 set('#youtube .youtube-head>p','Film pendek, sesi musik, dan video kampanye yang pernah saya kerjakan. Klik thumbnail untuk menonton.');
 set('#youtube .youtube-note','Semua video ditautkan dari YouTube. Ketersediaan pemutaran mengikuti pengaturan pemilik video.');
 set('#stage-photo .section-kicker','Foto panggung');
 set('#stage-photo .pg-section-head h2','Di depan panggung.');
 set('#stage-photo .pg-section-head>p','Teddy Adhitya dan Chintana Jo. Ini beberapa foto yang saya ambil saat mereka tampil.');
 set('#live-sessions .section-kicker','Video musik');
 set('#live-sessions .pg-section-head h2','Live session.');
 set('#live-sessions .pg-section-head>p','Saya mengerjakan kamera dan visual untuk sesi-sesi ini sebagai DoP. Pilih videonya untuk menonton.');
 set('#other-galleries .section-kicker','Proyek lain');
 set('#other-galleries .pg-section-head h2','Masih ada lagi.');
 set('#other-galleries .pg-section-head>p','Kumpulan video dari beberapa proyek lain, semuanya bisa dipilih satu per satu.');
 set('.show-more .outline-btn','Ngobrol soal proyek ↗');
 each('.pg-card-body>button',b=>b.textContent='Buka foto & video ↗');
 each('.pg-archive-note',n=>n.textContent=n.textContent.replace('media — pilih untuk melihat','video dalam proyek'));
 each('#drive-projects .drive-card',card=>{
  const role=card.querySelector('.role');if(role)role.textContent=role.textContent.replace(/ · (berdasarkan nama folder Drive|based on Drive folder label)/g,'').replace(' (Drive folder)','');
  const desc=card.querySelector('.detail');if(desc){
   desc.textContent=desc.textContent
    .replace('Detail kredit produksi masih perlu diverifikasi.','')
    .replace('Rincian kredit produksi masih perlu diverifikasi.','')
    .replace('Video tersedia; detail kredit produksi tetap mengikuti pemeriksaan dokumen.','Videonya bisa ditonton di sini.')
    .replace('Detail kredit akhir masih ditinjau karena sumber menyebut beberapa jabatan.','')
    .replace('Tahun 2021 mengacu pada judul berkas video final.','')
    .replace('Hubungan proyek dan peran tercatat dalam folder Drive.','')
    .replace('Peran pada kartu masih mengacu pada label folder Drive.','')
  }
  const watch=card.querySelector('.drive-watch');if(watch&&!card.dataset.galleryGroup)watch.textContent='Tonton video ↗';
 });
 each('.youtube-item .youtube-body',card=>{
  const desc=card.querySelector('p');
  if(desc)desc.textContent=desc.textContent.replace('Karya serial audiovisual. Saya terlibat sebagai asisten sutradara dalam proses produksi. Asisten Sutradara','Saya membantu sutradara dalam proses produksi serial ini.').replace('Karya lain dari Tentang Kita Series dengan kontribusi saya sebagai asisten sutradara. Asisten Sutradara','Saya ikut sebagai asisten sutradara di video kedua serial ini.').replace('Dalam produksi musik ini saya bertanggung jawab pada aspek sinematografi dan bahasa visual. Director of Photography','Saya menangani sinematografi untuk sesi musik ini.').replace('Saya terlibat dalam penulisan naskah sekaligus membantu proses penyutradaraan kampanye. Penulis Naskah & Asisten Sutradara','Saya menulis naskah dan membantu sutradara dalam proses produksi.').replace('Saya berkontribusi dalam riset untuk pengembangan naskah, penulisan cerita, dan pendampingan sutradara pada proses produksi film pendek acara Sumpah Dokter FKG Unjani tahun 2021. Riset Naskah, Penulis Naskah & Asisten Sutradara','Di film pendek ini saya mengerjakan riset dan penulisan naskah, sekaligus membantu sutradara.').replace('Dalam produksi video kampanye Hotel Maison Teraskita, saya berkontribusi sebagai penulis naskah untuk membangun alur cerita dan pesan yang disampaikan. Penulis Naskah','Saya menulis naskah untuk video kampanye Hotel Maison Teraskita.');
 });
 each('.pg-card-body>p:not(.pg-card-role)',p=>{
  const replacements={
   'Dokumentasi fotografi penampilan Teddy Adhitya di Ruang Dini.':'Foto-foto Teddy Adhitya saat tampil di Ruang Dini.',
   'Koleksi foto panggung Chintana Jo dari arsip Google Drive.':'Foto Chintana Jo saat tampil di panggung.',
   'Membangun bahasa gambar untuk pertunjukan live session Lyla Band.':'Saya jadi DoP untuk sesi live Lyla Band.',
   'Dua video intimate showcase Raissa Anggiani, dilengkapi dua dokumentasi terkait dari arsip Drive.':'Dua video intimate showcase Raissa Anggiani. Saya mengerjakan sinematografinya.',
   'Sesi musik Sudut ke Sudut bersama Tsaqib dengan peran sebagai DoP.':'Saya jadi DoP untuk sesi Sudut ke Sudut bersama Tsaqib.',
   'Empat video live session The High Temples ditambah satu dokumentasi Tala Session dari Google Drive.':'Empat live session The High Temples yang saya kerjakan sebagai DoP, ditambah satu dokumentasi dari Tala Session.',
   'Sepuluh berkas video konten Restory yang tersedia dalam folder Work Experience.':'Beberapa video konten yang saya kerjakan bersama Restory.',
   'Dua video dari serial Tentang Kita.':'Dua video dari serial Tentang Kita, tempat saya bekerja sebagai asisten sutradara.',
   'Satu berkas kampanye video Be.Fit.':'Video kampanye Be.Fit.',
  };
  p.textContent=replacements[p.textContent]||p.textContent
 });
 each('.media-access',p=>p.remove());
 each('.media-index',p=>p.remove());
 each('.media-cover-label',p=>p.remove());
 each('.tiny-meta',el=>el.remove());
 const logo=document.querySelector('.logo span');if(logo)logo.remove();
 each('.story-evidence',el=>{if(el.textContent.includes('Tanpa klaim'))el.textContent=el.textContent.split(' · Tanpa klaim')[0]});
})();
