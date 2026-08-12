const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.nav nav a');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
navLinks.forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const reveals = document.querySelectorAll('.section, .project');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.animate(
        [{opacity:0, transform:'translateY(28px)'},{opacity:1, transform:'translateY(0)'}],
        {duration:700,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'}
      );
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
reveals.forEach(el=>observer.observe(el));

window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  document.querySelector('.orbital')?.style.setProperty('transform',`translateY(calc(-50% + ${y*.04}px))`);
});
