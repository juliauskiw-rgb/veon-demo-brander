// Content of the homepage. Every item comes from veon/client.json (fact id in the comment) or the client's own landing (audit/screens).
export const NOTE_FUTURE = "Розділ у розробці";

// company.contacts: phone of the /uk version (C-013), Sales e-mail, Telegram
export const contacts = {
  phoneHref: "tel:+380630212046",
  phoneText: "+38 (063) 02 120 46",
  email: "hello@branderstudio.com",
  telegram: "https://t.me/branderstudio",
  address: "Харків, вул. Георгія Тарасенка, 66",
} as const;

// socials: status confirmed only
export const socials = [
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/brander.ua/" },
  { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/brander.ua" },
  { name: "YouTube", icon: "youtube", href: "https://www.youtube.com/@brander1238" },
] as const;

export const nav = [
  { href: "#cases", label: "Кейси" },
  { href: "#expertise", label: "Технології" },
  { href: "#process", label: "Як працюємо" },
  { href: "#team", label: "Команда" },
  { href: "#contact", label: "Контакти" },
] as const;

// C-010 + texts of the current landing (block «Експертиза»)
export const expertise = [
  { id: "expertise-cms", bus: "Drupal, WordPress, Laravel", title: "Технології під архітектуру", text: "Drupal, WordPress або Laravel: підбираємо стек під бізнес-задачі й масштабування, а не навпаки." },
  { id: "expertise-design", bus: null, title: "Індивідуальний дизайн", text: "Без шаблонів: створюємо унікальний UX/UI під бізнес-цілі й поведінку ваших користувачів." },
  { id: "expertise-admin", bus: "Керування без розробників", title: "Керування без розробників", text: "Максимально виносимо керування контентом в адмін-панель, тож сайтом ви керуєте самостійно." },
  { id: "expertise-integrations", bus: null, title: "Інтеграції та розширення", text: "Підключаємо до сайту CRM, ERP, сервіси маркетингу й аналітики, щоб дані не жили окремо від процесів." },
  { id: "expertise-seo", bus: null, title: "SEO та швидкість", text: "Технічна оптимізація, правильна структура й швидке завантаження як база для росту трафіку." },
  { id: "expertise-security", bus: null, title: "Безпека", text: "Сучасні стандарти безпеки: захист даних, контроль доступу й регулярні оновлення для стабільної роботи." },
] as const;

// Six nodes of the hero bus (concept.md, signature) → targets in #expertise
export const busNodes = [
  { label: "Drupal, WordPress, Laravel", hint: "Стек під архітектуру проєкту", target: "#expertise-cms" },
  { label: "CRM", hint: "Сайт передає заявки й дані в CRM", target: "#expertise-integrations" },
  { label: "ERP", hint: "Сайт обмінюється даними з ERP", target: "#expertise-integrations" },
  { label: "Маркетинг", hint: "Сервіси маркетингу підключені до сайту", target: "#expertise-integrations" },
  { label: "Аналітика", hint: "Сервіси аналітики підключені до сайту", target: "#expertise-integrations" },
  { label: "Керування без розробників", hint: "Контент змінюєте в адмін-панелі", target: "#expertise-admin" },
] as const;

// C-004, C-005; types are the captions of the current landing
export const featuredCase = {
  slug: "apple-mania",
  name: "Apple Mania",
  type: "Інтернет-магазин Apple",
  year: "2020",
  facts: [
    { k: "Екрани", v: "56+" },
    { k: "Години роботи", v: "650" },
    { k: "До запуску", v: "3 місяці" },
  ],
} as const;

export const cases = [
  { slug: "business-diner", name: "Business Diner", type: "Ресторан готових страв", facts: [{ k: "Екрани", v: "43+" }, { k: "Години", v: "450" }] },
  { slug: "capri", name: "Capri", type: "Твої улюблені страви в одному місці", facts: [] },
  { slug: "chudo-ostriv", name: "Чудо Острів", type: "Покупки для дітей — як для дорослих", facts: [{ k: "Рік", v: "2019" }] },
  { slug: "damilk", name: "Damilk", type: "Інтернет-вітрина великого виробника доїльних апаратів", facts: [{ k: "Екрани", v: "25+" }, { k: "Години", v: "600" }] },
  { slug: "flawlessly", name: "Flawlessly", type: "Одяг, взуття й аксесуари від відомих дизайнерів", facts: [{ k: "Екрани", v: "30+" }, { k: "Години", v: "200" }] },
] as const;

// Logos from the strip of the current landing (cropped from audit/screens/uk-desktop-full.png)
export const clientLogos = [
  { file: "logo-zolotyi-vik", name: "Золотий Вік", w: 125, h: 53 },
  { file: "logo-sense-bank", name: "Sense Bank", w: 186, h: 29 },
  { file: "logo-novapay", name: "NovaPay", w: 186, h: 38 },
  { file: "logo-wog", name: "WOG", w: 187, h: 60 },
] as const;

// C-011; Discovery text and the price note come from the current landing and company.products_services
export const process = [
  { title: "Discovery", text: "Знайомимося з бізнес-моделлю, клієнтами, аудиторією й каналами, щоб зрозуміти масштаб, підібрати архітектуру й зорієнтуватися в бюджеті та термінах.", note: "Первинна розмова з sales-менеджером або окремий етап 1–3 місяці, якщо цього потребує проєкт." },
  { title: "Оцінка", text: "Рахуємо вартість і терміни за результатами Discovery.", note: "Ціни не публікуємо: вартість залежить від платформи й складності. Оцінку даємо після Discovery." },
  { title: "Фіксація вимог", text: "Записуємо вимоги до сайту, щоб обидві сторони розуміли однаковий результат." },
  { title: "UX/UI дизайн", text: "Проєктуємо структуру й інтерфейс під цілі бізнесу." },
  { title: "Розробка", text: "Збираємо сайт на обраному стеку й підключаємо інтеграції." },
  { title: "Просування", text: "Допомагаємо сайту знайти аудиторію після запуску." },
  { title: "Удосконалення UX", text: "Покращуємо сайт за поведінкою користувачів." },
] as const;

// C-006: companies only (names and roles of the authors are not in the facts)
export const reviews = ["Золотий Вік", "Budu Sushi", "Чудо Острів", "Сушія", "InBus"] as const;

// C-003, C-001
export const team = [
  { file: "team-zahorulko", name: "Ігор Загорулько", role: "Засновник і генеральний директор" },
  { file: "team-pavliuk", name: "Дмитро Павлюк", role: "Technical Lead" },
  { file: "team-kovalova", name: "Ілона Ковальова", role: "Delivery Manager" },
] as const;
