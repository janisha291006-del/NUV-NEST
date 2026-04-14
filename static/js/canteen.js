/* ══════════════════════════════════════════════
   NUV Nest — Canteen Menu + Cart (canteen.js)

   CART LOGIC: 100% preserved from original.
   MENU DATA:  All original items kept under
               the 'main' canteen key.
               Tea Post and Bistro items added.
   ══════════════════════════════════════════════ */

/* ── Canteen Display Names ──────────────────────────────────── */
const CANTEEN_NAMES = {
  main:   'Main Canteen',
  tea:    'Tea Post',
  bistro: 'Tropical Bistro',
};

/* ── Full Menu Data ─────────────────────────────────────────── */
/*
   Structure per canteen:
   {
     tabKey: {
       label: 'Tab Label',
       items: [{ name, price, desc, img }]
     }
   }
   img is the /static/images/ filename (without path).
   If the image fails to load the card shows an emoji fallback.
*/
const MENU_DATA = {

  /* ════════════════ MAIN CANTEEN ════════════════ */
  main: {
    breakfast: {
      label: 'Breakfast (8–11 AM)',
      items: [
        { name: 'Poha',              price: 20,  desc: 'Flattened rice with spices',           img: 'poha.png' },
        { name: 'Upma',              price: 30,  desc: 'Semolina with vegetables',             img: 'upma.png' },
        { name: 'Idli Sambhar',      price: 30,  desc: 'Steamed rice cakes with lentil soup',  img: 'idli_sambhar.png' },
        { name: 'Masala Idli Fry',   price: 50,  desc: 'Fried idli with masala',              img: 'masala_idli.png' },
        { name: 'Aloo Paratha',      price: 50,  desc: 'Potato stuffed flatbread',            img: 'aloo_paratha.png' },
        { name: 'Amritsari Paratha', price: 60,  desc: 'Punjabi style stuffed paratha',       img: 'amritsari_paratha.png' },
        { name: 'Paneer Paratha',    price: 75,  desc: 'Cottage cheese stuffed paratha',      img: 'paneer_paratha.png' },
        { name: 'Cheese Paratha',    price: 80,  desc: 'Cheese stuffed flatbread',            img: 'cheese_paratha.png' },
        { name: 'Bread Butter',      price: 30,  desc: 'Toasted bread with butter',           img: 'bread_butter.png' },
      ],
    },
    lunch: {
      label: 'Lunch (12–3 PM)',
      items: [
        { name: 'Half Dish',         price: 50,  desc: 'Rice, dal, and 1 vegetable',                  img: 'half_dish.png' },
        { name: 'Full Dish',         price: 80,  desc: 'Rice, dal, 2 vegetables, roti',              img: 'full_dish.png' },
        { name: 'Punjabi Dish',      price: 80,  desc: 'North Indian style thali',                   img: 'punjabi_dish.png' },
        { name: 'Punjabi Full Dish', price: 110, desc: 'Special Punjabi thali with paneer',          img: 'punjabi_full.png' },
        { name: 'Pav Bhaji',         price: 70,  desc: 'Mumbai style vegetable curry with bread',    img: 'pav_bhaji.png' },
        { name: 'Chole Bhature',     price: 80,  desc: 'Chickpea curry with fried bread',            img: 'chole_bhature.png' },
      ],
    },
    snacks: {
      label: 'Snacks (3–6 PM)',
      items: [
        { name: 'Samosa',                       price: 30,  desc: 'Crispy pastry with potato filling',     img: 'samosa.png' },
        { name: 'Samosa Chat',                  price: 50,  desc: 'Samosa with chutney and yogurt',        img: 'samosa_chat.png' },
        { name: 'Ragda Samosa Chat',            price: 70,  desc: 'Samosa with white peas curry',          img: 'ragda_samosa.png' },
        { name: 'Veg Puff',                     price: 25,  desc: 'Puff pastry with vegetable filling',    img: 'veg_puff.png' },
        { name: 'Cheese Puff',                  price: 40,  desc: 'Puff pastry with cheese filling',       img: 'cheese_puff.png' },
        { name: 'Tandoori Puff',                price: 30,  desc: 'Spicy tandoori flavored puff',          img: 'tandoori_puff.png' },
        { name: 'Chinese Puff',                 price: 35,  desc: 'Puff with Chinese style filling',       img: 'chinese_puff.png' },
        { name: 'Butter Dabeli',                price: 30,  desc: 'Gujarati snack with butter',            img: 'butter_dabeli.png' },
        { name: 'Butter Sev Onion Dabeli',      price: 40,  desc: 'Dabeli with sev and onion',             img: 'butter_sev_onion_dabeli.png' },
        { name: 'Butter Cheese Sev Onion Dabeli', price: 50, desc: 'Loaded dabeli with cheese',            img: 'butter_cheese_sev_dabeli.png' },
        { name: 'Butter Masala Vadapav',        price: 33,  desc: 'Spicy potato fritter in bun',           img: 'butter_masala_vadapav.png' },
        { name: 'Butter Cheese Vadapav',        price: 45,  desc: 'Vadapav with cheese',                   img: 'butter_cheese_vadapav.png' },
        { name: 'Double Butter Cheese Vadapav', price: 50,  desc: 'Extra cheese vadapav',                  img: 'double_butter_vadapav.png' },
        { name: 'Veg Cheese Grill',             price: 60,  desc: 'Grilled sandwich with cheese',          img: 'veg_cheese_grill.png' },
        { name: 'Bombay Veg Cheese Sandwich',   price: 60,  desc: 'Mumbai style grilled sandwich',         img: 'bombay_veg_cheese.png' },
        { name: 'Plain Cheese Grill',           price: 60,  desc: 'Simple cheese grilled sandwich',        img: 'plain_cheese_grill.png' },
        { name: 'Bombay Cheese Chutney',        price: 50,  desc: 'Sandwich with green chutney',           img: 'bombay_cheese_chutney.png' },
        { name: 'Veg Mayo Cheese Grill',        price: 70,  desc: 'Sandwich with mayo and cheese',         img: 'veg_mayo_cheese.png' },
        { name: 'Tandoori Paneer Grill',        price: 70,  desc: 'Grilled sandwich with paneer',          img: 'tandoori_paneer_grill.png' },
        { name: 'Jalapeno Cheese Sandwich',     price: 70,  desc: 'Spicy jalapeno with cheese',            img: 'jalapeno_cheese.png' },
        { name: 'Veg Mayo Cheese Grill + Cheese', price: 80, desc: 'Extra cheese sandwich',                img: 'veg_mayo_cheese_extra.png' },
        { name: 'Butter Cheese Sandwich',       price: 45,  desc: 'Simple butter cheese sandwich',         img: 'butter_cheese_sandwich.png' },
        { name: 'Samosa Cheese Sandwich',       price: 100, desc: 'Samosa in sandwich with cheese',        img: 'samosa_cheese_sandwich.png' },
        { name: 'Veg Burger',                   price: 80,  desc: 'Classic vegetable burger',              img: 'veg_burger.png' },
        { name: 'Grilled Veg Burger',           price: 90,  desc: 'Grilled patty burger',                  img: 'grilled_veg_burger.png' },
        { name: 'Veg Club Sandwich',            price: 90,  desc: 'Triple decker sandwich',                img: 'veg_club_sandwich.png' },
        { name: 'Chilli Cheese Toast',          price: 100, desc: 'Spicy cheese on toast',                 img: 'chilli_cheese_toast.png' },
        { name: 'Veg Cheese Tosties',           price: 80,  desc: 'Cheese toasties with vegetables',       img: 'veg_cheese_tosties.png' },
        { name: 'Veg Cheese Pizza',             price: 120, desc: 'Classic vegetable pizza',               img: 'veg_cheese_pizza.png' },
        { name: 'French Fries',                 price: 50,  desc: 'Classic salted fries',                  img: 'french_fries.png' },
        { name: 'Salted Fries',                 price: 50,  desc: 'Regular salted fries',                  img: 'salted_fries.png' },
        { name: 'Masala Fries',                 price: 60,  desc: 'Fries with Indian spices',              img: 'masala_fries.png' },
        { name: 'Peri Peri Fries',              price: 60,  desc: 'Spicy peri peri flavored fries',        img: 'peri_peri_fries.png' },
        { name: 'Cheese Fries',                 price: 10,  desc: 'Add-on cheese for fries',               img: 'cheese_fries.png' },
        { name: 'Salad',                        price: 70,  desc: 'Fresh vegetable salad',                 img: 'salad.png' },
        { name: 'Veg Hot & Sour Soup',          price: 70,  desc: 'Chinese style soup',                    img: 'veg_soup.png' },
      ],
    },
    dinner: {
      label: 'Dinner (7–10 PM)',
      items: [
        { name: 'Hakka Noodles',     price: 60,  desc: 'Stir fried noodles with vegetables',  img: 'hakka_noodles.png' },
        { name: 'Manchurian Noodles',price: 70,  desc: 'Noodles with manchurian balls',       img: 'manchurian_noodles.png' },
        { name: 'Manchurian Rice',   price: 70,  desc: 'Fried rice with manchurian',          img: 'manchurian_rice.png' },
        { name: 'Veg Fried Rice',    price: 90,  desc: 'Chinese style fried rice',            img: 'veg_fried_rice.png' },
        { name: 'Manchurian Dry',    price: 80,  desc: 'Dry vegetable manchurian',            img: 'manchurian_dry.png' },
        { name: 'Chinese Bhel',      price: 80,  desc: 'Indo-Chinese style bhel',             img: 'chinese_bhel.png' },
        { name: 'Paneer Chilli Dry', price: 100, desc: 'Spicy paneer with capsicum',          img: 'paneer_chilli.png' },
        { name: 'Chilli Paneer',     price: 100, desc: 'Indo-Chinese paneer dish',            img: 'chilli_paneer.png' },
      ],
    },
    beverages: {
      label: 'Beverages',
      items: [
        { name: 'Tea', price: 24, desc: 'Hot Indian tea (2 cups)', img: 'tea.png' },
      ],
    },
  },

  /* ════════════════ TEA POST ════════════════ */
  tea: {
    hot: {
      label: 'Hot Drinks',
      items: [
        { name: 'Cutting Chai',        price: 12, desc: 'Strong half-cup Indian tea',            img: 'tea.png' },
        { name: 'Tea',                 price: 24, desc: 'Hot Indian tea (2 cups)',               img: 'tea.png' },
        { name: 'Ginger Tea',          price: 20, desc: 'Tea with fresh ginger',                 img: 'tea.png' },
        { name: 'Masala Chai',         price: 25, desc: 'Spiced Indian tea',                     img: 'tea.png' },
        { name: 'Green Tea',           price: 20, desc: 'Light green tea',                       img: 'tea.png' },
        { name: 'Black Coffee',        price: 25, desc: 'Strong black coffee',                   img: 'tea.png' },
        { name: 'Milk Coffee',         price: 30, desc: 'Coffee with milk',                      img: 'tea.png' },
      ],
    },
    bites: {
      label: 'Bites',
      items: [
        { name: 'Maska Bun',           price: 25, desc: 'Buttered soft bun',                     img: 'bread_butter.png' },
        { name: 'Maska Bun + Tea',     price: 45, desc: 'Bun with a cup of tea',                 img: 'bread_butter.png' },
        { name: 'Khari Biscuit',       price: 15, desc: 'Flaky puff pastry biscuit',             img: 'veg_puff.png' },
        { name: 'Nankhatai',           price: 20, desc: 'Indian shortbread cookies',             img: 'bread_butter.png' },
        { name: 'Veg Puff',            price: 25, desc: 'Puff pastry with vegetable filling',    img: 'veg_puff.png' },
        { name: 'Banana',              price: 10, desc: 'Fresh banana',                          img: 'salad.png' },
      ],
    },
    cold: {
      label: 'Cold Drinks',
      items: [
        { name: 'Cold Coffee',         price: 40, desc: 'Chilled blended coffee',                img: 'tea.png' },
        { name: 'Lassi',               price: 35, desc: 'Sweet yogurt drink',                    img: 'tea.png' },
        { name: 'Buttermilk',          price: 20, desc: 'Spiced chaas',                          img: 'tea.png' },
        { name: 'Lemonade',            price: 25, desc: 'Fresh lime soda',                       img: 'tea.png' },
      ],
    },
  },

  /* ════════════════ TROPICAL BISTRO ════════════════ */
  bistro: {
    mains: {
      label: 'Mains',
      items: [
        { name: 'Veg Burger',          price: 80,  desc: 'Classic vegetable burger',             img: 'veg_burger.png' },
        { name: 'Grilled Veg Burger',  price: 90,  desc: 'Grilled patty burger',                img: 'grilled_veg_burger.png' },
        { name: 'Cheese Burger',       price: 110, desc: 'Loaded burger with cheese',            img: 'veg_burger.png' },
        { name: 'Veg Pasta',           price: 120, desc: 'Pasta in red or white sauce',          img: 'veg_cheese_pizza.png' },
        { name: 'Penne Arrabbiata',    price: 130, desc: 'Spicy tomato pasta',                   img: 'veg_cheese_pizza.png' },
        { name: 'Mac & Cheese',        price: 140, desc: 'Creamy baked mac and cheese',          img: 'veg_cheese_pizza.png' },
        { name: 'Veg Cheese Pizza',    price: 150, desc: 'Classic thin-crust veg pizza',         img: 'veg_cheese_pizza.png' },
        { name: 'Margherita Pizza',    price: 160, desc: 'Tomato, basil and mozzarella',         img: 'veg_cheese_pizza.png' },
      ],
    },
    snacks: {
      label: 'Snacks',
      items: [
        { name: 'Nachos',              price: 80,  desc: 'Tortilla chips with salsa & cheese',   img: 'cheese_fries.png' },
        { name: 'Loaded Nachos',       price: 110, desc: 'Nachos with jalapeños & sour cream',   img: 'cheese_fries.png' },
        { name: 'French Fries',        price: 60,  desc: 'Classic golden fries',                 img: 'french_fries.png' },
        { name: 'Peri Peri Fries',     price: 70,  desc: 'Spicy peri peri fries with dip',       img: 'peri_peri_fries.png' },
        { name: 'Cheese Fries',        price: 80,  desc: 'Fries smothered in cheese sauce',      img: 'cheese_fries.png' },
        { name: 'Veg Club Sandwich',   price: 100, desc: 'Triple decker toasted sandwich',       img: 'veg_club_sandwich.png' },
        { name: 'Panini',              price: 110, desc: 'Pressed sandwich with veggies & cheese', img: 'veg_cheese_grill.png' },
        { name: 'Caesar Salad',        price: 90,  desc: 'Crisp romaine with caesar dressing',   img: 'salad.png' },
      ],
    },
    beverages: {
      label: 'Beverages',
      items: [
        { name: 'Cold Coffee',         price: 60,  desc: 'Thick blended cold coffee',            img: 'tea.png' },
        { name: 'Mango Smoothie',      price: 70,  desc: 'Fresh mango blended with milk',        img: 'tea.png' },
        { name: 'Strawberry Shake',    price: 80,  desc: 'Creamy strawberry milkshake',          img: 'tea.png' },
        { name: 'Oreo Shake',          price: 90,  desc: 'Crushed Oreo milkshake',               img: 'tea.png' },
        { name: 'Fresh Lime Soda',     price: 40,  desc: 'Sweet or salted lime soda',            img: 'tea.png' },
        { name: 'Virgin Mojito',       price: 60,  desc: 'Mint, lime and soda',                  img: 'tea.png' },
        { name: 'Iced Tea',            price: 50,  desc: 'Chilled lemon or peach iced tea',      img: 'tea.png' },
      ],
    },
  },
};

