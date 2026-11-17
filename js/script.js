const SITE={name:'ODM Ville Int',phone:'+234 000 000 0000',email:'info@odmville.com',addr:'Lagos, Nigeria'};
const SERVICES=[
['Artist Management','artist-management','Career strategy, representation and day-to-day management for artists.'],
['A&R and Talent Discovery','talent-discovery','Finding and evaluating emerging talent with real potential.'],
['Artist Development / Bookings','artist-development','Building artistic identity, performance skill and booking opportunities.'],
['Events and Shows','events-and-shows','Planning, coordination and delivery of live entertainment events.'],
['Club Tours','club-tours','Venue partnerships, promotional appearances and live tour runs.'],
['Entertainment Project Management','project-management','Coordinating entertainment projects from first plan to final show.']];
const ph=n=>`<div class="ph"><img src="images/${n}" alt="" onerror="this.remove()"></div>`;
const here=location.pathname.split('/').pop()||'index.html';
const L=[['index.html','Home'],['about-us.html','About Us'],['meet-the-ceo.html','Meet the CEO'],['services.html','Services'],['contact-us.html','Contact Us']];
document.body.insertAdjacentHTML('afterbegin',`<div class="top"><div class="wrap"><span>Open Mon–Sat, 9am–6pm</span><a href="tel:${SITE.phone.replace(/\s/g,'')}">${SITE.phone}</a></div></div>
<header class="main"><div class="wrap"><a class="logo" href="index.html">ODM <b>Ville</b> Int</a>
<nav id="nav"><input class="search" type="search" placeholder="Search" aria-label="Search">${L.map(l=>`<a href="${l[0]}" class="${here==l[0]?'on':''}">${l[1]}</a>`).join('')}<a class="btn" href="appointment.html">Appointment</a></nav>
<button class="burger" aria-label="Menu" onclick="nav.classList.toggle('open')">☰</button></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<section class="cta"><div class="wrap"><h2>Looking for the best event and talent company?</h2><p>Tell us about your artist, event or project.</p><a class="btn" href="appointment.html">Get Started</a></div></section>
<footer><div class="wrap grid g4"><div><h4>${SITE.name}</h4><p>Entertainment and talent management company.</p></div>
<div><h4>Pages</h4>${L.map(l=>`<a href="${l[0]}">${l[1]}</a>`).join('')}</div>
<div><h4>Contact</h4><p>${SITE.addr}<br>${SITE.phone}<br>${SITE.email}</p><p>Mon–Sat, 9am–6pm</p></div>
<div><h4>Newsletter</h4><form onsubmit="event.preventDefault();this.innerHTML='Thanks for subscribing.'"><input type="email" placeholder="Your email" required><button class="btn">Subscribe</button></form></div></div>
<div class="copy">© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</div></footer>
<a class="wa" href="https://wa.me/2340000000000">WhatsApp</a>`);
document.querySelectorAll('[data-services]').forEach(el=>{el.innerHTML=SERVICES.map((s,i)=>`<div class="card">${ph('service-'+(i+1)+'.jpg')}<div class="body"><h3>${s[0]}</h3><p>${s[2]}</p><a class="more" href="services.html#${s[1]}">Read More</a></div></div>`).join('')});
const sl=[...document.querySelectorAll('.slide')];let n=0;
const go=i=>{if(!sl.length)return;sl[n].classList.remove('on');n=(i+sl.length)%sl.length;sl[n].classList.add('on')};
if(sl.length){document.getElementById('prev').onclick=()=>go(n-1);document.getElementById('next').onclick=()=>go(n+1);setInterval(()=>go(n+1),6000)}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
if(e.target.matches('.bar'))e.target.querySelector('b').style.width=e.target.dataset.v+'%';
else{const t=+e.target.dataset.n;let c=0;const s=setInterval(()=>{c+=Math.ceil(t/40);if(c>=t){c=t;clearInterval(s)}e.target.textContent=c+'+'},30)}}));
document.querySelectorAll('.bar,[data-n]').forEach(x=>io.observe(x));
