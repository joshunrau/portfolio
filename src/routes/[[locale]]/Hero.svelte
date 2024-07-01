<script lang="ts">
  import { i18n } from '$lib/i18n';
  import avatar from '$lib/images/avatar.webp';

  import Section from './Section.svelte';
</script>

<Section className="flex items-center justify-center gap-10">
  <div class="w-full">
    <h1 class="font-display text-center text-4xl font-bold text-slate-900 sm:text-left sm:text-5xl dark:text-slate-100">
      {$i18n.t('index.hero.heading')}
    </h1>
    <p class="mt-3 text-center text-base text-slate-600 sm:mt-5 sm:text-left sm:text-lg dark:text-slate-300">
      {$i18n.t('index.hero.description')}
    </p>
  </div>
  <div class="hidden flex-shrink-0 sm:block sm:w-80 md:w-96 lg:w-112 2xl:w-128">
    <img alt={$i18n.t('common.avatar')} width="1024" height="1024" src={avatar} />
  </div>
</Section>
