const translations = {
  ru: {
    title: "Программа встречи туриста",
    price: "Цена: 200$ за день (всё включено)",
    "program.1": "8:30 — Заселение в отель",
    "program.2": "9:30 — Завтрак в Capito",
    "program.3": "13:00 — Площадь Ала-Тоо / Нац. Исторический музей / Белый дом",
    "program.4": "13:30-14:30 — Обед в Navat",
    "program.5": "15:00 — Музей Гапара Айтиева",
    "program.6": "18:30 — Новые парки",
    "program.7": "— Новый Белый дом",
    "program.8": "— Прогулка по Ынтымаку",
    "program.9": "— Поездка в новую часть города",
    "program.10": "19:00 — Шашлычник / 20:30 — Отвоз в отель"
  },
  en: {
    title: "Tourist Welcome Program",
    price: "Price: $200 per day (all included)",
    "program.1": "8:30 — Hotel check-in",
    "program.2": "9:30 — Breakfast at Capito",
    "program.3": "13:00 — Ala-Too Square / Nat. Historical Museum / White House",
    "program.4": "13:30–14:30 — Lunch at Navat",
    "program.5": "15:00 — Gapar Aitiev Museum",
    "program.6": "18:30 — New parks",
    "program.7": "— New White House",
    "program.8": "— Walk at Yntymak Park",
    "program.9": "— Trip to the new part of the city",
    "program.10": "19:00 — BBQ dinner / 20:30 — Return to hotel"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

