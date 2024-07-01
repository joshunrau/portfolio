import { error, redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const { locale } = params;
  if (locale === 'en') {
    redirect(308, '/');
  } else if (locale === undefined || locale === 'fr') {
    return;
  }
  throw error(404, 'Not Found');
};
