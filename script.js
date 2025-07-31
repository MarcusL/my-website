alert("Победа ближе чем кажеться!");
const translations = {
  ru: {
    title: "Программа встречи туриста",
    price: "Цена: 200$ за день (всё включено)",
    "program.1": "7:00 — Встречаем",
    "program.2": "8:30 — Заселение в отель",
    "program.3": "9:30 — Завтрак в Capito",
    "program.4": "13:00 — Площадь Ала-Тоо / Нац. Исторический музей / Белый дом",
    "program.5": "13:30-14:30 — Обед в Navat",
    "program.6": "15:00 — Музей Гапара Айтиева",
    "program.7": "18:30 — Новые парки",
    "program.8": "— Новый Белый дом",
    "program.9": "— Прогулка по Ынтымаку",
    "program.10": "19:00 — Шашлычник / 20:30 — Отвоз в отель",
  },
  en: {
    title: "Tourist Welcome Program",
    price: "Price: $200 per day (all included)",
    "program.1": "7:00 — Meeting at airport",
    "program.2": "8:30 — Hotel check-in",
    "program.3": "9:30 — Breakfast at Capito",
    "program.4": "13:00 — Ala-Too Square / Nat. Historical Museum / White House",
    "program.5": "13:30–14:30 — Lunch at Navat",
    "program.6": "15:00 — Gapar Aitiev Museum",
    "program.7": "18:30 — New parks",
    "program.8": "— New White House",
    "program.9": "— Walk at Yntymak Park",
    "program.10": "19:00 — BBQ dinner / 20:30 — Return to hotel",
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

