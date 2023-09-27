/* Instructions for using this component
 - we can use it inside functions, but not inside components
*/

'use client';

import { Trans } from 'react-i18next';

const translateLang = (langKey, values) => (
  <Trans
    i18nKey={langKey} // optional -> fallbacks to defaults if not provided
    values={values}
    components={{ bold: <strong />, span: <span /> }}
  />
);
export default translateLang;
