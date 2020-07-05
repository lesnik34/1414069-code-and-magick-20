'use strict';

(function () {
  window.parametersGenetation = {
    getRandomWizardColor: function (item, colors) {
      var currentStyle = item.style.fill;

      return window.setup.getRandomValue(colors.filter(function (color) {
        return color !== currentStyle;
      }));
    },
    getRandomFireballColor: function (colors) {
      return window.setup.getRandomValue(colors);
    }
  }
})();
