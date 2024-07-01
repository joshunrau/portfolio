<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { i18n } from '$lib/i18n';
  import avatar from '$lib/images/avatar.webp';

  import Section from './Section.svelte';

  import { terminalStore } from '$lib/terminal';
</script>

<Section className="flex items-center justify-center gap-10">
  <div class="flex w-full flex-col gap-5">
    <h1 class="font-display text-center text-3xl font-bold sm:text-left sm:text-4xl">
      {$i18n.t('index.hero.heading')}
    </h1>
    <p class="text-center text-muted-foreground sm:text-left">
      {$i18n.t('index.hero.description')}
    </p>
    <div class="flex gap-3">
      <Button
        className="sm:w-min w-full"
        type="button"
        on:click={() => {
          $terminalStore.isOpen = true;
        }}>Open Terminal</Button
      >
      <Button
        className="sm:w-min w-full"
        variant="outline"
        type="button"
        on:click={() => {
          window.location.assign('https://github.com/joshunrau');
        }}>View GitHub</Button
      >
    </div>
  </div>
  <div class="hidden flex-shrink-0 sm:block sm:w-80 md:w-96 lg:w-112 2xl:w-128">
    <img alt={$i18n.t('common.avatar')} width="1024" height="1024" src={avatar} />
  </div>
</Section>
