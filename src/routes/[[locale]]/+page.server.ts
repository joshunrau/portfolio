import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const { locale } = params;
  if (!(locale === 'en' || locale === 'fr')) {
    throw error(404, 'Not Found');
  }
  return { locale } as const;
};
