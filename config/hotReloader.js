(function() {
  const path = require('path');
  const chokidar = require('chokidar');

  /**
   * activate the custom hot reloading
   * @param {server} server
   */
  function activate(server) {
    /**
     * Here, we use Chokidar to force page reloading for some other file types
     * like html changes or php if you want
     */
    const watcher = chokidar.watch([path.resolve(__dirname, '../src/views/**/*.html')]);

    watcher.on('ready', function() {
      console.log('Initial scan complete. Ready for changes');
    });

    watcher.on('change', function(path) {
      console.log('File [' + path + '] changed !');
      server.reloadClient();
    });
  }

  module.exports = {
    activate: activate,
  };
})();
