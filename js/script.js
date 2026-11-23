const SITE = {
<<<<<<< HEAD
  name: "ODM Ville International",
=======
  name: "ODM Ville Int",
>>>>>>> e9b0ef644946543d77bdaa34b05f58f611ddcad6
  phone: "+234 813 226 3555",
  email: "info@odmvilleagency.com",
  addr: "Lagos, Nigeria",
};
const SERVICES = [
  [
    "Branding, Outdoor Advertising and Activation",
    "branding-outdoor-advertising-activation",
    "Take your brand beyond the screen. We provide creative and promotional solutions that help businesses strengthen their identity and reach consumers in physical spaces.",
    true,
  ],
  [
    "BRAND PROMOTION AND CAMPAIGN MANAGEMENT",
    "content-creation-distribution",
    "Brand awareness, product launches and promotional campaigns.. We plan and execute impactful promotional campaigns, product launches and brand activations that connect businesses with their target audiences. Take your brand beyond the screen. We provide creative and promotional solutions that help businesses strengthen their identity and reach consumers in physical spaces..",
    true,
  ],
  [
    "Digital Advertising",
    "digital-advertising",
    "Reach the people who matter. We help brands promote their products and services through targeted digital advertising campaigns, including Facebook, Instagram, TikTok, X, Google and YouTube advertising; campaign planning and management; audience targeting; and performance monitoring.",
    true,
  ],
  [
    "Influencer Marketing",
    "influencer-marketing",
    "Put your brand in the right conversations. We connect businesses with influencers and content creators across different niches, platforms and audience sizes. Our services include influencer sourcing and selection, micro, nano and macro influencer campaigns, celebrity endorsements, TikTok and Instagram promotions, X influencer campaigns, product reviews and endorsements, and campaign management.",
    true,
  ],
  [
    "Social Media Marketing",
    "social-media-marketing",
    "Build your brand where your audience spends time. We help businesses establish and maintain a strong social media presence through strategic content, audience engagement and promotional campaigns. Services include social media strategy, account management, content planning, audience growth campaigns, community management, social media promotions and performance reporting across X, Instagram, TikTok, Facebook, LinkedIn, YouTube and Snapchat.",
    true,
  ],
  [
    "Media Publicity and Online PR",
    "media-publicity-online-pr",
    "Get your brand in the spotlight. We help businesses and individuals gain media exposure through strategic publicity and placements across established media platforms. Our services include sponsored news publications, press releases, brand announcements, product launch publicity, online newspaper features, entertainment and lifestyle blog placements, personal brand publicity and media relations.",
    true,
  ],
  [
    "Public Relations",
    "public-relations",
    "Reputation management, strategic communications and publicity.",
    true,
  ],
  [
    "Wikipedia & Knowledge Panel",
    "wikipedia-knowledge-panel",
    "Wikipedia profile development and Google Knowledge Panel services, subject to eligibility and platform guidelines.",
    true,
  ],
  [
    "Event & Campaign Activation",
    "event-campaign-activation",
    "Product activations, experiential marketing and promotional events.",
    true,
  ],
];
const ph = (n) =>
  `<div class="ph"><img data-src="images/${n}" alt="" onerror="this.remove()"></div>`;
