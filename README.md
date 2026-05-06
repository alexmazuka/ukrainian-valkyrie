# Українська Валькірія — сайт

Статичний сайт ГО «Українська Валькірія» з блогом, магазином, донатами і адмінпанеллю.

## Структура

```
.
├── index.html              # Головна (UA)
├── about.html              # Про нас
├── programs.html           # Програми
├── help.html               # Отримати допомогу
├── reports.html            # Звіти
├── blog.html               # Блог (список)
├── blog-post.html          # Шаблон поста
├── shop.html               # Магазин
├── cart.html               # Кошик
├── donate.html             # Підтримати
├── contact.html            # Контакти
├── en/
│   └── index.html          # Англомовна головна
├── admin/
│   ├── index.html          # Адмінпанель Decap CMS
│   └── config.yml          # Конфіг колекцій (блог, магазин, звіти, налаштування)
├── content/
│   ├── blog/               # Markdown пости + index.json
│   ├── products/           # Товари (json/md)
│   └── reports/            # PDF звітів + метадані
├── public/images/          # Логотип, фото, завантажені зображення
└── assets/
    ├── css/styles.css      # Брендові стилі (темно-синій + золотий + крем)
    └── js/main.js          # Шапка/футер/кошик
```

## Локальний перегляд

Сайт статичний — можна просто відкривати HTML-файли у браузері. Але для коректної роботи `fetch` (блог, магазин) краще запустити локальний сервер:

```bash
cd ukrainian-valkyrie-site
python3 -m http.server 8000
# або
npx serve .
```

Відкрий http://localhost:8000

## Деплой на Vercel (рекомендовано — потрібно для майбутнього магазину з еквайрингом)

1. Створи репозиторій на GitHub і запушай туди код:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   gh repo create ukrainian-valkyrie --public --source=. --push
   ```
2. Зайди на https://vercel.com → New Project → імпортуй репо.
3. Framework preset: **Other** (це статичні файли).
4. Build Command: лиши порожнім.
5. Output Directory: лиши порожнім.
6. Deploy.

Після першого деплою Vercel дасть тобі URL виду `ukrainian-valkyrie.vercel.app`. У налаштуваннях проєкту можна додати свій домен (`zhinocha.org`, наприклад).

## Деплой на GitHub Pages (альтернатива, простіше)

1. Запушай репо на GitHub.
2. Settings → Pages → Source: Deploy from branch → Branch: `main` / root.
3. Сайт буде доступний на `<username>.github.io/<repo>`.

## Адмінпанель (`/admin`)

Адмінка зроблена на **Decap CMS** (раніше — Netlify CMS). Це візуальний редактор, який пише markdown-файли назад у твоє GitHub-репо.

### Варіант 1: Netlify Identity (найпростіше)

1. Задеплой сайт на **Netlify** (можна паралельно з Vercel — буде окрема копія).
2. У Netlify → Site → Identity → Enable.
3. Identity → Registration → **Invite only**.
4. Identity → Services → Git Gateway → Enable.
5. Identity → Invite users → запроси редакторів за email.
6. Заходь на `https://<your-site>.netlify.app/admin/` → залогінься.

### Варіант 2: GitHub OAuth

Більш «технічний» варіант. У `admin/config.yml` розкоментуй блок `backend: github` і налаштуй OAuth proxy (наприклад, Cloudflare Worker). Інструкція: https://decapcms.org/docs/github-backend/

### Що можна редагувати через адмінку

- **Блог** — створювати/редагувати пости (заголовок, дата, категорія, обкладинка, markdown-текст)
- **Магазин** — додавати товари (назва, опис, ціна, зображення, наявність)
- **Звіти** — заливати PDF з описом
- **Партнери** — додавати/прибирати, відмічати топ-4
- **Відгуки** — текст, ім'я, місто
- **Контакти** — email, телефон, соцмережі, реквізити для донатів

## Налаштування контенту

Після деплою зайди в адмінку і:

1. **Контакти і соцмережі** → встав реальні URL Instagram / Facebook / Telegram, телефон, email.
2. **Реквізити для донатів** → URL моно-банки, PayPal, IBAN, ЄДРПОУ.
3. **Партнери** → познач 4 топові, додай решту з логотипами.
4. **Відгуки** → заміни плейсхолдери на справжні цитати.
5. **Звіти** → залий PDF файлів річних звітів.
6. **Блог** → напиши перші пости.
7. **Магазин** → додай реальні фото товарів.

## Майбутнє: своє еквайрингове рішення

Коли будемо підключати **Monobank Acquiring**:

1. Деплой має бути на Vercel (для serverless функцій).
2. У `/api/checkout.js` додамо обробник створення інвойсу через Monobank API.
3. Webhook на статус оплати → `/api/monobank-webhook.js`.
4. Email з підтвердженням → через Resend / Mailgun.
5. Адмін-сторінка замовлень — нова колекція в Decap або окремий мінімальний бекенд.

Усі ключі — у Vercel Environment Variables. Код магазину вже структурований так, що `addToCart` і `cart.html` готові до підключення — треба буде лише замінити `alert('...')` у `checkout()` на fetch до `/api/checkout`.

## Бренд

- Основний колір: `#1a365f` (темно-синій)
- Акцент: `#c9a26b` (тепле золото)
- Фон: `#faf8f3` (теплий крем)
- Заголовки: Cormorant Garamond
- Текст: Manrope

## Ліцензія

© 2026 ГО «Українська Валькірія». Контент сайту — права організації.
Каркас сайту — вільне користування.
