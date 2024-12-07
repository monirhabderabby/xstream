import "server-only";

const dictionaries = {
  en: () => import("./english.json").then((module) => module.default),
  bn: () => import("./bangla.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
