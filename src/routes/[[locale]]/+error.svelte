<script>
  import { page } from '$app/stores';
</script>

<div class="flex grow flex-col items-center justify-center">
  <h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
    {$page.status} - {$page.error?.message}
  </h1>
  <div class="mt-4">
    <a
      class="text-sky-800 underline-offset-4 hover:text-sky-700 hover:underline dark:text-sky-200 dark:hover:text-sky-300"
      href="/"
    >
      Home Page<span aria-hidden="true"> &rarr;</span>
    </a>
  </div>
</div>
