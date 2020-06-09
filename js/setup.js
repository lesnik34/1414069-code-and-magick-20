'use strict';

var COUNT_OF_WIZARDS = 4;
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomValue = function (elements) {
  var randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};

var createWizard = function (count) {
  var wizards = [];

  for (var i = 0; i < count; i++) {
    wizards.push({
      name: getRandomValue(WIZARDS_NAMES) + ' ' + getRandomValue(WIZARDS_SURNAMES),
      coatColor: getRandomValue(WIZARDS_COLORS),
      eyesColor: getRandomValue(WIZARDS_EYES)
    });
  }

  return wizards;
};

var getWizard = function (wizardParameters) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content
    .querySelector('.setup-similar-item');
  var wizardClone = similarWizardTemplate.cloneNode(true);

  wizardClone.querySelector('.setup-similar-label').textContent = wizardParameters.name;
  wizardClone.querySelector('.wizard-coat').style.fill = wizardParameters.coatColor;
  wizardClone.querySelector('.wizard-eyes').style.fill = wizardParameters.eyesColor;

  return wizardClone;
};


var renderWizard = function (wizards) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  wizards.forEach(function (wizard) {
    fragment.appendChild(getWizard(wizard));
  });

  similarListElement.appendChild(fragment);
};

var showSetupWindow = function () {
  var setupOverlay = document.querySelector('.setup');
  setupOverlay.querySelector('.setup-similar').classList.remove('hidden');
  setupOverlay.classList.remove('hidden');
};

showSetupWindow();
var wizardsParameters = createWizard(COUNT_OF_WIZARDS);
renderWizard(wizardsParameters);


