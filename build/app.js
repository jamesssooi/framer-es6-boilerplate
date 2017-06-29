(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

/**
 * setup.js
 * Place all device and environment setup code here.
 */

// Setup mockup
Framer.Device = new Framer.DeviceView();
Framer.Device.customize({
  deviceType: Framer.Device.Type.Tablet,
  screenWidth: 2304,
  screenHeight: 1440,
  deviceImage: "images/devices/apple-macbook.png",
  deviceImageWidth: 3084,
  deviceImageHeight: 1860,
  devicePixelRatio: 1.6
});
Framer.Device.setupContext();

// Settings
Framer.Defaults.Layer.force2d = true;
Screen.backgroundColor = 'white';

var imageLayer = new Layer({ x: 0, y: 0, width: 128, height: 128, image: "images/Icon.png" });
imageLayer.center();

// Define a set of states with names (the original state is 'default')
imageLayer.states = {
  second: { y: 100, scale: 0.6, rotationZ: 100 },
  third: { y: 300, scale: 1.3 },
  fourth: { y: 200, scale: 0.9, rotationZ: 200 }

  // Set the default animation options
};imageLayer.animationOptions = {
  curve: "spring(500,12,0)"

  // On a click, go to the next state
};imageLayer.on(Events.Click, function () {
  imageLayer.stateCycle();
});

})));
