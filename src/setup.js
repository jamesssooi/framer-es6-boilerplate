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
})
Framer.Device.setupContext();

// Settings
Framer.Defaults.Layer.force2d = true;
Screen.backgroundColor = 'white';