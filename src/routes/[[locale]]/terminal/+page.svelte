<script lang="ts">
  import * as X from '@xterm/xterm';
  import { onMount } from 'svelte';

  import '@xterm/xterm/css/xterm.css';

  onMount(() => {
    const terminal = new X.Terminal({
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
    terminal.write('% ');
    terminal.onData((data) => {
      terminal.write(data);
    });
  });
</script>

<div class="border" id="terminal"></div>

<style>
</style>
