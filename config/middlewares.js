module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      // origin: ['http://localhost:3000', 'https://kotak-home.netlify.app/'], // or '*' for all
      origin: '*',
      headers: '*',
      credentials: true,
    },
  },
];
