/* ==========================================================================
   KATRINA'S ESPETARIA & BAR - FULL LANDING PAGE INTERACTION & MOTION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. GSAP Hero Entrance
  if (typeof gsap !== 'undefined') {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-headline', { opacity: 0, y: 30, duration: 0.9, delay: 0.1 })
      .from('.hero-subtext', { opacity: 0, y: 20, duration: 0.8 }, '-=0.5')
      .from('.hero-pill-btn', { opacity: 0, scale: 0.9, duration: 0.7 }, '-=0.5')
      .from('.item-center', { opacity: 0, y: 60, duration: 0.9 }, '-=0.4')
      .from('.item-left', { opacity: 0, x: -40, rotation: -16, duration: 0.9 }, '-=0.7')
      .from('.item-right', { opacity: 0, x: 40, rotation: 16, duration: 0.9 }, '-=0.7')
      .from('.floating-marquee-badge', { opacity: 0, scale: 0.6, duration: 0.7 }, '-=0.5');
  }

  // 2. Testimonial Carousel Handler
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.getElementById('prevReview');
  const nextBtn = document.getElementById('nextReview');
  let currentReview = 0;

  function showReview(index) {
    testimonialCards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentReview = (currentReview - 1 + testimonialCards.length) % testimonialCards.length;
      showReview(currentReview);
    });

    nextBtn.addEventListener('click', () => {
      currentReview = (currentReview + 1) % testimonialCards.length;
      showReview(currentReview);
    });
  }

  // 3. Interactive Timeline Step Switcher
  const nodeBtns = document.querySelectorAll('.node-btn');
  const timelineData = [
    { num: '01', title: 'Seleção Diária de Carnes Nobres', desc: 'Escolhemos a dedo cada corte de carne, linguiça e ingrediente fresco para garantir que cada espeto entregue um sabor artesanal incomparável.' },
    { num: '02', title: 'O Ponto Perfeito na Grelha', desc: 'Nossos espetos e tábuas são assados no calor ideal da brasa, mantendo a suculência e o aroma de churrasco de verdade.' },
    { num: '03', title: 'Coquetelaria Autoral & Cerveja Trincando', desc: 'Drinks preparados com frutas frescas e cervejas servidas na temperatura trincando para o seu happy hour perfeito.' },
    { num: '04', title: 'Música ao Vivo & Clima Acolhedor', desc: 'Ambiente bonito e acolhedor planejado com carinho para reunir amigos e família em noites inesquecíveis.' }
  ];

  const stepNumEl = document.querySelector('.step-num');
  const stepTitleEl = document.querySelector('.step-title');
  const stepDescEl = document.querySelector('.step-desc');

  nodeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const stepIndex = parseInt(btn.getAttribute('data-step'), 10);
      nodeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (timelineData[stepIndex]) {
        stepNumEl.textContent = timelineData[stepIndex].num;
        stepTitleEl.textContent = timelineData[stepIndex].title;
        stepDescEl.textContent = timelineData[stepIndex].desc;
      }
    });
  });

  // 4. FAQ Accordion Handler
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 5. Hamburger Button Mobile Menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      alert("Katrina's Espetaria & Bar - Menu Lateral\n\n- Cardápio\n- Nossa História\n- Avaliações ★ 5.0\n- FAQ\n\nFale conosco: (11) 98836-9236");
    });
  }

});
