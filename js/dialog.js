'use strict';

(function () {
  var coatClick = function () {
    var wizardCoat = document.querySelector('.wizard-coat');
    var dataCoatColor = document.querySelector('.coat-color');

    wizardCoat.addEventListener('click', function () {
      window.parametersSet.setRandomWizardColor(dataCoatColor, wizardCoat, window.options.WIZARDS_COLORS);
    });
  };

  var eyesClick = function () {
    var wizardEyes = document.querySelector('.wizard-eyes');
    var dataEyesColor = document.querySelector('.eyes-color');

    wizardEyes.addEventListener('click', function () {
      window.parametersSet.setRandomWizardColor(dataEyesColor, wizardEyes, window.options.WIZARDS_EYES);
    });
  };

  var fireballClick = function () {
    var wizardFireball = document.querySelector('.setup-fireball-wrap');
    var dataFireballColor = document.querySelector('.fireball-color');

    wizardFireball.addEventListener('click', function () {
      window.parametersSet.setRandomFireballColor(dataFireballColor, wizardFireball, window.options.WIZARDS_FIREBALLS);
    });
  };

  coatClick();
  eyesClick();
  fireballClick();


  var addSetupOpenListeners = function () {
    var setupOpen = document.querySelector('.setup-open');

    setupOpen.addEventListener('click', function () {
      window.popupActions.openPopup();
    });

    setupOpen.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        window.popupActions.openPopup();
      }
    });
  };

  var addSetupCloseListeners = function () {
    var setupClose = document.querySelector('.setup-close');

    setupClose.addEventListener('click', function () {
      window.popupActions.closePopup();
    });

    setupClose.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        window.popupActions.closePopup();
      }
    });
  };

  addSetupOpenListeners();
  addSetupCloseListeners();


  var moveWindow = function () {
    var setupDialogElement = document.querySelector('.setup');
    var dialogHandle = setupDialogElement.querySelector('.upload');

    dialogHandle.addEventListener('mousedown', function (evt) {
      window.onMouseDown(evt);
    });
  }

  moveWindow();
})();
