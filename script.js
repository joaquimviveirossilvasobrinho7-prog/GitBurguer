/* ==========================================================
   BURGER HOUSE — script.js
   Bibliotecas utilizadas (todas via CDN):
   1. Swiper.js   → carrosséis de hambúrgueres e bebidas
   2. AOS         → animações durante a rolagem da página
   3. SweetAlert2 → alertas, confirmações e mensagens
   ========================================================== */

/* ------------------------------------------------------------
   1. DADOS DOS PRODUTOS
   ------------------------------------------------------------ */
const burgers = [
  {
    id: 'xbacon', name: 'X-Bacon', price: 24.90, badge: 'Mais pedido',
    img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80',
    desc: 'Blend 180g, bacon crocante, queijo prato e maionese defumada.',
    ingredients: 'Pão brioche, blend 180g, bacon, queijo prato, alface, tomate, maionese defumada'
  },
  {
    id: 'xsalada', name: 'X-Salada', price: 19.90, badge: 'Clássico',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    desc: 'O clássico que nunca decepciona: carne suculenta e salada fresca.',
    ingredients: 'Pão com gergelim, blend 180g, queijo, alface, tomate, cebola, ketchup e mostarda'
  },
  {
    id: 'duplo', name: 'Duplo Burger', price: 29.90, badge: 'Para a fome grande',
    img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80',
    desc: 'Dois blends 180g, duplo queijo cheddar e bacon em dobro.',
    ingredients: 'Pão brioche, 2 blends 180g, cheddar duplo, bacon, cebola caramelizada, barbecue'
  },
  {
    id: 'smash', name: 'Smash Burger', price: 22.90, badge: 'Da chapa',
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80',
    desc: 'Carne smashada na chapa, cheddar derretido e picles crocante.',
    ingredients: 'Pão de potato, blend smash 120g, cheddar, picles, cebola roxa, molho da casa'
  },
  {
    id: 'chicken', name: 'Chicken Burger', price: 21.90, badge: 'Frango crocante',
    img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80',
    desc: 'Filé de frango empanado crocante, alface e maionese de ervas.',
    ingredients: 'Pão com gergelim, frango empanado, alface, tomate, maionese de ervas'
  },
  {
    id: 'cheddar', name: 'Cheddar Burger', price: 26.90, badge: 'Cheddar supremo',
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80',
    desc: 'Muito cheddar derretido por cima de um blend suculento de 180g.',
    ingredients: 'Pão brioche, blend 180g, cheddar em dobro, cebola crispy, molho cheddar da casa'
  }
];

