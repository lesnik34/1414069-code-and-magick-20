'use strict';

(function () {
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
  var COUNT_OF_WIZARDS = 4;
  var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_SURNAMES = ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var LOAD_URL = 'https://javascript.pages.academy/code-and-magick/data';
  var UPLOAD_URL = 'https://javascript.pages.academy/code-and-magick';
  var TIMEOUT_IN_MS = 10000;
  var STATUS_CODE = {
    OK: 200
  };

  window.options = {
    CLOUD_WIDTH: CLOUD_WIDTH,
    CLOUD_HEIGHT: CLOUD_HEIGHT,
    CLOUD_X: CLOUD_X,
    CLOUD_Y: CLOUD_Y,
    GAP: GAP,
    FONT_GAP: FONT_GAP,
    TEXT_WIDTH: TEXT_WIDTH,
    BAR_HEIGHT: BAR_HEIGHT,
    BAR_WIDTH: BAR_WIDTH,
    CLOUD_COLOR: CLOUD_COLOR,
    SHADOW_COLOR: SHADOW_COLOR,
    COUNT_OF_WIZARDS: COUNT_OF_WIZARDS,
    WIZARDS_NAMES: WIZARDS_NAMES,
    WIZARDS_SURNAMES: WIZARDS_SURNAMES,
    WIZARDS_COLORS: WIZARDS_COLORS,
    WIZARDS_EYES: WIZARDS_EYES,
    WIZARDS_FIREBALLS: WIZARDS_FIREBALLS,
    LOAD_URL: LOAD_URL,
    UPLOAD_URL: UPLOAD_URL,
    TIMEOUT_IN_MS: TIMEOUT_IN_MS,
    STATUS_CODE: STATUS_CODE
  };
})();
