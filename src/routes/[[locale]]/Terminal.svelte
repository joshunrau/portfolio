<script lang="ts">
  import * as X from '@xterm/xterm';
  import { onDestroy, onMount } from 'svelte';
  import type { Unsubscriber } from 'svelte/store';
  import { cn } from '$lib/utils/cn';
  import { interpretCommand, isAlphaNumeric, isASCII, TERMINAL_GREETER, terminalStore } from '$lib/terminal';

  const BACKSPACE = '\u007f';
  const ESCAPE = '\u001b';
  const SPACE = '\u0020';

  const PROMPT = '% ';

  let terminal: X.Terminal;
  let unsubscribe: Unsubscriber;

  let command: string = '';

  onMount(() => {
    terminal = new X.Terminal({
      allowTransparency: true,
      cursorBlink: true,
      cursorStyle: 'bar',
      disableStdin: false,
      fontFamily: 'MesloLGS NF',
      theme: {
        background: 'rgba(26, 27, 38, 0.8)',
        foreground: '#c0caf5',
        cursor: '#c0caf5',
        cursorAccent: '#1a1b26',
        black: '#15161e',
        red: '#f7768e',
        green: '#9ece6a',
        yellow: '#e0af68',
        blue: '#7aa2f7',
        magenta: '#bb9af7',
        cyan: '#7dcfff',
        white: '#a9b1d6',
        brightBlack: '#414868',
        brightRed: '#f7768e',
        brightGreen: '#9ece6a',
        brightYellow: '#e0af68',
        brightBlue: '#7aa2f7',
        brightMagenta: '#bb9af7',
        brightCyan: '#7dcfff',
        brightWhite: '#c0caf5'
      },
      ignoreBracketedPasteMode: true
    });
    terminal.open(document.getElementById('terminal')!);
    // terminal.write(TERMINAL_GREETER);
    terminal.write('$ ');
    terminal.onData((data, arg2) => {
      if (data === BACKSPACE) {
        terminal.write('\b \b');
        command = command.substring(0, command.length - 1);
      } else if (data === ESCAPE) {
        $terminalStore.isOpen = false;
      } else if (data === '\r') {
        const [cmd, ...args] = command.split(' ');
        if (cmd === 'clear') {
          terminal.clear();
        } else if (cmd) {
          terminal.write('\r\n' + interpretCommand(cmd, ...args));
        }
        command = '';
        terminal.write('\r\n' + PROMPT);
      } else if (isASCII(data)) {
        terminal.write(data);
        command += data;
      }
    });
    unsubscribe = terminalStore.subscribe(({ isOpen }) => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
    if (terminal) {
      terminal.dispose();
    }
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class={cn(
    'fixed inset-0 flex items-center justify-center bg-black/80  backdrop-blur transition-opacity duration-300',
    $terminalStore.isOpen ? 'z-20' : '-z-10 opacity-0'
  )}
  on:click|self={() => {
    $terminalStore.isOpen = false;
  }}
>
  <div class="max-w-screen-md overflow-hidden rounded-md border shadow-xl [&_.xterm-screen]:p-4" id="terminal" />
</div>