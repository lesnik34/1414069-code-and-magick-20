'use strict';

(function () {
  var wizardsData = [];

  var onCoatChange = window.debounce(function () {
    window.debounce(window.util.updateWizards(wizardsData));
  })

  var onEyesChange = window.debounce(function () {
    window.debounce(window.util.updateWizards(wizardsData));
  })

  var coatClick = function () {
    var wizardCoat = document.querySelector('.wizard-coat');
    var dataCoatColor = document.querySelector('.coat-color');

    wizardCoat.addEventListener('click', function () {
      window.parametersSet.setRandomWizardColor(dataCoatColor, wizardCoat, window.options.WIZARDS_COLORS);
      onCoatChange();
    });
  };

  var eyesClick = function () {
    var wizardEyes = document.querySelector('.wizard-eyes');
    var dataEyesColor = document.querySelector('.eyes-color');

    wizardEyes.addEventListener('click', function () {
      window.parametersSet.setRandomWizardColor(dataEyesColor, wizardEyes, window.options.WIZARDS_EYES);
      onEyesChange();
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
  };

  moveWindow();

  var uploadSetup = function () {
    var setupSubmit = document.querySelector('.setup-submit');
    var setupWizardForm = document.querySelector('.setup-wizard-form');

    setupSubmit.addEventListener('click', function (evt) {
      evt.preventDefault();
      window.backend.save(new FormData(setupWizardForm), window.dialog.uploadHandler, window.dialog.errorHandler);
    });
  };

  uploadSetup();

  window.dialog = {
    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    },
    loadHandler: function (loadData) {
      wizardsData = loadData;
      window.util.updateWizards(wizardsData);
    },
    uploadHandler: function () {
      window.popupActions.closePopup();
    }
  };
})();
