'use strict';

(function () {
  var drawBar = function (ctx, arr, i, times) {
    var barOrdinate = window.options.CLOUD_HEIGHT - window.options.GAP - window.options.FONT_GAP - (times[i] * (window.options.BAR_HEIGHT / window.stat.getMaxElement(times)));
    ctx.fillRect(window.stat.getOptimalX(arr, i), barOrdinate, window.options.BAR_WIDTH, times[i] * (window.options.BAR_HEIGHT / window.stat.getMaxElement(times)));
  };

  window.drawStatistic = {
    drawText: function (ctx) {
      ctx.fillStyle = '#000';
      ctx.font = '16px PT Mono';
      ctx.fillText('Ура вы победили!', window.options.CLOUD_X + window.options.GAP, 3 * window.options.GAP + window.options.FONT_GAP);
      ctx.fillText('Список результатов:', window.options.CLOUD_X + window.options.GAP, (7 * window.options.GAP) / 2 + 2 * window.options.FONT_GAP);
    },
    drawHistogram: function (players, times, ctx) {
      players.forEach(function (item, i) {
        var nameOrdinate = window.options.CLOUD_HEIGHT - window.options.GAP / 2;
        var timeOrdinate = window.options.CLOUD_HEIGHT - 2 * window.options.GAP - window.options.FONT_GAP - (times[i] * (window.options.BAR_HEIGHT / window.stat.getMaxElement(times)));
        var currentTime = Math.floor(times[i]);
        var optimalX = window.stat.getOptimalX(players, i);

        ctx.fillStyle = '#000';
        ctx.fillText(item, optimalX, nameOrdinate);
        ctx.fillText(currentTime, optimalX, timeOrdinate);

        ctx.fillStyle = window.stat.getPlayerColor(item);
        drawBar(ctx, players, i, times);
      });
    }
  };
})();
