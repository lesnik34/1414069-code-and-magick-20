'use strict';

(function () {
  window.parametersSet = {
    setRandomWizardColor: function (dataColor, characterPart, partsColors) {
      var characterPartColor = window.parametersGenetation.getRandomWizardColor(characterPart, partsColors);
      characterPart.style.fill = characterPartColor;
      dataColor.value = characterPartColor;
    },
    setRandomFireballColor: function (dataColor, fireball, fireballColors) {
      var fireballColor = window.parametersGenetation.getRandomFireballColor(fireballColors);
      fireball.style.backgroundColor = fireballColor;
      dataColor.value = fireballColor;
    }
  }
})();