const route = location.pathname.split("/").pop() || "index";
const here = route.endsWith(".html") ? route : `${route}.html`;
const PAGE_TITLES = {
  "index.html": "Home",
  "about-us.html": "About Us",
  "meet-the-ceo.html": "Meet the CEO",
  "services.html": "Services",
  "contact-us.html": "Contact Us",
  "work-with-us.html": "Work With Us",
};
const L = [
  ["index.html", "Home"],
  ["about-us.html", "About Us"],
  ["meet-the-ceo.html", "Meet the CEO"],
  ["services.html", "Services"],
  ["contact-us.html", "Contact Us"],
];
const SEARCH_ITEMS = [
  {
    title: "Home",
    href: "index.html",
    text: "Marketing brand communications strategy influence growth vision mission Bite Ile-Iyan Indomine Airtel DStv Jumia MTN NIMC Wikipedia YouTube",
  },
  {
    title: "About Us",
    href: "about-us.html",
    text: "Agency marketing communication visibility audiences growth values talent excellence integrity development opportunity longevity discover develop manage connect execute grow",
  },
  {
    title: "Meet the CEO",
    href: "meet-the-ceo.html",
    text: "Samuel Oladimeji Edun digital marketing social media influencer brand communications publicity",
  },
  {
    title: "Services",
    href: "services.html",
    text: "Branding outdoor advertising activation content creation digital advertising influencer marketing social media publicity online PR Public Relations Wikipedia Knowledge Panel Event Campaign Activation",
  },
  {
    title: "Selected Campaigns",
    href: "services.html#selected-campaigns",
    text: "NIMC National Identity Registration Awareness MTN Make A Difference Rite Foods Bigi Flex BBNaija Big Brother Naija Foodelo Digital Brand Awareness ILE IYAN PODs Influencer Marketing UGC Campaign",
  },
  {
    title: "Contact Us",
    href: "contact-us.html",
    text: "Contact enquiry Lagos Nigeria email phone project",
  },
  {
    title: "Work With Us",
    href: "work-with-us.html",
    text: "Work with us consultation artist management A&R talent events branding promotions",
  },
  ...SERVICES.map(([title, id, text]) => ({
    title,
    href: `services.html#${id}`,
    text,
  })),
];
document.body.insertAdjacentHTML(
  "afterbegin",
  `<div class="top"><div class="wrap"><span>Open Mon–Sat, 9am–6pm</span><a href="tel:${SITE.phone.replace(/\s/g, "")}">${SITE.phone}</a></div></div>
<header class="main"><div class="wrap"><a class="logo" href="index.html"><img data-src="images/odm-ville-logo.webp" alt="">ODM <b>Ville</b> </a>
<nav id="nav"><input class="search" type="search" placeholder="Search" aria-label="Search">${L.map((l) => `<a href="${l[0]}" class="${here == l[0] ? "on" : ""}">${l[1]}</a>`).join("")}<a class="btn" href="work-with-us.html">Work With Us</a></nav>
<button class="burger" aria-label="Menu" onclick="nav.classList.toggle('open')">☰</button></div></header>`,
);
const currentPage = PAGE_TITLES[here] || PAGE_TITLES["index.html"];
const returnPage = PAGE_TITLES[here] ? here : "index.html";
const breadcrumb = document.createElement("nav");
breadcrumb.className = "breadcrumbs";
breadcrumb.setAttribute("aria-label", "Breadcrumb");
breadcrumb.innerHTML =
  here === "index.html"
    ? '<a href="index.html" aria-current="page">Home</a>'
    : `<a href="index.html">Home</a><span aria-hidden="true">»</span><a href="${here}" aria-current="page">${currentPage}</a>`;
