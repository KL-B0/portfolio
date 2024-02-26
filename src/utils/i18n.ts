import { ui, defaultLang } from "./ui";

function validateLanguage(lang: string): asserts lang is keyof typeof ui {
  if (lang in ui) return;
  throw Error(`"${lang}" is not a valid language`);
}

function validateKey(
  key: string
): asserts key is keyof (typeof ui)[typeof defaultLang] {
  if (key in ui[defaultLang]) return;
  throw Error(`"${key}" is not a valid key`);
}

export function useTranslation(lang: string | undefined) {
  if (lang === undefined) {
    return function t(key: string) {
      validateKey(key);
      return ui[defaultLang][key];
    };
  }

  validateLanguage(lang);
  return function t(key: string) {
    validateKey(key);
    return ui[lang][key] || ui[defaultLang][key];
  };
}
