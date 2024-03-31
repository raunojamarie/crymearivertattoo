import ee from './ee.json';
import en from './en.json';

export const t = (value) => {
  if (window.location.href.includes('/en')) {
    return en[value];
  } else {
    return ee[value];
  }  
}
