'use strict';

(function () {
  var getRank = function (wizard) {
    var dataCoatColor = document.querySelector('.coat-color');
    var dataEyesColor = document.querySelector('.eyes-color');
    var rank = 0;

    if (wizard.colorCoat === dataCoatColor.value) {
      rank += 2;
    }
    if (wizard.colorEyes === dataEyesColor.value) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  window.util = {
    updateWizards: function (wizards) {

      window.rendering.renderWizards(wizards.slice()
        .sort(function (leftItem, rightItem) {
          var rankDiff = getRank(rightItem) - getRank(leftItem);
          if (rankDiff === 0) {
            rankDiff = namesComparator(leftItem.name, rightItem.name);
          }
          return rankDiff;
        }));

    }
  };
})();
