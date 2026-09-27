# Portfolio

Односторінкове портфоліо на React + Vite.

## Запуск у VS Code

```bash
npm install
npm run dev
```

Відкриється на `http://localhost:5173`.

## Збірка для продакшену

```bash
npm run build
npm run preview
```

Готова збірка з'явиться в папці `dist/` — її можна залити на будь-який хостинг.

## Деплой на GitHub Pages

Репозиторій вже містить workflow `.github/workflows/deploy.yml`, який сам збирає й публікує сайт при кожному `git push` у гілку `main`.

1. У репозиторії на GitHub: **Settings → Pages → Build and deployment → Source** вибери **GitHub Actions**.
2. Зроби `git push` (або запусти workflow вручну у вкладці **Actions**).
3. Сайт з'явиться на `https://<user>.github.io/portfolio.io/` за пару хвилин.

`base: "/portfolio.io/"` у `vite.config.js` вже налаштований під назву цього репозиторію. Якщо перейменуєш репозиторій — онови це значення так само.

## Структура

```
src/
  components/   — UI-блоки (Nav, Hero, About, Skills, Timeline, Languages, Footer)
  hooks/         — useReveal.js (scroll-reveal анімації)
  data.js        — контент (навички, досвід, освіта, мови)
  styles.css     — глобальні стилі, класи в методології БЕМ
  App.jsx        — збирає сторінку з компонентів
  main.jsx       — точка входу React
public/
  favicon.svg    — фавіконка
```
