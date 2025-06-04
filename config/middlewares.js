module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
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
      // origin: ['https://your-frontend-domain.com'], // or '*' for all
      origin: ['*'],
    },
  },
];
