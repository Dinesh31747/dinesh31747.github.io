const projects={
 refract:{title:'Refract — gameplay',id:'1gqTpGe5Irk67jwq0TBMsVQKpwxO39Hwl',src:'assets/refract-demo.mp4',poster:'assets/refract-2.jpg'},
 apex:{title:'Apex Drift — gameplay',id:'1DBsnkyx3Q69L4IyShRdQ7z9qbZMJA-0Y',src:'assets/apex-demo.mp4',poster:'assets/apex-thumb.jpg'},
 merge:{title:'MergeForge — gameplay',id:'1PuOTl1_PIb_9zViBYrqU6fIcM0OLgvWb',src:'assets/merge-demo.mp4',poster:'assets/merge-thumb.jpg'}
};
const dialog=document.querySelector('#video-dialog');
const container=document.querySelector('#video-container');
let trigger;
document.querySelectorAll('[data-video]').forEach(button=>button.addEventListener('click',()=>{
 const item=projects[button.dataset.video];trigger=button;
 document.querySelector('#video-title').textContent=item.title;
 document.querySelector('#full-video').href=`https://drive.google.com/file/d/${item.id}/view`;
 const video=document.createElement('video');video.src=item.src;video.poster=item.poster;video.controls=true;video.playsInline=true;video.preload='metadata';video.setAttribute('aria-label',item.title);
 container.replaceChildren(video);dialog.showModal();document.body.classList.add('modal-open');
 video.play().catch(()=>{});
}));
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{const video=container.querySelector('video');if(video){video.pause();video.removeAttribute('src');video.load();}container.replaceChildren();document.body.classList.remove('modal-open');trigger?.focus();});
