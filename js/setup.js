'use strict';

var COUNT_OF_WIZARDS = 4;
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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


var renderWizards = function (wizards) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  wizards.forEach(function (wizard) {
    fragment.appendChild(getWizard(wizard));
  });

  similarListElement.appendChild(fragment);
};

//==============FormValidation====================

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var onFocusInput = function () {
  var setupUserName = document.querySelector('.setup-user-name');

  setupUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  })
}

var onBlurInput = function () {
  var setupUserName = document.querySelector('.setup-user-name');

  setupUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  })
}

var showSetupWindow = function () {
  var setupOverlay = document.querySelector('.setup');
  setupOverlay.querySelector('.setup-similar').classList.remove('hidden');
  setupOverlay.classList.remove('hidden');
};

var hideSetupWindow = function () {
  var setupOverlay = document.querySelector('.setup');
  setupOverlay.querySelector('.setup-similar').classList.add('hidden');
  setupOverlay.classList.add('hidden');
}

var openPopup = function () {
  showSetupWindow();
  onFocusInput();
  onBlurInput();

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  hideSetupWindow();

  document.removeEventListener('keydown', onPopupEscPress);
};

var addSetupOpenListeners = function () {
  var setupOpen = document.querySelector('.setup-open');

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });
}

var addSetupCloseListeners = function () {
  var setupClose = document.querySelector('.setup-close');

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });
}

//=====================CharacterPartsColors==================

var getRandomWizardColor = function (item, colors) {
  var currentStyle = item.style.fill;
  var newStyle = getRandomValue(colors);

  while (currentStyle === newStyle){
    newStyle = getRandomValue(colors);
  }

  return newStyle;
}

var setRandomWizardColor = function (dataColor, characterPart, partsColors) {
  var characterPartColor = getRandomWizardColor(characterPart, partsColors);
  characterPart.style.fill = characterPartColor;
  dataColor.value = characterPartColor;
}

var getRandomFireballColor = function (colors) {
  return getRandomValue(colors);
}

var setRandomFireballColor = function (dataColor, fireball, fireballColors) {
  var fireballColor = getRandomFireballColor(fireballColors);
  fireball.style.backgroundColor = fireballColor;
  dataColor.value = fireballColor;
}

var onCoatClick = function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var dataCoatColor = document.querySelector('.coat-color');

  wizardCoat.addEventListener('click', function () {
    setRandomWizardColor(dataCoatColor, wizardCoat, WIZARDS_COLORS);
  })
}

var onEyesClick = function () {
  var wizardEyes = document.querySelector('.wizard-eyes');
  var dataEyesColor = document.querySelector('.eyes-color');

  wizardEyes.addEventListener('click', function () {
    setRandomWizardColor(dataEyesColor, wizardEyes, WIZARDS_EYES);
  })
}

var onFireballClick = function () {
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var dataFireballColor = document.querySelector('.fireball-color');

  wizardFireball.addEventListener('click', function () {
    setRandomFireballColor(dataFireballColor, wizardFireball, WIZARDS_FIREBALLS);
  })
}

var changeCharacterColorsEvent = function () {
  onCoatClick();
  onEyesClick();
  onFireballClick();
}

var wizardsParameters = createWizard(COUNT_OF_WIZARDS);
renderWizards(wizardsParameters);

addSetupOpenListeners();
addSetupCloseListeners();

changeCharacterColorsEvent();












