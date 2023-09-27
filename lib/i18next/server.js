/* Instructions for using this component
 - this is only for server side components
*/

/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from '@/lib/i18next/settings';

const initI18next = async (lng, ns) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language, namespace) => import(`@/helpers/lang/${language}.js`)))
    .init(getOptions(lng, ns));

  return i18nInstance;
};

export async function useTranslation(lng, ns, options = {}) {
  const i18nextInstance = await initI18next(lng, ns);

  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance
  };
}
