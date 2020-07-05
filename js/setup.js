'use strict';

(function () {
  window.setup = {
    getRandomValue: function (elements) {
      var randomIndex = Math.floor(Math.random() * elements.length);
      return elements[randomIndex];
    },
    createWizard: function (count) {
      var wizards = [];

      for (var i = 0; i < count; i++) {
        wizards.push({
          name: window.setup.getRandomValue(window.options.WIZARDS_NAMES) + ' ' + window.setup.getRandomValue(window.options.WIZARDS_SURNAMES),
          coatColor: window.setup.getRandomValue(window.options.WIZARDS_COLORS),
          eyesColor: window.setup.getRandomValue(window.options.WIZARDS_EYES)
        });
      }

      return wizards;
    },
    getWizard: function (wizardParameters) {
      var similarWizardTemplate = document.querySelector('#similar-wizard-template').content
        .querySelector('.setup-similar-item');
      var wizardClone = similarWizardTemplate.cloneNode(true);

      wizardClone.querySelector('.setup-similar-label').textContent = wizardParameters.name;
      wizardClone.querySelector('.wizard-coat').style.fill = wizardParameters.coatColor;
      wizardClone.querySelector('.wizard-eyes').style.fill = wizardParameters.eyesColor;

      return wizardClone;
    }
  };
})();


