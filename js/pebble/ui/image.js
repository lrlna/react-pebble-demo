var util2 = require('pebble/lib/util2');
var myutil = require('pebble/lib/myutil');
var Propable = require('pebble/ui/propable');
var StageElement = require('pebble/ui/element');

var imageProps = [
  'image',
  'compositing',
];

var defaults = {
  backgroundColor: 'clear',
  borderColor: 'clear',
};

var ImageElement = function(elementDef) {
  StageElement.call(this, myutil.shadow(defaults, elementDef || {}));
  this.state.type = StageElement.ImageType;
};

util2.inherit(ImageElement, StageElement);

Propable.makeAccessors(imageProps, ImageElement.prototype);

module.exports = ImageElement;
