import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Hello!",
      description: "This is a page supporting Light and Dark modes.",
      toggle: "Toggle to Dark Mode"
    },
  },
  ko: {
    translation: {
      welcome: "안녕하세요!",
      description: "이것은 라이트모드와 다크모드를 지원하는 페이지입니다.",
      toggle: "다크모드로 전환"
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko", // 기본 언어
    interpolation: { escapeValue: false },
  });

export default i18n;