/* ════════════════════════════════════════════════════════════
   CART LOGIC — PRESERVED EXACTLY FROM ORIGINAL canteen.html
   ════════════════════════════════════════════════════════════ */

let cart = [];
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');

function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) { existing.qty++; } else { cart.push({ name, price, qty: 1 }); }
  updateCart();
}

function updateQty(name, delta) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.name !== name);
  }
  updateCart();
}

function updateCart() {
  cartCountEl.textContent = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  cartTotalEl.textContent = '₹' + total;
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p style="color:var(--muted);text-align:center;padding:40px 0;">Your cart is empty</p>';
    return;
  }
  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} × ${item.qty}</div>
      </div>
      <div class="quantity-control">
        <button class="qty-btn" onclick="updateQty('${item.name.replace(/'/g, "\\'")}', -1)">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="updateQty('${item.name.replace(/'/g, "\\'")}', 1)">+</button>
      </div>
    </div>
  `).join('');
}

function checkout() {
  if (cart.length === 0) { alert('Please add items to your cart first!'); return; }
  alert('Order placed successfully! Your food will be ready at your selected slot.');
  cart = []; updateCart();
}

/* Time slot selection — preserved exactly */
document.querySelectorAll('.slot-option').forEach(slot => {
  slot.addEventListener('click', function () {
    document.querySelectorAll('.slot-option').forEach(s => s.classList.remove('selected'));
    this.classList.add('selected');
  });
});

/* ════════════════════════════════════════════════════════════
   DYNAMIC MENU RENDERING
   ════════════════════════════════════════════════════════════ */

/* ── Tab switching (same logic as original showTab) ─────────── */
function showTab(tabKey) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.meal-tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('tab-' + tabKey);
  if (panel) panel.classList.add('active');
  const tabBtn = document.querySelector(`.meal-tab[data-tab="${tabKey}"]`);
  if (tabBtn) tabBtn.classList.add('active');
}

/* ── Build a single menu item card ─────────────────────────── */
function buildItemCard(item) {
  const imgSrc  = '/static/images/' + item.img;
  /* Safe name for inline onclick — escape single quotes */
  const safeName  = item.name.replace(/'/g, "\\'");

  return `
    <div class="menu-item">
      <div class="item-image">
        <img
          src="${imgSrc}"
          alt="${item.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
        />
        <span class="item-image-emoji" style="display:none;">🍴</span>
      </div>
      <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-price">₹${item.price}</div>
        <div class="item-desc">${item.desc}</div>
        <button class="add-btn" onclick="addToCart('${safeName}', ${item.price})">
          Add to Cart
        </button>
      </div>
    </div>`;
}

/* ── Render tabs + panels for the selected canteen ──────────── */
function renderMenu(canteenKey) {
  const canteenData = MENU_DATA[canteenKey];
  if (!canteenData) return;

  const tabsEl   = document.getElementById('meal-tabs');
  const panelsEl = document.getElementById('tab-panels');
  tabsEl.innerHTML   = '';
  panelsEl.innerHTML = '';

  const tabKeys = Object.keys(canteenData);

  tabKeys.forEach((tabKey, index) => {
    const section = canteenData[tabKey];

    /* Tab button */
    const btn = document.createElement('div');
    btn.className         = 'meal-tab' + (index === 0 ? ' active' : '');
    btn.dataset.tab       = tabKey;
    btn.textContent       = section.label;
    btn.addEventListener('click', () => showTab(tabKey));
    tabsEl.appendChild(btn);

    /* Panel */
    const panel       = document.createElement('div');
    panel.id          = 'tab-' + tabKey;
    panel.className   = 'tab-content' + (index === 0 ? ' active' : '');
    panel.innerHTML   = `<div class="menu-items">${section.items.map(buildItemCard).join('')}</div>`;
    panelsEl.appendChild(panel);
  });
}

/* ── Set heading & date ─────────────────────────────────────── */
function setPageMeta(canteenKey) {
  const heading = document.getElementById('canteen-heading');
  const dateEl  = document.getElementById('menu-date');

  if (heading) heading.textContent = (CANTEEN_NAMES[canteenKey] || 'Canteen') + ' Menu';

  if (dateEl) {
    const d = new Date();
    dateEl.textContent = d.toLocaleDateString('en-IN', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
  }
}

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const selected = localStorage.getItem('selectedCanteen');

  /* If no canteen chosen, send back to selection */
  if (!selected || !MENU_DATA[selected]) {
    window.location.href = '/menu';
    return;
  }

  setPageMeta(selected);
  renderMenu(selected);
});
