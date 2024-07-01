<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { Unsubscriber } from 'svelte/store';
  import { cn } from '$lib/utils/cn';
  import { terminalStore } from '$lib/terminal';

  let unsubscribe: Unsubscriber;

  onMount(() => {
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
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class={cn(
    'fixed inset-0 bg-black/80 transition-opacity duration-300',
    $terminalStore.isOpen ? 'z-20 opacity-80' : '-z-10 opacity-0'
  )}
  on:click|self={() => {
    $terminalStore.isOpen = false;
  }}
/>
