'use strict';

var setupOverlay = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content
  .querySelector('.setup-similar-item');
setupOverlay.classList.remove('hidden');
var similarListElement = setupOverlay.querySelector('.setup-similar-list');

var countOfWizards = 4;
var arrayOfNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var arrayOfSurnames = ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var arrayOfColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var arrayOfEyes = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomValue = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

var createObject = function () {
  var wizard = {};

  wizard.name = getRandomValue(arrayOfNames) + ' ' + getRandomValue(arrayOfSurnames);
  wizard.coatColor = getRandomValue(arrayOfColors);
  wizard.eyesColor = getRandomValue(arrayOfEyes);

  return wizard;
};

var renderWizard = function () {
  var wizardsParameters = createObject();
  var wizardClone = similarWizardTemplate.cloneNode(true);

  wizardClone.querySelector('.setup-similar-label').textContent = wizardsParameters.name;
  wizardClone.querySelector('.wizard-coat').style.fill = wizardsParameters.coatColor;
  wizardClone.querySelector('.wizard-eyes').style.fill = wizardsParameters.eyesColor;

  return wizardClone;
};


var renderFragment = function (count) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < count; i++) {
    fragment.appendChild(renderWizard());
  }

  return fragment;
};

similarListElement.appendChild(renderFragment(countOfWizards));
setupOverlay.querySelector('.setup-similar').classList.remove('hidden');
