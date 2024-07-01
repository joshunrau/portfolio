import { writable } from 'svelte/store';

export const TERMINAL_GREETER = String.raw`
 ______   ______     ______     ______   ______   ______     __         __     ______    
/\  == \ /\  __ \   /\  == \   /\__  _\ /\  ___\ /\  __ \   /\ \       /\ \   /\  __ \   
\ \  _-/ \ \ \/\ \  \ \  __<   \/_/\ \/ \ \  __\ \ \ \/\ \  \ \ \____  \ \ \  \ \ \/\ \  
 \ \_\    \ \_____\  \ \_\ \_\    \ \_\  \ \_\    \ \_____\  \ \_____\  \ \_\  \ \_____\ 
  \/_/     \/_____/   \/_/ /_/     \/_/   \/_/     \/_____/   \/_____/   \/_/   \/_____/ 
`;

export const terminalStore = writable({
  isOpen: false
});
