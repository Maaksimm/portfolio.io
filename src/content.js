export const CONTENT = {
  ua: {
    nav: {
      mark: "Maksim.",
      links: [
        ["about", "Про мене"],
        ["skills", "Навички"],
        ["projects", "Проєкти"],
        ["experience", "Досвід"],
        ["education", "Освіта"],
        ["languages", "Мови"],
      ],
    },
    hero: {
      role: "Full-Stack Developer",
      titleLine1: "Створюю інтерфейси,",
      titleEm: "яким довіряють.",
      lede: "Full-Stack розробник з практичним досвідом командної розробки реальних проєктів: впевнено на фронтенді, розвиваюсь у бекенді на Python і Django. Повністю готовий до повноцінної зайнятості.",
      stats: [
        { v: "6", l: "місяців в ITLEO Academy" },
        { v: "4", l: "роки навчання в політехніці" },
        { v: "3", l: "проєкти в активній розробці" },
      ],
    },
    about: {
      title: "Про мене",
      html: `Успішно закінчив навчання в <strong>НТУ «Дніпровська політехніка»</strong> на факультеті інформаційних технологій за спеціальністю «Комп'ютерні науки» та отримав диплом. Маю практичний досвід командної розробки реальних проєктів і повністю готовий до повноцінної зайнятості. Працював у команді, використовував Git для контролю версій, взаємодії з колегами та спільної роботи над кодовою базою. Володію <strong>React</strong>, <strong>JavaScript</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>SASS/SCSS</strong>, інструментами Git та маю досвід роботи з дизайн-макетами. Розвиваюсь у напрямку Full-Stack — маю середній рівень <strong>Python</strong> та початковий рівень <strong>Django</strong>. Шукаю перспективну команду, де зможу застосувати свій досвід, приносити користь реальним проєктам та професійно зростати під керівництвом досвідчених менторів.`,
    },
    skills: {
      title: "Навички",
      tabs: [
        { id: "all", label: "Усі" },
        { id: "code", label: "Логіка" },
        { id: "markup", label: "Верстка" },
        { id: "backend", label: "Бекенд" },
        { id: "tools", label: "Інструменти" },
      ],
      items: [
        { name: "React", level: "Впевнено", pct: 82, cat: "code" },
        { name: "JavaScript", level: "Впевнено", pct: 85, cat: "code" },
        { name: "HTML5", level: "Профі", pct: 92, cat: "markup" },
        { name: "CSS3", level: "Профі", pct: 90, cat: "markup" },
        { name: "SASS / SCSS", level: "Впевнено", pct: 80, cat: "markup" },
        { name: "Git", level: "Впевнено", pct: 78, cat: "tools" },
        { name: "Python", level: "Середній", pct: 55, cat: "backend" },
        { name: "Django", level: "Початковий", pct: 25, cat: "backend" },
      ],
      of: "з",
    },
    projects: {
      title: "Проєкти",
      items: [
        {
          name: "НТУ ДП",
          role: "Front-End розробник",
          period: "ntu.dp.ua",
          body: "Розробка вебсайту для студентів та абітурієнтів університету — верстка сторінок, адаптивність, інтеграція з наявним дизайном.",
          tags: ["HTML5", "CSS3", "JavaScript"],
        },
        {
          name: "World Students",
          role: "Front-End розробник",
          period: "у розробці",
          body: "Відповідаю за розробку користувацького інтерфейсу: адаптивну верстку під різні пристрої, реалізацію логіки роботи застосунку та написання коду на React. Беру участь у командній розробці, перегляді коду та забезпеченні кросбраузерної сумісності.",
          tags: ["React"],
        },
        {
          name: "Business Navigator",
          role: "Front-End розробник",
          period: "у розробці",
          body: "Відповідаю за фронтенд-частину застосунку — інтерфейс, адаптивність та логіку взаємодії користувача з продуктом. Пишу код на React у складі команди, беру участь у код-рев'ю та тестуванні функціоналу перед релізом.",
          tags: ["React"],
        },
      ],
    },
    experience: {
      title: "Досвід роботи",
      items: [
        {
          role: "Front-End Developer / Designer",
          org: "ITLEO Academy Ukraine",
          period: "6 місяців",
          body: "Відповідав за розробку фронтенд-частини реальних командних проєктів, а також створення якісної, адаптивної та кросбраузерної верстки. Взаємодіяв з колегами та вів спільну роботу над кодовою базою.",
          tags: ["React", "JavaScript", "Git", "Командна робота"],
        },
      ],
    },
    education: {
      title: "Освіта",
      items: [
        {
          role: "НТУ «Дніпровська політехніка»",
          org: "Факультет інформаційних технологій · «Комп'ютерні науки»",
          period: "2022 — 2026",
          body: "Успішно захистив кваліфікаційну роботу — веб-додаток для візуалізації плану задач на JS Angular. Розробив вебсайт для користувачів НТУ ДП (ntu.dp.ua).",
          tags: ["Angular", "Дипломний проєкт", "ntu.dp.ua"],
        },
      ],
    },
    languages: {
      title: "Мови",
      items: [
        { name: "Українська", level: "C2 — Вільно", pct: 100 },
        { name: "Англійська", level: "B2 — Вище середнього", pct: 70 },
      ],
    },
    footer: {
      text: "Full-Stack Developer",
      top: "Нагору ↑",
    },
  },

  en: {
    nav: {
      mark: "Maksim.",
      links: [
        ["about", "About"],
        ["skills", "Skills"],
        ["projects", "Projects"],
        ["experience", "Experience"],
        ["education", "Education"],
        ["languages", "Languages"],
      ],
    },
    hero: {
      role: "Full-Stack Developer",
      titleLine1: "Building interfaces",
      titleEm: "people trust.",
      lede: "Full-Stack developer with hands-on experience in team-based development of real projects: confident on the front end, growing into the back end with Python and Django. Fully available for full-time work.",
      stats: [
        { v: "6", l: "months at ITLEO Academy" },
        { v: "4", l: "years at the Polytechnic" },
        { v: "3", l: "projects in active development" },
      ],
    },
    about: {
      title: "About me",
      html: `I graduated from <strong>Dnipro University of Technology</strong>, Faculty of Information Technology, majoring in Computer Science. I have hands-on experience working in a development team on real projects and I'm fully available for full-time employment. I worked in a team using Git for version control, collaborating with colleagues on a shared codebase. I work with <strong>React</strong>, <strong>JavaScript</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>SASS/SCSS</strong>, Git, and have experience turning design mockups into code. I'm growing into Full-Stack development — intermediate <strong>Python</strong> and beginner <strong>Django</strong>. Looking for a team where I can apply my experience, contribute to real projects, and grow under experienced mentors.`,
    },
    skills: {
      title: "Skills",
      tabs: [
        { id: "all", label: "All" },
        { id: "code", label: "Logic" },
        { id: "markup", label: "Markup" },
        { id: "backend", label: "Backend" },
        { id: "tools", label: "Tools" },
      ],
      items: [
        { name: "React", level: "Confident", pct: 82, cat: "code" },
        { name: "JavaScript", level: "Confident", pct: 85, cat: "code" },
        { name: "HTML5", level: "Proficient", pct: 92, cat: "markup" },
        { name: "CSS3", level: "Proficient", pct: 90, cat: "markup" },
        { name: "SASS / SCSS", level: "Confident", pct: 80, cat: "markup" },
        { name: "Git", level: "Confident", pct: 78, cat: "tools" },
        { name: "Python", level: "Intermediate", pct: 55, cat: "backend" },
        { name: "Django", level: "Beginner", pct: 25, cat: "backend" },
      ],
      of: "of",
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "NTU DP",
          role: "Front-End Developer",
          period: "ntu.dp.ua",
          body: "Built the university website for students and applicants — page markup, responsiveness, integration with the existing design.",
          tags: ["HTML5", "CSS3", "JavaScript"],
        },
        {
          name: "World Students",
          role: "Front-End Developer",
          period: "in progress",
          body: "Responsible for the user interface: responsive layout across devices, application logic, and writing the front-end code in React. Participate in team development, code review, and ensuring cross-browser compatibility.",
          tags: ["React"],
        },
        {
          name: "Business Navigator",
          role: "Front-End Developer",
          period: "in progress",
          body: "Responsible for the front-end of the application — interface, responsiveness, and user-interaction logic. Write the React code as part of the team, take part in code review and feature testing before release.",
          tags: ["React"],
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Front-End Developer / Designer",
          org: "ITLEO Academy Ukraine",
          period: "6 months",
          body: "Responsible for the front-end of real team projects, building high-quality, responsive, cross-browser markup. Collaborated with the team using a shared codebase.",
          tags: ["React", "JavaScript", "Git", "Teamwork"],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          role: "Dnipro University of Technology",
          org: "Faculty of Information Technology · Computer Science",
          period: "2022 — 2026",
          body: "Successfully defended a bachelor's thesis — a web app for task-plan visualization built with JS Angular. Built the NTU DP website for university users (ntu.dp.ua).",
          tags: ["Angular", "Thesis", "ntu.dp.ua"],
        },
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Ukrainian", level: "C2 — Fluent", pct: 100 },
        { name: "English", level: "B2 — Upper-Intermediate", pct: 70 },
      ],
    },
    footer: {
      text: "Full-Stack Developer",
      top: "Back to top ↑",
    },
  },
};
