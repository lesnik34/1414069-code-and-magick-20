'use strict';

var setupOverlay = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content
  .querySelector('.setup-similar-item');
var similarListElement = setupOverlay.querySelector('.setup-similar-list');

var COUNT_OF_WIZARDS = 4;
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomValue = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

var createWizard = function (count) {
  var wizard = [];

  for (var i = 0; i < count; i++) {
    wizard[i] = {
      name: getRandomValue(WIZARDS_NAMES) + ' ' + getRandomValue(WIZARDS_SURNAMES),
      coatColor: getRandomValue(WIZARDS_COLORS),
      eyesColor: getRandomValue(WIZARDS_EYES)
    };
  }

  return wizard;
};

var renderWizard = function (array, index) {
  var wizardClone = similarWizardTemplate.cloneNode(true);

  wizardClone.querySelector('.setup-similar-label').textContent = array[index].name;
  wizardClone.querySelector('.wizard-coat').style.fill = array[index].coatColor;
  wizardClone.querySelector('.wizard-eyes').style.fill = array[index].eyesColor;

  return wizardClone;
};


var renderFragment = function (array) {
  var fragment = document.createDocumentFragment();

  array.forEach(function (element, i) {
    fragment.appendChild(renderWizard(array, i));
  });

  return fragment;
};

var showSetupWindow = function () {
  setupOverlay.querySelector('.setup-similar').classList.remove('hidden');
  setupOverlay.classList.remove('hidden');
};

showSetupWindow();
var wizardsParameters = createWizard(COUNT_OF_WIZARDS);
similarListElement.appendChild(renderFragment(wizardsParameters));

