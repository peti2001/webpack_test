module.exports.onClickEvent = function() {
	require.ensure([], function(require) {
		var functions3 = require('./functions3.js');
		functions3.loadImage();
	});
}

module.exports.loadNewContent = function() {
	var newHTML = 'Click to load image: <button id="button2" >Click!</button> <br/> \
		Name of the image (elephant, duck): <input type="text" id="image_name" value="elephant" /> \
		<div id="photos"></div>';
	document.getElementById('new_content').innerHTML = newHTML;
}