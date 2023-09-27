/* Instructions for using this component
 - this is only for client side components
*/

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

'use client';

import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages, cookieName } from '@/lib/i18next/settings';

const runsOnServerSide = typeof window === 'undefined';

const detectionOptions = {
  // order and from where user language should be detected
  order: ['path', 'navigator', 'localStorage', 'cookie', 'htmlTag'],
  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'linaroResourcesHubLang',
  lookupLocalStorage: 'linaroResourcesHubLang',
  lookupSessionStorage: 'linaroResourcesHubLang',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
  // cookieDomain: 'cloudfront.net',
  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: '/', sameSite: 'strict' }
};

//
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language, namespace) => import(`@/helpers/lang/${language}.js`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: detectionOptions,
    preload: runsOnServerSide ? languages : []
  });

export function useTranslation(lng, ns, options) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  const i18nextFromCookie = cookies[cookieName];

  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);

    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng);
    }, [lng, i18n]);

    useEffect(() => {
      if (i18nextFromCookie === lng) return;
      setCookie(cookieName, lng, { path: '/' });
    }, [lng, i18nextFromCookie, setCookie]);
  }
  return ret;
}
