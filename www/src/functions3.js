module.exports.loadImage = function() {
	var imageName = document.getElementById('image_name').value;
	var img = document.createElement('img');
	img.src = require('../image/' + imageName + '.jpeg');
	document.getElementById('photos').appendChild(img);
}