<script lang="ts">
  import MoonIcon from '$lib/icons/MoonIcon.svelte';
  import SunIcon from '$lib/icons/SunIcon.svelte';

  type Theme = 'light' | 'dark';

  function getTheme() {
    const theme = document.documentElement.getAttribute('data-mode');
    if (!(theme === 'light' || theme === 'dark')) {
      console.error(`Unexpected value for attribute '${'data-mode'}': ${theme}`);
      return 'light';
    }
    return theme;
  }

  function setTheme(theme: Theme) {
    document.documentElement.setAttribute('data-mode', theme);
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    const currentTheme = getTheme();
    if (currentTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
</script>

<svelte:head>
  <script>
    let theme = window.localStorage.getItem('theme');
    if (!(theme === 'dark' || theme === 'light')) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-mode', theme);
    window.localStorage.setItem('theme', theme);
  </script>
</svelte:head>

<button
  class="relative h-10 w-10 rounded-md text-muted-foreground transition-transform hover:backdrop-brightness-95 dark:hover:text-slate-100 dark:hover:backdrop-brightness-150"
  type="button"
  on:click={toggleTheme}
>
  <MoonIcon className="absolute inset-2 h-6 w-6 dark:opacity-0" />
  <SunIcon className="absolute inset-2 h-6 w-6 opacity-0 dark:opacity-100" />
</button>
