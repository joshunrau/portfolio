import { writable } from 'svelte/store';

export const LAST_TERMINAL_LOGIN_KEY = 'LAST_TERMINAL_LOGIN';

export const TERMINAL_GREETER = String.raw`
 _____           _    __      _ _       
|  __ \         | |  / _|    | (_)      
| |__) |__  _ __| |_| |_ ___ | |_  ___  
|  ___/ _ \| '__| __|  _/ _ \| | |/ _ \ 
| |  | (_) | |  | |_| || (_) | | | (_) |
|_|   \___/|_|   \__|_| \___/|_|_|\___/ 
`;

export const terminalStore = writable({
  isOpen: false
});

export function isASCII(str: string) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 127) {
      return false;
    }
  }
  return true;
}

export function isAlphaNumeric(str: string) {
  let code, i, len;
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
}