const banner = document.querySelector(".banner");
if (banner) banner.append(breadcrumb);
else document.querySelector("header.main").after(breadcrumb);
const searchInput = document.querySelector(".search");
const searchResults = document.createElement("div");
searchResults.className = "search-results";
searchResults.hidden = true;
searchResults.setAttribute("aria-label", "Search results");
searchInput.setAttribute("aria-controls", "site-search-results");
searchInput.setAttribute("aria-expanded", "false");
searchInput.setAttribute("aria-autocomplete", "list");
searchResults.id = "site-search-results";
searchInput.insertAdjacentElement("afterend", searchResults);
const hideSearchResults = () => {
  searchResults.hidden = true;
  searchInput.setAttribute("aria-expanded", "false");
};
searchInput.addEventListener("input", () => {
  const terms = searchInput.value
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  searchResults.replaceChildren();
  if (!terms.length) {
    hideSearchResults();
    return;
  }
  const matches = SEARCH_ITEMS.filter((item) => {
    const searchable = `${item.title} ${item.text}`.toLowerCase();
    return terms.every((term) => searchable.includes(term));
  }).slice(0, 8);
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.textContent = "No matching pages or services.";
    searchResults.append(empty);
  } else {
    const list = document.createElement("ul");
    matches.forEach((item) => {
      const row = document.createElement("li");
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.title;
      row.append(link);
      list.append(row);
    });
    searchResults.append(list);
  }
  searchResults.hidden = false;
  searchInput.setAttribute("aria-expanded", "true");
});
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideSearchResults();
  if (event.key === "Enter") {
    const firstResult = searchResults.querySelector("a");
    if (firstResult) firstResult.click();
  }
});
document.addEventListener("click", (event) => {
  if (!searchResults.contains(event.target) && event.target !== searchInput)
    hideSearchResults();
});
document.body.insertAdjacentHTML(
  "beforeend",
  `<section class="cta"><div class="wrap"><h2>Ready to build your brand?</h2><p>Tell us about your brand, artist or project.</p><a class="btn" href="work-with-us.html">Work With Us</a></div></section>
<footer><div class="wrap grid g4"><div><h4>${SITE.name}</h4><p>Building Brands Through Strategy, Influence and Communication.</p><div class="social-links" aria-label="Social media links">
<a href="#" aria-label="X" title="X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.4L2.8 2h6.5l4.4 5.8L18.9 2Zm-1.1 17.8h1.7L7.4 4.1H5.6l12.2 15.7Z"/></svg></a>
<a href="#" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.3 7.9H1.8V22h3.5V7.9ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22 13.8c0-4.2-2.2-6.2-5.2-6.2a4.5 4.5 0 0 0-4.1 2.3V7.9H9.2V22h3.5v-7c0-1.8.3-3.6 2.6-3.6 2.2 0 2.3 2.1 2.3 3.7V22H22v-8.2Z"/></svg></a>
<a href="#" aria-label="Facebook" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 22v-9h3l.5-3.5h-3.5V7.2c0-1 .3-1.7 1.7-1.7h1.9V2.3a25 25 0 0 0-2.7-.1c-2.7 0-4.6 1.7-4.6 4.7v2.6H7V13h3v9h3.7Z"/></svg></a>
<a href="#" aria-label="TikTok" title="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 2c.3 2.2 1.5 3.6 3.6 3.8v3.3a7 7 0 0 1-3.6-1v7.1a6.2 6.2 0 1 1-5.4-6.2v3.4a2.9 2.9 0 1 0 2.1 2.8V2h3.3Z"/></svg></a>
<a href="#" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.2-2.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg></a>
</div></div>
<div><h4>Pages</h4>${L.map((l) => `<a href="${l[0]}">${l[1]}</a>`).join("")}</div>
<div><h4>Contact</h4><p>${SITE.addr}<br>${SITE.phone}<br>${SITE.email}</p><p>Mon–Sat, 9am–6pm</p></div>
<div><h4>Newsletter</h4><form id="newsletter-form" action="form-handler.php" method="post"><input type="hidden" name="form_type" value="newsletter"><input type="hidden" name="return_to" value="${returnPage}"><label class="sr-only" for="newsletter-email">Your email</label><input id="newsletter-email" name="email" type="email" autocomplete="email" placeholder="Your email" required><label class="sr-only" aria-hidden="true" hidden>Leave this field empty<input name="website" type="text" tabindex="-1" autocomplete="off"></label><button class="btn">Subscribe</button></form><p id="newsletter-status" data-form-status="newsletter" role="status" aria-live="polite"></p></div></div>
<div class="copy">© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</div></footer>
<a class="wa" href="https://wa.me/2348132263555">WhatsApp</a>`,
);
const formStatus = new URLSearchParams(location.search);
const formStatusType = formStatus.get("form_type");
const formStatusTarget = {
  newsletter: [
    "#newsletter-status",
    "Your newsletter request was sent to ODM Ville.",
  ],
  contact: ["#contact-status", "Your message was sent to ODM Ville."],
  work_with_us: [
    "#work-with-us-status",
    "Your Work With Us request was sent to ODM Ville.",
  ],
}[formStatusType];
if (formStatusTarget) {
  const status = document.querySelector(formStatusTarget[0]);
  if (status) {
    const result = formStatus.get("form_status");
    status.textContent =
      result === "submitted"
        ? formStatusTarget[1]
        : result === "failed"
          ? "We could not send your request. Please email info@odmvilleagency.com."
          : "Please check the form and try again.";
    history.replaceState(null, "", location.pathname + location.hash);
  }
}
document.querySelectorAll("[data-services]").forEach((el) => {
  el.innerHTML = (
    el.dataset.services === "featured" ? SERVICES.slice(0, 3) : SERVICES
  )
    .map(
      (s, i) =>
        `<div class="card"${s[3] ? " data-long-description" : ""}>${ph(i < 5 ? "service-" + (i + 1) + ".jpg" : "hero-3.jpg")}<div class="body"><h3>${s[0]}</h3><p data-service-description>${s[2]}</p></div></div>`,
    )
    .join("");
});
document.querySelectorAll(".card[data-long-description]").forEach((card) => {
  const description = card.querySelector("p");
  if (!description) return;
  const campaignDetails = card.querySelector(".campaign-details");
  const fullDescription = campaignDetails
    ? [...campaignDetails.querySelectorAll("p")]
        .map((paragraph) => paragraph.textContent.replace(/\s+/g, " ").trim())
        .join("\n\n")
    : description.textContent.replace(/\s+/g, " ").trim();
  description.dataset.fullDescription = fullDescription;
  description.setAttribute("data-service-description", "");
  const button = document.createElement("button");
  button.className = "more";
  button.type = "button";
  button.textContent = "Read More";
  button.setAttribute("aria-haspopup", "dialog");
  card.querySelector(".body").append(button);
});
const serviceDialog = document.createElement("dialog");
serviceDialog.className = "service-dialog";
serviceDialog.id = "service-details";
serviceDialog.setAttribute("aria-labelledby", "service-dialog-title");
serviceDialog.innerHTML =
  '<button class="service-dialog-close" type="button" aria-label="Close dialog">×</button><h2 id="service-dialog-title"></h2><p></p>';
