import { writable } from 'svelte/store';

import { echo, ls, pwd, whoami } from './commands';

export const TERMINAL_GREETER = String.raw`
____   ___   ____  ______  _____   ___   _      ____  ___  
|    \ /   \ |    \|      ||     | /   \ | |    |    |/   \ 
|  o  )     ||  D  )      ||   __||     || |     |  ||     |
|   _/|  O  ||    /|_|  |_||  |_  |  O  || |___  |  ||  O  |
|  |  |     ||    \  |  |  |   _] |     ||     | |  ||     |
|  |  |     ||  .  \ |  |  |  |   |     ||     | |  ||     |
|__|   \___/ |__|\_| |__|  |__|    \___/ |_____||____|\___/              
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

export function interpretCommand(command: string, ...args: string[]) {
  command = command.trim();
  switch (command) {
    case 'echo':
      return echo(...args);
    case 'pwd':
      return pwd();
    case 'ls':
      return ls();
    case 'whoami':
      return whoami();
    default:
      return `sh: ${command}: command not found`;
  }
}
