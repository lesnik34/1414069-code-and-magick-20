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
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (items) {
  return Math.max.apply(null, items);
};

var getOptimalGap = function (players, width) {
  return ((CLOUD_WIDTH - GAP * 6) - players.length * width) / (players.length - 1);
};

var getPlayerColor = function (plyaer) {
  return plyaer === 'Вы' ? '#f00' : 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)';
};

var getOptimalX = function (players, i) {
  return CLOUD_X + 3 * GAP + (getOptimalGap(players, TEXT_WIDTH) + TEXT_WIDTH) * i;
};

var drawText = function (ctx) {
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, 3 * GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, (7 * GAP) / 2 + 2 * FONT_GAP);
};

var drawBar = function (ctx, arr, i, times) {
  var barOrdinate = CLOUD_HEIGHT - GAP - FONT_GAP - (times[i] * (BAR_HEIGHT / getMaxElement(times)));
  ctx.fillRect(getOptimalX(arr, i), barOrdinate, BAR_WIDTH, times[i] * (BAR_HEIGHT / getMaxElement(times)));
};

var drawHistogram = function (players, times, ctx) {
  var nameOrdinate;
  var timeOrdinate;

  players.forEach(function (item, i, arr) {
    nameOrdinate = CLOUD_HEIGHT - GAP / 2;
    timeOrdinate = CLOUD_HEIGHT - 2 * GAP - FONT_GAP - (times[i] * (BAR_HEIGHT / getMaxElement(times)));

    ctx.fillText(item, getOptimalX(arr, i), nameOrdinate);
    ctx.fillText(Math.floor(times[i]), getOptimalX(arr, i), timeOrdinate);

    ctx.fillStyle = getPlayerColor(item);
    drawBar(ctx, arr, i, times);
    ctx.fillStyle = '#000';
  });
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = '#000';

  drawText(ctx);

  drawHistogram(players, times, ctx);
};
