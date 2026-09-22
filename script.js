document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = "212625581918";

  /* ---------- I18N FR / EN / AR ---------- */
  const I18N = {
    fr: {
      skip: "Aller à la réservation",
      topbar: "✨ Offre du moment — Pose Gel + Vernis à <strong>150 MAD</strong> seulement · Réponse rapide sur WhatsApp ✨",
      navHome: "Accueil", navServices: "Services", navGallery: "Galerie", navFaq: "FAQ", navBook: "Réserver 💅",
      pill: "Nail artist · Marrakech · 4.9/5 ★★★★★", h1a: "Sublimez vos mains,", h1b: "révélez votre éclat.",
      lead: "Pose gel, vernis permanent & nail art délicat dans un espace cocooning. Réservation en 30 secondes, confirmation instantanée sur WhatsApp.",
      heroCta: "Réserver mon rendez-vous →", heroTarifs: "Voir les tarifs",
      stat1: "clientes satisfaites", stat2: "note moyenne", stat3: "7j/7 sur RDV",
      svcEyebrow: "Nos prestations", svcH1: "Des ongles parfaits,", svcH2: "à chaque visite",
      svcP: "Produits premium, hygiène irréprochable et finition soignée.",
      populaire: "Populaire", entretien: "Entretien", choisir: "Choisir ce service",
      svc1t: "Pose Gel + Vernis", svc1d: "Extension gel + couleur au choix, forme sur-mesure, tenue 3-4 semaines.",
      svc2t: "Vernis Permanent", svc2d: "Semi-permanent sur ongles naturels, brillance 3 semaines.",
      svc3t: "Manucure Classique", svc3d: "Limage, cuticules, hydratation + vernis classique.",
      svc4t: "Remplissage Gel", svc4d: "Repousse comblée, nouvelle couleur, comme neuves.",
      galEyebrow: "Portfolio", galH1: "Nos dernières", galH2: "créations",
      bookEyebrow: "Réservation", bookH1: "Réservez en", bookH2: "30 secondes",
      bookP: "Choisissez service, date & heure, confirmez sur WhatsApp. Sans acompte.",
      step1t: "Service", step2t: "Date & heure", step3t: "WhatsApp",
      step1: "4 rituels dès 50 MAD", step2: "Créneaux 10h → 18h, 7j/7 sur RDV", step3: "Confirmation instantanée",
      trustA: "Réponse rapide", trustB: "Sans acompte",
      formTitle: "Prendre rendez-vous", formSub: "Confirmation humaine en quelques minutes",
      fService: "Choisissez un service", fDate: "Date", fName: "Votre nom", fTime: "Heure disponible",
      fPhone: "Téléphone", optional: "(optionnel)", recap: "Votre récapitulatif", sumSvc: "Service", sumDate: "Date", sumTime: "Heure", sumTotal: "Total estimé",
      secure: "Sans paiement en ligne · Réponse en quelques minutes",
      confirmWa: "Confirmer par WhatsApp", faqH1: "Questions", faqH2: "fréquentes",
      q1: "Comment réserver ?", a1: "Choisissez service, date et heure, puis cliquez « Confirmer par WhatsApp ».",
      q2: "Combien de temps tient la pose ?", a2: "Gel : 3-4 semaines. Permanent : 2-3 semaines. Remplissage conseillé (100 MAD).",
      q3: "Quels sont les horaires ?", a3: "De 10h à 18h, 7j/7 sur rendez-vous.",
      ctaH: "Une question ? Écrivez-nous 💬", ctaP: "Réponse rapide sur WhatsApp — on vous confirme votre créneau en quelques minutes.",
      ctaBtn: "Discuter sur WhatsApp", follow: "Suivez-nous", findUs: "Nous trouver sur Maps"
    },
    en: {
      skip: "Skip to booking",
      topbar: "✨ Special offer — Gel Set + Polish for only <strong>150 MAD</strong> · Fast reply on WhatsApp ✨",
      navHome: "Home", navServices: "Services", navGallery: "Gallery", navFaq: "FAQ", navBook: "Book now 💅",
      pill: "Nail artist · Marrakech · 4.9/5 ★★★★★", h1a: "Pamper your hands,", h1b: "reveal your glow.",
      lead: "Gel extensions, permanent polish & delicate nail art in a cozy space. 30-second booking, instant confirmation on WhatsApp.",
      heroCta: "Book my appointment →", heroTarifs: "See prices",
      stat1: "happy clients", stat2: "average rating", stat3: "7 days on appointment",
      svcEyebrow: "Our services", svcH1: "Perfect nails,", svcH2: "every visit",
      svcP: "Premium products, strict hygiene and neat finish.",
      populaire: "Popular", entretien: "Maintenance", choisir: "Choose this service",
      svc1t: "Gel Set + Polish", svc1d: "Gel extension + color of choice, custom shape, 3-4 weeks wear.",
      svc2t: "Permanent Polish", svc2d: "Semi-permanent on natural nails, 3-week shine.",
      svc3t: "Classic Manicure", svc3d: "Filing, cuticles, hydration + classic polish.",
      svc4t: "Gel Refill", svc4d: "Regrowth filled, new color, like new.",
      galEyebrow: "Portfolio", galH1: "Our latest", galH2: "creations",
      bookEyebrow: "Booking", bookH1: "Book in", bookH2: "30 seconds",
      bookP: "Pick service, date & time, confirm on WhatsApp. No deposit.",
      step1t: "Service", step2t: "Date & time", step3t: "WhatsApp",
      step1: "4 rituals from 50 MAD", step2: "Slots 10am → 6pm, 7 days on appointment", step3: "Instant confirmation",
      trustA: "Fast reply", trustB: "No deposit",
      formTitle: "Book an appointment", formSub: "Human confirmation in minutes",
      fService: "Choose a service", fDate: "Date", fName: "Your name", fTime: "Available time",
      fPhone: "Phone", optional: "(optional)", recap: "Your summary", sumSvc: "Service", sumDate: "Date", sumTime: "Time", sumTotal: "Estimated total",
      secure: "No online payment · Reply in minutes",
      confirmWa: "Confirm via WhatsApp", faqH1: "Frequently", faqH2: "asked questions",
      q1: "How to book?", a1: "Pick service, date and time, then click “Confirm via WhatsApp”.",
      q2: "How long does it last?", a2: "Gel: 3-4 weeks. Permanent: 2-3 weeks. Refill advised (100 MAD).",
      q3: "What are the hours?", a3: "10am to 6pm, 7 days on appointment.",
      ctaH: "A question? Message us 💬", ctaP: "Fast reply on WhatsApp — we confirm your slot in minutes.",
      ctaBtn: "Chat on WhatsApp", follow: "Follow us", findUs: "Find us on Maps"
    },
    ar: {
      skip: "تخطي إلى الحجز",
      topbar: "✨ عرض خاص — تركيب الجل + صباغة بـ <strong>150 درهم</strong> فقط · رد سريع على واتساب ✨",
      navHome: "الرئيسية", navServices: "الخدمات", navGallery: "المعرض", navFaq: "أسئلة", navBook: "احجزي 💅",
      pill: "خبيرة أظافر · مراكش · 4.9/5 ★★★★★", h1a: "جمّلي يديكِ،", h1b: "وأبرزي إشراقتك.",
      lead: "تركيب الجل، الصباغة الدائمة ونيل آرت راقي في أجواء مريحة. الحجز في 30 ثانية والتأكيد فوري على واتساب.",
      heroCta: "← احجزي موعدك", heroTarifs: "شوفي الأثمنة",
      stat1: "زبونة سعيدة", stat2: "متوسط التقييم", stat3: "7 أيام بالموعد",
      svcEyebrow: "خدماتنا", svcH1: "أظافر مثالية،", svcH2: "في كل زيارة",
      svcP: "منتجات ممتازة، نظافة صارمة ولمسة متقنة.",
      populaire: "الأكثر طلبا", entretien: "صيانة", choisir: "اختاري هاد الخدمة",
      svc1t: "تركيب الجل + صباغة", svc1d: "تركيب الجل + لون من اختيارك، شكل مخصص، ثبات 3-4 أسابيع.",
      svc2t: "صباغة دائمة", svc2d: "شبه دائمة على الأظافر الطبيعية، لمعان 3 أسابيع.",
      svc3t: "مانيكير كلاسيك", svc3d: "برد، عناية بالجلد، ترطيب + صباغة كلاسيكية.",
      svc4t: "تعبئة الجل", svc4d: "ملء النمو، لون جديد، كأنها جديدة.",
      galEyebrow: "أعمالنا", galH1: "آخر", galH2: "إبداعاتنا",
      bookEyebrow: "الحجز", bookH1: "احجزي في", bookH2: "30 ثانية",
      bookP: "اختاري الخدمة والتاريخ والوقت، وأكدي على واتساب. بدون عربون.",
      step1t: "الخدمة", step2t: "التاريخ والوقت", step3t: "واتساب",
      step1: "4 طقوس من 50 درهم", step2: "من 10h إلى 18h، كل أيام الأسبوع بالموعد", step3: "تأكيد فوري",
      trustA: "رد سريع", trustB: "بدون عربون",
      formTitle: "خذي موعد", formSub: "سنؤكد موعدك خلال دقائق",
      fService: "اختاري خدمة", fDate: "التاريخ", fName: "اسمك", fTime: "الوقت المتاح",
      fPhone: "الهاتف", optional: "(اختياري)", recap: "ملخص طلبك", sumSvc: "الخدمة", sumDate: "التاريخ", sumTime: "الوقت", sumTotal: "المجموع التقريبي",
      secure: "بدون دفع أونلاين · الرد في دقائق",
      confirmWa: "التأكيد عبر واتساب", faqH1: "أسئلة", faqH2: "شائعة",
      q1: "كيفاش نحجز؟", a1: "اختاري الخدمة والتاريخ والوقت ثم ضغطي «التأكيد عبر واتساب».",
      q2: "شحال كتبقى التركيبة؟", a2: "الجل: 3-4 أسابيع. الدائمة: 2-3 أسابيع. التعبئة منصح بها (100 درهم).",
      q3: "شنو هما الأوقات؟", a3: "من 10h إلى 18h، كل أيام الأسبوع بالموعد.",
      ctaH: "عندك سؤال؟ كتبي لينا 💬", ctaP: "رد سريع على واتساب — نأكدو ليك الموعد في دقائق.",
      ctaBtn: "دردشي على واتساب", follow: "Suivez-nous", findUs: "Nous trouver sur Maps"
    }
  };

  let lang = localStorage.getItem('cn-lang') || 'fr';
  function applyLang(l){
    lang = l;
    localStorage.setItem('cn-lang', l);
    const dict = I18N[l];
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n');
      if(dict[k] !== undefined) el.innerHTML = dict[k];
    });
    document.documentElement.lang = l;
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('#langSwitch button').forEach(b=>b.classList.toggle('active', b.dataset.lang===l));
  }
  document.querySelectorAll('#langSwitch button').forEach(b=>b.addEventListener('click', ()=>applyLang(b.dataset.lang)));
  applyLang(lang);

  /* ---------- BOOKING ---------- */
  const serviceCards = document.querySelectorAll('.service-card');
  const selectedServiceInput = document.getElementById('selectedService');
  const dateInput = document.getElementById('date');
  const timeContainer = document.getElementById('timeContainer');
  const timeGrid = document.getElementById('timeGrid');
  const selectedTimeInput = document.getElementById('selectedTime');
  const bookingForm = document.getElementById('bookingForm');
  const toast = document.getElementById('toast');
  const progressBar = document.getElementById('progressBar');
  const sumService = document.getElementById('sumService');
  const sumDate = document.getElementById('sumDate');
  const sumTime = document.getElementById('sumTime');
  const sumPrice = document.getElementById('sumPrice');

  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'), 3200);
  }
  function updateProgress(){
    let p = 10;
    if(selectedServiceInput.value) p += 25;
    if(dateInput.value) p += 25;
    if(selectedTimeInput.value) p += 20;
    if(document.getElementById('name').value.trim().length>1) p += 20;
    progressBar.style.width = p + '%';
    progressBar.parentElement.setAttribute('aria-valuenow', p);
  }
  function updateSummary(){
    const card = document.querySelector('.service-card.active');
    sumService.textContent = selectedServiceInput.value || '—';
    sumPrice.textContent = card ? card.dataset.price : '—';
    if(dateInput.value){
      try{ sumDate.textContent = new Date(dateInput.value+'T12:00:00').toLocaleDateString(lang==='ar'?'ar-MA':lang==='en'?'en-GB':'fr-FR',{weekday:'short',day:'2-digit',month:'short'}); }
      catch(e){ sumDate.textContent = dateInput.value; }
    } else sumDate.textContent = '—';
    sumTime.textContent = selectedTimeInput.value || '—';
    updateProgress();
  }

  serviceCards.forEach(card=>{
    card.setAttribute('aria-pressed', card.classList.contains('active') ? 'true' : 'false');
    card.addEventListener('click', ()=>{
      serviceCards.forEach(c=>{ c.classList.remove('active'); c.setAttribute('aria-pressed','false'); c.classList.remove('input-error'); });
      card.classList.add('active');
      card.setAttribute('aria-pressed','true');
      selectedServiceInput.value = card.dataset.service;
      document.getElementById('servicesGrid').classList.remove('input-error');
      updateSummary();
    });
  });
  document.querySelectorAll('.book-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const svc = btn.dataset.service;
      const target = document.querySelector(`.service-card[data-service="${svc}"]`);
      if(target) target.click();
      document.getElementById('reservation').scrollIntoView({behavior:'smooth'});
    });
  });

  const todayStr = new Date().toISOString().split('T')[0];
  const maxD = new Date(); maxD.setFullYear(maxD.getFullYear()+1);
  const maxStr = maxD.toISOString().split('T')[0];
  dateInput.setAttribute('min', todayStr);
  dateInput.setAttribute('max', maxStr);
  dateInput.addEventListener('change', ()=>{
    if(dateInput.value && dateInput.value < todayStr){
      dateInput.value = '';
      showToast(lang==='ar'?'التاريخ فات، اختاري نهار جديد 📅':lang==='en'?'That date has passed 📅':'Cette date est passée 📅');
    }
    dateInput.classList.remove('input-error');
    if(dateInput.value){ timeContainer.style.display = 'block'; generateTimeSlots(); }
    else timeContainer.style.display = 'none';
    updateSummary();
  });
  function generateTimeSlots(){
    const times = ['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'];
    timeGrid.innerHTML = '';
    selectedTimeInput.value = '';
    const isToday = dateInput.value === todayStr;
    const nowH = new Date().getHours();
    times.forEach(time=>{
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'time-btn';
      btn.textContent = time;
      btn.setAttribute('aria-pressed','false');
      const h = parseInt(time.split(':')[0],10);
      if(isToday && h <= nowH){ btn.classList.add('old'); btn.title = 'passed'; btn.setAttribute('aria-disabled','true'); }
      else btn.addEventListener('click', ()=>{
        document.querySelectorAll('.time-btn').forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed','true');
        selectedTimeInput.value = time;
        timeGrid.classList.remove('input-error');
        updateSummary();
      });
      timeGrid.appendChild(btn);
    });
    updateSummary();
  }
  document.getElementById('name').addEventListener('input', (e)=>{ e.target.classList.remove('input-error'); updateSummary(); });

  bookingForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const service = selectedServiceInput.value;
    const date = dateInput.value;
    const time = selectedTimeInput.value;
    const nameEl = document.getElementById('name');
    const name = nameEl.value.trim();
    const phone = document.getElementById('phone').value.trim();
    let firstBad = null;
    document.getElementById('servicesGrid').classList.toggle('input-error', !service);
    if(!service) firstBad = firstBad || document.querySelector('.service-card');
    dateInput.classList.toggle('input-error', !date);
    if(!date) firstBad = firstBad || dateInput;
    timeGrid.classList.toggle('input-error', !!date && !time);
    if(date && !time) firstBad = firstBad || timeGrid.querySelector('.time-btn:not(.old)') || timeGrid;
    nameEl.classList.toggle('input-error', name.length<2);
    if(name.length<2) firstBad = firstBad || nameEl;
    if(firstBad){ showToast(lang==='ar'?'عمري جميع الخانات 💅':lang==='en'?'Please complete all fields 💅':'Veuillez tout remplir 💅'); if(firstBad.focus) firstBad.focus({preventScroll:false}); if(firstBad.scrollIntoView) firstBad.scrollIntoView({behavior:'smooth',block:'center'}); return; }
    const formattedDate = new Date(date+'T12:00:00').toLocaleDateString(lang==='ar'?'ar-MA':lang==='en'?'en-GB':'fr-FR',{weekday:'long',day:'numeric',month:'long'});
    const card = document.querySelector('.service-card.active');
    const price = card ? card.dataset.price : '';
    const message = `✨ *RDV — Chaima Nails* ✨\n\n👤 ${name}\n💅 ${service} (${price})\n📅 ${formattedDate}\n⏰ ${time}\n` + (phone?`📞 ${phone}\n`:'') + `\nMerci 🙏`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank');
    showToast('WhatsApp… ✨');
  });

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام عليكم شيماء، بغيت نحجز موعد 💅')}`;
  document.getElementById('waFloat').href = waLink;
  document.getElementById('waBottom').href = waLink;

  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  const backdrop = document.getElementById('navBackdrop');
  function closeMenu(){ navLinks.classList.remove('open'); if(backdrop) backdrop.classList.remove('open'); document.body.classList.remove('menu-open'); burger.setAttribute('aria-expanded','false'); }
  burger.addEventListener('click', ()=>{ const open = navLinks.classList.toggle('open'); if(backdrop) backdrop.classList.toggle('open', open); document.body.classList.toggle('menu-open', open); burger.setAttribute('aria-expanded', open ? 'true' : 'false'); });
  if(backdrop) backdrop.addEventListener('click', closeMenu);
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMenu));

  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('visible'); io.unobserve(en.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  function closeLightbox(){ lightbox.classList.remove('show'); lightboxImg.src = ''; }
  document.querySelectorAll('#gallery img').forEach(img=>{
    img.addEventListener('click', ()=>{ lightboxImg.src = img.src.replace('w=600','w=1200'); lightboxImg.alt = img.alt || 'Nails'; lightbox.classList.add('show'); if(lightboxClose) lightboxClose.focus({preventScroll:true}); });
  });
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox || (e.target !== lightboxImg)) closeLightbox(); });
  if(lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape'){ closeLightbox(); closeMenu(); } });

  updateSummary();
});
