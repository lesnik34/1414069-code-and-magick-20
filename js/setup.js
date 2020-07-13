'use strict';

(function () {
  window.setup = {
    getRandomValue: function (elements) {
      var randomIndex = Math.floor(Math.random() * elements.length);
      return elements[randomIndex];
    },
    getWizard: function (wizardParameters) {
      var similarWizardTemplate = document.querySelector('#similar-wizard-template').content
        .querySelector('.setup-similar-item');
      var wizardClone = similarWizardTemplate.cloneNode(true);

      wizardClone.querySelector('.setup-similar-label').textContent = wizardParameters.name;
      wizardClone.querySelector('.wizard-coat').style.fill = wizardParameters.colorCoat;
      wizardClone.querySelector('.wizard-eyes').style.fill = wizardParameters.colorEyes;

      return wizardClone;
    }
  };
})();


