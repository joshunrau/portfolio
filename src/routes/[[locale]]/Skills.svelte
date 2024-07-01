<script lang="ts">
  import typescriptIcon from '$lib/icons/typescript.svg';
  import mongodbIcon from '$lib/icons/mongodb.svg';
  import nestjsIcon from '$lib/icons/nestjs.svg';
  import reactIcon from '$lib/icons/react.svg';
  import skillsFilterIcon from '$lib/icons/skills-filler.svg';
  import pythonIcon from '$lib/icons/python.svg';
  import htmlIcon from '$lib/icons/html.svg';
  import cssIcon from '$lib/icons/css.svg';
  import nodejsIcon from '$lib/icons/nodejs.svg';
  import nextjsIcon from '$lib/icons/nextjs.svg';
  import dockerIcon from '$lib/icons/docker.svg';
  // import githubIcon from '$lib/icons/github.svg';
  import javascriptIcon from '$lib/icons/javascript.svg';
  import linuxIcon from '$lib/icons/linux.svg';
  import { cn } from '$lib/utils/cn';
  import { i18n } from '$lib/i18n';

  import Section from './Section.svelte';

  const technologies = [
    { name: 'TypeScript', src: typescriptIcon },
    { name: 'NestJS', src: nestjsIcon },
    { name: 'CSS', src: cssIcon },
    { name: 'Next.js', src: nextjsIcon, invert: 'dark' },
    { name: 'Docker', src: dockerIcon },
    { name: 'React', src: reactIcon },
    { name: 'HTML', src: htmlIcon },
    { name: 'Python', src: pythonIcon },
    { name: 'Node.js', src: nodejsIcon },
    { name: 'MongoDB', src: mongodbIcon },
    { name: 'Linux', src: linuxIcon },
    // { name: 'GitHub', src: githubIcon },
    { name: 'JavaScript', src: javascriptIcon }
  ];

  // TO BE REPLACED WITH DECLARATIVE APPROACH
  import { onMount } from 'svelte';
  onMount(() => {
    const container = document.getElementById('skills-showcase')!;
    const skillIcons = container.querySelectorAll('div > img');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          for (let i = 0; i < skillIcons.length; i++) {
            setTimeout(() => {
              skillIcons.item(i).classList.replace('opacity-0', 'opacity-100');
              skillIcons.item(i).classList.replace('scale-0', 'scale-100');
            }, i * 100);
          }
        }
      });
    });
    observer.observe(container);
  });
</script>

<Section className="flex flex-row-reverse items-center justify-center gap-10">
  <div class="w-full">
    <div class="@container">
      <h3 class="mb-5 text-center text-2xl font-semibold">{$i18n.t('index.skills.title')}</h3>
      <div class="grid grid-cols-3 gap-3 @md:grid-cols-4 @2xl:grid-cols-6" id="skills-showcase">
        {#each technologies as technology}
          <div class="col-span-1 flex w-full items-center justify-center">
            <div class="group/skill relative h-26 w-26">
              <img
                alt={technology.name}
                class={cn(
                  'absolute right-5 top-2 h-16 w-16 scale-0 transform-gpu opacity-0 duration-300 ease-in-out group-hover/skill:scale-125',
                  technology.invert === 'dark' ? 'dark:invert' : technology.invert === 'light' ? 'invert' : undefined
                )}
                src={technology.src}
              />
              <span class="absolute bottom-0 left-0 flex w-full justify-center">
                <span
                  class="text-sm font-medium opacity-0 transition-opacity duration-300 ease-in-out group-hover/skill:opacity-100"
                >
                  {technology.name}
                </span>
              </span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="hidden flex-shrink-0 sm:block sm:w-80 md:w-96 lg:w-112 2xl:w-128">
    <img alt="placeholder" src={skillsFilterIcon} />
  </div>
</Section>
