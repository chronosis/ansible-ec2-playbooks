module.exports = {
  'server': {
    'shutdownTime': 1000,
    'pollingTimer': 5000
  },
  'logging': { // Logging Configuration
    'logDir': './logs',
    'options': {
      'json': false,
      'maxsize': '10000000',
      'maxFiles': '10',
      'level': 'silly'
    }
  },
  'statsd': {
    'host': 'symphony.dealerslink.io',
    'port': 8125,
    'name': '_placeholder_',
    'attachHostName': false,
    'telegraf': true
  }
}
