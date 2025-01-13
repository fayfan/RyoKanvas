// frontend/src/store/csrf.js
import Cookies from 'js-cookie';

export const csrfFetch = async (url, options = {}) => {
  // Set options.method to 'GET' if there is no method
  options.method = options.method || 'GET';

  // Set options.headers to an empty object if there are no headers
  options.headers = options.headers || {};

  // If the options.method is not 'GET', then set the 'Content-Type' header to
  // 'application/json' & set the 'XSRF-TOKEN' header to the value of the
  // 'XSRF-TOKEN' cookie
  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] =
      options.headers['Content-Type'] || 'application/json';
    options.headers['XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN');
  }

  // Call the default window's fetch with the url & the options passed in
  const res = await window.fetch(url, options);

  // If the response status code is 400 or above, throw an error with the error
  // being the response
  if (res.status >= 400) throw res;

  // If the response status code is under 400, return the response to the next
  // promise chain
  return res;
};

// Call this to get the 'XSRF-TOKEN' cookie; should only be used in development
export const restoreCSRF = () => csrfFetch('/api/csrf/restore');
