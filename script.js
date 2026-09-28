(function () {
  const D = window.PORTFOLIO;

  const UI = {
    ar: { project: "المشروع:", role: "دوري:", cta: "جاهزة نتكلم عن مشروعك!", view: "شوف الشغل ↗", allWork: "شوف كل شغلي ↗", soon: "قريبًا", empty: "لسه مفيش شغل مضاف هنا.", video: "فيديو" },
    en: { project: "Project:", role: "Role:", cta: "Ready to talk about your project!", view: "View the work ↗", allWork: "See all my work ↗", soon: "Coming soon", empty: "No work added here yet.", video: "Video" },
  };
  const THEMES = { light: "light", white: "white", pink: "pinkbg", dark: "dark", "dark-side": "dark-side" };

  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  let lang = "en";
  const t = (o) => (o && typeof o === "object" ? o[lang] || o.en || o.ar || "" : o || "");

  function mediaEl(item, { controls = false } = {}) {
    if (item.type === "video") {
      const v = document.createElement("video");
      v.src = item.src;
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.preload = "metadata";
      if (item.poster) v.poster = item.poster;
      if (controls) v.controls = true;
      else v.autoplay = true;
      return v;
    }
    const img = el("img");
    img.src = item.src;
    if (item.position) img.style.objectPosition = item.position;
    if (item.fit) img.style.objectFit = item.fit;
    img.alt = item.alt || "";
    img.loading = "lazy";
    return img;
  }

  function buildCases() {
    const tpl = $("#caseTpl");
    const contact = $("#contact");
    document.querySelectorAll(".slide.case").forEach((n) => n.remove());
    D.cases.forEach((c) => {
      const s = tpl.content.firstElementChild.cloneNode(true);
      s.classList.add(THEMES[c.theme] || "dark");
      $(".case-script", s).textContent = c.script;
      $(".lbl-project", s).textContent = UI[lang].project;
      $(".lbl-role", s).textContent = UI[lang].role;
      $(".project", s).textContent = t(c.project);
      $(".role", s).textContent = t(c.role);
      const btn = $(".case-btn", s);
      const href = c.link || D.contact.work;
      btn.hidden = !href;
      if (href) {
        btn.href = href;
        btn.textContent = UI[lang].view;
        // open the folder directly, without also opening the popup
        btn.addEventListener("click", (e) => e.stopPropagation());
        btn.addEventListener("keydown", (e) => e.stopPropagation());
      }
      s.setAttribute("aria-label", "CASE " + c.script + " — " + t(c.project));

      const box = $(".case-media", s);
      const media = c.media || [];
      if (!media.length) {
        const ph = el("div", "ph");
        const sc = el("span", "script", c.script);
        sc.dir = "ltr";
        ph.append(sc, el("small", null, UI[lang].soon));
        box.append(ph);
      } else {
        const shown = media.slice(0, 3);
        box.classList.add("n" + shown.length);
        shown.forEach((item, i) => {
          const m = el("div", "m");
          const node = mediaEl(item);
          if (item.fit === "contain" && shown.length === 1) {
            // size the frame to the image's own proportions so it fills it exactly
            box.classList.add("fitted");
            m.classList.add("fitbox");
            node.style.objectFit = "cover";
            const setRatio = () => node.naturalWidth && (m.style.aspectRatio = node.naturalWidth + " / " + node.naturalHeight);
            if (node.complete) setRatio();
            else node.addEventListener("load", setRatio);
          }
          m.append(node);
          if (item.type === "video") m.append(el("span", "play", "▶"));
          if (i === shown.length - 1 && media.length > 3) {
            m.classList.add("more");
            m.dataset.more = "+" + (media.length - 3);
          }
          box.append(m);
        });
      }
      const open = () => openLightbox(c);
      s.addEventListener("click", open);
      s.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
      contact.before(s);
    });
    // with an odd number of slides, center the last one (contact) on its row
    contact.classList.toggle("solo", document.querySelectorAll(".deck > .slide").length % 2 === 1);
  }

  function qrCode(url) {
    const box = el("div", "code");
    if (typeof window.qrcode === "function") {
      try {
        const q = window.qrcode(0, "M");
        q.addData(url);
        q.make();
        box.innerHTML = q.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
        return box;
      } catch (e) {}
    }
    box.classList.add("fallback");
    box.textContent = "↗";
    return box;
  }

  function render() {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = "Yuyu Portfolio";
    $("#langToggle").textContent = lang === "ar" ? "EN" : "ع";

    document.querySelectorAll("[data-i18n]").forEach((n) => (n.textContent = UI[lang][n.dataset.i18n]));
    document.querySelectorAll("[data-bind]").forEach((n) => (n.textContent = t(D.profile[n.dataset.bind])));

    // cover
    $("#coverPhoto").src = D.profile.photo;
    $("#coverPhoto").alt = t(D.profile.name);
    $("#coverName").textContent = D.profile.name.en || t(D.profile.name);
    const c = D.contact;

    // about
    $("#aboutPhoto").src = D.profile.photo;
    $("#aboutPhoto").alt = t(D.profile.name);
    // about lines allow <b> only; everything else is escaped
    $("#aboutList").replaceChildren(
      ...D.profile.about.map((line) => {
        const li = el("li");
        const safe = t(line).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/&lt;(\/?)b>/g, "<$1b>");
        li.innerHTML = safe;
        return li;
      })
    );
    $("#tools").textContent = (D.profile.tools || []).join("  ·  ");

    // skills
    $("#pills").replaceChildren(...D.skills.pills.map((p) => el("span", null, t(p))));
    $("#features").replaceChildren(
      ...D.skills.features.map((f) => {
        const d = el("div");
        d.append(el("h3", null, t(f.title)), el("p", null, t(f.text)));
        return d;
      })
    );

    buildCases();

    // contact
    const mail = $("#mailLink");
    mail.textContent = c.email || "";
    mail.href = "mailto:" + (c.email || "");
    mail.hidden = !c.email;
    const phone = $("#phoneLink");
    const wa = String(c.whatsapp || "").replace(/\D/g, "");
    phone.hidden = !wa;
    if (wa) {
      phone.href = "https://wa.me/" + wa;
      // 201122278621 -> +20 112 227 8621
      phone.textContent = "WhatsApp  +" + wa.replace(/^(\d{2})(\d{3})(\d{3})(\d+)$/, "$1 $2 $3 $4");
    }
    const links = [
      ["Instagram", c.instagram],
      ["TikTok", c.tiktok],
      ["WhatsApp", c.whatsapp && "https://wa.me/" + String(c.whatsapp).replace(/\D/g, "")],
      ["Behance", c.behance],
    ].filter(([, u]) => u);
    $("#qrs").replaceChildren(
      ...links.map(([name, url]) => {
        const a = el("a", "qr");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener";
        a.append(qrCode(url), el("span", null, name));
        return a;
      })
    );
    $("#qrs").hidden = !links.length;
    ["#coverWork", "#contactWork"].forEach((id) => {
      const a = $(id);
      a.hidden = !c.work;
      if (c.work) a.href = c.work;
    });
    $("#contactPhoto").src = D.profile.photo;

    $("#year").textContent = new Date().getFullYear();
  }

  // lightbox
  let lastFocus = null;
  function openLightbox(c) {
    lastFocus = document.activeElement;
    $("#lbScript").textContent = c.script;
    $("#lbTitle").textContent = t(c.project) + " — " + t(c.role);
    const g = $("#lbGallery");
    const media = c.media || [];
    g.replaceChildren(...(media.length ? media.map((m) => mediaEl(m, { controls: true })) : [el("p", "lb-empty", UI[lang].empty)]));
    $("#lightbox").hidden = false;
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  }
  function closeLightbox() {
    $("#lightbox").hidden = true;
    $("#lbGallery").replaceChildren();
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  $("#lbClose").onclick = closeLightbox;
  $("#lightbox").onclick = (e) => { if (e.target.id === "lightbox") closeLightbox(); };
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#lightbox").hidden) closeLightbox(); });

  $("#langToggle").onclick = () => {
    lang = lang === "ar" ? "en" : "ar";
    render();
  };

  render();
})();
