import React from 'react';

import avatar from '@/assets/avatar.png';

export const PlaceholderPage = () => {
  return (
    <div className="h-screen bg-white">
      <div className="container flex h-full justify-between gap-8">
        <div className="flex max-w-xl flex-col items-center justify-center sm:items-start ">
          <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">Under Development</p>
          <h1 className="mb-2 text-center text-xl font-bold text-gray-800 sm:text-left md:text-2xl lg:text-3xl">
            Welcome to My Portfolio Site
          </h1>
          <p className="mb-4 text-center text-sm text-gray-500 sm:text-left md:mb-6 md:text-base lg:text-lg">
            This site is currently under development. In the meantime, feel free to reach out via email.
          </p>
          <a
            className="inline-block rounded-lg bg-gray-200 px-5 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:px-8 md:py-3 md:text-base"
            href="mailto:contact@joshuaunrau.com"
          >
            Get in Touch
          </a>
        </div>
        <div className="hidden items-center justify-center sm:flex">
          <img alt="Joshua Unrau" className="max-h-96" src={avatar} />
        </div>
      </div>
    </div>
  );
};

/*
export const PlaceholderPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
            <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">Under Development</p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
              Welcome to My Portfolio Site
            </h1>

            <p className="mb-8 text-center text-gray-500 sm:text-left md:text-lg">
              This site is currently under development. In the meantime, feel free to reach out via email.
            </p>
            <a
              className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              href="mailto:contact@joshuaunrau.com"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex items-center justify-center">
            <img alt="Joshua Unrau" src={avatar} />
          </div>
        </div>
      </div>
    </div>
  );
};
*/
