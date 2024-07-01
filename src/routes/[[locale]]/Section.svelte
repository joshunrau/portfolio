<script lang="ts">
  import { cn } from '$lib/utils/cn';
  export let className: string | undefined = undefined;
</script>

<div class={cn('min-h-[calc(100vh-4rem)]', className)}>
  <slot />
</div>
