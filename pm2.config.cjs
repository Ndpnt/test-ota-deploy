module.exports = {
  apps: [
    {
      name: 'ota-api',
      script: 'npm',
      args: 'run start:api',
    },
    {
      name: 'ota-federation-api',
      script: 'npm',
      args: 'run start:federation-api',
      max_restarts: 2,
      min_uptime: '1h', // Set a relatively high duration (more than the longest run) so that restarts that occur before this duration has elapsed are considered unstable.
      restart_delay: 15 * 60 * 1000,
    }
  ],
};
