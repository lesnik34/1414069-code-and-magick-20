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

    wizards.forEach(function (wizard) {
      fragment.appendChild(window.setup.getWizard(wizard));
    });

    similarListElement.appendChild(fragment);
  };

  var wizardsParameters = window.setup.createWizard(window.options.COUNT_OF_WIZARDS);
  renderWizards(wizardsParameters);
})();
