cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-health.health",
      "file": "plugins/cordova-plugin-health/www/android/health.js",
      "pluginId": "cordova-plugin-health",
      "clobbers": [
        "navigator.health"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-health": "1.1.3"
  };
});