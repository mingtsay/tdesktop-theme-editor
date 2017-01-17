(function () {
    'use strict';
    
    var tdesktop = {}, editor = {};
    
    tdesktop.background = document.querySelector('.msg');
    
    editor.objURL = {};
    editor.objURL.create = function (obj) {
        return window.URL ? window.URL.createObjectURL(obj) : window.webkitURL.createObjectURL(obj);
    };
    editor.objURL.revoke = function (obj) {
        return window.URL ? window.URL.revokeObjectURL(obj) : window.webkitURL.revokeObjectURL(obj);
    };
    
    editor.background = document.getElementById('background');
    editor.backgroundReset = document.getElementById('background-reset');
    
    editor.background.onchange = function () {
        tdesktop.background.style.backgroundImage = this.files.length ? "url('" + editor.objURL.create(this.files[0]) + "')" : 'url(images/background.jpg)';
    };
    
    editor.backgroundReset.onclick = function () {
        editor.background.value = '';
        editor.background.onchange();
    };
    
    editor.background.onchange();
}());
