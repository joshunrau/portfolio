<script lang="ts">
  import * as xterm from '@xterm/xterm';
  import { onMount } from 'svelte';

  import '@xterm/xterm/css/xterm.css';

  const { Terminal } = xterm;

  onMount(() => {
    const terminal = new Terminal({
      allowTransparency: true,
      cursorBlink: true,
      cursorStyle: 'bar',
      disableStdin: false,
      fontFamily: 'MesloLGS NF'
    });
    terminal.open(document.getElementById('terminal')!);
    terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
  });
</script>

<div id="terminal"></div>

<style>
  @font-face {
    font-family: 'MesloLGS NF';
    src: local('MesloLGS NF'), local('MesloLGS-NF'), url('/fonts/MesloLGS-NF-Regular.ttf');
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'MesloLGS NF';
    src: local('MesloLGS NF Bold'), local('MesloLGS-NF-Bold'), url('/fonts/MesloLGS-NF-Bold.ttf');
    font-weight: bold;
    font-display: swap;
  }
  @font-face {
    font-family: 'MesloLGS NF';
    src: local('MesloLGS NF Italic'), local('MesloLGS-NF-Italic'), url('/fonts/MesloLGS-NF-Italic.ttf');
    font-weight: normal;
    font-display: swap;
    font-style: italic;
  }
  @font-face {
    font-family: 'MesloLGS NF';
    src: local('MesloLGS NF Bold Italic'), local('MesloLGS-NF-Bold-Italic'), url('/fonts/MesloLGS-NF-Bold-Italic.ttf');
    font-weight: bold;
    font-display: swap;
    font-style: italic;
  }
</style>
