/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'my-esn-pool',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // PoolName
      PoolName: 'ESN DaPool',
      // API host and port
      ApiUrl: 'https//esn.dapool.me/',

      // HTTP mining endpoint
      HttpHost: 'http://dapool.me',
      HttpPort: 4444,

      // Stratum mining endpoint
      StratumHost: 'dapool.me',
      StratumPort: 4004,

      // NicehashStratum mining endpoint
      NicehashHost: 'dapool.me',
      NicehashPort: 4006,

      // Fee and payout details
      PoolFee: '1%',
      PayoutThreshold: '1 ESN',
      PayoutInterval: '2h',
      Unit: 'ESN',
      EtherUnit: 'ESN',

      // For network hashrate (change for your favourite fork)
      BlockExplorerLink: 'https://ethersocial.net',
      BlockExplorerAddrLink: 'https://ethersocial.net/addr',
      DonationLink: false,
      DonationAddress: '',
      BlockReward: 5,
      BlockTime: 14.4
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://localhost:8080/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
