const dateInput=document.querySelector('#date');
const today=new Date();
dateInput.min=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#service').value=link.dataset.service;}));
document.querySelector('#booking-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);const message=`Hello EMR! I would like to enquire about a ${data.get('service').toLowerCase()}.\nTravel date: ${data.get('date')}\nPickup & destination: ${data.get('route').trim()}\nPlease share availability and a quote.`;window.open('https://wa.me/256786877552?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');});
if(matchMedia('(hover:hover) and (prefers-reduced-motion:no-preference)').matches){const stage=document.querySelector('#stage'),van=stage.querySelector('img');stage.addEventListener('pointermove',event=>{const box=stage.getBoundingClientRect(),x=(event.clientX-box.left)/box.width-.5,y=(event.clientY-box.top)/box.height-.5;van.style.transform=`rotate(-2deg) rotateY(${x*9}deg) rotateX(${-y*5}deg) translateY(${-y*8}px)`;});stage.addEventListener('pointerleave',()=>van.style.transform='rotate(-2deg)');}

document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(item=>{const selected=item===button;item.classList.toggle('active',selected);item.setAttribute('aria-pressed',String(selected));});
  let count=0;document.querySelectorAll('.car-card').forEach(card=>{card.hidden=button.dataset.filter!=='All'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++;});
  document.querySelector('.fleet-count').textContent=`Showing ${count} vehicles`;
}));
