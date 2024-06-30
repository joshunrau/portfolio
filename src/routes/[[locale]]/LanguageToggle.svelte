<script lang="ts">
  import { onDestroy } from 'svelte';
  import { i18n, type Language } from '$lib/i18n';
  import ChevronDownIcon from '$lib/icons/ChevronDownIcon.svelte';
  import { cn } from '$lib/utils/cn';

  let isOpen = false;
  let resolvedLanguage: Language;

  const unsubscribe = i18n.subscribe((i18n) => {
    resolvedLanguage = i18n.resolvedLanguage;
    isOpen = false;
  });

  onDestroy(unsubscribe);
</script>

<div class="relative">
  <button
    class="flex items-center justify-center rounded-md p-2 text-muted-foreground hover:backdrop-brightness-95 disabled:cursor-not-allowed dark:hover:text-slate-100 dark:hover:backdrop-brightness-150"
    type="button"
    on:click={() => {
      isOpen = !isOpen;
    }}
  >
    <span class="uppercase">{resolvedLanguage}</span>
    <ChevronDownIcon className="ml-1.5 h-4 w-4" />
  </button>
  <div
    class={cn(
      'absolute mt-1 w-full rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-10 dark:bg-slate-800',
      !isOpen && 'hidden'
    )}
  >
    <a
      class="block cursor-pointer p-2 text-center uppercase first:rounded-t-md last:rounded-b-md hover:backdrop-brightness-95 dark:hover:backdrop-brightness-150"
      href="/en"
    >
      en
    </a>
    <a
      class="block cursor-pointer p-2 text-center uppercase first:rounded-t-md last:rounded-b-md hover:backdrop-brightness-95 dark:hover:backdrop-brightness-150"
      href="/fr"
    >
      fr
    </a>
  </div>
</div>
