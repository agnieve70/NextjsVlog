
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "agnieve0513",
        mongodb_password: "JaOUg9KbzOqjmd1l",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "agnieve0513",
      mongodb_password: "JaOUg9KbzOqjmd1l",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

