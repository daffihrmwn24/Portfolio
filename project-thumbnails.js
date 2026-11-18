/* THUMBNAIL MASTER TEMPLATE
 * Set imageUrl to an approved HTTPS photo/CDN URL for each project.
 * Otherwise provide driveVideoId for existing public-link video thumbnails.
 * Missing/unavailable media falls back to the existing editorial cover.
 * This static file is intentionally independent from the private Google Sheets.
 * Changes to the Sheet do not auto-sync without a separate build integration.
 */
window.PORTFOLIO_THUMBNAILS = {
  burgerkill: { title:"Sembilan Matahari × Burgerkill", imageUrl:"", driveVideoId:"1bTWg7NrTDq_yqGqO1l0ImlJ06WLdsa7R", source:"drive-video", approved:true, alt:"Cuplikan video kampanye 25th Kill-vesarry" },
  pon:        { title:"PON XXI 2024", imageUrl:"", driveVideoId:"17xwnc7UBTJ2XpaUXwXGGDhMS1MAYbrrC", source:"drive-video", approved:true, alt:"Cuplikan video dokumentasi PON XXI 2024" },
  batik:      { title:"Batik Fractal Campaign", imageUrl:"", driveVideoId:"", source:"pending-photo", approved:false, alt:"Foto kampanye Batik Fractal" },
  mycelia:    { title:"Hutan Mycelia", imageUrl:"", driveVideoId:"", source:"pending-video", approved:false, alt:"Dokumentasi proyek Hutan Mycelia" },
  lawang:     { title:"Lawang Sewu", imageUrl:"", driveVideoId:"", source:"pending-video", approved:false, alt:"Proyek video mapping Lawang Sewu" },
  live:       { title:"Live Music Photography", imageUrl:"", driveVideoId:"", source:"pending-photo", approved:false, alt:"Fotografi konser dan panggung" },
  raissa:     { title:"Raissa Anggiani Showcase", imageUrl:"", driveVideoId:"", source:"pending-photo", approved:false, alt:"Raissa Anggiani Intimate Showcase" },
  befits:     { title:"be.fits Gym Campaign", imageUrl:"", driveVideoId:"", source:"pending-video", approved:false, alt:"Video kampanye be.fits" },
  ruang:      { title:"Ruang Musik", imageUrl:"", driveVideoId:"", source:"pending-video", approved:false, alt:"Sinematografi Ruang Musik" },
  "video-burgerkill-01": { title:"Burgerkill Teaser 01", imageUrl:"", driveVideoId:"1bTWg7NrTDq_yqGqO1l0ImlJ06WLdsa7R", source:"drive-video", approved:true, alt:"Frame Burgerkill teaser pertama" },
  "video-burgerkill-02": { title:"Burgerkill Teaser 02", imageUrl:"", driveVideoId:"1HNo-2Dk0oZ3GB3OGQhdaSBWMZSAYKorf", source:"drive-video", approved:true, alt:"Frame Burgerkill teaser kedua" },
  "video-burgerkill-03": { title:"Burgerkill Teaser 03", imageUrl:"", driveVideoId:"1d2rsm15qS9hkHizhyJ38Vo0ow3lQHodC", source:"drive-video", approved:true, alt:"Frame Burgerkill teaser ketiga" },
  "video-burgerkill-vinyl": { title:"Burgerkill Vinyl Unboxing", imageUrl:"", driveVideoId:"15oV8LkHEWbycYN9L6php-6Jfgl24WkST", source:"drive-video", approved:true, alt:"Frame video unboxing vinyl" },
  "video-pon":        { title:"PON XXI Closing", imageUrl:"", driveVideoId:"17xwnc7UBTJ2XpaUXwXGGDhMS1MAYbrrC", source:"drive-video", approved:true, alt:"Frame PON closing ceremony" },
  "video-jakarta":    { title:"Old Town Jakarta", imageUrl:"", driveVideoId:"17rRlmuQERy3EqSJVMX9VHF4n7oz9RLW8", source:"drive-video", approved:true, alt:"Frame video kawasan Kota Tua Jakarta" },
  "video-cimory":     { title:"Cimory Riverside", imageUrl:"", driveVideoId:"1wHFgOR-KhuFCVTMYrbULB7sjxqOt-_RY", source:"drive-video", approved:true, alt:"Frame video Cimory Riverside" },
  "video-hutan":      { title:"Hutan Menyala — Dewi Air", imageUrl:"", driveVideoId:"1wd8Q-RsxEkquXUynv9HdHajs50_-0iRX", source:"drive-video", approved:true, alt:"Frame Hutan Menyala" }
};
