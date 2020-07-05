'use strict';

(function () {
  window.stat = {
    getMaxElement: function (items) {
      return Math.max.apply(null, items);
    },
    getOptimalGap: function (players, width) {
      return ((window.options.CLOUD_WIDTH - window.options.GAP * 6) - players.length * width) / (players.length - 1);
    },
    getPlayerColor: function (player) {
      return player === 'Вы' ? '#f00' : 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)';
    },
    getOptimalX: function (players, i) {
      return window.options.CLOUD_X + 3 * window.options.GAP + (window.stat.getOptimalGap(players, window.options.TEXT_WIDTH) + window.options.TEXT_WIDTH) * i;
    }
  };
})();
