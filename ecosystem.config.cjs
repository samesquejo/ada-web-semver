module.exports = {
  apps: [
    {
      name: "react-web",
      script: "./src/app.js",
      dev: {
        NODE_ENV: "developement",
      },
      env_test: {
        NODE_ENV: "test",
      },
      env_staging: {
        NODE_ENV: "staging",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
