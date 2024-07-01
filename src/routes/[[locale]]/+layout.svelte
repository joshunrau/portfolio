<script>
  import { page } from '$app/stores';
  import Header from './Header.svelte';
  import avatar from '$lib/images/avatar.webp';
  import { i18n } from '$lib/i18n';

  import '../../app.css';
  import '@xterm/xterm/css/xterm.css';
  import Terminal from './Terminal.svelte';

  $: title = $i18n.t('common.meta.title');
  $: description = $i18n.t('common.meta.description');
  const keywords = ['Joshua', 'Unrau'];
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="author" content="Joshua Unrau" />
  <meta name="keywords" content={keywords.join(', ')} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:image" content={avatar} />
  <meta property="og:image:alt" content={$i18n.t('common.avatar')} />
  <meta property="og:locale" content={$i18n.resolvedLanguage} />
  <meta property="og:locale:alternate" content={$i18n.altLanguage} />
  <link rel="alternate" href={$i18n.localizedURLs.en.href} hreflang="en" />
  <link rel="alternate" href={$i18n.localizedURLs.fr.href} hreflang="fr" />
</svelte:head>

<Terminal />
<Header />
<main class="container">
  <slot />
</main>