document.body.append(serviceDialog);
serviceDialog
  .querySelector(".service-dialog-close")
  .addEventListener("click", () => serviceDialog.close());
serviceDialog.addEventListener("click", (event) => {
  if (event.target === serviceDialog) serviceDialog.close();
});
document.querySelectorAll(".card .more").forEach((button) => {
  button.setAttribute("aria-controls", serviceDialog.id);
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    serviceDialog.querySelector("h2").textContent =
      card.querySelector("h3").textContent;
    serviceDialog.querySelector("p").textContent =
      card.querySelector("p").dataset.fullDescription;
    serviceDialog.showModal();
  });
});
const network =
  navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const isSlowNetwork = () =>
  network &&
  (network.saveData ||
    /^(slow-)?[23]g$/.test(network.effectiveType || "") ||
    (network.downlink > 0 && network.downlink < 1) ||
    network.rtt > 500);
const loadImage = (image) => {
  if (!image || !image.dataset.src || isSlowNetwork()) return;
  image.loading = "lazy";
  image.decoding = "async";
  image.src = image.dataset.src;
  delete image.dataset.src;
};
let imageObserver;
const startImageLoading = () => {
  if (isSlowNetwork()) return;
  document.querySelectorAll("img[data-src]").forEach((image) => {
    if (image.hasAttribute("data-priority")) {
      image.fetchPriority = "high";
      loadImage(image);
    } else if (image.closest(".slide")) {
      if (image.closest(".slide").classList.contains("on")) loadImage(image);
    } else if ("IntersectionObserver" in window) {
      if (!imageObserver)
        imageObserver = new IntersectionObserver(
          (entries, observer) =>
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              observer.unobserve(entry.target);
              loadImage(entry.target);
            }),
          { rootMargin: "200px 0px" },
        );
      imageObserver.observe(image);
    } else {
      loadImage(image);
    }
  });
};
startImageLoading();
if (network && network.addEventListener)
  network.addEventListener("change", startImageLoading);
const sl = [...document.querySelectorAll(".slide")];
let n = 0;
const go = (i) => {
  if (!sl.length) return;
  sl[n].classList.remove("on");
  n = (i + sl.length) % sl.length;
  sl[n].classList.add("on");
  loadImage(sl[n].querySelector("img[data-src]"));
};
if (sl.length) {
  document.getElementById("prev").onclick = () => go(n - 1);
  document.getElementById("next").onclick = () => go(n + 1);
  setInterval(() => go(n + 1), 6000);
}
const io = new IntersectionObserver((es) =>
  es.forEach((e) => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    if (e.target.matches(".bar"))
      e.target.querySelector("b").style.width = e.target.dataset.v + "%";
    else {
      const t = +e.target.dataset.n;
      let c = 0;
      const s = setInterval(() => {
        c += Math.ceil(t / 40);
        if (c >= t) {
          c = t;
          clearInterval(s);
        }
        e.target.textContent = c + "+";
      }, 30);
    }
  }),
);
document.querySelectorAll(".bar,[data-n]").forEach((x) => io.observe(x));
