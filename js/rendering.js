'use strict';

(function () {
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, window.options.CLOUD_WIDTH, window.options.CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, window.options.CLOUD_X + window.options.GAP, window.options.CLOUD_Y + window.options.GAP, window.options.SHADOW_COLOR);
    renderCloud(ctx, window.options.CLOUD_X, window.options.CLOUD_Y, window.options.CLOUD_COLOR);
    window.drawStatistic.drawText(ctx);
    window.drawStatistic.drawHistogram(players, times, ctx);
  };

  var renderWizards = function (wizards) {
    var similarListElement = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.options.COUNT_OF_WIZARDS; i++) {
      fragment.appendChild(window.setup.getWizard(window.setup.getRandomValue(wizards)));
    }

    similarListElement.appendChild(fragment);
  };

  window.backend.load(renderWizards, window.dialog.errorHandler);
})();
