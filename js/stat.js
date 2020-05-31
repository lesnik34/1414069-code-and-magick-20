'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getOptimalGap = function (players, width) {
  return ((CLOUD_WIDTH - GAP * 6) - players.length * width) / (players.length - 1);
};

var getPlayerColor = function (plyaer) {
  if (plyaer === 'Вы') {
    return '#f00';
  } else {
    return 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)';
  }
};

var getOptimalX = function (players, i) {
  return CLOUD_X + 3 * GAP + (getOptimalGap(players, TEXT_WIDTH) + TEXT_WIDTH) * i;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, 3 * GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, (7 * GAP) / 2 + 2 * FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], getOptimalX(players, i), CLOUD_HEIGHT - GAP / 2);
    ctx.fillText(Math.floor(times[i]), getOptimalX(players, i), CLOUD_HEIGHT - 2 * GAP - FONT_GAP - (times[i] * (BAR_HEIGHT / maxTime)));

    ctx.fillStyle = getPlayerColor(players[i]);
    ctx.fillRect(getOptimalX(players, i), CLOUD_HEIGHT - GAP - FONT_GAP - (times[i] * (BAR_HEIGHT / maxTime)), BAR_WIDTH, times[i] * (BAR_HEIGHT / maxTime));
    ctx.fillStyle = '#000';
  }

};
