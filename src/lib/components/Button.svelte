<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { type VariantProps, cva } from 'class-variance-authority';
  import type { Simplify } from 'type-fest';
  import { cn } from '$lib/utils/cn';

  const buttonVariants = cva(
    'flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
      defaultVariants: {
        size: 'md',
        variant: 'primary'
      },
      variants: {
        size: {
          lg: 'h-10 rounded-md px-8',
          md: 'h-9 px-4 py-2',
          sm: 'h-8 rounded-md px-3 text-xs'
        },
        variant: {
          danger: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
          outline: 'border border-input bg-inherit shadow-sm',
          primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
          secondary: 'bg-secondary border text-secondary-foreground shadow-sm hover:bg-secondary/80'
        }
      }
    }
  );

  type $$Props = Simplify<
    Omit<HTMLButtonAttributes, 'class'> &
      VariantProps<typeof buttonVariants> & {
        className?: string;
      }
  >;

  export let className: $$Props['className'] = undefined;
  export let size: $$Props['size'];
  export let variant: $$Props['variant'];
</script>

<button {...$$props} class={cn(buttonVariants({ className, size, variant }))} on:click>
  <slot />
</button>
