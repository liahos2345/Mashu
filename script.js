// Simple carousel with autoplay, keyboard and touch support
document.addEventListener('DOMContentLoaded', ()=>{
  // --- translations and language toggle ---
  const translations = {
    en: {
      title: 'Help me find my cat Mashu',
      logo: 'Help me find my cat Mashu',
      share_hero: 'Share',
      report: 'Report',
      hero_heading: 'Help me find my cat Mashu',
      hero_lead: 'Post photos, add the last known location, and share quickly with your community. The more eyes, the better the chances.',
      view_reports: 'Mashu Photos',
      report_form: 'Report Found / Missing',
      section_recent_reports: 'Mashu Photos',
      last_seen_prefix: 'Last seen:',
      last_seen_1: 'Maple St — 2 days ago',
      last_seen_2: 'Westbrook Park — 1 day ago',
      last_seen_3: '3rd Ave & Pine — 6 hours ago',
      last_seen_4: 'Riverside — 5 days ago',
      last_seen_5: 'Hillcrest — 3 days ago',
      last_seen_6: 'Oakwood — 4 days ago',
      info_title: 'Please text me if you see or find Mashu. I really appreciate your help.',
      contact_heading: 'Contact',
      contact_paragraph: `Please contact me if you see or find Mashu:<br><strong>Phone:</strong> <a href="tel:+8611265950">8611265950</a><br><strong>Email:</strong> <a href="mailto:coram7056@gmail.com">coram7056@gmail.com</a>`,
      contact_phone: 'Call: 8611265950',
      contact_email: 'Email: coram7056@gmail.com',
      info_li1: 'Check hiding places near where he went missing — inside sheds, under porches, and in garages.',
      info_li2: 'Bring familiar scents and food when searching.',
      info_li3: 'Share on local social media and neighborhood groups with photos and the last known location.',
      info_li4: 'Put up clear, weatherproof flyers with contact info and a recent photo.',
      footer_small: 'Made with care • Keep an eye out for neighborhood cats',
      share_site_text: 'Find lost cats in the neighborhood',
      share_slide: 'Share',
      report_found: 'Report Found',
      share_slide_text_prefix: 'Last seen:',
      cat_history: 'My Cat History',
      history_title: 'My cat — History',
      history_paragraph: `Thank you for your time. My cat's name is <strong>Mashu</strong>. He is a two-year-old male I adopted as a kitten. You can see his pictures below on this page.<br><br>We recently moved to Monterey and he had begun to settle into our new home, but on <strong>October 15</strong> he went missing and has not returned. As I am new to the area, I am not yet familiar with the neighborhood. Please share this as widely as possible and help me find Mashu — he is like family to me. Any help is greatly appreciated.`,
      share_copied_alert: 'Share text copied to clipboard',
      url_copied_alert: 'Page URL copied to clipboard',
      toggle_label: 'ES',
      // share modal / UI labels
      share_modal_title: 'Share',
      share_modal_desc: 'Share this page or the currently visible Mashu photos with your neighbors.',
      share_page_btn: 'Share page',
      copy_link_btn: 'Copy link',
      share_cards_btn: 'Share current photos'
    },
    es: {
      title: 'Ayúdame a encontrar a mi gato Mashu',
      logo: 'Ayúdame a encontrar a mi gato Mashu',
      share_hero: 'Compartir',
      report: 'Informar',
      hero_heading: 'Ayúdame a encontrar a mi gato Mashu',
      hero_lead: 'Publica fotos, añade la última ubicación conocida y comparte rápidamente con tu comunidad. Cuantos más ojos, mejores probabilidades.',
      view_reports: 'Fotos de Mashu',
      report_form: 'Reportar encontrado / perdido',
      section_recent_reports: 'Fotos de Mashu',
      last_seen_prefix: 'Última vez visto:',
      last_seen_1: 'Maple St — hace 2 días',
      last_seen_2: 'Westbrook Park — hace 1 día',
      last_seen_3: '3rd Ave & Pine — hace 6 horas',
      last_seen_4: 'Riverside — hace 5 días',
      last_seen_5: 'Hillcrest — hace 3 días',
      last_seen_6: 'Oakwood — hace 4 días',
      info_title: 'Por favor envíame un mensaje cuando veas o encuentres a Mashu. Realmente aprecio tu ayuda.',
      contact_heading: 'Contacto',
      contact_paragraph: `Por favor contáctame si ves o encuentras a Mashu:<br><strong>Teléfono:</strong> <a href="tel:+8611265950">8611265950</a><br><strong>Correo:</strong> <a href="mailto:coram7056@gmail.com">coram7056@gmail.com</a>`,
      contact_phone: 'Llamar: 8611265950',
      contact_email: 'Correo: coram7056@gmail.com',
      info_li1: 'Revisa lugares donde pueda esconderse cerca del lugar donde desapareció — dentro de cobertizos, bajo porches y en garajes.',
      info_li2: 'Lleva olores y comida familiares cuando busques.',
      info_li3: 'Comparte en redes sociales locales y en grupos de vecinos con fotos y la última ubicación conocida.',
      info_li4: 'Coloca carteles claros y resistentes al clima con información de contacto y una foto reciente.',
      footer_small: 'Hecho con cuidado • Mantén un ojo en los gatos del vecindario',
      share_site_text: 'Encuentra gatos perdidos en el vecindario',
      share_slide: 'Compartir',
      report_found: 'Reportar encontrado',
      share_slide_text_prefix: 'Última vez visto:',
      cat_history: 'Historia de mi gato',
      history_title: 'Historia de mi gato',
      history_paragraph: `Gracias por tu tiempo. Mi gato se llama <strong>Mashu</strong>. Es un macho de dos años que adopté cuando era un gatito. Puedes ver sus fotos más abajo en esta página.<br><br>Recientemente nos mudamos a Monterey y ya se había adaptado a nuestro nuevo hogar, pero el <strong>15 de octubre</strong> desapareció y no ha regresado. Como soy nuevo en la zona, aún no conozco bien el vecindario. Por favor comparte esto tanto como puedas y ayúdame a encontrar a Mashu — es como un miembro de la familia. Cualquier ayuda será muy apreciada.`,
      share_copied_alert: 'Texto para compartir copiado al portapapeles',
      url_copied_alert: 'URL de la página copiada al portapapeles',
      toggle_label: 'EN',
      // share modal / UI labels
      share_modal_title: 'Compartir',
      share_modal_desc: 'Comparte esta página o las fotos visibles de Mashu con tus vecinos.',
      share_page_btn: 'Compartir página',
      copy_link_btn: 'Copiar enlace',
      share_cards_btn: 'Compartir fotos visibles'
    }
  };

  let currentLang = localStorage.getItem('lang') || 'es';

  function applyTranslations(lang){
    const map = translations[lang] || translations.en;
    document.title = map.title;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(map[key]) el.textContent = map[key];
    });
    // allow HTML for richer formatted translations (e.g. letter content)
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{
      const key = el.getAttribute('data-i18n-html');
      if(map[key]) el.innerHTML = map[key];
    });
    // simple attribute translators
    document.querySelectorAll('[data-i18n-alt]').forEach(el=>{
      const key = el.getAttribute('data-i18n-alt'); if(map[key]) el.alt = map[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
      const key = el.getAttribute('data-i18n-aria'); if(map[key]) el.setAttribute('aria-label', map[key]);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el=>{
      const key = el.getAttribute('data-i18n-title'); if(map[key]) el.title = map[key];
    });

    const langToggle = document.getElementById('lang-toggle');
    if(langToggle) langToggle.textContent = map.toggle_label || (lang === 'es' ? 'EN' : 'ES');
    localStorage.setItem('lang', lang);
  }

  applyTranslations(currentLang);

  document.getElementById('lang-toggle')?.addEventListener('click', ()=>{
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyTranslations(currentLang);
  });

  // ensure language button uses same CTA background as other buttons
  const langBtn = document.getElementById('lang-toggle');
  if(langBtn){
    langBtn.classList.remove('ghost');
    langBtn.classList.add('btn');
  }

  // --- end translations ---
  const slidesEl = document.querySelector('.slides');
  // original slide figures (individual reports)
  const origSlides = Array.from(document.querySelectorAll('.slide'));
  // group into pages of 3 cards per slide
  const itemsPerPage = 3;
  const pages = [];
  for(let i=0;i<origSlides.length;i+=itemsPerPage){
    const page = document.createElement('div');
    page.className = 'slide-page';
    for(let j=0;j<itemsPerPage;j++){
      const item = origSlides[i+j];
      if(item){
        const card = item.cloneNode(true);
        card.classList.add('card');
        page.appendChild(card);
      } else {
        // filler empty card to keep layout
        const empty = document.createElement('div');
        empty.className = 'card empty-card';
        page.appendChild(empty);
      }
    }
    pages.push(page);
  }
  // clear and append pages into slidesEl
  slidesEl.innerHTML = '';
  pages.forEach(p=> slidesEl.appendChild(p));
  // pages act as slides now
  const slides = pages;
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsEl = document.querySelector('.dots');
  const shareHero = document.getElementById('share-hero');
  const shareSlideBtn = document.getElementById('share-slide');

  if(!slidesEl || slides.length===0) return;

  let index = 0;
  let autoTimer = null;
  const autoplayDelay = 4000;

  function goTo(i){
    index = (i + slides.length) % slides.length;
    slidesEl.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  function next(){ goTo(index+1) }
  function prev(){ goTo(index-1) }

  // create dots for pages
  slides.forEach((s,i)=>{
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', `Show slides ${i*itemsPerPage+1}-${Math.min((i+1)*itemsPerPage, origSlides.length)}`);
    btn.addEventListener('click', ()=>{ goTo(i); resetAutoplay(); });
    dotsEl.appendChild(btn);
  });

  function updateDots(){
    const btns = Array.from(dotsEl.children);
    btns.forEach((b,idx)=> b.classList.toggle('active', idx===index));
  }

  prevBtn.addEventListener('click', ()=>{ prev(); resetAutoplay(); });
  nextBtn.addEventListener('click', ()=>{ next(); resetAutoplay(); });

  // autoplay
  function startAutoplay(){ autoTimer = setInterval(next, autoplayDelay); }
  function stopAutoplay(){ clearInterval(autoTimer); autoTimer = null }
  function resetAutoplay(){ stopAutoplay(); startAutoplay(); }
  startAutoplay();

  // pause on hover/focus
  const carousel = document.querySelector('.carousel');
  ['mouseenter','focusin'].forEach(ev=> carousel.addEventListener(ev, stopAutoplay));
  ['mouseleave','focusout'].forEach(ev=> carousel.addEventListener(ev, startAutoplay));

  // keyboard
  document.addEventListener('keydown', (e)=>{
    if(e.key==='ArrowRight') { next(); resetAutoplay(); }
    if(e.key==='ArrowLeft') { prev(); resetAutoplay(); }
  });

  // touch/swipe support
  let startX = 0;
  slidesEl.addEventListener('touchstart', (e)=> startX = e.touches[0].clientX);
  slidesEl.addEventListener('touchend', (e)=>{
    const dx = e.changedTouches[0].clientX - startX;
    if(Math.abs(dx) > 40){ if(dx < 0) next(); else prev(); resetAutoplay(); }
  });

  // share helpers
  function shareCurrent(){
    const slide = slides[index];
    const title = slide.dataset.name || (translations[currentLang]?.logo || 'Lost cat');
    const loc = slide.dataset.location || '';
    const url = location.href.split('#')[0] + '#cards';
    const map = translations[currentLang] || translations.en;
    const prefix = map.share_slide_text_prefix || map.last_seen_prefix || '';
    const text = `${title} — ${prefix} ${loc} — ${map.share_site_text || ''}`;
    if(navigator.share){
      navigator.share({title: map.title || 'Help Find My Lost Cat', text, url}).catch(()=>{});
    } else {
      // fallback: copy to clipboard
      const tmp = `${text} — ${url}`;
      navigator.clipboard?.writeText(tmp).then(()=> alert(map.share_copied_alert || 'Share text copied to clipboard'))
    }
  }

  shareHero?.addEventListener('click', ()=>{
    // open share modal (we show a small UI with options)
    const shareModal = document.getElementById('share-modal');
    if(!shareModal) return;
    shareModal.setAttribute('aria-hidden','false');
  });
  // share modal handlers
  const shareModal = document.getElementById('share-modal');
  const shareClose = document.getElementById('share-close');
  const shareSiteBtn = document.getElementById('share-site-btn');
  const copyLinkBtn = document.getElementById('copy-link-btn');
  const shareCardsBtn = document.getElementById('share-cards-btn');

  function closeShareModal(){ shareModal?.setAttribute('aria-hidden','true'); }
  shareClose?.addEventListener('click', closeShareModal);
  shareModal?.addEventListener('click', (e)=>{ if(e.target === shareModal.querySelector('.modal-backdrop')) closeShareModal(); });

  shareSiteBtn?.addEventListener('click', ()=>{
    const map = translations[currentLang] || translations.en;
    if(navigator.share){ navigator.share({title: map.title || 'Help Find My Lost Cat', text: map.share_site_text || '', url:location.href}).catch(()=>{}); }
    else{ navigator.clipboard?.writeText(location.href).then(()=> alert(map.url_copied_alert || 'Page URL copied to clipboard')) }
    closeShareModal();
  });

  copyLinkBtn?.addEventListener('click', ()=>{
    const map = translations[currentLang] || translations.en;
    navigator.clipboard?.writeText(location.href).then(()=> alert(map.url_copied_alert || 'Page URL copied to clipboard'));
    closeShareModal();
  });

  shareCardsBtn?.addEventListener('click', ()=>{ shareCurrent(); closeShareModal(); });
  shareSlideBtn?.addEventListener('click', shareCurrent);
  // Cat history modal + envelope animation
  const catBtn = document.getElementById('cat-history');
  const modal = document.getElementById('history-modal');
  const envelope = modal?.querySelector('.envelope');
  const closeBtn = document.getElementById('history-close');

  function openHistory(){
    if(!modal) return;
    modal.setAttribute('aria-hidden','false');
    // reset classes
    envelope?.classList.remove('open','revealed');
    const letter = modal.querySelector('.letter');
    if(letter){ letter.style.opacity = 0 }
    requestAnimationFrame(()=>{
      envelope?.classList.add('open');
      setTimeout(()=>{
        envelope?.classList.add('revealed');
      }, 1000);
    });
  }

  function closeHistory(){
    if(!modal) return;
    modal.setAttribute('aria-hidden','true');
    envelope?.classList.remove('open','revealed');
  }

  catBtn?.addEventListener('click', openHistory);
  closeBtn?.addEventListener('click', closeHistory);
  modal?.addEventListener('click', (e)=>{ if(e.target === modal.querySelector('.modal-backdrop')) closeHistory(); });

  // init
  goTo(0);
});