const drinks = [
  { id: 'coca', name: 'Coca-Cola', size: 'Lata 350ml', price: 6.00, img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80' },
  { id: 'guarana', name: 'Guaraná Antarctica', size: 'Lata 350ml', price: 5.50, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80' },
  { id: 'fanta', name: 'Fanta Laranja', size: 'Lata 350ml', price: 5.50, img: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=600&q=80' },
  { id: 'sprite', name: 'Sprite', size: 'Lata 350ml', price: 5.50, img: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&q=80' },
  { id: 'suco', name: 'Suco de Laranja', size: 'Copo 500ml', price: 8.00, img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80' },
  { id: 'agua', name: 'Água Mineral', size: 'Garrafa 500ml', price: 4.00, img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80' }
];

const promos = [
  {
    id: 'combo-duplo', name: 'Combo Duplo', price: 39.90, tag: 'Mais vendido',
    desc: '2 hambúrgueres + batata média + 2 bebidas em lata',
    img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80'
  },
  {
    id: 'combo-familia', name: 'Combo Família', price: 59.90, tag: 'Serve 4',
    desc: '4 hambúrgueres + batata grande + nuggets (10 un.) + 4 bebidas',
    img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=80'
  },
  {
    id: 'combo-smash', name: 'Combo Smash', price: 32.90, tag: 'Da chapa',
    desc: '2 smash burgers + batata com cheddar + 2 bebidas em lata',
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80'
  }
];

const sides = [
  { id: 'batata', name: 'Batata Tradicional', price: 12.90, img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80', desc: 'Porção crocante com sal e orégano.' },
  { id: 'batata-cheddar', name: 'Batata com Cheddar', price: 15.90, img: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&q=80', desc: 'Batata frita coberta com cheddar derretido.' },
  { id: 'batata-bacon', name: 'Batata com Bacon', price: 16.90, img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80', desc: 'Batata com bacon crocante e maionese da casa.' },
  { id: 'nuggets', name: 'Nuggets (10 un.)', price: 14.90, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80', desc: 'Empanados crocantes por fora e macios por dentro.' },
  { id: 'onion', name: 'Onion Rings', price: 15.90, img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80', desc: 'Anéis de cebola empanados e dourados.' }
];

/* ------------------------------------------------------------
   2. CARRINHO (sistema de pedido)
   ------------------------------------------------------------ */
const cart = []; // cada item: { id, name, price, img, qty }

const cartSidebar   = document.getElementById('cartSidebar');
const cartOverlay   = document.getElementById('cartOverlay');
const cartItemsEl   = document.getElementById('cartItems');
const cartTotalEl   = document.getElementById('cartTotal');
const cartBadge     = document.getElementById('cartBadge');
const openCartBtn   = document.getElementById('openCartBtn');

const formatPrice = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

/* Adiciona um produto ao pedido e mostra o feedback */
function addToCart(product, sourceCard) {
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty: 1 });
  }

  renderCart();
  animateFlyToCart(product.img, sourceCard);
  popBadge();

  /* SWEETALERT2: confirmação visual de que o item entrou no pedido */
  Swal.fire({
    icon: 'success',
    title: 'Adicionado ao pedido!',
    text: `${product.name} entrou no seu pedido.`,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
    background: '#161616',
    color: '#ffffff',
    iconColor: '#ffb703'
  });
}

/* Animação do produto "voando" até o ícone do carrinho */
function animateFlyToCart(imgSrc, sourceCard) {
  const cartIcon = openCartBtn.getBoundingClientRect();
  const imgEl = document.createElement('img');
  imgEl.src = imgSrc;
  imgEl.className = 'fly-to-cart';

  if (sourceCard) {
    const cardImg = sourceCard.querySelector('img').getBoundingClientRect();
    imgEl.style.left = cardImg.left + cardImg.width / 2 - 30 + 'px';
    imgEl.style.top  = cardImg.top + cardImg.height / 2 - 30 + 'px';
  } else {
    imgEl.style.left = window.innerWidth / 2 - 30 + 'px';
    imgEl.style.top  = window.innerHeight / 2 - 30 + 'px';
  }

  document.body.appendChild(imgEl);

  /* força o navegador a aplicar a posição inicial antes de animar */
  requestAnimationFrame(() => {
    imgEl.style.left = cartIcon.left + cartIcon.width / 2 - 30 + 'px';
    imgEl.style.top  = cartIcon.top + cartIcon.height / 2 - 30 + 'px';
    imgEl.style.transform = 'scale(0.15)';
    imgEl.style.opacity = '0.4';
  });

  setTimeout(() => imgEl.remove(), 850);
}

/* "Pulo" do indicador de quantidade no carrinho */
function popBadge() {
  cartBadge.classList.remove('pop');
  void cartBadge.offsetWidth; /* reinicia a animação */
  cartBadge.classList.add('pop');
}

/* Atualiza a lista de itens, quantidades e o total automático */
function renderCart() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartBadge.textContent = totalQty;
  cartTotalEl.textContent = formatPrice(totalPrice);

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="cart-empty"><span>🍔</span>Seu pedido está vazio.<br>Escolha algo delicioso!</div>';
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" />
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span class="item-price">${formatPrice(item.price * item.qty)}</span>
      </div>
      <div class="cart-item-controls">
        <div class="qty-control">
          <button onclick="changeQty('${item.id}', -1)" aria-label="Diminuir quantidade">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${item.id}', 1)" aria-label="Aumentar quantidade">+</button>
        </div>
        <button class="remove-item" onclick="removeItem('${item.id}')">remover</button>
      </div>
    </div>
  `).join('');
}

/* Aumenta ou diminui a quantidade de um item (− 1 +) */
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeItem(id);
  else renderCart();
}

function removeItem(id) {
  const index = cart.findIndex(i => i.id === id);
  if (index > -1) cart.splice(index, 1);
  renderCart();
}

/* Abre/fecha o carrinho lateral */
function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('show');
}
function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('show');
}

openCartBtn.addEventListener('click', openCart);
document.getElementById('closeCartBtn').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

/* Botão "Limpar pedido" com confirmação */
document.getElementById('clearCartBtn').addEventListener('click', () => {
  if (cart.length === 0) return;

  /* SWEETALERT2: confirmação antes de apagar o pedido */
  Swal.fire({
    title: 'Limpar pedido?',
    text: 'Todos os itens serão removidos.',
    icon: 'warning',
    iconColor: '#e63946',
    showCancelButton: true,
    confirmButtonText: 'Sim, limpar',
    cancelButtonText: 'Cancelar',
    background: '#161616',
    color: '#ffffff',
    confirmButtonColor: '#e63946'
  }).then((result) => {
    if (result.isConfirmed) {
      cart.length = 0;
      renderCart();
      Swal.fire({
        title: 'Pedido limpo!',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        background: '#161616',
        color: '#ffffff'
      });
    }
  });
});

/* Finalizar pedido: confirmação → mensagem de sucesso */
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) {
    Swal.fire({
      icon: 'info',
      title: 'Pedido vazio',
      text: 'Adicione algum produto antes de finalizar.',
      background: '#161616',
      color: '#ffffff'
    });
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const resumo = cart.map(i => `${i.qty}x ${i.name}`).join(', ');

  /* SWEETALERT2: confirmação do pedido antes de finalizar */
  Swal.fire({
    title: 'Confirmar seu pedido?',
    html: `<p style="text-align:left"><strong>Itens:</strong> ${resumo}</p>
           <p style="font-size:1.4rem;margin-top:10px"><strong>Total: ${formatPrice(total)}</strong></p>`,
    icon: 'question',
    iconColor: '#ffb703',
    showCancelButton: true,
    confirmButtonText: '✅ Finalizar pedido',
    cancelButtonText: 'Continuar comprando',
    background: '#161616',
    color: '#ffffff',
    confirmButtonColor: '#e63946'
  }).then((result) => {
    if (result.isConfirmed) {
      /* SWEETALERT2: pedido realizado com sucesso */
      Swal.fire({
        title: 'Pedido realizado! 🎉',
        html: `<p>Seu pedido foi enviado para a cozinha da <strong>Burger House</strong>.</p>
               <p style="margin-top:8px">Tempo estimado: <strong>35 minutos</strong>. Bom apetite! 🍔</p>`,
        icon: 'success',
        background: '#161616',
        color: '#ffffff',
        confirmButtonColor: '#e63946'
      });
      cart.length = 0;
      renderCart();
      closeCart();
    }
  });
});

/* ------------------------------------------------------------
   3. RENDERIZAÇÃO DOS CARDS
   ------------------------------------------------------------ */
function burgerCard(b) {
  return `
  <div class="swiper-slide">
    <article class="product-card" data-id="${b.id}" data-type="burger">
      <div class="card-img">
        <img src="${b.img}" alt="${b.name}" loading="lazy" />
        <span class="card-badge">${b.badge}</span>
      </div>
      <div class="card-body">
        <h3>${b.name}</h3>
        <p class="desc">${b.desc}</p>
        <p class="ingredients">${b.ingredients}</p>
        <div class="card-footer">
          <span class="price">${formatPrice(b.price)}</span>
          <button class="add-btn" data-add="${b.id}">Adicionar ao pedido</button>
        </div>
      </div>
    </article>
  </div>`;
}

function drinkCard(d) {
  return `
  <div class="swiper-slide">
    <article class="product-card drink-card" data-id="${d.id}" data-type="drink">
      <div class="card-img">
        <img src="${d.img}" alt="${d.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <h3>${d.name}</h3>
        <p class="desc">${d.size}</p>
        <div class="card-footer">
          <span class="price">${formatPrice(d.price)}</span>
          <button class="add-btn" data-add="${d.id}">Escolher</button>
        </div>
      </div>
    </article>
  </div>`;
}

function promoCard(p, index) {
  return `
  <div class="promo-card" data-aos="zoom-in" data-aos-delay="${index * 150}">
    <img src="${p.img}" alt="${p.name}" loading="lazy" />
    <div class="promo-content">
      <span class="promo-tag">${p.tag}</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="promo-price-row">
        <span class="promo-price">${formatPrice(p.price)}</span>
        <button class="btn btn-primary" data-add="${p.id}">Quero esse combo</button>
      </div>
    </div>
  </div>`;
}

function sideCard(s, index) {
  return `
  <article class="product-card" data-id="${s.id}" data-type="side"
           data-aos="fade-up" data-aos-delay="${index * 100}">
    <div class="card-img">
      <img src="${s.img}" alt="${s.name}" loading="lazy" />
    </div>
    <div class="card-body">
      <h3>${s.name}</h3>
      <p class="desc">${s.desc}</p>
      <div class="card-footer">
        <span class="price">${formatPrice(s.price)}</span>
        <button class="add-btn" data-add="${s.id}">Adicionar</button>
      </div>
    </div>
  </article>`;
}

document.getElementById('burgerWrapper').innerHTML = burgers.map(burgerCard).join('');
document.getElementById('drinkWrapper').innerHTML = drinks.map(drinkCard).join('');
document.getElementById('promoGrid').innerHTML = promos.map(promoCard).join('');
document.getElementById('sidesGrid').innerHTML = sides.map(sideCard).join('');

/* ------------------------------------------------------------
   4. SWIPER.JS — inicialização dos carrosséis
   Funciona com arrasto do mouse, toque no celular e setas.
   ------------------------------------------------------------ */
new Swiper('.burgerSwiper', {
  slidesPerView: 1.2,
  spaceBetween: 24,
  grabCursor: true,          /* cursor de "mão" indicando que é arrastável */
  keyboard: { enabled: true },
  navigation: {
    nextEl: '.burgerSwiper .swiper-button-next',
    prevEl: '.burgerSwiper .swiper-button-prev'
  },
  breakpoints: {             /* responsivo */
    640:  { slidesPerView: 2,   spaceBetween: 24 },
    992:  { slidesPerView: 3,   spaceBetween: 28 },
    1200: { slidesPerView: 3.5, spaceBetween: 30 }
  }
});

new Swiper('.drinkSwiper', {
  slidesPerView: 2.2,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: '.drinkSwiper .swiper-button-next',
    prevEl: '.drinkSwiper .swiper-button-prev'
  },
  breakpoints: {
    640:  { slidesPerView: 3,   spaceBetween: 22 },
    992:  { slidesPerView: 4,   spaceBetween: 24 },
    1200: { slidesPerView: 5,   spaceBetween: 24 }
  }
});

/* ------------------------------------------------------------
   5. AOS — animações de rolagem (fade, slide, zoom, flip)
   Inicializado DEPOIS de renderizar os cards dinâmicos.
   ------------------------------------------------------------ */
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,     /* anima uma vez e mantém o elemento visível */
  offset: 80
});
AOS.refresh();

/* ------------------------------------------------------------
   6. INTERAÇÕES DOS CARDS
   - Clique no botão: adiciona ao pedido
   - Clique no card: destaca, anima e abre detalhes (SweetAlert2)
   ------------------------------------------------------------ */
function findProduct(id) {
  return [...burgers, ...drinks, ...promos, ...sides].find(p => p.id === id);
}

document.addEventListener('click', (event) => {
  const addBtn = event.target.closest('[data-add]');
  const card = event.target.closest('.product-card');

  /* Clicou em "Adicionar ao pedido" / "Escolher" / "Quero esse combo" */
  if (addBtn) {
    event.stopPropagation();
    const product = findProduct(addBtn.dataset.add);
    addToCart(product, card);
    return;
  }

  /* Clicou no card: destaque + animação de clique + detalhes */
  if (card) {
    card.classList.add('clicked');
    setTimeout(() => card.classList.remove('clicked'), 380);

    card.classList.add('selected');
    setTimeout(() => card.classList.remove('selected'), 1600);

    const product = findProduct(card.dataset.id);
    showProductDetails(product, card);
  }
});

/* SWEETALERT2: janela moderna com os detalhes do produto */
function showProductDetails(product, card) {
  const isDrink = !!product.size;
  Swal.fire({
    title: product.name,
    html: `
      <img src="${product.img}" alt="${product.name}"
           style="width:100%;height:180px;object-fit:cover;border-radius:14px;margin-bottom:14px" />
      <p style="text-align:left">${product.desc || ''}</p>
      ${product.ingredients ? `<p style="text-align:left;font-size:0.85rem;color:#9c9c9c;margin-top:8px"><strong>Ingredientes:</strong> ${product.ingredients}</p>` : ''}
      ${isDrink ? `<p style="text-align:left;font-size:0.9rem;margin-top:8px"><strong>Tamanho:</strong> ${product.size}</p>` : ''}
      <p style="font-size:1.6rem;font-weight:800;color:#e63946;margin-top:12px">${formatPrice(product.price)}</p>
    `,
    showCancelButton: true,
    confirmButtonText: '🛒 Adicionar ao pedido',
    cancelButtonText: 'Fechar',
    background: '#161616',
    color: '#ffffff',
    confirmButtonColor: '#e63946',
    width: 420
  }).then((result) => {
    if (result.isConfirmed) addToCart(product, card);
  });
}

/* ------------------------------------------------------------
   7. NAVBAR — menu mobile, fundo ao rolar e rolagem suave
   ------------------------------------------------------------ */
const header = document.getElementById('header');
const navMenu = document.getElementById('navMenu');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const backTopBtn = document.getElementById('backTopBtn');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburgerBtn.classList.toggle('open');
});

/* Fecha o menu mobile ao clicar em um link */
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburgerBtn.classList.remove('open');
  });
});

/* Efeitos ao rolar a página: fundo do header + botão "voltar ao topo" */
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
  backTopBtn.classList.toggle('show', window.scrollY > 500);
});

backTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ------------------------------------------------------------
   8. FILTROS — rolam até a seção e dão um destaque visual
   ------------------------------------------------------------ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = document.getElementById(btn.dataset.target);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    /* destaque pulsante para deixar claro para onde o filtro levou */
    setTimeout(() => {
      target.classList.add('section-highlight');
      setTimeout(() => target.classList.remove('section-highlight'), 2400);
    }, 500);
  });
});

/* ------------------------------------------------------------
   9. INICIALIZAÇÃO
   ------------------------------------------------------------ */
renderCart(); /* começa com o carrinho vazio e total zerado */
