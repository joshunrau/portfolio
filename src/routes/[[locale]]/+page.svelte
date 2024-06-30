<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div>
  <h1>Hello World</h1>
  <p>Language: {data.locale}</p>
</div>
