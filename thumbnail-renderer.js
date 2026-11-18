/* Thumbnail renderer for the Portfolio website.
 * Loads after portfolio-v2.js, portfolio-media.js and portfolio-behance.js.
 */
(() => {
  const cfg = window.PORTFOLIO_THUMBNAILS || {};
  const idRx = /^[A-Za-z0-9_-]{15,}$/;
  function urlFor(item){
    if(!item || item.approved !== true) return "";
    if(typeof item.imageUrl==="string" && /^https:\/\//i.test(item.imageUrl))return item.imageUrl;
    if(typeof item.driveVideoId==="string" && idRx.test(item.driveVideoId))
      return "https://drive.google.com/thumbnail?id="+encodeURIComponent(item.driveVideoId)+"&sz=w1200";
    return "";
  }
  function mount(cover, item){
    if(!cover || !item) return;
    const url=urlFor(item);
    // Do not add an image if the asset is pending review/approval.
    if(!url){cover.dataset.thumbnailStatus="pending";return}
    let img=cover.querySelector(":scope > img.project-cover-image");
    if(!img){img=document.createElement("img");img.className="project-cover-image";cover.insertBefore(img,cover.firstChild)}
    img.loading="lazy";img.decoding="async";img.alt=item.alt || item.title || "Project preview";img.referrerPolicy="no-referrer-when-downgrade";
    img.addEventListener("load",()=>{cover.dataset.thumbnailStatus="loaded"}, {once:true});
    img.addEventListener("error",()=>{img.remove();cover.dataset.thumbnailStatus="unavailable"}, {once:true});
    img.src=url;cover.dataset.thumbnailStatus="loading";
  }
  document.querySelectorAll("#projectgrid .project").forEach(card => {
    mount(card.querySelector(".visual"),cfg[card.dataset.case]);
  });
  const behanceKeys=["behance-sal","behance-juicy","behance-burgerkill","behance-restory","behance-jansen","behance-isyana"];
  document.querySelectorAll("#behance .behance-card").forEach((card,i)=>mount(card.querySelector(".behance-art"),cfg[behanceKeys[i]]));
  const videoKeys=["video-burgerkill-01","video-burgerkill-02","video-burgerkill-03","video-burgerkill-vinyl","video-pon","video-jakarta","video-cimory","video-hutan"];
  document.querySelectorAll("#watch .media-item").forEach((card,i)=>{
    const item=cfg[videoKeys[i]],img=card.querySelector(".media-thumb");
    if(!img || !item)return;
    const url=urlFor(item);
    if(url){img.src=url;img.alt=item.alt}else{img.remove()}
  });
})();
