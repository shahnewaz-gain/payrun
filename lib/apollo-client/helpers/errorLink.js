/* eslint-disable no-unused-vars */
import Cookies from 'js-cookie';
import { onError } from '@apollo/client/link/error';
import { debounce, size } from 'lodash';
import { translateLang, toastAlert } from '@/utils';

const redirectToLoginPage = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  window.location.replace(`https://${window.location.host}/login`);
};

const delayErrorMessage = debounce((statusCode) => {
  if (statusCode === 401 || statusCode === 503) {
    toastAlert('error', translateLang('errors.unauthorized'), 'top-right');
    redirectToLoginPage();
  } else if (statusCode === 404) {
    toastAlert('error', translateLang('errors.not_found'), 'top-right');
  } else if (statusCode === 500) {
    toastAlert('error', translateLang('errors.internal_server_error'), 'top-right');
  } else {
    toastAlert('error', translateLang('errors.bad_request'), 'top-right');
  }
}, 1000);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (size(graphQLErrors)) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (message === 'Maintenance mode on') {
        window?.location?.replace('/maintenance');
      } else if (message === 'account_deactivated') {
        // need to work on logout if account deactivated
        //
        toastAlert('error', translateLang('errors.you_have_been_deactivated'), 'top-right');
      }
    });
  }

  if (size(networkError)) {
    const { statusCode } = networkError;
    if (statusCode === 403) {
      // need to work on unauthorized user and referesh token
      //
    } else {
      delayErrorMessage(statusCode);
    }
  }
});

export default errorLink;
