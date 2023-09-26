export const fallbackLng = 'en';
export const languages = [fallbackLng, 'no'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    returnObjects: true,
    debug: false,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  };
}
