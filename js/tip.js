/**
 * Define actions to manage tip section
 */
(function () {
  'use strict';

  function tipPanel() {
    const defaultTips = [
      '<b>Подсказка:</b> используйте стрелки клавиатуры для перемещения выбранного слоя на 1 пиксель',
      '<b>Подсказка:</b> Shift + Клик для выбора и редактирования нескольких объектов',
      '<b>Подсказка:</b> зажмите Shift при повороте, чтобы вращать объект с шагом в 15°',
      '<b>Подсказка:</b> зажмите Shift когда рисуете прямую, чтобы расположить линию с наклоном шагом 15°',
      '<b>Подсказка:</b> используйте Ctrl +/-, Ctrl + скролл мышкой для масштабирования',
    ]
    const _self = this;
    $(`${this.containerSelector} .canvas-holder .content`).append(`
    <div id="tip-container">${defaultTips[parseInt(Math.random() * defaultTips.length)]}</div>`)
    this.hideTip = function () {
      $(`${_self.containerSelector} .canvas-holder .content #tip-container`).hide();
    }

    this.showTip = function () {
      $(`${_self.containerSelector} .canvas-holder .content #tip-container`).show();
    }

    this.updateTip = function (str) {
      typeof str === 'string' && $(`${_self.containerSelector} .canvas-holder .content #tip-container`).html(str);
    }
  }

  window.ImageEditor.prototype.initializeTipSection = tipPanel;
})();