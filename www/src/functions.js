module.exports.showAlert = showAlert = function() {
	require.ensure([], function(require) {
        var functions2 = require('./functions2.js'); 
        functions2.loadNewContent();
    	document.getElementById('button2').onclick = functions2.onClickEvent;
    });
}