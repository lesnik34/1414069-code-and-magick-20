'use strict';

(function () {
  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      window.popupActions.closePopup();
    }
  };

  var focusInput = function () {
    var setupUserName = document.querySelector('.setup-user-name');

    setupUserName.addEventListener('focus', function () {
      document.removeEventListener('keydown', onPopupEscPress);
    });
  };

  var blurInput = function () {
    var setupUserName = document.querySelector('.setup-user-name');

    setupUserName.addEventListener('blur', function () {
      document.addEventListener('keydown', onPopupEscPress);
    });
  };

  var showSetupWindow = function () {
    var setupOverlay = document.querySelector('.setup');
    setupOverlay.querySelector('.setup-similar').classList.remove('hidden');
    setupOverlay.classList.remove('hidden');
  };

  var hideSetupWindow = function () {
    var setupOverlay = document.querySelector('.setup');
    setupOverlay.querySelector('.setup-similar').classList.add('hidden');
    setupOverlay.classList.add('hidden');
  };

  var setDefaultLocation = function () {
    var setupDialogElement = document.querySelector('.setup');

    setupDialogElement.style.top = '';
    setupDialogElement.style.left = '';
  };

  window.popupActions = {
    openPopup: function () {
      showSetupWindow();
      focusInput();
      blurInput();

      document.addEventListener('keydown', onPopupEscPress);
    },
    closePopup: function () {
      hideSetupWindow();
      setDefaultLocation();

      document.removeEventListener('keydown', onPopupEscPress);
    }
  };

})();
