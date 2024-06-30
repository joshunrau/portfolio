<script>
  import LanguageToggle from './LanguageToggle.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<header
  class="fixed top-0 z-10 flex h-16 w-full items-center bg-white/80 text-slate-700 shadow backdrop-blur-lg dark:bg-slate-800/75 dark:text-slate-300"
>
  <div class="container flex items-center justify-between py-3 font-medium">
    <a class="text-lg" href="/">Joshua Unrau</a>
    <div class="flex flex-grow justify-end gap-3 bg-inherit md:order-last">
      <ThemeToggle />
      <LanguageToggle />
    </div>
  </div>
</header>
